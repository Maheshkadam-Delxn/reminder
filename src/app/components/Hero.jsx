"use client";
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Bell, 
  Shield, 
  FileText, 
  Clock, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Zap,
  Target,
  Award
} from 'lucide-react';
import Link from 'next/link';

const ComplianceLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <div 
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
        isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-6">
        <Icon className="w-12 h-12 text-yellow-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );

  const StepCard = ({ number, title, description, delay = 0 }) => (
    <div 
      className={`text-center transform transition-all duration-700 ${
        isVisible.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mx-auto w-20 h-20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
        <div className="relative bg-white rounded-full w-full h-full flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {number}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const BenefitCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <div 
      className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500 ${
        isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-12 h-12 text-purple-600 mb-6" />
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-purple-600 transition-colors"
        onClick={onClick}
      >
        <span className="font-semibold text-lg">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is CTE/CTO/CTEE/RCTO?",
      answer: "These are environmental compliance certificates: Consent to Establish (CTE), Consent to Operate (CTO), Combined Consent to Establish & Operate (CTEE), and Renewal of Consent to Operate (RCTO). Our system tracks all these critical compliance documents."
    },
    {
      question: "Who can use this system?",
      answer: "Any organization that needs to maintain environmental compliance - from small businesses to large enterprises. Industries like manufacturing, chemicals, pharmaceuticals, and construction find our system particularly valuable."
    },
    {
      question: "Can I customize reminder schedules?",
      answer: "Absolutely! You can set custom reminder intervals for each license type - whether you want alerts 90 days, 60 days, or 30 days before expiry. The system is fully customizable to your needs."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security with role-based access controls, encrypted data storage, and regular security audits to ensure your compliance documents are protected."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ComplianceTracker
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Benefits</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
            </div>

            <div className="hidden md:flex space-x-4">
                  <Link href="/login">
              <button className="px-6 py-2 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors">
                Login
              </button>
                  </Link>

              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-purple-600">Features</a>
              <a href="#benefits" className="block text-gray-700 hover:text-purple-600">Benefits</a>
              <a href="#faq" className="block text-gray-700 hover:text-purple-600">FAQ</a>
              <div className="flex space-x-4 pt-4">
                    <Link href="/login">

                <button className="flex-1 py-2 text-purple-600 border border-purple-600 rounded-full">Login</button>
                    </Link>

                <button className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Never Miss a 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
                Compliance Deadline
              </span>
              Again
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Track and manage your environmental and regulatory compliances effortlessly with real-time alerts and intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
                  <Link href="/login">

              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300">
                Login to Dashboard
              </button>
                      </Link>


            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-white/80">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-white/80">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={10} suffix="k+" />
                </div>
                <div className="text-white/80">Documents Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-white/80">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Smart Compliance Management
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our Compliance Reminder System helps organizations stay on top of mandatory environmental 
              licenses like CTE, CTO, CTEE, and RCTO. We ensure you never miss a renewal with automatic 
              alerts, intelligent document tracking, and a beautifully designed dashboard that makes 
              compliance management effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Powerful features designed to keep your organization compliant and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bell}
              title="Automated Reminders"
              description="Get intelligent notifications before important expiries with customizable alert timelines that adapt to your workflow."
              delay={0}
            />
            <FeatureCard
              icon={BarChart3}
              title="Visual Dashboard"
              description="Beautiful, intuitive dashboard with at-a-glance view of all compliance statuses, trends, and upcoming deadlines."
              delay={100}
            />
            <FeatureCard
              icon={FileText}
              title="Centralized Documents"
              description="Securely store and access all license details in one place with advanced search and organization capabilities."
              delay={200}
            />
            <FeatureCard
              icon={Calendar}
              title="Custom Alert Timelines"
              description="Set personalized reminder intervals for each license type - from 90 days to last-minute alerts."
              delay={300}
            />
            <FeatureCard
              icon={Shield}
              title="Secure Access"
              description="Enterprise-grade security with role-based access controls, ensuring your sensitive data stays protected."
              delay={400}
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Enable seamless collaboration across departments with shared workspaces and task assignment features."
              delay={500}
            />
          </div>
        </div>
      </section>

    

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your compliance management with measurable benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Target}
              title="Reduce Compliance Risk"
              description="Eliminate the risk of missed deadlines with proactive monitoring and intelligent alerts."
              delay={0}
            />
            <BenefitCard
              icon={Award}
              title="Avoid Penalty Fees"
              description="Save thousands in potential fines and penalties by staying ahead of all compliance requirements."
              delay={100}
            />
            <BenefitCard
              icon={Clock}
              title="Save Admin Time"
              description="Automate repetitive tasks and reduce manual tracking time by up to 80%."
              delay={200}
            />
            <BenefitCard
              icon={Zap}
              title="Peace of Mind"
              description="Sleep better knowing your compliance is being monitored 24/7 by intelligent automation."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our compliance system
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to stay compliant and stress-free?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join hundreds of organizations who trust us with their compliance management
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/login">

            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Login Now
            </button>
                </Link>

            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                ComplianceTracker
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making compliance management effortless for organizations worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ComplianceTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default ComplianceLandingPage;