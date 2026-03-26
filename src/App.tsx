/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Zap, 
  Users, 
  Gamepad2, 
  Star, 
  ChevronDown, 
  Plus,
  Minus,
  X, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Youtube, 
  Globe,
  ArrowRight,
  MessageSquare,
  ClipboardCheck,
  Search,
  Rocket,
  TrendingUp
} from 'lucide-react';

// --- Types ---

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Constants ---

const FEATURES: Feature[] = [
  {
    id: 'opportunities',
    title: 'Access to Opportunities',
    description: 'Get direct access to exclusive brand deals and sponsorship opportunities tailored to your niche.',
    icon: <Trophy className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'campaigns',
    title: 'Campaigns and Drops',
    description: 'Participate in high-impact UGC campaigns and limited-edition product drops.',
    icon: <Zap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'early-access',
    title: 'Early Access',
    description: 'Be the first to play new titles and test upcoming features before they hit the mainstream.',
    icon: <Star className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'events',
    title: 'Events and Tournaments',
    description: 'Compete in exclusive tournaments and attend VIP industry events worldwide.',
    icon: <Gamepad2 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'community',
    title: 'Community and Visibility',
    description: 'Boost your reach through our network and connect with a community of elite creators.',
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  }
];

const FAQS: FAQItem[] = [
  {
    question: "What is the JG Gamechanger Network?",
    answer: "JG Gamechanger Network is a premier platform designed to bridge the gap between elite gaming creators and world-class brands for UGC campaigns and partnerships."
  },
  {
    question: "How do I qualify for the network?",
    answer: "We look for creators with high engagement, consistent quality, and a strong presence in the gaming community. Every application is manually vetted by our team."
  },
  {
    question: "Is there a cost to join?",
    answer: "No, joining the network is completely free for creators. We earn by facilitating successful partnerships between you and the brands."
  },
  {
    question: "What kind of campaigns can I expect?",
    answer: "Campaigns range from sponsored gameplay and product reviews to long-term brand ambassadorships and exclusive event coverage."
  }
];

const CREATOR_TYPES = [
  {
    title: "Gameplay Creators",
    description: "Livestreams, walkthroughs, highlights, challenges, clips.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Short-form",
    description: "Reels/Shorts, edits, hooks, reactions, memes.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Esports",
    description: "Competitive players, hosts, analysts, tournament/event coverage.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Fan Creators",
    description: "Art, Cosplayers, UGC concepts, community Builds.",
    image: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&q=80&w=1000"
  }
];

const STEPS = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your details, platforms and format. We only ask what helps us activate your quickly."
  },
  {
    number: "02",
    title: "Review",
    description: "We score for quality, consistency and fit. Creators are bucketed for the right opportunities."
  },
  {
    number: "03",
    title: "Activate",
    description: "Selected creators receive briefs, assets and opportunities. As the Network grows, rewards expand."
  },
  {
    number: "04",
    title: "Scale",
    description: "We turn what works into a repeatable creator engines for JioGames now, and Jio next."
  }
];

// --- Components ---

const BackgroundEffects = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Animated Blobs */}
    <motion.div 
      animate={{ 
        x: [0, 100, 0], 
        y: [0, 50, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-brand/10 blur-[100px] rounded-full"
    />
    <motion.div 
      animate={{ 
        x: [0, -100, 0], 
        y: [0, -50, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[30%] -right-[5%] w-[35%] h-[35%] bg-brand/5 blur-[90px] rounded-full"
    />
    <motion.div 
      animate={{ 
        x: [0, 50, 0], 
        y: [0, 100, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[5%] left-[15%] w-[30%] h-[30%] bg-brand/10 blur-[110px] rounded-full"
    />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
          <Gamepad2 className="text-dark-green w-6 h-6" />
        </div>
        <span className="font-bold text-xl tracking-tighter uppercase italic">JG Gamechanger</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-text">
        <a href="#how-it-works" className="hover:text-brand transition-colors">How it works</a>
        <a href="#perks" className="hover:text-brand transition-colors">Perks</a>
        <a href="#creator-types" className="hover:text-brand transition-colors">Creator Types</a>
        <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
      </div>
      <button 
        onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-complement text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand hover:text-white transition-all"
      >
        Apply Now
      </button>
    </div>
  </nav>
);

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative h-[450px] overflow-hidden rounded-3xl bg-dark-green border border-white/10 hover:border-brand/50 transition-all duration-500 cursor-pointer"
  >
    {/* Full-Bleed Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={feature.image} 
        alt={feature.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-80"
        referrerPolicy="no-referrer"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
        <div className="w-12 h-1 bg-brand mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
        <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3 leading-none group-hover:text-complement transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="text-muted-text leading-relaxed text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
          {feature.description}
        </p>
      </div>
    </div>

    {/* Corner Accent */}
    <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-brand/20 group-hover:border-brand transition-colors duration-500 rounded-tr-xl" />
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-16 text-center">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-white/10 last:border-0">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-6 flex items-center justify-between text-left group transition-all"
            >
              <span className={`font-bold text-base transition-colors ${openIndex === i ? 'text-brand' : 'text-white/90'}`}>
                {faq.question}
              </span>
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: openIndex === i ? 90 : 0, opacity: openIndex === i ? 0 : 1 }}
                  className="absolute"
                >
                  <Plus className="w-5 h-5 text-brand" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ rotate: openIndex === i ? 0 : -90, opacity: openIndex === i ? 1 : 0 }}
                  className="absolute"
                >
                  <Minus className="w-5 h-5 text-brand" />
                </motion.div>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-muted-text leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CreatorTypesSection = () => (
  <section id="creator-types" className="py-32 px-6 relative overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,102,0.05),transparent_70%)]" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-16">
        Creator <span className="text-brand">Types</span> we recruit
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CREATOR_TYPES.map((type, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[400px] overflow-hidden rounded-3xl bg-dark-green border border-white/10 hover:border-brand/50 transition-all duration-500 cursor-pointer"
          >
            {/* Full-Bleed Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={type.image} 
                alt={type.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 leading-none group-hover:text-brand transition-colors duration-500">
                  {type.title}
                </h3>
                <p className="text-muted-text leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {type.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-32 px-6 overflow-hidden relative bg-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6"
            >
              How it <span className="text-brand">Works.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-text text-xl"
            >
              A streamlined journey from application to activation.
            </motion.p>
          </div>
        </div>
        
        <div className="relative">
          {/* Progression Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-white/5 z-0">
            <motion.div 
              initial={{ width: '0%' }}
              animate={{ 
                width: hoveredIndex !== null ? `${(hoveredIndex + 0.5) * 25}%` : '0%' 
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="h-full bg-brand relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand shadow-[0_0_15px_#00FF00]" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-brand/30 transition-all duration-500 h-full flex flex-col items-start text-left">
                  {/* Circle Step */}
                  <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:border-brand group-hover:scale-110 transition-all duration-500 relative z-10">
                    <span className={`text-xl font-black italic transition-colors duration-500 ${hoveredIndex === i ? 'text-brand' : 'text-white/40'}`}>
                      {step.number}
                    </span>
                    {/* Inner Glow */}
                    <div className={`absolute inset-0 rounded-full bg-brand/20 blur-md transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold italic uppercase group-hover:text-brand transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-text leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-px h-8 bg-gradient-to-b from-brand to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socials: '',
    reach: '',
    contentType: 'reels',
    gameFormats: '',
    willingness: 'yes'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dark-green border border-brand/30 p-12 rounded-3xl text-center"
      >
        <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-3xl font-bold mb-4 italic uppercase">Application Received!</h3>
        <p className="text-muted-text max-w-md mx-auto">
          Our team will review your profile and get back to you within 48 hours. Get ready to change the game.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-brand font-bold uppercase tracking-widest text-sm hover:underline"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <div id="signup" className="py-32 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,102,0.04),transparent_60%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6 leading-none">
              Ready to <span className="text-complement">Level Up?</span>
            </h2>
            <p className="text-xl text-muted-text mb-8">
              Join the elite network of creators shaping the future of gaming culture.
            </p>
            <ul className="space-y-4">
              {[
                'Direct access to premium brands',
                'Exclusive invite-only events',
                'Dedicated creator support',
                'Performance-based bonuses'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-text">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-green/40 border border-white/10 p-8 rounded-3xl space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Primary Social Handle & Platform</label>
              <input 
                required
                type="text" 
                className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                placeholder="@username on Twitch/YouTube"
                value={formData.socials}
                onChange={e => setFormData({...formData, socials: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Content Type</label>
                <select 
                  className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors appearance-none"
                  value={formData.contentType}
                  onChange={e => setFormData({...formData, contentType: e.target.value})}
                >
                  <option value="reels">Reels / Shorts</option>
                  <option value="posts">Static Posts</option>
                  <option value="news">Gaming News</option>
                  <option value="streams">Live Streams</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Total Reach</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                  placeholder="e.g. 50k+"
                  value={formData.reach}
                  onChange={e => setFormData({...formData, reach: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Game Formats You Create For</label>
              <input 
                required
                type="text" 
                className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                placeholder="FPS, RPG, MOBA, etc."
                value={formData.gameFormats}
                onChange={e => setFormData({...formData, gameFormats: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Willing to participate in campaigns?</label>
              <div className="flex gap-4">
                {['yes', 'maybe'].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="willingness" 
                      value={opt}
                      checked={formData.willingness === opt}
                      onChange={e => setFormData({...formData, willingness: e.target.value})}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.willingness === opt ? 'border-brand' : 'border-white/20'}`}>
                      {formData.willingness === opt && <div className="w-2.5 h-2.5 bg-brand rounded-full" />}
                    </div>
                    <span className={`capitalize ${formData.willingness === opt ? 'text-white' : 'text-muted-text'}`}>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors group flex items-center justify-center gap-2"
            >
              Submit Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="pt-20 pb-10 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
              <Gamepad2 className="text-black w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tighter uppercase italic">JG Gamechanger</span>
          </div>
          <p className="text-muted-text max-w-xs mb-8">
            The ultimate creator intake and activation layer for the next generation of gaming partnerships.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-dark-green rounded-lg text-muted-text hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-dark-green rounded-lg text-muted-text hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-dark-green rounded-lg text-muted-text hover:text-brand transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-white mb-6">Network</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Perks and rewards</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-white mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><a href="#" className="hover:text-white transition-colors">Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Disclosure</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-white mb-6">Privacy</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy & Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-text uppercase tracking-widest">
        <p>© 2026 JG Gamechanger Network. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-brand selection:text-black font-sans relative">
      <BackgroundEffects />
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#141414] z-10" />
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            src="https://jiogames.com/assets/banner/card-banner.png" 
            alt="Smiling Gamer" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5
              }}
              animate={{ 
                y: [null, '-20%', '120%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
              className="absolute w-1 h-1 bg-brand rounded-full blur-[1px]"
            />
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full text-brand text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Zap className="w-4 h-4 text-complement" />
              Now Accepting Applications
            </div>
            <h1 className="text-[12vw] md:text-[8vw] font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
              Gamechanger <br />
              <span className="text-brand">Network.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-text max-w-2xl mx-auto mb-12 font-medium">
              GameChanger Networks is how JioGames discovers, supports and activates creators across formats, Get access to opportunities, drops, campaigns, events and collaboration as we scale a creator engine for JioGames now, and Jio next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all transform hover:scale-105"
              >
                Sign Up Now
              </button>
              <button 
                onClick={() => document.getElementById('perks')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border border-white/20 px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Perks
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-text">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* Features Section */}
      <section id="perks" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Creator <span className="text-brand">Perks.</span>
              </h2>
              <p className="text-xl text-muted-text">
                We don't just connect you to brands. We build your legacy through high-impact activations.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-4xl font-black italic text-white/10 uppercase">Elite Network</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CreatorTypesSection />

      <HowItWorksSection />

      {/* Stats / Social Proof */}
      <section className="py-20 border-y border-white/5 bg-[#141414] overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-20 animate-marquee items-center">
            {[
              'UGC CAMPAIGNS', 'GLOBAL PARTNERSHIPS', 'EXCLUSIVE DROPS', 'EARLY ACCESS', 'TOURNAMENTS', 'COMMUNITY VISIBILITY'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <Star className="w-6 h-6 text-brand fill-brand" />
                <span className="text-6xl font-black italic uppercase tracking-tighter text-white/20">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-20 animate-marquee items-center ml-20">
            {[
              'UGC CAMPAIGNS', 'GLOBAL PARTNERSHIPS', 'EXCLUSIVE DROPS', 'EARLY ACCESS', 'TOURNAMENTS', 'COMMUNITY VISIBILITY'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <Star className="w-6 h-6 text-brand fill-brand" />
                <span className="text-6xl font-black italic uppercase tracking-tighter text-white/20">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Signup Section */}
      <SignupSection />

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function SignupSection() {
  return <SignupForm />;
}
