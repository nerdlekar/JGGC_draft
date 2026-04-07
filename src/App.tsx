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
  Facebook,
  Smartphone,
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

import contentData from './content.json';

// --- Brand Icons (Custom SVG) ---
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.39,80.21a105.73,105.73,0,0,0,32.77,16.15,77.7,77.7,0,0,0,7.32-11.75A67.11,67.11,0,0,1,29.58,79.4c1,1.06,2.06,2.15,3.06,3.27,1,1.12,2,2.27,3,3.46,1,1.12,2,2.41,3.06,3.67H91.54l3.06-3.67q1.5-1.78,3-3.46t3.06-3.27a67.11,67.11,0,0,1-10.9-5.21,77.7,77.7,0,0,0,7.32,11.75,105.73,105.73,0,0,0,32.77-16.15C129,56.6,124.43,32.65,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53.2s5.18-12.49,11.45-12.49,11.45,5.6,11.45,12.49S48.72,65.69,42.45,65.69Zm42.24,0C78.42,65.69,73.24,60,73.24,53.2s5.18-12.49,11.45-12.49,11.45,5.6,11.45,12.49S88.42,65.69,84.69,65.69Z" />
  </svg>
);

const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M16.5 7.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm-9 0a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm3.75 6.5s-1.5 1.5-3.75 1.5c-2.25 0-3.75-1.5-3.75-1.5s0-.75.75-.75.75.75.75.75c1.5 0 2.25-.75 2.25-.75h.75s.75.75 2.25.75c0 0 .75-.75.75-.75s.75.75.75.75zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
  </svg>
);

const IconMap: Record<string, React.ElementType> = {
  Trophy,
  Zap,
  Star,
  Gamepad2,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Smartphone,
  X: XIcon,
  Reddit: RedditIcon,
  Discord: DiscordIcon
};

const FEATURES: Feature[] = contentData.features.map(f => {
  const IconComponent = IconMap[f.icon];
  return {
    id: f.id,
    title: f.title,
    description: f.description,
    image: f.image,
    icon: <IconComponent className="w-6 h-6" />
  };
});

const FAQS: FAQItem[] = contentData.faqs;
const CREATOR_TYPES = contentData.creatorTypes;
const STEPS = contentData.steps;
const FOOTER_COLUMNS: { title: string, links: { label: string, url: string }[] }[] = contentData.footerColumns;
const SOCIAL_HANDLES: { platform: string, url: string, icon: string }[] = contentData.socialHandles;
const APP_LINKS: { platform: string, url: string }[] = contentData.appLinks;

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
      <div className="flex items-center z-50">
        <img src="/images/Jiogames_horizontal.svg" alt="JioGames" className="h-8 md:h-10 object-contain" />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-text">
        <a href="#how-it-works" className="hover:text-brand transition-colors">How it works</a>
        <a href="#perks" className="hover:text-brand transition-colors">Perks</a>
        <a href="#creator-types" className="hover:text-brand transition-colors">Creator Types</a>
        <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
      </div>
      <button
        onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-brand text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(20,184,102,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
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
                <ul className="text-muted-text font-bold leading-relaxed text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden list-disc list-inside space-y-1">
                  {type.description.split(',').map((item, idx) => (
                    <li key={idx}>{item.trim().replace(/\.$/, '')}</li>
                  ))}
                </ul>
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
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socials: [{ platform: 'youtube', handle: '', contentType: 'reels', reach: '' }],
    gameFormats: '',
    willingness: 'yes'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Paste your Google Apps Script URL here!
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0FCQXru1dQEaP2dchMAqpx_DBtNctkWZgEGMqTiQwewPAc5p-1vSm0k-hta_T5YB04w/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // 'no-cors' is often required for Google Apps Script to prevent CORS blocking,
        // though it means you can't read the exact response.
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong submitting your application. Please try again.');
      setIsLoading(false);
    }
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
          We will review your form submission and reach out shortly. Get ready to change the game.
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

      <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start lg:items-center">
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
            {/* Step Progress */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? 'bg-brand' : 'bg-white/10'}`} />
              ))}
            </div>

            {/* STEP 1: Personal Info */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">Player Profile</h3>
                  <p className="text-sm text-muted-text">Let's start with the basics.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {/* STEP 2: Socials */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">Digital Footprint</h3>
                  <p className="text-sm text-muted-text">Where do you create?</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <label className="text-sm font-black uppercase italic tracking-widest text-white">Social Handles & Metrics</label>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, socials: [...formData.socials, { platform: 'youtube', handle: '', contentType: 'reels', reach: '' }] })}
                      className="text-xs text-brand font-bold uppercase tracking-widest hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Plus className="w-3 h-3" /> Add Another Platform
                    </button>
                  </div>
                  <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {formData.socials.map((social, index) => (
                      <div key={index} className="bg-[#141414] border border-white/10 p-6 md:p-8 rounded-3xl relative space-y-6">
                        {formData.socials.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const newSocials = formData.socials.filter((_, i) => i !== index);
                              setFormData({ ...formData, socials: newSocials });
                            }}
                            className="absolute right-6 top-6 text-muted-text hover:text-red-500 transition-colors"
                            title="Remove handle"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Platform</label>
                            <div className="relative">
                              <select
                                className="w-full bg-dark-green/50 border border-white/10 rounded-xl pl-5 pr-12 py-4 focus:border-brand outline-none transition-colors appearance-none"
                                value={social.platform}
                                onChange={e => {
                                  const newSocials = [...formData.socials];
                                  newSocials[index].platform = e.target.value;
                                  setFormData({ ...formData, socials: newSocials });
                                }}
                              >
                                <option value="youtube">YouTube</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitch">Twitch</option>
                                <option value="tiktok">TikTok</option>
                                <option value="twitter">X / Twitter</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Handle / Link</label>
                            <input
                              required
                              type="text"
                              className="w-full bg-dark-green/50 border border-white/10 rounded-xl px-5 py-4 focus:border-brand outline-none transition-colors"
                              placeholder={social.platform === 'youtube' ? 'youtube.com/@username' : '@username'}
                              value={social.handle}
                              onChange={e => {
                                const newSocials = [...formData.socials];
                                newSocials[index].handle = e.target.value;
                                setFormData({ ...formData, socials: newSocials });
                              }}
                            />
                          </div>

                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Content Type</label>
                            <div className="relative">
                              <select
                                className="w-full bg-dark-green/50 border border-white/10 rounded-xl pl-5 pr-12 py-4 focus:border-brand outline-none transition-colors appearance-none"
                                value={social.contentType}
                                onChange={e => {
                                  const newSocials = [...formData.socials];
                                  newSocials[index].contentType = e.target.value;
                                  setFormData({ ...formData, socials: newSocials });
                                }}
                              >
                                <option value="reels">Reels / Shorts</option>
                                <option value="posts">Static Posts</option>
                                <option value="news">Gaming News</option>
                                <option value="streams">Live Streams</option>
                                <option value="longform">Long-form Video</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Total Reach/Subs</label>
                            <input
                              required
                              type="text"
                              className="w-full bg-dark-green/50 border border-white/10 rounded-xl px-5 py-4 focus:border-brand outline-none transition-colors"
                              placeholder="e.g. 50k+"
                              value={social.reach}
                              onChange={e => {
                                const newSocials = [...formData.socials];
                                newSocials[index].reach = e.target.value;
                                setFormData({ ...formData, socials: newSocials });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-transparent border border-white/10 text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:border-white/30 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-[2] bg-white/5 border border-white/10 text-white py-3 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Final Details */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">Game Formats</h3>
                  <p className="text-sm text-muted-text">What do you love to play?</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2 border-t border-white/10 pt-6">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Game Formats You Create For</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors"
                      placeholder="FPS, RPG, MOBA, etc."
                      value={formData.gameFormats}
                      onChange={e => setFormData({ ...formData, gameFormats: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Willing to participate in campaigns?</label>
                    <div className="flex gap-4 flex-wrap">
                      {['yes', 'maybe', 'only remote', 'it depends'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="willingness"
                            value={opt}
                            checked={formData.willingness === opt}
                            onChange={e => setFormData({ ...formData, willingness: e.target.value })}
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
                </div>

                <div className="space-y-2 mt-8">
                  {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-transparent border border-white/10 text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:border-white/30 transition-colors"
                      disabled={isLoading}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-[2] bg-brand text-black py-3 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Submitting...' : 'Submit Application'}
                      {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="pt-20 pb-10 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center mb-6">
            <img src="/images/Jiogames_horizontal.svg" alt="JioGames" className="h-8 object-contain" />
          </div>
          <p className="text-muted-text max-w-xs mb-8">
            The ultimate creator intake and activation layer for the next generation of gaming partnerships.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {SOCIAL_HANDLES.map((social, idx) => {
              const isImageUrl = social.icon.startsWith('/') || social.icon.startsWith('http');
              const Icon = !isImageUrl ? (IconMap[social.icon] || Globe) : null;

              return (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#27b376] rounded-full text-white hover:opacity-80 transition-opacity flex items-center justify-center p-1">
                  {isImageUrl ? (
                    <img src={social.icon} alt={social.platform} className="w-full h-full object-contain" />
                  ) : (
                    Icon && <Icon className="w-full h-full" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {APP_LINKS.map((app, idx) => (
              <a key={idx} href={app.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-dark-green border border-white/10 px-4 py-3 rounded-xl hover:border-brand/50 hover:bg-[#141414] transition-all group">
                <Smartphone className="w-6 h-6 text-brand" />
                <div className="text-left">
                  <p className="text-[10px] text-muted-text uppercase tracking-widest leading-none mb-1 group-hover:text-white transition-colors">Download on</p>
                  <p className="text-sm font-bold leading-none">{app.platform}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column, i) => (
          <div key={i}>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white mb-6">{column.title}</h4>
            <ul className="space-y-4 text-sm text-muted-text">
              {column.links.map((link, j) => (
                <li key={j}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-text uppercase tracking-widest">
        <p>© 2026 JioGames Creator Network. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#faq" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Support</a>
          <a href="#signup" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Contact</a>
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
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
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
            <div className="inline-flex items-center gap-3 bg-brand/10 border border-brand/30 text-brand px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(20,184,102,0.1)]">
              <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
              Now Accepting Applications
            </div>
            <div className="flex justify-center mb-6">
              <img src="/images/Jiogames_horizontal.svg" alt="JioGames" className="h-12 md:h-20 object-contain" />
            </div>
            <h1 className="text-[12vw] md:text-[8vw] font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
              Creator <br />
              <span className="text-brand">Network.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-text max-w-2xl mx-auto mb-12 font-medium">
              Creator Network is how JioGames discovers, supports and activates creators across formats, Get access to opportunities, drops, campaigns, events and collaboration as we build a creator engine for JioGames.
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
