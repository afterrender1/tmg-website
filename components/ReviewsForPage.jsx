"use client";

import { useState } from "react";
import { Poppins, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import Navbar from "./Navbar";
import WorkingInPartnership from "./WorkingInPartnership";
import Reviews from "./Reviews";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['600'],
  variable: "--font-montserrat",
});

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const ALL_REVIEWS = [
  { author: "The Space To Breathe Collective", date: "Oct 18, 2024", rating: 5, description: "It's not your normal way to review a van company, starting with the words 'Kindness, understanding and strong connections'. These are my lasting impression of working with Anton at TMG. You can add to that, 'Professional, dedicated, skilful and precise' I first took my 9 year old Caddy Camper conversion into TMG last November to have my front seats reu...", platform: "Facebook" },
  { author: "Walter Rommelrath", date: "Oct 17, 2024", rating: 5, description: "Bought a citreon Berlingo van of these guys the van was in fantastic condition well presented well done Tmg would recommend them many thanks Walter rommelrath", platform: "Facebook" },
  { author: "Steve Mayers", date: "Oct 3, 2024", rating: 5, description: "TMG-SV 10/10 SIMPLY PUT, IF YOU WANT YOUR CADDY TO MAKE HEADS TURN AND PEOPLE TO PUT THE THUMBS UP AT YOU WHEN DRIVING PAST YOUR CADDY THEN TAKE It TO THESE GUYS. OUTSTANDING WORKMANSHIP TO VERY HIGH STANDARDS. GREAT COMMUNICATION FROM ANTON EVERY STEP OF THE WAY. ANTON WILL GO ALL OUT TO MAKE YOUR CADDY DREAM COME TRUE. I STILL CANT STOP AND LOOK BACK...", platform: "Facebook" },
  { author: "Burney Milligan", date: "Aug 2, 2024", rating: 5, description: "what great people TMG was down there today to get back seats in my van all a can say is wow perfect job and they give me a few ideas to to the next time for the front one see you soon 😊", platform: "Facebook" },
  { author: "Lee SA Tuning Ingham", date: "Jul 31, 2024", rating: 5, description: "What can i say Amazing company Amazing vans Amazing staff eye for detail is out off this world. 10/10 highly recommended 😉", platform: "Facebook" },
  { author: "Liam Ross", date: "Jul 31, 2024", rating: 5, description: "Where to start…. From initial contact and continual comms throughout, absolutely top class. I sent Anton and his team my van to have a full colour change, hybrid bumper and mk4 rear conversion. I also had caddy life rear seats installed along with new glass throughout. Finish was absolutely top drawer and the attention to detail provided is something m...", platform: "Facebook" },
  // NOTE: Filtered out suspicious/scam reviews
  { author: "Lynne Taylor", date: "Apr 17, 2024", rating: 5, description: "Bought our work van ( caddy ) off us last week, cleared the finance for us. Lovely guys, can’t wait to see the completed project. Thanks for doing business, Lynne @Krazeek9s", platform: "Facebook" },
  { author: "Josh Palmer", date: "Feb 9, 2024", rating: 5, description: "Fantastic service! Awesome quality vans! Any changes/additions I requested were sorted out no issues and I’m so pleased with the end result! Definitely recommend!", platform: "Facebook" },
  { author: "Tyler Walsh", date: "Jan 9, 2024", rating: 5, description: "Contacted ant through a recommendation, discussed what I would like a van to have, he sourced it built it and was ready in the time specified to me, top job over the moon with it will be back for more upgrades!", platform: "Facebook" },
  { author: "Sue Roberts", date: "Jan 5, 2024", rating: 5, description: "Searched nationally for a VW Caddy Maxi and found that most were over priced on in poor condition. Then stumbled across TMG-SV and spoke to James and Anton who were friendly, knowledgeable and professional. Attended the workshop and were given a tour and explanation of how vehicles were sourced and prepared for sale. It was clear that they are proud an...", platform: "Facebook" },
  { author: "Matt Jones", date: "Jan 5, 2024", rating: 5, description: "Just purchased a caddy maxi TMG swamper today. The van is mint the lads were really good, infact I'm that happy I've asked them to do 1 of my other van to keep the fleet matching. thanks guys", platform: "Facebook" },
  { author: "James Mindset", date: "Aug 18, 2023", rating: 5, description: "Picked up my caddy from TMG yesterday and what a beauty!!! I’m very specific and only want top quality, so for me there was only one place that I wanted to do business with, and I was not disappointed. I spoke with James a short while back and told him exactly what I was after, he said they had a nice white caddy just come in which I was immediately in...", platform: "Facebook" },
  { author: "Louis Clegg", date: "Aug 6, 2023", rating: 5, description: "bought a van from TMG and I'm chuffed with it, couldn't be happier, thanks guys!", platform: "Facebook" },
  { author: "David Adam", date: "Jul 21, 2023", rating: 5, description: "Absolutely amazing experience dealing with TMG.Their workmanship & attention to detail is second to none.I could not be happier with what they did to my van.You will not be disappointed if you go to these guys.", platform: "Facebook" },
  { author: "Peter Green", date: "Jul 3, 2023", rating: 5, description: "Earlier this year we purchased a blinged VW Caddy for yer man Anton @ TMG & are very pleased with it (previous glowing review to confirm) then our T5 gets walloped & there is a chance to have TMG tickle its tummy Caddy style. I said to Anton \"dont tell me how good you are, just show me\" well this seems to have motivated him to a higher level. J...", platform: "Facebook" },
  { author: "Jason Brett", date: "May 26, 2023", rating: 5, description: "I would publicly like to thank Anton &James for the professional and very personal level of service they gave me during the waiting list order and purchasing process of my new daily, to say I’m impressed with the quality, detail and care that the team have put into the build is 2nd to none, better than new is a comment I just read elsewhere, that i...", platform: "Facebook" },
  { author: "Chris Manning", date: "May 20, 2023", rating: 5, description: "I would like to thank Anton and team TMG for the purchase of my VW Caddy Maxi, I was looking for months for a new van and once I found team TMG I knew I'd purchase a van from them. The detail and care what goes into the van's is unreal, great lad and a great team, I recommend anyone looking for a new van to look nowhere else but TMG.⭐️", platform: "Facebook" },
  { author: "Jack Warren", date: "Mar 23, 2023", rating: 5, description: "Had been following TMG and Anton for a while and I knew I wanted to purchase a customised van of him. The service they offer is one of a kind and you wont find better anywhere else. The attention and detail that goes into these vans is unreal. I wont ever be using anyone else. When he advertised mine I knew this was the one. Everything was made so easy...", platform: "Facebook" },
  { author: "Ryan Scott Lawson", date: "Mar 14, 2023", rating: 5, description: "I was pleasantly impressed by the customer service as I was restricted to when I can collect my van however they had it ready in such short notice in a condition that the photos couldn’t even do it justice, the van was 10x better in person and was actually shocked at how well they take care on the hand over process can’t recommend and thank tmg SV enou...", platform: "Facebook" },
  { author: "Lnc Joinery Groundwork", date: "Mar 5, 2023", rating: 5, description: "Would like to a massive thank you to Anton at TMG from the beginning he’s been so helpful answered any questions I asked. Me being me, I was very keen to buy this van and he got it ready for me the day after. Can’t thank him enough. 🤙🏽 Will definitely use them again. The pictures of the van speak for themselves", platform: "Facebook" },
  { author: "Cd Detailing & Valeting", date: "Dec 8, 2022", rating: 5, description: "If you don’t know about TMG then get to know! I don’t really leave reviews but I have never experienced service like this before when buying a vehicle, I searched high & low for a highly specified caddy with rear seats & couldn’t find one until I came across TMG! I found the van I wanted but it didn’t have the rear conversion I needed & wa...", platform: "Facebook" },
  { author: "Jamie Stephenson", date: "Nov 19, 2022", rating: 5, description: "Just wanted to say a massive thanks again Anton Tmg. I am absolutely delighted with how it turned out. She’s looking mega and driving better than ever. Based on how the van was when I first bought it from you and having seen other work you have done, I knew you would do a great job but homestly, it’s a different level. For anyone considering wher...", platform: "Facebook" },
  { author: "Thomas Warner", date: "Nov 16, 2022", rating: 5, description: "Highly recommend got my transit custom from this company very happy will use again", platform: "Facebook" },
  { author: "Daniel Vaughan", date: "Nov 8, 2022", rating: 5, description: "Top class service parts arrived bright and early the next morning thanks Anton", platform: "Facebook" },
  { author: "Sean Dargan", date: "Sep 20, 2022", rating: 5, description: "Excellent service throughout purchase and very helpful, would 100% be recommending !!", platform: "Facebook" },
  { author: "Mitch Hinks", date: "Sep 13, 2022", rating: 5, description: "What a fantastic service ! These guys do as they say and leave no stone unturned ! I have a 2014 van that looks better than some 2022 be stock, immaculate view Maude and out and Anton hid nothing ! Pointed out any tiny little marks that are expected on a can of this age. The build quality and finish is second to none compared to some others that so th...", platform: "Facebook" },
  { author: "Liam Lawton", date: "Jul 26, 2022", rating: 5, description: "Fantastic service start to finish, Anton and his team went the extra mile delivering my van in pristine condition. I got £500 more for my old van which other buying sites couldn’t offer. Thanks again I will be back", platform: "Facebook" },
  { author: "Adam White", date: "Jul 26, 2022", rating: 5, description: "Unbelievable customer service. Highly recommend.", platform: "Facebook" },
  { author: "Josh Kettle", date: "Jul 24, 2022", rating: 5, description: "Shoutout to tmg-sv easiest process to to buying a new vehicle I’ve had and the guys were so easy to talk to and genuine blokes, would 100% recommend", platform: "Facebook" },
  { author: "Ben Garrett", date: "Jul 2, 2022", rating: 5, description: "Where to begin! From my first enquiry months ago, to driving away with a top quality mega spec dream van, I can honestly say Anton is by far the best auto dealer I have dealt with. His responses, knowledge and passion for his business and these unreal vans is beyond amazing. Any update or queries I needed answering , he was on the phone straight away. ", platform: "Facebook" },
  { author: "Dave Taylor", date: "Jun 27, 2022", rating: 5, description: "had the pleasure in using Antons services his attention to detail is off the scale I purchased a van elsewhere n wasn't happy Anton asked me pop down too have it transformed he told me what he was going to do so I left my van for him too work his magic he kept me informed daily with snippets of the work today I went too collect and wow wow wow", platform: "Facebook" },
  { author: "James Boyle", date: "Jun 27, 2022", rating: 5, description: "The most professional and hassle free company. Anton and his team are not only helpful but the most professional team in the game! They have gone above and beyond to exceed my expectations. They have kept in contact with me throughout the build with pictures and videos of the van at all different stages. And even driving 3hr round trips to different lo...", platform: "Facebook" },
  { author: "Brad Hunt", date: "May 26, 2022", rating: 5, description: "Fantastic experience at TMG-SV Trade Motor Group - Specialist Vans, have completely changed our perception of purchasing vehicles. Right from the off, Anton and his team could not have been more helpful, sending us photos/videos of the van. Anton then invited us to his very modern dealership in Manchester, with one of the cleanest looking detailing bay...", platform: "Facebook" },
  { author: "Andy Simpson", date: "May 10, 2022", rating: 5, description: "Thank you TMG SV the van i bought drove lovely all the way home 100 miles love it 👌", platform: "Facebook" },
  { author: "Carrie Emery", date: "Mar 3, 2022", rating: 5, description: "Well what can I say about Trade Motor group except if there was a 10 star , I would have put that instead of 5! I purchased a Ford Courier Trend 1.6 and was not disappointed! Anton from start to finish was honest, and Super trustworthy. I hadn’t seen the vehicle before purchasing as I was away that week but decided to go ahead and buy it and collec...", platform: "Facebook" },
  { author: "Thomas Storey", date: "Jan 29, 2022", rating: 5, description: "Amazing service. top quality guys. very helpful. would 💯 recommend and most definitely be going back for my next Caddy", platform: "Facebook" },
  { author: "Gareth McCormick", date: "Jan 12, 2022", rating: 5, description: "Bought my VW van online and was blown away when it was delivered to my front door. The attention to detail is a credit to the team behind Trade Motor Group. Top quality service that sets these guys heads and shoulders above any other dealers I have used. I can safely say I will be a repeat customerand living in Northern Ireland is no obstacle for these...", platform: "Facebook" },
  { author: "Charlie Garrad", date: "Dec 19, 2021", rating: 5, description: "Owned my van for about 6 months now and I couldn’t be happier. I couldn’t recommend Trade motor group enough. The van has been everything I have wanted from it and the service has been faultless from Antoine right from the purchase and so has the after care. Would 100% recommend and use them again.", platform: "Facebook" },
  { author: "Chris Poil", date: "Dec 1, 2021", rating: 5, description: "After looking for a Caddy van for my new valeting business I came across Trade Motor Group Ltd. From the very first messages Anton couldn’t have been anymore helpful. Nothing was too much trouble with photos, walk around videos and any information I needed. Anton went above and beyond my expectations and would recommend Trade Motor Group to anyone.", platform: "Facebook" },
  { author: "Charlie Crane", date: "Dec 1, 2021", rating: 5, description: "Purchased this customised VW Caddy and could not be happier. The service was great from start to finish, ensuring each stage of the process was smooth and informative. The van itself could not be better, customised with body kit, R Seats and badging, reversing camera, interior carpet and lighting and new head unit. The van was immaculate and on first a...", platform: "Facebook" },
  { author: "Wayne Letson", date: "Nov 23, 2021", rating: 5, description: "What can I say Trade Motor Group. From initial enquiry to purchase is smooth and efficient. I personally went for one of there custom caddy builds couldn’t be happier. I still check in with the team to see what new builds are going on because once you buy from Trade motor Group your treated like part of the family.", platform: "Facebook" },
];

export default function ReviewsForPage() {
  const totalReviews = ALL_REVIEWS.length;
  const averageRating = 5.0;

  return (
    <>
      <Navbar />

      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 border-b border-gray-300 pb-8"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-black ${montserrat.className}`}>
              Customer Trust & Reviews
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <span className={`text-4xl sm:text-5xl md:text-6xl font-black text-black ${montserrat.className}`}>
                {averageRating.toFixed(1)}
              </span>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex text-black text-xl sm:text-2xl md:text-3xl">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 fill-black/80 text-black/80" />
                  ))}
                </div>
                <p className={`text-gray-600 text-sm sm:text-base md:text-lg mt-1 ${poppins.className}`}>
                  Based on <strong>{totalReviews}</strong> verified reviews.
                </p>
              </div>
            </div>
          </motion.header>

          {/* Review Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {ALL_REVIEWS.slice(0, 12).map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-10 sm:mt-12"
          >
            <a
              href="#"
              className={`inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold uppercase tracking-wider rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] ${poppins.className}`}
            >
              View All {totalReviews} Reviews
              <ThumbsUp className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3" />
            </a>
          </motion.div>
        </div>
      </div>

      <WorkingInPartnership />
      <Reviews />
      <ContactSection />
      <Footer />
    </>
  );
}

function ReviewCard({ review }) {
  const [open, setOpen] = useState(false);
  const MAX_VISIBLE_CHARS = 250;
  const needsReadMore = review.description.length > MAX_VISIBLE_CHARS;

  return (
    <motion.div variants={itemVariants} className="relative h-full">
      <div
        className="group relative bg-gray-50 border border-gray-300 rounded-3xl p-4 sm:p-6 flex flex-col h-full hover:bg-gray-100 hover:border-black transition-all duration-500"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

        <div className="relative flex flex-col h-full">
          {/* Rating & Date */}
          <div className="flex justify-between items-start mb-3 sm:mb-4 border-b border-gray-200 pb-2 sm:pb-3">
            <div className="flex text-black text-sm sm:text-base md:text-lg space-x-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 fill-black/80 text-black/80" />
              ))}
            </div>
            <span className={`text-gray-500 text-xs sm:text-sm font-light ${poppins.className}`}>
              {review.date}
            </span>
          </div>

          {/* Description */}
          <div className="flex-1 mb-3">
            <p
              className={`text-gray-900 text-sm sm:text-base leading-relaxed ${open ? "" : "line-clamp-5"} ${poppins.className}`}
            >
              <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4 inline mr-1 sm:mr-2 text-black/80 align-text-bottom" />
              {review.description}
            </p>
          </div>

          {/* Read More */}
          {needsReadMore && (
            <button
              onClick={() => setOpen(!open)}
              className={`text-black text-xs sm:text-sm font-semibold underline hover:text-gray-700 transition-colors self-start mb-2 ${poppins.className}`}
            >
              {open ? "Show Less ^" : "Read More..."}
            </button>
          )}

          {/* Author & platform */}
          <div className="mt-auto pt-2 sm:pt-3 border-t border-gray-200">
            <p className={`text-black text-sm sm:text-base font-bold ${montserrat.className}`}>
              — {review.author}
            </p>
            <p className={`text-gray-600 text-xs sm:text-sm font-medium ${poppins.className}`}>
              Verified on {review.platform}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}





