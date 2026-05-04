import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Smartphone, MapPin, Phone, Send, Mail, ArrowLeft, ExternalLink, CheckCircle, Zap, MessageCircle, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- CONFIGURATION ---
const DEVELOPER = {
  name: "Jay Prakash",
  roll: "FULL STACK DEVLOPER",
  phone: "8457844495",
  email: "jayprakashbahalia5@gmail.com"
};

const STORE = {
  phone: "9876543210", 
  location: "DN Regalia cover cafe",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.354148419688!2d85.80436407592497!3d20.36836451014886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19096955555555%3A0x6b3068e64511d54b!2sDN%20Regalia%20Mall!5e0!3m2!1sen!2sin!4v1714286000000!5m2!1sen!2sin",
  shareUrl: "https://share.google/LtZ0aWmAPlNwfOjJ8"
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// --- REUSABLE COMPONENTS ---

const Navbar = () => (
  <nav className="glass sticky top-0 z-[100] px-8 py-5 flex justify-between items-center border-b border-gray-100/50">
    <Link to="/" className="flex items-center gap-2 font-black text-2xl text-blue-600 tracking-tighter hover:scale-105 transition-transform">
      <Smartphone size={32} strokeWidth={3} />
      <span>COVER CAFE.</span>
    </Link>
    <div className="flex gap-6 items-center text-gray-400">
      <Link to="/collections" className="font-bold text-[10px] uppercase tracking-[0.2em] hover:text-blue-600 transition">Collections</Link>
      <Link to="/contact" className="font-bold text-[10px] uppercase tracking-[0.2em] hover:text-blue-600 transition">Contact</Link>
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => window.open(`tel:${STORE.phone}`)}
        className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center gap-2"
      >
        <Phone size={16}/> <span className="hidden md:inline">Call Shop</span>
      </motion.button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-left">
      <div className="space-y-4">
        <h4 className="font-black text-xl tracking-tighter text-blue-600 italic">COVER CAFE.</h4>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Premium mobile protection and style, located inside DN Regalia.</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-gray-300">Developer</h4>
        <div className="space-y-1 text-gray-900">
          <p className="font-black text-lg">{DEVELOPER.name}</p>
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Roll: {DEVELOPER.roll}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-gray-300">Inquiries</h4>
        <div className="space-y-3 font-bold text-gray-600">
          <a href={`mailto:${DEVELOPER.email}`} className="flex items-center gap-3 text-sm hover:text-blue-600 transition">
            <Mail size={18}/> {DEVELOPER.email}
          </a>
          <a href={`tel:${DEVELOPER.phone}`} className="flex items-center gap-3 text-sm hover:text-blue-600 transition">
            <Phone size={18}/> +91 {DEVELOPER.phone}
          </a>
        </div>
      </div>
    </div>
    <div className="text-center border-t border-gray-50 pt-8">
      <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.8em]">© 2026 Developed by {DEVELOPER.name}</p>
    </div>
  </footer>
);

// --- PAGES ---

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const gallery = [
    { src: "/cases-1.jpeg", title: "Premium Style", span: "md:col-span-2 md:row-span-2" },
    { src: "/shop-1.jpeg", title: "Mall Interior" },
    { src: "/shop-2.jpeg", title: "Global Brands" },
    { src: "/shop-3.jpeg", title: "Luxury Setup", span: "md:col-span-2" },
    { src: "/shop-4.jpeg", title: "DN Square View" },
    { src: "/shop-5.jpeg", title: "Quality First" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="/shop-front.jpeg" className="w-full h-full object-cover" alt="DN Regalia Store" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap size={14}/> Visit us at DN Regalia
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black text-gray-950 leading-[0.85] tracking-tighter mb-8">
            REDEFINE <br/>YOUR <span className="text-blue-600 italic">PHONE.</span>
          </h1>
          <Link to="/collections">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center gap-4 mx-auto shadow-2xl">
              Explore Now <Layers size={18}/>
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {gallery.map((img, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn} custom={i} viewport={{ once: true }} className={`relative rounded-[2.5rem] overflow-hidden group border border-gray-100 shadow-sm ${img.span || ''}`}>
              <img src={img.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={img.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10 text-white">
                <p className="font-black uppercase tracking-widest text-xs">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const CollectionsPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#fcfcfc] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-8">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xs font-black tracking-[0.4em] text-blue-600 uppercase mb-4 text-left">Exclusive Hub</h2>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter text-left">
              DN Regalia's <br/> finest <span className="italic text-gray-400 font-serif text-6xl">Style.</span>
            </h1>
          </motion.div>
          <p className="text-gray-500 text-xl max-w-sm text-left">Visit our flagship store inside DN Regalia to experience luxury covers in person.</p>
          
          {/* NEW BUTTON ADDED HERE */}
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, x: 10 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 flex items-center gap-3"
            >
              Visit Store <ArrowRight size={18}/>
            </motion.button>
          </Link>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          <motion.div animate={{ y: [0, -20, 0], rotate: [-10, -12, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute z-20 w-[400px] aspect-video bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[12px] border-gray-900 rotate-[-10deg]">
            <img src="/shop-3.jpeg" className="w-full h-full object-cover opacity-80" alt="Mall" />
          </motion.div>
          <motion.div animate={{ y: [0, 30, 0], rotate: [15, 18, 15] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute z-30 -bottom-10 -left-10 w-[180px] h-[360px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-gray-900 rotate-[15deg] overflow-hidden">
             <img src="/cases-1.jpeg" className="w-full h-full object-cover" alt="Case" />
          </motion.div>
        </div>
      </div>
    </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="min-h-screen bg-white py-20 px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
      <div className="space-y-12 text-left">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 font-bold hover:text-blue-600 transition uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16}/> Back Home
        </Link>
        <div className="space-y-6">
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            FIND US AT <br/><span className="text-blue-600 underline text-7xl font-outline-2">DN REGALIA.</span>
          </h2>
          <div className="space-y-4 text-gray-600 font-medium">
             <div className="flex items-center gap-4 text-xl">
               <MapPin size={24} className="text-blue-600" /> {STORE.location}
             </div>
             <div className="flex items-center gap-4 text-xl">
               <Phone size={24} className="text-blue-600" /> +91 {STORE.phone}
             </div>
          </div>
        </div>

        <button onClick={() => window.open(STORE.shareUrl)} className="bg-blue-600 px-12 py-5 rounded-2xl text-xl font-black text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition flex items-center justify-center gap-3 uppercase tracking-tighter">
          Navigate to Mall <Send size={24} />
        </button>
      </div>

      <div className="h-[550px] md:h-auto rounded-[3.5rem] overflow-hidden border-8 border-gray-50 shadow-2xl relative">
        <iframe title="DN Regalia Map" src={STORE.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-1000"></iframe>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-600 selection:text-white font-inter">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}