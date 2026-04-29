import { Button } from "@/components/ui/button";
import { ChevronLeft, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

const AIRBNB_REVIEWS = [
  {
    guestName: "Paul",
    rating: 5,
    comment: "We had a wonderful, authentic stay in Varanasi with a warm and attentive host and support team. The house was unique and welcoming, clean, and the meals felt home-cooked. Walking distance from major attraction and in the middle of the buzzling city. This oasis gives you a complete and cosy Varanasi experience. We highly recommend staying here and will definitely return. Paul & Anna",
    stayDate: "March 2026"
  },
  {
    guestName: "Karan",
    rating: 5,
    comment: "A review here would mean a bunch of superlatives about how wonderful everything was, so I will keep it short, the days spent here made me feel right at home and the warmth and hospitality was unparalleled. Uncle and Aunty are both just incredible, I think one will only be able to understand after experiencing it, strongly recommend having an experience of this wonderful home and the hospitality. I would like to really thank them for making this a trip of a lifetime for me.",
    stayDate: "March 2026"
  },
  {
    guestName: "Emanuele",
    rating: 5,
    comment: "Tutto perfetto",
    stayDate: "February 2026"
  },
  {
    guestName: "finding nemu",
    rating: 5,
    comment: "This stay is beyond rating - this place is priceless. Balaji uncle and Kiran Aunty are the best hosts you will ever find on Airbnb, India. The stay is right in the heart of the old city of Benaras. The ghats and Vishwanath Dham are at a walkable ditance. There are plenty of shops and restaurants around. The stay offered a luggage transport support as well. The food at the stay is delicious. I didn‘t feel the need to eat outside as we got warm homemade food. Whatever I and my husband needed, uncle got it ready for us. This property is an ancestral heritage with a Shiv temple right in its courtyard. The hosts also gave us the opportunity of Rudra Abhishek in the temple. At the stay, we tried the banarasi pan and all special benarasi sweets. Kiran Aunty recommended us to even visit Sarnath which we undertook to experience Buddha‘s first sermon. I am not sure how to thank Uncle and Aunty for the best homestay experience I have ever had in any part of India. This place was totally worth it. Here we were not guests, rather part of a family. I had tears in my eyes as I had to bid bye to this place. This stay and Benaras will forever be in our hearts. See you soon !",
    stayDate: "Recently"
  },
  {
    guestName: "Prabhakar Kalavacherla",
    rating: 5,
    comment: "My wife and I waited for a long time to visit Benares- several decades. We wanted to stay at a place that was modern and ancient at the same time. Clearly, BrijRama Palace met that criteria but it is pricey place. Almost by chance I chanced upon Rudreshwar Mahadeo Kothi. I will say that photos online won't do justice as one has to experience the hospitality and warmth of these two elderly couple that run the place. Dr. Kiran and Dr. Balaji have mastered the age old Indian art of treating guests like Gods. Dr. Kiran in particular is just amazing and her quiet personality coupled with her inexhausible sense of service is just out of the world.\n\nThe facilities are not necessarily top notch when compared to a good star hotel. However, please don't even get disuaded by that as the warmth and hospitality more than compensates for any shortcomings.\n\nThe house itself is steeped in centuries of history and it is right in the heart of the temple area. My wife and I could not help feeling low when it was time to leave the place. But we made a promise to visit Benares and this next time our place of stay is determined. Thank you Dr. Kiran and Dr. Balaji.",
    stayDate: "6 weeks ago"
  },
  {
    guestName: "Krishma Maniar",
    rating: 5,
    comment: "Our stay was very delightful at Rudreshwar Mahadeo Kothi. Mr & Mrs Singh are the warmest host. Very helpful, guided us so well, helped us arrange boat ride n darshan. The property is 200 meters away from the kashi vishwanath temple, it was very convenient. Delicious breakfast. We booked family room, for us family of 4.Clean and neat rooms.",
    stayDate: "9 weeks ago"
  },
  {
    guestName: "jonnalagadda keerthi",
    rating: 5,
    comment: "One of the best places to stay in Kashi—just a two-minute walk from Kashi Vishwanath Mandir and very close to all other temples and ghats. The house was incredibly beautiful, well maintained, and the bathrooms were spotlessly clean. the place was calm and serene. Kiran Aunty, Balaji Uncle, and the staff Akshay and Akash Bhaiyya were extremely warm and welcoming—it truly felt like visiting our relatives in Kashi. The best part was the temple within the house. The homemade food was absolutely delicious. Thank you for the wonderful hospitality; this would be our go to place in Kashi and we will definitely recommend this place to everyone.",
    stayDate: "13 weeks ago"
  },
  {
    guestName: "Shivangi Singh",
    rating: 5,
    comment: "Rudreshwar Mahadeo Kothi in Kashi is more than just a place; it's an experience that touches the soul. ✨\nThe moment you step inside, you're enveloped in an atmosphere of profound peace and spirituality.\nThe intricate architecture and the serene ambiance create a perfect setting for reflection and devotion. Every corner of the kothi resonates with history and devotion, making it a must-visit for anyone seeking a deeper connection with the divine.\nPlus, the hosts Dr.V.N Singh and Dr.Kiran Singh are incredibly wonderful. They made us feel so comfortable, it just felt like home. They made sure that we don’t have any problems at all, and the major plus point is- it's conveniently located just a two-minute walk from the Kashi Vishwanath Temple!\nHighly recommended stay if you’re visiting Varanasi. It's a place that leaves a lasting impression on your heart. 💞",
    stayDate: "20 weeks ago"
  },
  {
    guestName: "abhishek pandey",
    rating: 5,
    comment: "Right in the heart of the city , this is a must stay place. Easy access to Kashi Viswanath ji and other famous street food next dooor is a blessing. And a beautiful temple within the compound just makes it blissful.\n\nA truly warm host in VN Singh sir and wondeful caretakers (Akash & Akshay) made the stay memorable. When you get delicious home cooked food - made to order what else can you ask for.\n\nRooms are great.. just be mindful of the noisy ones on special festive evenings, with windows facing the main street.",
    stayDate: "22 weeks ago"
  }
];

export default function Reviews() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate({ to: "/" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background font-body relative">
      <Helmet>
        <title>Guest Reviews | Rudreshwar Mahadeo Kothi</title>
        <meta name="description" content="Read what our guests have to say about their stay at Rudreshwar Mahadeo Kothi. Authentic reviews from Google, Airbnb, and other platforms." />
      </Helmet>

      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground hover:bg-transparent px-0 gap-2 font-semibold">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Button>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
        </nav>
      </header>

      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-primary">Authentic Guest Experiences</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              What Our Guests Say
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We gather reviews from across the web, including Google, Airbnb, MakeMyTrip, and Booking.com, to give you an authentic look into the Rudreshwar Mahadeo Kothi experience.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-card border border-border shadow-lg rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-full flex flex-col items-center">
              <h3 className="text-xl font-bold text-foreground mb-6">Google Reviews</h3>
              <TrustindexWidget src="https://cdn.trustindex.io/loader.js?fb3496870c5074752c760e7ce2b" />
            </div>

            <div className="mt-12 pt-8 border-t border-border flex flex-col items-center">
              <h3 className="text-xl font-bold text-foreground mb-6">Booking.com Reviews</h3>
              <TrustindexWidget src="https://cdn.trustindex.io/loader.js?a5b9ff570fde74910316e651293" />
            </div>

            <div className="mt-16 pt-12 border-t border-border flex flex-col items-center w-full">
              {/* Airbnb Custom Header */}
              <div className="flex flex-col items-center justify-center mb-10 bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm w-full max-w-md text-center">
                <div className="flex items-center justify-center mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                    alt="Airbnb Logo"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="font-bold text-2xl text-foreground tracking-tight">Excellent</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className="w-5 h-5 fill-[#FF5A5F] text-[#FF5A5F]" />
                    ))}
                  </div>
                </div>
                <div className="text-muted-foreground mt-3 text-base font-medium">
                  <span className="font-bold text-foreground">5.0</span> • 20 reviews
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
                {AIRBNB_REVIEWS.map((review, idx) => (
                  <ReviewItem key={idx} review={review} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function TrustindexWidget({ src }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content to avoid duplicates in strict mode
    containerRef.current.innerHTML = '';

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.async = true;
    containerRef.current.appendChild(script);

  }, [src]);

  return <div ref={containerRef} className="w-full min-h-[200px] flex justify-center trustindex-wrapper" />;
}

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
      ))}
    </div>
  );
}

function ReviewItem({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.comment.length > 180;

  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white/95 rounded-3xl border border-border p-8 flex flex-col shadow-xl shadow-black/5 relative group transition-all h-fit">
      <div className="absolute top-6 right-6 text-primary/10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>
      </div>

      <div className="mb-6 relative z-10 transition-transform group-hover:scale-105 origin-left">
        <StarRating rating={Number(review.rating)} max={5} />
      </div>

      <div className="mb-8 flex-1 relative z-10 w-full">
        <p className={`text-base text-foreground/85 leading-relaxed whitespace-pre-wrap ${!isExpanded && isLong ? "line-clamp-4" : ""}`}>
          "{review.comment}"
        </p>
        {isLong && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm font-bold text-[#FF5A5F] mt-4 hover:opacity-80 transition-opacity uppercase tracking-wider focus:outline-none">
            {isExpanded ? "Read Less -" : "Read Full Story +"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-border/60 mt-auto">
        <div className="w-12 h-12 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center text-[#FF5A5F] font-bold text-lg uppercase flex-shrink-0">
          {review.guestName ? review.guestName.charAt(0) : "G"}
        </div>
        <div>
          <p className="font-bold text-base text-foreground">
            {review.guestName}
          </p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-1">
            {review.stayDate}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
