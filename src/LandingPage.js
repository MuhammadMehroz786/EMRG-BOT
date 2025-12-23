import React, { useState, useEffect } from 'react';
import {
  Zap, ArrowRight, Menu, X, Bot,
  CheckCircle, Mail, Clock, Shield, Home, Briefcase, Utensils, Stethoscope, Ticket, UserCheck, ChevronDown, ChevronLeft
} from 'lucide-react';

// --- DATA & CONTENT ---

const DEMO_DATA = {
  venues: {
    id: 'venues',
    label: "Venues & Restaurants",
    icon: <Utensils className="w-5 h-5" />,
    subtags: "(restaurants, rooftops, lounges, private dining, event spaces)",
    headline: "Your Website Should Greet Guests Like a Great Host.",
    description: "Restaurants and venues don't just take reservations — they handle private events, special occasions, group bookings, and last-minute questions.\n\nThis website receptionist responds instantly, gathers the right details, and routes requests automatically — even when your team is busy or the venue is closed.",
    ctaText: "👉 Try the live receptionist in the corner to see how it works.",
    botMsg: "Welcome to The Grand Bistro. Are you looking to make a reservation or plan a private event?",
    userMsg: "I need to book a private dinner for 20 people.",
    botReply: "I can help with that. What date were you thinking for your event?"
  },
  services: {
    id: 'services',
    label: "Service Businesses",
    icon: <Shield className="w-5 h-5" />,
    subtags: "(law firms, dental practices, medical offices, consultants, agencies, professional services)",
    headline: "Turn Website Visitors Into Qualified Conversations.",
    description: "Service businesses win or lose opportunities in the first interaction.\n\nThis website receptionist greets visitors professionally, asks smart qualifying questions, captures contact details, and helps move serious inquiries forward — without forms or delays.",
    ctaText: "👉 Start a conversation with the live receptionist to experience it yourself.",
    botMsg: "Hello! Thanks for visiting Elite Law Partners. Are you a new client or an existing one?",
    userMsg: "New client. I need a consultation.",
    botReply: "Understood. We have a few openings this week. Would you prefer a morning or afternoon slot?"
  },
  realestate: {
    id: 'realestate',
    label: "Real Estate",
    icon: <Home className="w-5 h-5" />,
    subtags: "(buying, selling, property management, leasing, luxury estates)",
    headline: "Speed Wins Deals in Real Estate.",
    description: "When someone inquires about a property, timing matters.\n\nThis website receptionist responds instantly, identifies buyer or seller intent, captures key details, and ensures every inquiry is handled — even after hours.",
    ctaText: "👉 Try the live receptionist in the corner and see how quickly it engages.",
    botMsg: "Welcome to Prime Properties. Are you looking to buy, sell, or rent today?",
    userMsg: "I'm looking to buy a 3-bedroom condo.",
    botReply: "Great choice. What serves as your ideal budget range for this purchase?"
  }
};

// --- COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage, isScrolled, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setIsMobileMenuOpen(false);
    if (['features', 'comparison', 'contact'].includes(target)) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Allow time for render before scrolling
        setTimeout(() => scrollToSection(target), 100);
      } else {
        scrollToSection(target);
      }
    } else {
      // It's a page change (e.g., 'home')
      setCurrentPage(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="text-2xl font-bold tracking-tighter">
            EMRG<span className="text-red-600">.</span>RECEPTIONIST
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('features')} className="text-sm font-medium hover:text-red-500 transition-colors">CAPABILITIES</button>
          <button onClick={() => handleNavClick('comparison')} className="text-sm font-medium hover:text-red-500 transition-colors">VS CHATBOTS</button>

          {/* Dropdown */}
          <div className="relative group">
            <button
              className={`text-sm font-medium hover:text-red-500 transition-colors flex items-center gap-1 py-2 ${currentPage !== 'home' ? 'text-red-500' : ''}`}
            >
              LIVE DEMO <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 hidden group-hover:block pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-1">
                {Object.values(DEMO_DATA).map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => handleNavClick(demo.id)}
                    className="text-left px-4 py-3 text-sm hover:bg-white/5 hover:text-red-500 text-gray-300 rounded-lg transition-colors flex items-center gap-2"
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden max-h-[90vh] overflow-y-auto shadow-2xl">
          <button onClick={() => handleNavClick('features')} className="text-left text-lg font-medium">Capabilities</button>
          <button onClick={() => handleNavClick('comparison')} className="text-left text-lg font-medium">Vs Chatbots</button>

          <div className="border-l-2 border-white/10 pl-4 flex flex-col gap-4">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Live Demos</span>
            {Object.values(DEMO_DATA).map((demo) => (
              <button
                key={demo.id}
                onClick={() => handleNavClick(demo.id)}
                className={`text-left text-lg font-medium ${currentPage === demo.id ? 'text-white' : 'text-red-500'}`}
              >
                {demo.label}
              </button>
            ))}
          </div>

          <button onClick={() => handleNavClick('contact')} className="text-left text-lg font-bold bg-white text-black p-4 text-center mt-4">Get Started</button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-neutral-950 text-gray-500 py-12 px-6 border-t border-white/10">
    <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
      <div className="col-span-1 md:col-span-2">
        <div className="text-2xl font-bold text-white mb-4 tracking-tighter">
          EMRG<span className="text-red-600">.</span>RECEPTIONIST
        </div>
        <p className="max-w-xs text-sm">
          Providing elite website receptionist and automation solutions for modern businesses.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Solutions</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">Venues</li>
          <li className="hover:text-white cursor-pointer">Real Estate</li>
          <li className="hover:text-white cursor-pointer">Professional Services</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Connect</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer flex items-center gap-2"><Mail className="w-4 h-4"/> Contact Support</li>
          <li className="hover:text-white cursor-pointer">Twitter / X</li>
          <li className="hover:text-white cursor-pointer">LinkedIn</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>&copy; {new Date().getFullYear()} EMRG Bot Services. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
        <span className="cursor-pointer hover:text-white">Terms of Service</span>
      </div>
    </div>
  </footer>
);

const ChatInterface = ({ data }) => (
  <div className="flex flex-col items-center mx-auto max-w-sm">
    <div className="w-full bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden h-[550px] flex flex-col relative ring-1 ring-white/5">
      {/* Header */}
      <div className="bg-neutral-800 p-4 border-b border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-sm">{data.label.split('&')[0]} Assistant</h3>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Active Now
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-black/50">
        <div className="self-start max-w-[85%] animate-fade-in-up">
          <div className="bg-neutral-800 text-gray-200 p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed border border-white/5">
            {data.botMsg}
          </div>
          <span className="text-[10px] text-gray-600 mt-1 ml-1">Just now</span>
        </div>

        <div className="self-end max-w-[85%] flex flex-col items-end animate-fade-in-up delay-150">
          <div className="bg-red-600 text-white p-3 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-red-900/20">
            {data.userMsg}
          </div>
          <span className="text-[10px] text-gray-600 mt-1 mr-1">Just now</span>
        </div>

        <div className="self-start max-w-[85%] animate-fade-in-up delay-300">
          <div className="bg-neutral-800 text-gray-200 p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed border border-white/5">
            {data.botReply}
          </div>
          <span className="text-[10px] text-gray-600 mt-1 ml-1">Just now</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-neutral-900 border-t border-white/5">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-black border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors text-white placeholder-gray-600"
            disabled
          />
          <button className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Micro-line - Now placed outside the card for clarity */}
    <p className="text-[10px] text-center text-gray-500 mt-4 italic">
      This is a live demonstration. Conversations are simulated for demo purposes.
    </p>
  </div>
);

// --- PAGES ---

const HomePage = ({ scrollToSection, setCurrentPage }) => (
  <>
    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          INTELLIGENT WEBSITE RECEPTIONISTS
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
          THE FUTURE IS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">CONVERSATIONAL</span>
          <span className="text-red-600">.</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white/90">
          And It Looks Like a Real Website Receptionist.
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Turn your website into a 24/7 digital front desk. Our AI-powered receptionists greet visitors instantly, ask the right questions, and route inquiries automatically — so every opportunity is handled professionally.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium text-gray-300">
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-600"/> No Forms</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-600"/> No Delays</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-600"/> No Missed Visitors</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full md:w-auto bg-red-600 text-white px-8 py-4 font-bold text-sm tracking-widest hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            DEPLOY YOUR RECEPTIONIST
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setCurrentPage('venues')}
            className="w-full md:w-auto border border-white/20 hover:border-white text-white px-8 py-4 font-bold text-sm tracking-widest transition-all duration-300 bg-transparent hover:bg-white/5"
          >
            TRY A LIVE DEMO
          </button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="py-24 px-6 bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest mb-2 uppercase">Engineered for Impact</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Receptionists That Don't Just Talk — <br/><span className="text-white/60">They Perform.</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            This isn't generic AI. These receptionists are engineered to handle real business conversations at scale — designed for high-volume, high-value businesses where every inquiry matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-none border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 group-hover:border-red-600/50 transition-colors">
              <Clock className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">24/7 Engagement</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Your receptionist responds instantly — day or night. Peak hours, weekends, and after-hours are covered automatically.</p>
          </div>
          <div className="group p-8 rounded-none border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 group-hover:border-red-600/50 transition-colors">
              <UserCheck className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Lead Qualification</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Every conversation starts with purpose. We ask structured questions to understand intent and capture contact details.</p>
          </div>
          <div className="group p-8 rounded-none border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 group-hover:border-red-600/50 transition-colors">
              <Zap className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Smart Routing</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Conversations don't stall. Route inquiries to the right team, book next steps, or hand off to a human with full context.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison */}
    <section id="comparison" className="py-24 px-6 bg-neutral-950">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">This Is Not A Chatbot</h2>
          <p className="text-gray-400 max-w-xl mx-auto">One talks. The other performs. If your website plays a role in revenue, the difference matters.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-stretch">
          <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-2xl md:rounded-r-none md:rounded-l-2xl flex flex-col opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Most Chat Tools</h3>
              <ul className="space-y-4 text-gray-500 flex-1">
                <li className="flex items-start gap-3"><X className="w-5 h-5 mt-0.5"/> Answer basic questions only</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 mt-0.5"/> Sit idle between interactions</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 mt-0.5"/> Generic, robotic responses</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 mt-0.5"/> Lead nowhere specific</li>
              </ul>
          </div>

          <div className="p-8 md:p-10 border-2 border-red-600 bg-neutral-900 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.15)] flex flex-col relative scale-[1.02] z-10">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Website Receptionist</h3>
              <ul className="space-y-4 text-white flex-1">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5"/> Greets every visitor proactively</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5"/> Guides conversation with intent</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5"/> Captures contact details early</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5"/> Routes or books next steps</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 mt-0.5"/> Hands off to humans intelligently</li>
              </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Speed Section */}
    <section className="py-20 px-6 border-b border-white/5 bg-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">Speed Matters.</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right border-r border-white/10 pr-6 hidden md:block">
            <p className="text-gray-500 text-lg">Most businesses respond in</p>
            <p className="text-3xl font-bold text-gray-400">HOURS</p>
          </div>
            <div className="text-center md:hidden pb-6 border-b border-white/10">
            <p className="text-gray-500 text-lg">Most businesses respond in <span className="text-3xl font-bold text-gray-400 block">HOURS</span></p>
          </div>

          <div className="text-left pl-6 hidden md:block">
            <p className="text-white text-lg">Website Receptionists respond in</p>
            <p className="text-5xl font-black text-red-600 animate-pulse">SECONDS</p>
          </div>
            <div className="text-center md:hidden pt-6">
            <p className="text-white text-lg">Website Receptionists respond in <span className="text-5xl font-black text-red-600 block animate-pulse">SECONDS</span></p>
          </div>
        </div>
        <p className="mt-10 text-gray-400">
          Higher engagement. More qualified conversations. Fewer missed opportunities. <br/>
          Your website should respond faster than your competitors — automatically.
        </p>
      </div>
    </section>

    {/* Industries Grid */}
    <section className="py-24 px-6 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">BUILT FOR BUSINESSES <br/> WHERE EVERY INQUIRY COUNTS</h2>
          <p className="text-gray-600 text-lg">If missed inquiries cost you money, this fits.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4 cursor-pointer hover:shadow-lg" onClick={() => setCurrentPage('venues')}>
            <div className="text-red-600"><Utensils className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">Restaurants & Venues</h3>
          </div>
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4 cursor-pointer hover:shadow-lg" onClick={() => setCurrentPage('services')}>
            <div className="text-red-600"><Shield className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">High-End Services</h3>
          </div>
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4 cursor-pointer hover:shadow-lg" onClick={() => setCurrentPage('realestate')}>
            <div className="text-red-600"><Home className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">Real Estate Groups</h3>
          </div>
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4">
            <div className="text-red-600"><Stethoscope className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">Medical & Wellness</h3>
          </div>
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4">
            <div className="text-red-600"><Ticket className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">Events & Hospitality</h3>
          </div>
          <div className="p-6 border border-gray-200 hover:border-black transition-colors rounded-lg flex flex-col items-center text-center gap-4">
            <div className="text-red-600"><Briefcase className="w-8 h-8"/></div>
            <h3 className="font-bold text-black">Agencies & Advisors</h3>
          </div>
        </div>
      </div>
    </section>
  </>
);

const IndustryPage = ({ data, setCurrentPage }) => (
  <section className="min-h-screen pt-32 pb-20 px-6 bg-black relative">
    <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_70%)] pointer-events-none"></div>

    <div className="container mx-auto max-w-6xl relative z-10">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-widest"
      >
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left Content */}
        <div className="flex-1 w-full text-left lg:sticky lg:top-32">
          <div className="flex items-center gap-3 text-red-500 mb-6">
            {data.icon}
            <span className="text-sm font-bold uppercase tracking-widest">{data.label}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white animate-fade-in-up">
            {data.headline}
          </h1>

          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8 border-l-2 border-white/20 pl-4 py-1">
            {data.subtags}
          </p>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed whitespace-pre-line animate-fade-in-up delay-100 max-w-xl">
            {data.description}
          </p>

          <div className="inline-block">
            <p className="text-white font-bold text-sm mb-6 flex items-center gap-2 bg-white/5 p-4 rounded-lg border border-white/10 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
              {data.ctaText}
            </p>
          </div>
        </div>

        {/* Right Content (Demo) */}
        <div className="flex-1 w-full">
           <ChatInterface data={data} />
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP ---

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load chatbot based on current page
  useEffect(() => {
    // Complete widget removal function
    const removeAllBotWidgets = () => {
      // Remove script
      const script = document.getElementById('botforge-script');
      if (script) {
        script.remove();
      }

      // Remove all possible chatbot widget elements including buttons/icons
      const selectors = [
        '.botforge-widget-container',
        '[class*="botforge"]',
        '[class*="BotForge"]',
        '[id*="botforge"]',
        '[id*="BotForge"]',
        'iframe[src*="thebotforge"]',
        '[data-bot-forge-id]',
        // Common chatbot widget patterns
        'div[style*="z-index: 999"]',
        'div[style*="z-index: 9999"]',
        'div[style*="position: fixed"][style*="bottom"]',
        'div[style*="position: fixed"][style*="right"]',
        // Button/Icon patterns
        'button[class*="bot"]',
        'button[id*="bot"]',
        'div[role="button"][style*="position: fixed"]'
      ];

      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            if (el && el.id !== 'botforge-script' && el.tagName !== 'SCRIPT') {
              el.remove();
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });

      // Check all body children for suspicious fixed-position elements
      Array.from(document.body.children).forEach(child => {
        if (child === document.getElementById('root')) return;

        const style = window.getComputedStyle(child);
        const isFixed = style.position === 'fixed';
        const hasHighZIndex = parseInt(style.zIndex) > 900;
        const containsBotIframe = child.querySelector('iframe[src*="thebotforge"]');

        if ((isFixed && hasHighZIndex) || containsBotIframe ||
            child.innerHTML?.includes('thebotforge') ||
            child.innerHTML?.includes('botforge')) {
          child.remove();
        }
      });

      // Nuclear option: Find any remaining iframes from thebotforge
      document.querySelectorAll('iframe').forEach(iframe => {
        try {
          if (iframe.src && iframe.src.includes('thebotforge')) {
            let elementToRemove = iframe;
            // Try to remove parent containers up to 3 levels
            for (let i = 0; i < 3; i++) {
              if (elementToRemove.parentElement &&
                  elementToRemove.parentElement !== document.body &&
                  elementToRemove.parentElement !== document.getElementById('root')) {
                elementToRemove = elementToRemove.parentElement;
              }
            }
            elementToRemove.remove();
          }
        } catch (e) {
          // Ignore errors
        }
      });
    };

    // Define bot IDs for different pages
    const botIds = {
      venues: '691e30877d495dee0c8498e2',      // Restaurant bot
      services: '691cad138dbc19d40b3b5cc0',    // Services bot
      realestate: '6949efae2c66457cf3308a35'   // Real Estate bot
    };

    const currentBotId = botIds[currentPage];

    // Always clean up first
    removeAllBotWidgets();

    if (currentBotId) {
      // Wait a bit for cleanup to complete, then load new bot
      setTimeout(() => {
        const script = document.createElement('script');
        script.id = 'botforge-script';
        script.src = 'https://app.thebotforge.ai/chatWidget.js';
        script.setAttribute('data-bot-forge-id', currentBotId);
        script.defer = true;
        document.body.appendChild(script);
      }, 200);
    } else {
      // For non-bot pages, run cleanup multiple times to ensure removal
      setTimeout(removeAllBotWidgets, 100);
      setTimeout(removeAllBotWidgets, 300);
      setTimeout(removeAllBotWidgets, 600);
    }

    // Cleanup on unmount or page change
    return () => {
      removeAllBotWidgets();
    };
  }, [currentPage]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <main>
        {currentPage === 'home' && (
          <HomePage scrollToSection={scrollToSection} setCurrentPage={setCurrentPage} />
        )}

        {DEMO_DATA[currentPage] && (
          <IndustryPage data={DEMO_DATA[currentPage]} setCurrentPage={setCurrentPage} />
        )}
      </main>

      {/* CTA / Contact Section (Global) */}
      <section id="contact" className="py-24 px-6 bg-red-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">READY TO DEPLOY?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Join forward-thinking brands using website receptionists to elevate how their websites engage, qualify, and convert visitors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-black text-white font-bold text-sm tracking-widest hover:bg-neutral-900 transition-colors w-full sm:w-auto border border-black">
              CONTACT SALES
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-sm tracking-widest hover:bg-white hover:text-red-600 transition-colors w-full sm:w-auto">
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
