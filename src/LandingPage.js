import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, BarChart, Users, ArrowRight, Menu, X, Bot, CheckCircle, Mail } from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Placeholder - EMRG Style */}
            <div className="text-2xl font-bold tracking-tighter">
              EMRG<span className="text-red-600">.</span>BOTS
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-red-500 transition-colors">CAPABILITIES</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-red-500 transition-colors">WHY US</button>
            <button onClick={() => scrollToSection('demo')} className="text-sm font-medium hover:text-red-500 transition-colors">LIVE DEMO</button>
            <button
              onClick={() => scrollToSection('contact')}
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
            <button onClick={() => scrollToSection('features')} className="text-left text-lg font-medium">Capabilities</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-lg font-medium">Why Us</button>
            <button onClick={() => scrollToSection('demo')} className="text-left text-lg font-medium">Live Demo</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-bold text-red-500">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            INTELLIGENT AUTOMATION FOR EVENTS & MEDIA
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight">
            THE FUTURE IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">CONVERSATIONAL</span>
            <span className="text-red-600">.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your digital presence with EMRG Bot Services. We build bespoke AI-driven chat solutions that engage audiences, capture leads, and streamline your operations 24/7.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full md:w-auto bg-red-600 text-white px-8 py-4 font-bold text-sm tracking-widest hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              DEPLOY YOUR BOT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="w-full md:w-auto border border-white/20 hover:border-white text-white px-8 py-4 font-bold text-sm tracking-widest transition-all duration-300 bg-transparent hover:bg-white/5"
            >
              VIEW DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="features" className="py-24 px-6 bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Impact</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Our bots don't just chat; they perform. Designed specifically for the high-paced media and events industry.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-red-500" />}
              title="24/7 Engagement"
              description="Never miss a query. Our bots handle thousands of simultaneous conversations instantly, ensuring every guest feels a VIP."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-red-500" />}
              title="Lead Qualification"
              description="Automate the initial vetting process. Our intelligent scripts identify high-value prospects and route them directly to your sales team."
            />
            <FeatureCard
              icon={<BarChart className="w-8 h-8 text-red-500" />}
              title="Event Integration"
              description="Seamlessly sync with booking platforms, RSVPs, and ticketing systems to manage attendees without lifting a finger."
            />
          </div>
        </div>
      </section>

      {/* Live Demo Placeholder Section */}
      <section id="demo" className="py-24 px-6 border-y border-white/5 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent opacity-50"></div>

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 relative z-10">

          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the <br/><span className="text-red-600">Difference.</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Interact with the interface on the right to see how an EMRG Bot handles inquiries.
              Customizable personalities, branded aesthetics, and intelligent responses come standard.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-red-600" /> Instant Response Time
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-red-600" /> Natural Language Processing
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="w-5 h-5 text-red-600" /> Seamless Handoff to Humans
              </li>
            </ul>

            <button className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors text-sm tracking-wider font-bold">
              REQUEST FULL DEMO
            </button>
          </div>

          {/* CHATBOT CONTAINER / PLACEHOLDER */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="w-full max-w-sm bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col relative">
              {/* Fake Chat Header */}
              <div className="bg-neutral-800 p-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">EMRG Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                  </p>
                </div>
              </div>

              {/* Fake Chat Body - This is where your actual bot iframe/code will go later */}
              <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-black/50">
                {/* Bot Message */}
                <div className="self-start max-w-[85%]">
                  <div className="bg-neutral-800 text-gray-200 p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed border border-white/5">
                    Welcome to EMRG Bot Services. How can we elevate your next project?
                  </div>
                  <span className="text-[10px] text-gray-600 mt-1 ml-1">Just now</span>
                </div>

                {/* User Message Simulation */}
                <div className="self-end max-w-[85%] flex flex-col items-end">
                  <div className="bg-red-600 text-white p-3 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-red-900/20">
                    I need a chatbot for my event website.
                  </div>
                  <span className="text-[10px] text-gray-600 mt-1 mr-1">Just now</span>
                </div>

                 {/* Bot Reply Simulation */}
                 <div className="self-start max-w-[85%]">
                  <div className="bg-neutral-800 text-gray-200 p-3 rounded-2xl rounded-tl-none text-sm leading-relaxed border border-white/5">
                    Excellent choice. We specialize in event automation. Would you like to schedule a consultation?
                  </div>
                  <span className="text-[10px] text-gray-600 mt-1 ml-1">Just now</span>
                </div>
              </div>

              {/* Fake Input Area */}
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
                <p className="text-[10px] text-center text-gray-600 mt-2">
                  * This is a preview. Your bot will live here.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white text-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">READY TO DEPLOY?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking brands using EMRG Bot Services to redefine customer interaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-black text-white font-bold text-sm tracking-widest hover:bg-neutral-800 transition-colors w-full sm:w-auto">
              CONTACT SALES
            </button>
            <button className="px-8 py-4 border-2 border-black text-black font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors w-full sm:w-auto">
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-gray-500 py-12 px-6 border-t border-white/10">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 tracking-tighter">
              EMRG<span className="text-red-600">.</span>BOTS
            </div>
            <p className="max-w-xs text-sm">
              A division of EMRG Media. Providing elite automation solutions for the modern web.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Web Chatbots</li>
              <li className="hover:text-white cursor-pointer">WhatsApp Integration</li>
              <li className="hover:text-white cursor-pointer">Lead Gen Automation</li>
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
    </div>
  );
};

// Component for Service Cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-8 rounded-none border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
    <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 group-hover:border-red-600/50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

export default LandingPage;
