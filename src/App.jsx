import React, { useEffect, useState, useRef } from "react";
import {
  TrendingUp, Target, CheckCircle2, ArrowRight, BarChart3,
  Shield, Sparkles, ChevronDown, MessageCircle, Phone,
  MapPin, Star, Search, Eye,
} from "lucide-react";
import image1 from './assets/410210205_1274558539888297_3934450238889979054_n.jpg.jpeg';
import image2 from './assets/dc52b7_dfa0bfed9f8646a59211e17ccbd96e76~mv2.avif';
import image3 from './assets/images (2).jpg.jpeg';
import image4 from './assets/KRS-logo.webp';
import image5 from './assets/Launspace-logo-306x70-Red-rc6hnnzaamwjo6vc6hahpiz7f2en4n0lz9jikyns3k.png';
import image6 from './assets/Logo-Oviyam-1-1024x398.webp';
import Raushan from './assets/Raushan_saxena-removebg-preview.png'

import bg1 from './assets/1.png';
import bg2 from './assets/2.png';
import bg3 from './assets/3.png';
import bg4 from './assets/4.png';
import bg5 from './assets/5.png';
import bg6 from './assets/6.png';
import bg7 from './assets/7.png';
import bg8 from './assets/8.png';
import Before from "./assets/before-after.png"

/* ─────────────────────────────── DATA ─────────────────────────────── */
const problems = [
  { icon: "📍", title: "Not Appearing in Google Maps", description: "Customers search nearby but your business doesn't show up in the local 3-pack" },
  { icon: "⭐", title: "Low Star Rating & Few Reviews", description: "Poor reviews or no reviews making customers choose competitors over you" },
  { icon: "👻", title: "Incomplete GMB Profile", description: "Missing photos, hours, services — your profile looks abandoned and untrustworthy" },
  { icon: "📉", title: "Low Calls & Direction Requests", description: "Profile exists but generates almost zero phone calls or footfall" },
  { icon: "🔍", title: "Wrong Keywords & Categories", description: "Appearing for irrelevant searches instead of the high-intent ones that convert" },
  { icon: "🗺️", title: "Competitors Outranking You", description: "Rivals with weaker businesses rank above you simply because they've optimised better" },
];

const services = [
  { icon: <Target className="w-8 h-8" />, title: "Profile Setup & Optimisation", description: "Complete GMB profile buildout — categories, service areas, attributes, business description and keyword-rich copy that ranks" },
  { icon: <Star className="w-8 h-8" />, title: "Review Generation Strategy", description: "Systems to consistently collect 5-star reviews from happy customers through follow-up templates and WhatsApp flows" },
  { icon: <MapPin className="w-8 h-8" />, title: "Local SEO & Map Ranking", description: "Citation building, NAP consistency, geo-targeted keywords and proximity signals to push you into the Google 3-pack" },
  { icon: <Eye className="w-8 h-8" />, title: "GMB Posts & Content", description: "Weekly posts, offers, and updates to keep your profile active — Google rewards fresh, engaging content with higher visibility" },
  { icon: <BarChart3 className="w-8 h-8" />, title: "Insights & Performance Tracking", description: "Monthly reports on views, calls, direction requests and search queries so you see exactly how your profile is growing" },
  { icon: <Shield className="w-8 h-8" />, title: "Competitor Analysis & Strategy", description: "We analyse what top-ranking competitors are doing and reverse-engineer their strategy to put you ahead of them" },
];

const process = [
  { number: "01", title: "Audit & Research", description: "Complete audit of your current GMB profile, competitor analysis, keyword research and local ranking opportunities", icon: <Search className="w-6 h-6" /> },
  { number: "02", title: "Profile Optimisation", description: "Full profile buildout — description, categories, photos, Q&A, services, attributes and everything Google looks for", icon: <Target className="w-6 h-6" /> },
  { number: "03", title: "Review & Post System", description: "Review collection system setup + weekly GMB posts with offers, updates and local keywords to keep profile active", icon: <Star className="w-6 h-6" /> },
  { number: "04", title: "Rank & Grow", description: "Citation building, local link signals and ongoing optimisation to push your listing up in Maps rankings month over month", icon: <TrendingUp className="w-6 h-6" /> },
];

const animatedStats = [
  { value: 195, suffix: "+", label: "Happy Clients" },
  { value: 65, suffix: "%", label: "More Calls on Average" },
  { value: 11, suffix: "", label: "States Pan-India" },
];

const clientLogos = [
  { name: "Yelahanka Branch", initial: image1 },
  { name: "Arttitude Tattoo", initial: image2 },
  { name: "Arunuj Film", initial: image3 },
  { name: "KRS", initial: image4 },
  { name: "Launspace", initial: image5 },
  { name: "Oviyam", initial: image6 },
];

const portfolioProfiles = [
  {
    icon: "🎨",
    name: "Oviyam Tanjore Art Gallery",
    cat: "Art & Gallery",
    rank: "#1",
    reviews: "100+",
    calls: "3x",
    timeframe: "60 Days",
    link: "https://share.google/q3kSaxizlbPimtTAT",
    bg: bg1,
    beforeRank: "#18",
    beforeReviews: "4",
    color: "#f0c95e",
    city: "Chennai, TN",
  },
  {
    icon: "💇",
    name: "Rudra Hair Solutions",
    cat: "Salon",
    rank: "#2",
    reviews: "80+",
    calls: "2.5x",
    timeframe: "45 Days",
    link: "https://share.google/9IJfmTbkBqFUE6GEs",
    bg: bg2,
    beforeRank: "Not Ranked",
    beforeReviews: "6",
    color: "#00d47d",
    city: "Delhi, NCR",
  },
  {
    icon: "🎭",
    name: "Arttitude Tattoo & Piercing",
    cat: "Tattoo Studio",
    rank: "#1",
    reviews: "120+",
    calls: "4x",
    timeframe: "90 Days",
    link: "https://share.google/G7YI9IAIQJQl7ivTH",
    bg: bg3,
    beforeRank: "#12",
    beforeReviews: "11",
    color: "#e05555",
    city: "Bangalore, KA",
  },
  {
    icon: "👔",
    name: "Launspace Dry Cleaner",
    cat: "Dry Cleaning",
    rank: "#1",
    reviews: "200+",
    calls: "3x",
    timeframe: "120 Days",
    link: "https://share.google/HxmcDsipjU1dj0xOk",
    bg: bg7,
    beforeRank: "#9",
    beforeReviews: "8",
    color: "#00b8d4",
    city: "Hyderabad, TS",
  },
  {
    icon: "💅",
    name: "3D Nail Art Vista Salon",
    cat: "Nail Salon",
    rank: "#2",
    reviews: "90+",
    calls: "3x",
    timeframe: "75 Days",
    link: "https://share.google/Z9tEVoZcqKmcDMfaw",
    bg: bg5,
    beforeRank: "#15",
    beforeReviews: "3",
    color: "#d47dce",
    city: "Mumbai, MH",
  },
  {
    icon: "💎",
    name: "KRS Jewels",
    cat: "Jewelry Store",
    rank: "#3",
    reviews: "60+",
    calls: "2x",
    timeframe: "60 Days",
    link: "https://share.google/ZZIDzaNFAY4dW3oZa",
    bg: bg4,
    beforeRank: "#20+",
    beforeReviews: "2",
    color: "#f0c95e",
    city: "Jaipur, RJ",
  },
  {
    icon: "🕉️",
    name: "Esankalpam",
    cat: "Religious Services",
    rank: "#1",
    reviews: "50+",
    calls: "Expert",
    timeframe: "Our Own",
    link: "https://maps.app.goo.gl/Zri43UrYQgZ6dn947",
    bg: bg8,
    beforeRank: "Not Listed",
    beforeReviews: "0",
    color: "#f0a040",
    city: "Varanasi, UP",
  },
  {
    icon: "🎬",
    name: "Arunuj Filmmaking School",
    cat: "Film Education",
    rank: "#2",
    reviews: "70+",
    calls: "2.5x",
    timeframe: "45 Days",
    link: "https://share.google/vudVYKU7Ku0NNwFmH",
    bg: bg6,
    beforeRank: "#11",
    beforeReviews: "5",
    color: "#7db8f0",
    city: "Delhi, NCR",
  }
];

const mapPins = [
  { left: "14%", top: "34%", short: "Oviyam", rank: "#1", delay: 0 },
  { left: "28%", top: "58%", short: "Rudra", rank: "#2", delay: 0.4 },
  { left: "44%", top: "28%", short: "Arttitude", rank: "#1", delay: 0.8 },
  { left: "58%", top: "62%", short: "Launspace", rank: "#1", delay: 1.2 },
  { left: "72%", top: "36%", short: "Esankalpam", rank: "#2", delay: 1.6 },
  { left: "84%", top: "54%", short: "Arunuj", rank: "#3", delay: 2.0 },
];

const caseStudies = [
  {
    category: "Healthcare", business: "Delhi Dental Clinic", location: "Dwarka, New Delhi",
    before: { rank: "#18", reviews: "7 reviews", calls: "3-4/month", visibility: "Low", profileScore: "32%" },
    after: { rank: "#1", reviews: "148 reviews", calls: "60+/month", visibility: "Top 3-Pack", profileScore: "98%" },
    timeframe: "90 Days", result: "18x more patient enquiries", icon: "🦷",
  },
  {
    category: "Salon & Spa", business: "Glamour Salon", location: "Lajpat Nagar, Delhi",
    before: { rank: "Not Ranked", reviews: "2 reviews", calls: "0-1/month", visibility: "Invisible", profileScore: "18%" },
    after: { rank: "#2", reviews: "89 reviews", calls: "35+/month", visibility: "Top 3-Pack", profileScore: "96%" },
    timeframe: "60 Days", result: "Fully booked weekends", icon: "💇",
  },
  {
    category: "Restaurant", business: "Spice Garden", location: "Connaught Place, Delhi",
    before: { rank: "#11", reviews: "14 reviews", calls: "8/month", visibility: "Low", profileScore: "45%" },
    after: { rank: "#1", reviews: "312 reviews", calls: "90+/month", visibility: "Top 3-Pack", profileScore: "99%" },
    timeframe: "120 Days", result: "3x footfall increase", icon: "🍛",
  },
];

const testimonials = [
  { name: "Dr. Arvind Mehta", business: "MediCare Clinic, Rohini", rating: 5, initial: "AM", tag: "Healthcare", text: "Before Raushan's team worked on our GMB, we were invisible on Google Maps. Within 3 months, we were in the top 3 and our patient calls tripled. Absolutely game-changing for our practice." },
  { name: "Priya Sharma", business: "Glam Studio, Lajpat Nagar", rating: 5, initial: "PS", tag: "Salon", text: "I was sceptical at first but the results speak for themselves. We went from 6 reviews to 94 in just 2 months. My weekends are now completely booked. Best investment for my salon." },
  { name: "Rajesh Gupta", business: "Gupta & Sons Realty, Noida", rating: 5, initial: "RG", tag: "Real Estate", text: "Our GMB profile was a mess — no photos, wrong address, zero reviews. After the optimisation, we started ranking for 'property dealer near me' and the leads started flooding in." },
  { name: "Sunita Agarwal", business: "Spice Corner, CP", rating: 5, initial: "SA", tag: "Restaurant", text: "Went from page 3 to the Google 3-Pack in 6 weeks. The WhatsApp review system they set up was brilliant — customers actually leave reviews now. Revenue up 40% since we started." },
  { name: "Mohit Verma", business: "QuickFix Plumbing, Gurgaon", rating: 5, initial: "MV", tag: "Local Service", text: "As a local service business, Google Maps is everything. Raushan's team knew exactly what signals to optimise. I'm now getting 4–5 job enquiries daily from Maps alone." },
  { name: "Ananya Singh", business: "Bright Minds Academy, Janakpuri", rating: 5, initial: "AS", tag: "Education", text: "Our school needed more local visibility. Within 90 days, we were ranking #1 for 'coaching classes near me' and admissions this year were the highest we've ever had." },
];

const results = [
  { value: "3x", label: "More Profile Views", metric: "Average visibility increase" },
  { value: "60%", label: "More Phone Calls", metric: "From GMB listing" },
  { value: "200+", label: "Profiles Optimised", metric: "Across multiple cities" },
];

const faqs = [
  { question: "How long does it take to rank on Google Maps?", answer: "Most businesses start seeing movement in local rankings within 4–8 weeks of full optimisation. Competitive markets may take 3–4 months. Factors like review count, citation strength and competitor activity all play a role." },
  { question: "Do I need a physical address to use GMB?", answer: "Yes — Google My Business requires a verified physical location. Service-area businesses (like plumbers or consultants) can hide their address but must serve a defined area. We help with the best setup for your business type." },
  { question: "Can you get me fake reviews?", answer: "No — and we strongly advise against it. Fake reviews violate Google's policies and can get your listing permanently suspended. Our review generation system helps you collect genuine 5-star reviews from real customers consistently." },
  { question: "What if my GMB listing was suspended?", answer: "We have experience handling GMB suspensions and reinstatement requests. We'll audit the reason, clean up any violations, and submit a reinstatement request with the correct documentation." },
  { question: "Is GMB optimisation a one-time thing?", answer: "No — GMB is an ongoing channel. Regular posts, fresh photos, review responses and citation building are all needed to maintain and improve rankings. We offer monthly management packages for continued results." },
];

/* ─────────────────────── SOURCE DETECTION ─────────────────────── */
function detectSource() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    if (utmSource) return utmSource.toLowerCase();
    const sourceParam = urlParams.get("source");
    if (sourceParam) return sourceParam.toLowerCase();
    if (document.referrer) {
      const referrerHost = new URL(document.referrer).hostname.replace("www.", "");
      if (referrerHost) return referrerHost;
    }
    if (window.location.hostname && window.location.hostname !== "localhost") {
      return window.location.hostname.replace("www.", "");
    }
    return "direct";
  } catch {
    return "direct";
  }
}

/* ─────────────────────── STYLES ─────────────────────── */
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --g:     #006039;
    --g2:    #008a52;
    --g3:    #00b86e;
    --g4:    #00d47d;
    --gold:  #c9a84c;
    --gold2: #f0c95e;
    --dark:  #010d08;
    --dark2: #031a0f;
    --dark3: #052918;
    --border: rgba(0,180,110,0.18);
  }

  html { scroll-behavior: smooth; }
  body { font-family:'DM Sans',sans-serif; background:var(--dark); color:#e8f5ee; overflow-x:hidden; }
  body::before {
    content:''; position:fixed; inset:0; z-index:0; pointer-events:none; opacity:0.025;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size:200px;
  }
  ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:var(--dark);} ::-webkit-scrollbar-thumb{background:var(--g2);border-radius:4px;}

  .top-bar { background:linear-gradient(90deg,#7c1a1a,#a02020,#7c1a1a); background-size:200% 100%; animation:barShimmer 3s ease-in-out infinite; padding:10px 24px; text-align:center; position:relative; z-index:100; display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap; }
  @keyframes barShimmer { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
  .top-bar-pill { background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); border-radius:99px; padding:3px 12px; font-size:0.75rem; font-weight:500; color:#ffe8e8; animation:pillPulse 1.5s ease-in-out infinite; flex-shrink:0; }
  @keyframes pillPulse { 0%,100%{opacity:1;} 50%{opacity:0.7;} }
  .top-bar-text { font-family:'Poppins',sans-serif; font-weight:500; font-size:0.82rem; color:#fff; letter-spacing:0.02em; }
  .top-bar-cta { background:#fff; color:#a02020; padding:4px 16px; border-radius:99px; font-size:0.78rem; font-weight:600; cursor:pointer; text-decoration:none; border:none; transition:transform 0.2s; white-space:nowrap; flex-shrink:0; }
  .top-bar-cta:hover { transform:scale(1.05); }

  .text-grad      { background:linear-gradient(135deg,var(--g3) 0%,var(--gold2) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .text-grad-gold { background:linear-gradient(135deg,var(--gold) 0%,var(--gold2) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .text-grad-red  { background:linear-gradient(135deg,#e05555 0%,#f0a040 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .glow-line { width:80px; height:3px; background:linear-gradient(90deg,var(--g3),var(--gold2)); border-radius:99px; box-shadow:0 0 12px var(--g3); }
  .badge { display:inline-flex; align-items:center; gap:8px; background:rgba(0,96,57,0.2); border:1px solid rgba(0,180,110,0.3); backdrop-filter:blur(12px); padding:8px 20px; border-radius:99px; font-size:13px; font-weight:500; letter-spacing:0.04em; color:var(--g4); }

  .gmb-section { padding:100px 24px; }
  .gmb-inner   { margin:0 auto; }
  .section-label { font-family:'Poppins',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--g3); margin-bottom:16px; }
  .section-title { font-family:'Poppins',sans-serif; font-size:clamp(2rem,4vw,2.2rem); font-weight:600; line-height:1.1; letter-spacing:-0.02em; color:#fff; margin-bottom:20px; }
  .section-desc  { color:#8ab09a; font-size:0.95rem; line-height:1.75; }

  .gmb-hero { position:relative; min-height:100vh; display:flex; align-items:center; overflow:hidden; background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,140,70,0.18),transparent 70%),radial-gradient(ellipse 60% 80% at 80% 80%,rgba(201,168,76,0.08),transparent 60%),var(--dark); }
  .gmb-hero-grid { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(0,180,110,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,110,0.06) 1px,transparent 1px); background-size:60px 60px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent); animation:gridScroll 20s linear infinite; }
  @keyframes gridScroll{from{background-position:0 0;}to{background-position:60px 60px;}}
  .orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;animation:orbFloat 8s ease-in-out infinite;}
  .orb1{width:500px;height:500px;background:radial-gradient(circle,rgba(0,140,70,0.25),transparent 70%);top:-10%;left:-10%;}
  .orb2{width:400px;height:400px;background:radial-gradient(circle,rgba(201,168,76,0.15),transparent 70%);bottom:0;right:-5%;animation-delay:3s;}
  .orb3{width:300px;height:300px;background:radial-gradient(circle,rgba(0,96,57,0.3),transparent 70%);top:40%;left:40%;animation-delay:1.5s;}
  @keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-20px) scale(1.05);}66%{transform:translate(-20px,15px) scale(0.97);}}
  .aura-ring{position:absolute;border-radius:50%;border:1px solid rgba(0,180,110,0.3);pointer-events:none;}
  .ring1{width:400px;height:400px;left:-100px;top:100px;animation:ringPulse 4s ease-out infinite;}
  .ring2{width:600px;height:600px;left:-200px;top:0;animation:ringPulse 4s ease-out 1.3s infinite;}
  .ring3{width:800px;height:800px;left:-300px;top:-100px;animation:ringPulse 4s ease-out 2.6s infinite;}
  @keyframes ringPulse{0%{transform:scale(1);opacity:0.4;}100%{transform:scale(1.5);opacity:0;}}
  .gmb-hero-inner{position:relative;z-index:2;max-width:1400px;margin:0 auto;padding:28px 24px;width:100%;}
  .hero-grid{display:grid;gap:32px;align-items:start;}
  @media(min-width:900px){.hero-grid{grid-template-columns:1.2fr 1fr 1fr;}}
  .gmb-hero h1{font-family:'Poppins',sans-serif;font-size:clamp(2.8rem,3.5vw,5rem);font-weight:900;line-height:1.05;letter-spacing:-0.03em;color:#fff;margin:24px 0;}
  .hero-sub{font-size:1.1rem;color:#a3c4b0;line-height:1.7;margin-bottom:24px;}
  .trust-row{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px;}
  .trust-pill-stat{background:rgba(0,96,57,0.15);border:1px solid rgba(0,180,110,0.2);backdrop-filter:blur(8px);border-radius:16px;padding:12px 20px;text-align:center;}
  .trust-pill-num{font-family:'Poppins',sans-serif;font-weight:800;font-size:1.4rem;background:linear-gradient(135deg,var(--g4),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;}
  .trust-pill-label{font-size:0.72rem;color:#8ab09a;}

  .btn-primary{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--g) 0%,var(--g2) 60%,var(--g3) 100%);color:#fff;padding:16px 36px;border-radius:99px;font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;border:none;cursor:pointer;text-decoration:none;box-shadow:0 0 30px rgba(0,140,70,0.4),inset 0 1px 0 rgba(255,255,255,0.15);transition:transform 0.2s,box-shadow 0.2s;}
  .btn-primary:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 0 50px rgba(0,180,110,0.6);}
  .btn-whatsapp{display:inline-flex;align-items:center;gap:10px;background:rgba(37,211,102,0.12);border:1.5px solid rgba(37,211,102,0.35);color:#25d366;padding:16px 36px;border-radius:99px;font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;cursor:pointer;text-decoration:none;transition:background 0.2s,border-color 0.2s,transform 0.2s;}
  .btn-whatsapp:hover{background:rgba(37,211,102,0.2);border-color:rgba(37,211,102,0.6);transform:translateY(-2px);}

  .form-card{background:rgba(0,30,15,0.7);border:1px solid rgba(0,180,110,0.22);backdrop-filter:blur(24px);border-radius:28px;padding:28px 28px;box-shadow:0 32px 80px rgba(0,0,0,0.4),0 0 0 1px rgba(0,180,110,0.08);text-align:left;}
  .form-title{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.7rem;margin-bottom:6px;}
  .form-sub{color:#8ab09a;font-size:0.88rem;margin-bottom:28px;}
  .form-group{margin-bottom:16px;}
  .form-label{display:block;font-size:0.8rem;font-weight:500;color:#a3c4b0;margin-bottom:6px;letter-spacing:0.04em;}
  .form-input,.form-select{width:100%;background:rgba(0,96,57,0.08);border:1px solid rgba(0,180,110,0.18);border-radius:14px;padding:13px 16px;color:#e8f5ee;font-family:'DM Sans',sans-serif;font-size:0.92rem;outline:none;transition:border-color 0.2s,box-shadow 0.2s;appearance:none;}
  .form-input::placeholder{color:rgba(163,196,176,0.4);}
  .form-input:focus,.form-select:focus{border-color:var(--g3);box-shadow:0 0 0 3px rgba(0,180,110,0.12);}
  .form-select option{background:#031a0f;color:#e8f5ee;}
  .form-row{display:grid;gap:16px;}
  @media(min-width:500px){.form-row{grid-template-columns:1fr 1fr;}}
  .btn-form-submit{width:100%;margin-top:8px;background:linear-gradient(135deg,var(--g) 0%,var(--g2) 60%,var(--g3) 100%);color:#fff;padding:16px;border-radius:14px;font-family:'Poppins',sans-serif;font-weight:600;font-size:1.05rem;border:none;cursor:pointer;box-shadow:0 0 30px rgba(0,140,70,0.4);transition:transform 0.2s,box-shadow 0.2s,opacity 0.2s;}
  .btn-form-submit:hover:not(:disabled){transform:translateY(-2px) scale(1.01);box-shadow:0 0 50px rgba(0,180,110,0.5);}
  .btn-form-submit:disabled{opacity:0.7;cursor:not-allowed;}
  .form-privacy{font-size:0.75rem;color:rgba(163,196,176,0.5);text-align:center;margin-top:12px;}
  .form-error{background:rgba(220,60,60,0.1);border:1px solid rgba(220,60,60,0.25);border-radius:12px;padding:12px 16px;margin-bottom:16px;color:#f08080;font-size:0.85rem;line-height:1.5;}

  .glass-card{background:rgba(0,96,57,0.07);border:1px solid var(--border);border-radius:28px;transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s;}
  .glass-card:hover{transform:translateY(-6px);border-color:rgba(0,212,125,0.35);box-shadow:0 20px 60px rgba(0,96,57,0.25);}
  .prob-card{background:rgba(180,30,30,0.06);border:1px solid rgba(220,60,60,0.15);border-radius:24px;padding:32px 24px;transition:transform 0.3s,border-color 0.3s;}
  .prob-card:hover{transform:translateY(-4px);border-color:rgba(220,60,60,0.35);}
  .result-card{background:rgba(0,96,57,0.07);border:1px solid var(--border);border-radius:28px;padding:48px 28px;text-align:center;transition:transform 0.35s cubic-bezier(.22,.68,0,1.2),border-color 0.3s,box-shadow 0.3s;}
  .result-card:hover{transform:translateY(-8px) scale(1.03);border-color:rgba(0,212,125,0.4);box-shadow:0 24px 60px rgba(0,96,57,0.3);}
  .result-val{font-family:'Poppins',sans-serif;font-weight:700;font-size:clamp(3rem,6vw,4.5rem);line-height:1;background:linear-gradient(135deg,var(--g4),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;margin-bottom:8px;}
  .proc-card{position:relative;overflow:hidden;background:rgba(0,96,57,0.07);border:1px solid var(--border);border-radius:28px;padding:36px 28px;transition:transform 0.35s,border-color 0.3s,box-shadow 0.3s;}
  .proc-card:hover{transform:translateY(-6px);border-color:rgba(0,212,125,0.4);box-shadow:0 20px 50px rgba(0,96,57,0.2);}
  .proc-num{font-family:'Poppins',sans-serif;font-weight:900;font-size:5rem;color:rgba(0,180,110,0.1);line-height:1;margin-bottom:12px;transition:color 0.3s;}
  .proc-card:hover .proc-num{color:rgba(0,180,110,0.2);}

  .icon-wrap{width:50px;height:50px;border-radius:20px;background:linear-gradient(135deg,var(--g),var(--g2));display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:20px;box-shadow:0 0 24px rgba(0,140,70,0.35);}
  .icon-wrap-sm{width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,rgba(0,96,57,0.3),rgba(0,140,70,0.2));border:1px solid rgba(0,180,110,0.2);display:flex;align-items:center;justify-content:center;color:var(--g3);margin-bottom:16px;transition:transform 0.3s;}
  .glass-card:hover .icon-wrap-sm{transform:scale(1.1);}

  .grid-2{display:grid;gap:24px;} @media(min-width:900px){.grid-2{grid-template-columns:1fr 1fr;}}
  .grid-3{display:grid;gap:24px;} @media(min-width:600px){.grid-3{grid-template-columns:repeat(2,1fr);}} @media(min-width:900px){.grid-3{grid-template-columns:repeat(3,1fr);}}
  .grid-4{display:grid;gap:24px;} @media(min-width:600px){.grid-4{grid-template-columns:repeat(2,1fr);}} @media(min-width:900px){.grid-4{grid-template-columns:repeat(4,1fr);}}

  .gmb-preview{background:rgba(0,20,10,0.65);border:1px solid rgba(0,180,110,0.2);border-radius:20px;padding:24px;margin-top:14px;text-align:left;}
  .gp-label{font-size:0.72rem;color:var(--g3);font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;}
  .gp-card{background:rgba(0,40,20,0.5);border:1px solid rgba(0,180,110,0.15);border-radius:14px;padding:16px 18px;}
  .gp-biz{font-family:'Poppins',sans-serif;font-weight:500;font-size:1rem;color:#fff;margin-bottom:4px;}
  .gp-cat{font-size:0.8rem;color:#8ab09a;margin-bottom:8px;}
  .gp-stars{display:flex;align-items:center;gap:6px;margin-bottom:8px;}
  .gp-star{color:var(--gold2);font-size:0.85rem;}
  .gp-rating{font-size:0.8rem;color:#a3c4b0;font-weight:500;}
  .gp-actions{display:flex;gap:8px;margin-top:12px;}
  .gp-btn{flex:1;padding:8px;border-radius:10px;text-align:center;font-size:0.75rem;font-weight:700;cursor:pointer;border:none;}
  .gp-btn-call{background:rgba(0,180,110,0.2);color:var(--g4);}
  .gp-btn-dir{background:rgba(201,168,76,0.15);color:var(--gold2);}
  .gp-btn-web{background:rgba(255,255,255,0.07);color:#e8f5ee;}
  .gp-pack-label{font-size:0.7rem;font-weight:600;letter-spacing:0.1em;color:rgba(163,196,176,0.4);text-transform:uppercase;margin-bottom:10px;}
  .gp-rank-item{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,180,110,0.08);}
  .gp-rank-item:last-child{border-bottom:none;}
  .gp-rank-num{width:22px;height:22px;border-radius:50%;background:rgba(0,96,57,0.4);border:1px solid rgba(0,180,110,0.3);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:800;color:var(--g3);flex-shrink:0;}
  .gp-rank-you{background:rgba(0,180,110,0.25);border-color:var(--g3);}
  .gp-rank-name{font-size:0.82rem;font-weight:500;color:#e8f5ee;}
  .gp-rank-stars{font-size:0.72rem;color:#8ab09a;margin-left:auto;}

  .stats-section{padding:40px 0px;background:linear-gradient(135deg,rgba(0,60,35,0.4),rgba(0,30,15,0.6));border-top:1px solid rgba(0,180,110,0.12);border-bottom:1px solid rgba(0,180,110,0.12);position:relative;overflow:hidden;}
  .stats-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(0,180,110,0.06),transparent 70%);}
  .stats-inner{margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:0;position:relative;z-index:1;}
  .stat-block{text-align:center;padding:0 32px;}
  .stat-num{font-family:'Poppins',sans-serif;font-weight:700;font-size:clamp(3rem,6vw,3rem);line-height:1;background:linear-gradient(135deg,var(--g4),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;margin-bottom:8px;}
  .stat-label{font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;color:#a3c4b0;}

  .logos-section{padding:48px 24px 64px;background:var(--dark2);overflow:hidden;}
  .logos-label{text-align:center;font-size:0.78rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(163,196,176,0.4);margin-bottom:32px;}
  .logos-track-wrapper{overflow:hidden;position:relative;}
  .logos-track-wrapper::before,.logos-track-wrapper::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
  .logos-track-wrapper::before{left:0;background:linear-gradient(90deg,var(--dark2),transparent);}
  .logos-track-wrapper::after{right:0;background:linear-gradient(-90deg,var(--dark2),transparent);}
  .logos-track{display:flex;gap:20px;animation:logoScroll 28s linear infinite;width:max-content;}
  .logos-track:hover{animation-play-state:paused;}
  @keyframes logoScroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
  .logo-chip{display:flex;align-items:center;gap:12px;background:rgba(0,96,57,0.07);border:1px solid rgba(0,180,110,0.15);border-radius:16px;padding:14px 24px;flex-shrink:0;white-space:nowrap;transition:border-color 0.3s;}
  .logo-chip:hover{border-color:rgba(0,180,110,0.4);}
  .logo-avatar{width:50px;height:50px;border-radius:10px;object-fit:contain;}
  .logo-name{font-weight:500;font-size:0.85rem;color:#c4ddd1;}

  /* ══ PORTFOLIO SECTION ══ */
  .ps-section{padding:88px 24px;background:var(--dark);position:relative;overflow:hidden;}
  .ps-bg-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
  .ps-bg-orb1{width:600px;height:600px;background:rgba(0,120,60,0.12);top:-150px;left:-200px;}
  .ps-bg-orb2{width:500px;height:500px;background:rgba(201,168,76,0.07);bottom:-100px;right:-150px;}
  .ps-grid-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(0,180,110,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,110,0.04) 1px,transparent 1px);background-size:52px 52px;mask-image:radial-gradient(ellipse 90% 90% at 50% 50%,black,transparent);}
  .ps-top{display:flex;align-items:flex-end;justify-content:center;flex-wrap:wrap;gap:24px;margin-bottom:72px;text-align:center;}
  .ps-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:14px;justify-content:center;}
  .ps-ey-line{width:36px;height:2px;background:linear-gradient(90deg,#00d47d,#f0c95e);border-radius:99px;}
  .ps-ey-text{font-family:'Poppins',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--g4);}
  .ps-heading{font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2rem,4vw,3.2rem);line-height:1.05;letter-spacing:-0.025em;color:#fff;}
  .ps-sub{font-size:.88rem;color:#8ab09a;line-height:1.65;margin-top:10px;}

  /* Map Strip */
  .ps-map-canvas{width:100%;height:180px;border-radius:24px;border:1px solid rgba(0,180,110,0.18);background:#020f07;position:relative;overflow:hidden;margin-bottom:72px;}
  .ps-map-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,180,110,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,110,0.07) 1px,transparent 1px);background-size:32px 32px;}
  .ps-map-road{position:absolute;background:rgba(0,140,70,0.15);border-radius:2px;}
  .ps-map-label{position:absolute;bottom:14px;right:16px;font-size:.7rem;font-weight:700;font-family:'Poppins',sans-serif;color:rgba(0,212,125,0.5);letter-spacing:.1em;text-transform:uppercase;}
  .pin-wrap{position:absolute;display:flex;flex-direction:column;align-items:center;cursor:pointer;transform:translateX(-50%);transition:transform .25s;}
  .pin-wrap:hover{transform:translateX(-50%) translateY(-6px);}
  .pin-bubble{background:#010d08;border:1.5px solid rgba(0,212,125,0.6);border-radius:14px;padding:7px 13px;white-space:nowrap;box-shadow:0 0 20px rgba(0,212,125,0.25);}
  .pin-biz{font-family:'Poppins',sans-serif;font-weight:600;font-size:.7rem;color:#fff;margin-bottom:2px;}
  .pin-rank{font-size:.63rem;color:var(--g4);font-weight:600;}
  .pin-needle{width:2px;background:linear-gradient(180deg,rgba(0,212,125,0.6),transparent);margin-top:-2px;}
  .pin-dot{width:13px;height:13px;border-radius:50%;background:var(--g4);border:2px solid #fff;box-shadow:0 0 10px rgba(0,212,125,0.7);}
  .pin-pulse{position:absolute;border-radius:50%;border:1px solid rgba(0,212,125,0.25);pointer-events:none;animation:pinPulse 2.5s ease-out infinite;}
  @keyframes pinPulse{0%{transform:translate(-50%,-50%) scale(1);opacity:.7;}100%{transform:translate(-50%,-50%) scale(3.5);opacity:0;}}

  /* ══ PORTFOLIO CARD — FULLY REDESIGNED ══ */
  .pf-grid{display:grid;gap:24px;grid-template-columns:1fr;}
  @media(min-width:640px){.pf-grid{grid-template-columns:repeat(2,1fr);}}
  @media(min-width:1024px){.pf-grid{grid-template-columns:repeat(4,1fr);}}

  .pf-card{
    position:relative;
    border-radius:20px;
    overflow:hidden;
    border:1px solid rgba(0,180,110,0.2);
    cursor:pointer;
    text-decoration:none;
    display:flex;
    flex-direction:column;
    height:420px;
    transition:transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.4s;
    background:#020f07;
  }
  .pf-card:hover{
    transform:translateY(-10px) scale(1.02);
    border-color:rgba(0,212,125,0.55);
    box-shadow:0 32px 80px rgba(0,96,57,0.4), 0 0 0 1px rgba(0,212,125,0.15);
  }

  /* Full bg image */
  .pf-bg{
    position:absolute;
    inset:0;
    background-size:contain;
    background-repeat: no-repeat;
    background-position:center top;
    transition:transform 0.6s cubic-bezier(0.22,1,0.36,1);
    
  }
  .pf-card:hover .pf-bg{transform:scale(1.07);}

  /* Gradient overlays — strong bottom fade so text is always readable */
  .pf-overlay-top{
    position:absolute;
    inset:0 0 auto 0;
    height:120px;
    background:linear-gradient(180deg, rgba(1,13,8,0.75) 0%, transparent 100%);
    z-index:1;
  }
  .pf-overlay-bottom{
    position:absolute;
    inset:auto 0 0 0;
    height:260px;
    background:linear-gradient(0deg, rgba(1,13,8,0.98) 0%, rgba(1,13,8,0.85) 50%, transparent 100%);
    z-index:1;
    transition:height 0.4s ease;
  }
  .pf-card:hover .pf-overlay-bottom{height:280px;}

  /* No-bg fallback */
  .pf-no-bg{
    position:absolute;
    inset:0;
    background:linear-gradient(135deg,rgba(0,40,20,0.95),rgba(0,20,10,0.98));
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:4rem;
  }

  /* Top badges */
  .pf-top-badges{
    position:absolute;
    top:14px;
    left:14px;
    right:14px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:2;
  }
  .pf-maps-pill{
    display:flex;
    align-items:center;
    gap:5px;
    background:rgba(1,13,8,0.8);
    border:1px solid rgba(0,212,125,0.4);
    border-radius:99px;
    padding:5px 11px;
    font-size:9px;
    font-weight:700;
    color:#00d47d;
    backdrop-filter:blur(8px);
    letter-spacing:0.07em;
    text-transform:uppercase;
  }
  .pf-live-dot{
    width:5px;height:5px;border-radius:50%;background:#00d47d;
    box-shadow:0 0 6px #00d47d;
    animation:liveDot 1.5s ease-in-out infinite;
  }
  @keyframes liveDot{0%,100%{box-shadow:0 0 4px #00d47d;}50%{box-shadow:0 0 12px #00d47d;}}
  .pf-rank-badge{
    font-family:'Poppins',sans-serif;
    font-weight:900;
    font-size:2rem;
    line-height:1;
    text-shadow:0 0 24px currentColor, 0 2px 8px rgba(0,0,0,0.8);
    transition:transform 0.3s;
  }
  .pf-card:hover .pf-rank-badge{transform:scale(1.12);}

  /* Bottom content */
  .pf-body{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    z-index:2;
    padding:0 16px 16px;
  }

  /* Category pill */
  .pf-cat-pill{
    display:inline-flex;
    align-items:center;
    gap:5px;
    padding:3px 10px;
    border-radius:99px;
    font-size:9px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:0.1em;
    border:1px solid rgba(255,255,255,0.1);
    background:rgba(0,0,0,0.35);
    color:rgba(163,196,176,0.9);
    backdrop-filter:blur(4px);
    margin-bottom:10px;
  }
  .pf-cat-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0;}

  /* Before/After comparison block */
  .pf-ba-block{
    display:grid;
    grid-template-columns:1fr 1px 1fr;
    background:rgba(0,0,0,0.55);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:12px;
    overflow:hidden;
    backdrop-filter:blur(8px);
    margin-bottom:10px;
  }
  .pf-ba-col{
    padding:10px 12px;
    display:flex;
    flex-direction:column;
    gap:6px;
  }
  .pf-ba-header{
    font-size:8px;
    font-weight:700;
    letter-spacing:0.12em;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    gap:4px;
  }
  .pf-ba-header.before{color:#e05555;}
  .pf-ba-header.after{color:#00d47d;}
  .pf-ba-sep{background:rgba(255,255,255,0.08);}
  .pf-ba-row{display:flex;flex-direction:column;gap:1px;}
  .pf-ba-label{font-size:8px;color:rgba(163,196,176,0.5);text-transform:uppercase;letter-spacing:0.08em;}
  .pf-ba-val{font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;line-height:1.2;}
  .pf-ba-val.red{color:#e05555;}
  .pf-ba-val.green{color:#00d47d;}
  .pf-ba-val.gold{color:#f0c95e;}

  /* Metrics row */
  .pf-metrics{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:6px;
    margin-bottom:10px;
  }
  .pf-metric{
    text-align:center;
    padding:7px 4px;
    border-radius:10px;
    background:rgba(0,0,0,0.4);
    border:1px solid rgba(0,180,110,0.18);
    backdrop-filter:blur(4px);
  }
  .pf-metric-val{font-family:'Poppins',sans-serif;font-weight:700;font-size:0.82rem;display:block;margin-bottom:1px;}
  .pf-metric-key{font-size:8px;color:rgba(163,196,176,0.6);line-height:1.2;display:block;text-transform:uppercase;letter-spacing:0.05em;}

.stagger img{
height: 100vh;
object-fit: contain;
}
  /* CTA */
  .pf-cta{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:9px 14px;
    border-radius:10px;
    background:rgba(0,180,110,0.12);
    border:1px solid rgba(0,180,110,0.25);
    transition:all 0.25s;
    backdrop-filter:blur(4px);
  }
  .pf-card:hover .pf-cta{background:rgba(0,180,110,0.25);border-color:rgba(0,212,125,0.6);}
  .pf-cta-text{font-family:'Poppins',sans-serif;font-weight:600;font-size:0.72rem;color:var(--g4);}
  .pf-cta-arrow{font-size:14px;color:var(--g4);transition:transform 0.25s;}
  .pf-card:hover .pf-cta-arrow{transform:translateX(5px);}

  /* Shine */
  .pf-card::after{
    content:'';position:absolute;inset:0;z-index:3;pointer-events:none;
    background:linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 50%);
    opacity:0;transition:opacity 0.4s;
  }
  .pf-card:hover::after{opacity:1;}

  .ps-bottom{margin-top:56px;display:flex;align-items:center;flex-direction: column;flex-wrap:wrap;gap:24px;padding-top:40px;border-top:1px solid rgba(0,180,110,0.1);}
  .ps-bottom-left{font-size:.88rem;color:#8ab09a;line-height:1.6; text-align: center;}
  .ps-bottom-left strong{color:#fff;font-weight:500;}
  .ps-bottom-btns{display:flex;gap:12px;flex-wrap:wrap;}

  .case-card{background:rgba(0,20,10,0.75);border:1px solid rgba(0,180,110,0.22);border-radius:24px;overflow:hidden;transition:transform 0.35s,border-color 0.3s,box-shadow 0.3s;box-shadow:0 8px 32px rgba(0,0,0,0.35);}
  .case-card:hover{transform:translateY(-8px);border-color:rgba(0,212,125,0.5);box-shadow:0 28px 72px rgba(0,96,57,0.35);}
  .case-header{padding:22px 24px 18px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
  .case-icon{font-size:1.8rem;width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:rgba(0,96,57,0.25);border:1px solid rgba(0,180,110,0.3);border-radius:14px;flex-shrink:0;}
  .case-biz{font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;color:#fff;margin-bottom:3px;}
  .case-loc{font-size:0.72rem;color:#8ab09a;}
  .case-tag{padding:3px 12px;border-radius:99px;background:rgba(0,180,110,0.15);border:1px solid rgba(0,180,110,0.3);font-size:0.65rem;font-weight:700;color:var(--g4);text-transform:uppercase;letter-spacing:0.08em;margin-left:auto;white-space:nowrap;flex-shrink:0;}
  .before-after-grid{display:grid;grid-template-columns:1fr 1fr;}
  .before-panel{padding:16px 20px 20px;background:rgba(200,40,40,0.09);border-top:1px solid rgba(220,60,60,0.2);border-right:1px solid rgba(0,180,110,0.1);}
  .after-panel{padding:16px 20px 20px;background:rgba(0,110,60,0.11);border-top:1px solid rgba(0,180,110,0.28);}
  .panel-label{font-family:'Poppins',sans-serif;font-weight:700;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:5px;}
  .panel-label.before{color:#e05555;}
  .panel-label.after{color:var(--g4);}
  .metric-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);}
  .metric-row:last-child{border-bottom:none;}
  .metric-row.highlight .metric-val-before{font-size:0.9rem;font-weight:700;color:#f08080;}
  .metric-row.highlight .metric-val-after{font-size:0.9rem;font-weight:700;color:#00e87a;}
  .metric-key{font-size:0.7rem;color:#7aa090;}
  .metric-val-before{font-size:0.8rem;font-weight:600;color:#e07070;}
  .metric-val-after{font-size:0.8rem;font-weight:700;color:var(--g4);}
  .case-footer{padding:14px 24px;background:rgba(0,180,110,0.07);border-top:1px solid rgba(0,180,110,0.15);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;}
  .case-result{font-family:'Poppins',sans-serif;font-weight:600;font-size:0.82rem;color:var(--g4);}
  .case-time{font-size:0.72rem;color:#8ab09a;background:rgba(0,96,57,0.18);border:1px solid rgba(0,180,110,0.25);border-radius:99px;padding:4px 12px;}

  .testi-card{background:rgba(0,20,10,0.6);border:1px solid rgba(0,180,110,0.16);border-radius:24px;padding:28px 24px;transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s;}
  .testi-card:hover{transform:translateY(-6px);border-color:rgba(0,212,125,0.35);box-shadow:0 20px 50px rgba(0,96,57,0.25);}
  .testi-stars{display:flex;gap:3px;margin-bottom:14px;}
  .testi-star{color:var(--gold2);font-size:0.9rem;}
  .testi-text{color:#b0d0be;font-size:0.9rem;line-height:1.7;margin-bottom:20px;}
  .testi-author{display:flex;align-items:center;gap:12px;}
  .testi-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--g2));display:flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif;font-weight:800;font-size:0.8rem;color:#fff;flex-shrink:0;border:2px solid rgba(0,180,110,0.3);}
  .testi-name{font-family:'Poppins',sans-serif;font-weight:500;font-size:0.9rem;color:#fff;margin-bottom:2px;}
  .testi-biz{font-size:0.76rem;color:#8ab09a;}
  .testi-tag{margin-left:auto;padding:3px 10px;border-radius:99px;background:rgba(0,180,110,0.1);border:1px solid rgba(0,180,110,0.2);font-size:0.68rem;font-weight:700;color:var(--g4);letter-spacing:0.06em;}

  .booking-strip{background:linear-gradient(90deg,#0a2818,#0d3520,#0a2818);border-top:1px solid rgba(0,180,110,0.25);border-bottom:1px solid rgba(0,180,110,0.25);padding:36px 24px;position:relative;overflow:hidden;}
  .booking-strip::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 200% at 50% 50%,rgba(0,180,110,0.06),transparent 70%);}
  .booking-strip-inner{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;position:relative;z-index:1;}
  .booking-strip-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(240,201,94,0.12);border:1px solid rgba(240,201,94,0.3);border-radius:99px;padding:4px 14px;font-size:0.75rem;font-weight:500;color:var(--gold2);margin-bottom:10px;}
  .booking-strip-heading{font-family:'Poppins',sans-serif;font-weight:500;font-size:clamp(1.1rem,2.5vw,1.5rem);color:#fff;line-height:1.5;}
  .booking-strip-sub{font-size:0.85rem;color:#8ab09a;margin-top:6px;}
  .btn-book-call{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#0a1f0f;padding:16px 32px;border-radius:99px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;border:none;cursor:pointer;text-decoration:none;white-space:nowrap;box-shadow:0 0 30px rgba(201,168,76,0.35);transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;}
  .btn-book-call:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 0 50px rgba(201,168,76,0.55);}

  .offer-block{background:rgba(0,96,57,0.08);border:1px solid rgba(0,180,110,0.2);border-radius:28px;padding:64px 48px;text-align:center;}
  .offer-pill-row{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:32px;}
  .offer-pill{background:rgba(0,96,57,0.12);border:1px solid rgba(0,180,110,0.2);border-radius:99px;padding:10px 24px;display:flex;align-items:center;gap:8px;font-size:0.88rem;font-weight:500;color:#b0d4be;}

  .faq-item{background:rgba(0,96,57,0.07);border:1px solid var(--border);border-radius:20px;overflow:hidden;margin-bottom:12px;transition:border-color 0.3s;}
  .faq-item.open{border-color:rgba(0,212,125,0.35);}
  .faq-btn{width:100%;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;background:none;border:none;cursor:pointer;text-align:left;transition:background 0.2s;}
  .faq-btn:hover{background:rgba(0,96,57,0.08);}
  .faq-q{font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;color:#fff;padding-right:16px;}
  .faq-chevron{color:var(--g3);flex-shrink:0;transition:transform 0.3s;}
  .faq-chevron.open{transform:rotate(180deg);}
  .faq-answer{padding:0 28px 22px;color:#8ab09a;font-size:0.92rem;line-height:1.7;}

  .cta-section{padding:100px 24px;text-align:center;position:relative;overflow:hidden;background:linear-gradient(135deg,#003520 0%,#005030 40%,#003a22 100%);}
  .cta-section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 2px 2px,rgba(0,180,110,0.12) 1px,transparent 0);background-size:40px 40px;}

  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(0,180,110,0.2),rgba(201,168,76,0.15),rgba(0,180,110,0.2),transparent);}

  .reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease;}
  .reveal.visible{opacity:1;transform:translateY(0);}
  .reveal-delay-1{transition-delay:0.1s;} .reveal-delay-2{transition-delay:0.2s;}
  .reveal-delay-3{transition-delay:0.3s;} .reveal-delay-4{transition-delay:0.4s;}
  .stagger>*:nth-child(1){transition-delay:0.05s;} .stagger>*:nth-child(2){transition-delay:0.15s;}
  .stagger>*:nth-child(3){transition-delay:0.25s;} .stagger>*:nth-child(4){transition-delay:0.35s;}
  .stagger>*:nth-child(5){transition-delay:0.45s;} .stagger>*:nth-child(6){transition-delay:0.55s;}
  .stagger>*:nth-child(7){transition-delay:0.65s;} .stagger>*:nth-child(8){transition-delay:0.75s;}

  .cursor-glow{position:fixed;width:400px;height:400px;background:radial-gradient(circle,rgba(0,140,70,0.06),transparent 70%);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:left 0.1s ease,top 0.1s ease;}

  /* Lead form wrapper */
  .lead-form-wrapper{display:flex;flex-direction:column;gap:80px;}

  /* Founder card (old - kept for compatibility) */
  .founder-section{margin-top:0;}
  .founder-card{background:rgba(0,20,10,0.5);border:1px solid rgba(0,180,110,0.2);border-radius:24px;overflow:hidden;}

  /* Founder Full Width Section */
  .founder-fw-section{padding:80px 24px;background:var(--dark2);}
  .founder-fw-inner{max-width:960px;margin:0 auto;display:flex;align-items:center;gap:56px;flex-wrap:wrap;background:rgba(0,30,15,0.6);border:1px solid rgba(0,180,110,0.18);border-radius:32px;padding:48px 56px;backdrop-filter:blur(16px);box-shadow:0 24px 64px rgba(0,0,0,0.35);}
  .founder-fw-left{display:flex;flex-direction:column;align-items:center;gap:14px;flex-shrink:0;width:200px;}
  .founder-fw-img-wrap{width:190px;height:190px;border-radius:50%;border:3px solid rgba(0,180,110,0.4);overflow:hidden;box-shadow:0 0 40px rgba(0,180,110,0.2);}
  .founder-fw-photo{width:100%;height:100%;object-fit:cover;object-position:top;display:block;}
  .founder-fw-name{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;color:#fff;text-align:center;margin:0;}
  .founder-fw-role{font-size:0.8rem;color:var(--g4);text-align:center;margin:0;}
  .founder-fw-stats{display:flex;gap:12px;width:100%;}
  .founder-fw-stat{flex:1;background:rgba(0,96,57,0.18);border:1px solid rgba(0,180,110,0.15);border-radius:14px;padding:12px 8px;text-align:center;}
  .founder-fw-right{flex:1;min-width:0;}
  @media(max-width:768px){
    .founder-fw-inner{flex-direction:column;align-items:center;gap:32px;padding:32px 24px;}
    .founder-fw-left{width:100%;}
    .founder-fw-right{text-align:center;width:100%;}
    .founder-tags{justify-content:center;}
  }
  .founder-top-bar{height:3px;background:linear-gradient(90deg,var(--g3),var(--gold2));}
  .founder-body{display:flex;gap:28px;padding:24px;align-items:flex-start;flex-wrap:wrap;}
  .founder-left{display:flex;flex-direction:column;align-items:center;gap:10px;min-width:120px;flex-shrink:0;}
  .founder-avatar-wrap{width:150px;height:150px;border-radius:50%;border:2px solid rgba(0,180,110,0.35);overflow:hidden;flex-shrink:0;}
  .founder-photo{width:100%;height:100%;object-fit:cover;object-position:top;display:block;}
  .founder-name{font-family:'Poppins',sans-serif;font-weight:600;font-size:0.9rem;color:#fff;text-align:center;margin:0;}
  .founder-role{font-size:0.72rem;color:var(--g4);text-align:center;margin:0;}
  .founder-stats{display:flex;flex-direction:column;gap:8px;width:100%;}
  .founder-stat{background:rgba(0,96,57,0.18);border:1px solid rgba(0,180,110,0.15);border-radius:12px;padding:8px;text-align:center;}
  .f-stat-num{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;background:linear-gradient(135deg,var(--g4),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:block;line-height:1;}
  .f-stat-lbl{font-size:0.62rem;color:#8ab09a;margin-top:2px;display:block;}
  .founder-right{flex:1;min-width:200px;}
  .founder-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(0,96,57,0.15);border:1px solid rgba(0,180,110,0.2);border-radius:99px;padding:4px 14px;font-size:0.7rem;font-weight:600;color:var(--g4);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;}
  .founder-dot{width:7px;height:7px;border-radius:50%;background:var(--g4);flex-shrink:0;}
  .founder-intro{font-size:0.9rem;color:#e8f5ee;line-height:1.7;margin:0 0 10px;}
  .founder-intro strong{font-weight:600;color:var(--g4);}
  .founder-desc{font-size:0.84rem;color:#8ab09a;line-height:1.75;margin:0 0 14px;}
  .founder-quote{border-left:2px solid var(--g3);padding-left:14px;font-size:0.88rem;font-style:italic;color:#a3c4b0;line-height:1.65;margin-bottom:16px;}
  .founder-tags-label{font-size:0.68rem;color:rgba(163,196,176,0.5);text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;font-weight:600;}
  .founder-tags{display:flex;flex-wrap:wrap;gap:7px;}
  .founder-tag{font-size:0.72rem;color:#8ab09a;background:rgba(0,96,57,0.12);border:1px solid rgba(0,180,110,0.18);border-radius:99px;padding:4px 12px;}
  .founder-footer{border-top:1px solid rgba(0,180,110,0.12);padding:12px 24px;background:rgba(0,96,57,0.06);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
  .founder-footer-text{font-size:0.78rem;color:rgba(163,196,176,0.5);text-align:center;margin:0;letter-spacing:0.02em;}
  .founder-cta-btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--g) 0%,var(--g2) 60%,var(--g3) 100%);color:#fff;padding:11px 24px;border-radius:99px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.82rem;border:none;cursor:pointer;text-decoration:none;box-shadow:0 0 20px rgba(0,140,70,0.3);transition:transform 0.2s,box-shadow 0.2s;white-space:nowrap;flex-shrink:0;}
  .founder-cta-btn:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 0 36px rgba(0,180,110,0.5);}

  @media(max-width:768px){
    .gmb-section{padding:64px 16px;}
    .gmb-hero{padding:60px 16px 48px;}
    .stats-inner{grid-template-columns:1fr;gap:24px;}
    .booking-strip-inner{flex-direction:column;align-items:flex-start;}
    .before-after-grid{grid-template-columns:1fr;}
    .before-panel{border-right:none;border-bottom:1px solid rgba(0,180,110,0.1);}
    .offer-block{padding:40px 20px;}
    .founder-block{padding:40px 20px;}
    .form-card{padding:28px 20px;}
    .case-tag{margin-left:0;align-self:flex-start;}
    .top-bar-text{font-size:0.72rem;}
    .top-bar{gap:8px;}
    .ps-section{padding:56px 16px;}
    .pf-grid{grid-template-columns:1fr;}
    .ps-bottom{flex-direction:column;align-items:flex-start;}
    .pf-card{height:380px;}
  }
  @media(max-width:480px){.top-bar-text{display:none;}}
`;

/* ─────────────────────── HOOKS ─────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById("cursor-glow");
    if (!cursor) return;
    const move = (e) => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}

/* ─────────────────────── STAT BLOCK ─────────────────────── */
function StatBlock({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2200;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, value]);

  return (
    <div className="stat-block" ref={ref}>
      <span className="stat-num">{count}{suffix}</span>
      <p className="stat-label">{label}</p>
    </div>
  );
}

/* ─────────────────────── GMB MOCK PREVIEW ─────────────────────── */
function GmbMockPreview() {
  return (
    <div className="gmb-preview">
      <p className="gp-label">📍 How You'll Appear on Google Maps</p>
      <p className="gp-pack-label">Google Local 3-Pack — Top Results</p>
      {[
        { name: "Your Business (After Optimisation)", cat: "Healthcare · Open Now", stars: 5, count: "148 reviews", you: true },
        { name: "Competitor A", cat: "Healthcare", stars: 4, count: "32 reviews", you: false },
        { name: "Competitor B", cat: "Healthcare", stars: 3, count: "11 reviews", you: false },
      ].map((item, i) => (
        <div key={i} className="gp-rank-item">
          <div className={`gp-rank-num ${item.you ? "gp-rank-you" : ""}`}>{i + 1}</div>
          <div style={{ flex: 1 }}>
            <p className="gp-rank-name" style={{ color: item.you ? "var(--g4)" : "#e8f5ee" }}>{item.name}</p>
            <p style={{ fontSize: "0.72rem", color: "#8ab09a" }}>{item.cat}</p>
          </div>
          <div className="gp-rank-stars">{"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)} {item.count}</div>
        </div>
      ))}
      <div className="gp-card" style={{ marginTop: 16 }}>
        <p className="gp-biz">Your Business Name</p>
        <p className="gp-cat">Healthcare · Clinic · Open · Delhi</p>
        <div className="gp-stars">
          {[1, 2, 3, 4, 5].map(i => <span key={i} className="gp-star">★</span>)}
          <span className="gp-rating">4.9 (148 reviews)</span>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#8ab09a", marginBottom: 4 }}>📍 Connaught Place, New Delhi</p>
        <p style={{ fontSize: "0.78rem", color: "var(--g4)", fontWeight: 600 }}>✓ Verified · Profile Score: 98%</p>
        <div className="gp-actions">
          <button className="gp-btn gp-btn-call">📞 Call</button>
          <button className="gp-btn gp-btn-dir">🗺️ Directions</button>
          <button className="gp-btn gp-btn-web">🌐 Website</button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── LEAD FORM ─────────────────────── */
function LeadForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business_type: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const source = detectSource();
    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      business_type: formData.business_type,
      city: formData.city.trim(),
      source,
    };
    try {
      const res = await fetch("https://roasbadhao.com/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>🎉</div>
      <h3 style={{ fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: 12 }}>Request Received!</h3>
      <p style={{ color: "#8ab09a", fontSize: "0.95rem" }}>We'll contact you within 24 hours to begin your GMB audit.</p>
    </div>
  );

  return (
    <div className="lead-form-wrapper">
      <div className="form-card">
        <h3 className="form-title" style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {compact ? "Get Your Free GMB Audit" : "Get Your Free Audit"}
        </h3>
        <p className="form-sub">
          {compact ? "We'll review your profile and show you exactly what to fix" : "Fill the form and we'll audit your Google Business Profile"}
        </p>
        {error && <div className="form-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input className="form-input" type="text" name="name" placeholder="Your full name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone *</label>
              <input className="form-input" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Type *</label>
              <select className="form-select" name="business_type" required value={formData.business_type} onChange={handleChange}>
                <option value="">Select type</option>
                <option value="healthcare">Healthcare / Doctors</option>
                <option value="salon">Salon & Spa</option>
                <option value="restaurant">Restaurant / Café</option>
                <option value="real-estate">Real Estate</option>
                <option value="education">Education</option>
                <option value="local-service">Local Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">City *</label>
              <input className="form-input" type="text" name="city" placeholder="Your city" required value={formData.city} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn-form-submit" disabled={loading}>
            {loading ? "Submitting..." : "Get My Free GMB Audit →"}
          </button>
          <p className="form-privacy">🔒 Your details are safe. No spam, guaranteed.</p>
        </form>
      </div>

    </div>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 780, margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
          <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
            <span className="faq-q">{faq.question}</span>
            <ChevronDown className={`faq-chevron ${open === i ? "open" : ""}`} style={{ width: 22, height: 22 }} />
          </button>
          {open === i && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────── CASE CARD ─────────────────────── */
function CaseCard({ cs }) {
  return (
    <div className="case-card reveal">
      <div className="case-header">
        <div className="case-icon">{cs.icon}</div>
        <div>
          <p className="case-biz">{cs.business}</p>
          <p className="case-loc">📍 {cs.location}</p>
        </div>
        <div className="case-tag">{cs.category}</div>
      </div>
      <div className="before-after-grid">
        <div className="before-panel">
          <p className="panel-label before">✕ Before</p>
          {[["Map Rank", cs.before.rank], ["Reviews", cs.before.reviews], ["Monthly Calls", cs.before.calls], ["Visibility", cs.before.visibility], ["Profile Score", cs.before.profileScore]].map(([k, v], i) => (
            <div className={`metric-row${i === 0 ? " highlight" : ""}`} key={i}><span className="metric-key">{k}</span><span className="metric-val-before">{v}</span></div>
          ))}
        </div>
        <div className="after-panel">
          <p className="panel-label after">✓ After</p>
          {[["Map Rank", cs.after.rank], ["Reviews", cs.after.reviews], ["Monthly Calls", cs.after.calls], ["Visibility", cs.after.visibility], ["Profile Score", cs.after.profileScore]].map(([k, v], i) => (
            <div className={`metric-row${i === 0 ? " highlight" : ""}`} key={i}><span className="metric-key">{k}</span><span className="metric-val-after">{v}</span></div>
          ))}
        </div>
      </div>
      <div className="case-footer">
        <span className="case-result">🚀 {cs.result}</span>
        <span className="case-time">⏱ {cs.timeframe}</span>
      </div>
    </div>
  );
}

/* ─────────────────────── useInView hook ─────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────── PORTFOLIO CARD (REDESIGNED) ─────────────────────── */
function PortfolioCard({ p, index, visible }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="pf-card reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
      }}
    >
      {/* Background */}
      {p.bg ? (
        <div className="pf-bg" style={{ backgroundImage: `url(${p.bg})` }} />
      ) : (
        <div className="pf-no-bg">
          <span>{p.icon}</span>
        </div>
      )}

      {/* Gradient overlays */}
      <div className="pf-overlay-top" />
      <div className="pf-overlay-bottom" />

      {/* Top: LIVE pill + Rank */}
      <div className="pf-top-badges">
        <div className="pf-maps-pill">
          <span className="pf-live-dot" />
          LIVE ON MAPS
        </div>
        <div className="pf-rank-badge" style={{ color: p.color }}>{p.rank}</div>
      </div>

      {/* Bottom content */}
      <div className="pf-body">
        {/* Category */}
        <div className="pf-cat-pill">
          <span className="pf-cat-dot" style={{ background: p.color }} />
          {p.cat}
        </div>

        {/* Before / After comparison */}
        <div className="pf-ba-block">
          <div className="pf-ba-col">
            <div className="pf-ba-header before">✕ Before</div>
            <div className="pf-ba-row">
              <span className="pf-ba-label">Rank</span>
              <span className="pf-ba-val red">{p.beforeRank}</span>
            </div>
            <div className="pf-ba-row">
              <span className="pf-ba-label">Reviews</span>
              <span className="pf-ba-val red">{p.beforeReviews}</span>
            </div>
          </div>
          <div className="pf-ba-sep" />
          <div className="pf-ba-col">
            <div className="pf-ba-header after">✓ After</div>
            <div className="pf-ba-row">
              <span className="pf-ba-label">Rank</span>
              <span className="pf-ba-val green">{p.rank} Maps</span>
            </div>
            <div className="pf-ba-row">
              <span className="pf-ba-label">Reviews</span>
              <span className="pf-ba-val green">{p.reviews}</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="pf-metrics">
          {[
            { val: p.reviews, key: "Reviews" },
            { val: p.calls, key: "More Calls" },
            { val: p.timeframe, key: "Timeline" },
          ].map((m, j) => (
            <div key={j} className="pf-metric">
              <span className="pf-metric-val" style={{ color: p.color }}>{m.val}</span>
              <span className="pf-metric-key">{m.key}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pf-cta">
          <span className="pf-cta-text">View on Google Maps</span>
          <span className="pf-cta-arrow">→</span>
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────── PORTFOLIO SECTION ─────────────────────── */
function PortfolioSection() {
  const [gridRef, gridVisible] = useInView(0.05);

  return (
    <section className="ps-section">
      <div className="ps-bg-orb ps-bg-orb1" />
      <div className="ps-bg-orb ps-bg-orb2" />
      <div className="ps-grid-bg" />

      <div className="gmb-inner" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div className="ps-top">
          <div>
            <div className="ps-eyebrow">
              <div className="ps-ey-line" />
              <span className="ps-ey-text">Live Portfolio</span>
            </div>
            <h2 className="ps-heading reveal">
              Profiles we ranked.<br />
              <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Results they earned.</span>
            </h2>
            <p className="ps-sub reveal">
              Every card below is a real, live Google Business Profile — click to verify it yourself on Google Maps.
            </p>
          </div>
        </div>

        {/* Map Strip */}
        <div className="ps-map-canvas reveal">
          <div className="ps-map-grid" />
          <div className="ps-map-road" style={{ width: "100%", height: 14, top: "50%", left: 0, marginTop: -7, opacity: .7 }} />
          <div className="ps-map-road" style={{ width: 10, height: "100%", top: 0, left: "22%", opacity: .5 }} />
          <div className="ps-map-road" style={{ width: 10, height: "100%", top: 0, left: "55%", opacity: .4 }} />
          <div className="ps-map-road" style={{ width: 10, height: "100%", top: 0, left: "80%", opacity: .5 }} />
          <div className="ps-map-road" style={{ width: "60%", height: 8, top: "30%", left: "20%", opacity: .4, borderRadius: 4 }} />
          <div className="ps-map-road" style={{ width: "40%", height: 8, top: "68%", left: "35%", opacity: .4, borderRadius: 4 }} />
          {mapPins.map((pin, i) => (
            <div key={i} className="pin-wrap" style={{ left: pin.left, top: pin.top }}>
              <div className="pin-pulse" style={{ width: 28, height: 28, left: "50%", top: "50%", marginTop: -14, animationDelay: `${pin.delay}s` }} />
              <div className="pin-bubble">
                <div className="pin-biz">{pin.short}</div>
                <div className="pin-rank">★ {pin.rank} Maps</div>
              </div>
              <div className="pin-needle" style={{ height: 16 }} />
              <div className="pin-dot" />
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="pf-grid stagger">
          {portfolioProfiles.map((p, i) => (
            <PortfolioCard key={i} p={p} index={i} visible={gridVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="ps-bottom reveal">
          <div className="ps-bottom-left">
            <strong>Want results like these?</strong><br />
            Get a free audit — we'll show you exactly why you're not ranking.
          </div>
          <div className="ps-bottom-btns">
            <a href="#audit-form" className="btn-primary" style={{ fontSize: ".88rem", padding: "13px 28px" }}>Get Free GMB Audit →</a>
            <a href="https://wa.me/919911689427" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: ".88rem", padding: "13px 24px" }}>
              <MessageCircle style={{ width: 16, height: 16 }} />WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */
export default function GmbPage() {
  useReveal();
  useCursorGlow();
  const allLogos = [...clientLogos, ...clientLogos];

  const deadlineDate = new Date();
  deadlineDate.setDate(deadlineDate.getDate() + 30);          // change date logic 
  const deadlineStr = deadlineDate.toLocaleDateString("en-IN", { day: "numeric", month: "long" });

  return (
    <>
      <style>{globalCSS}</style>
      <div id="cursor-glow" className="cursor-glow" />
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* TOP BAR */}
        <div className="top-bar">
          <span className="top-bar-pill">🔥 Limited</span>
          <span className="top-bar-text">Free GMB Audit offer closes {deadlineStr} — Only 4 spots remaining. Claim Yours</span>
          <a href="#audit-form" className="top-bar-cta">Claim Now →</a>
        </div>

        {/* HERO */}
        <section className="gmb-hero">
          <div className="gmb-hero-grid" />
          <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />
          <div className="aura-ring ring1" /><div className="aura-ring ring2" /><div className="aura-ring ring3" />
          <div className="gmb-hero-inner">
            <div className="hero-grid">
              <div>
                <div className="badge reveal"><MapPin style={{ width: 16, height: 16 }} />Google My Business Experts</div>
                <h1 className="reveal reveal-delay-1">
                  Rank #1 on<br /><span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Google Maps</span><br />&amp; Get More Calls,<br />Walk-ins &amp; Reviews
                </h1>
                <p className="hero-sub reveal reveal-delay-2">
                  We help <strong style={{ color: "var(--g4)" }}>Doctors, Salons, Restaurants &amp; local businesses</strong> dominate the Google Local 3-Pack — so when customers search nearby, they find <strong style={{ color: "var(--g4)" }}>you first</strong>.
                </p>
                <div className="trust-row reveal reveal-delay-2">
                  {[{ num: "195+", label: "Profiles Optimised" }, { num: "3x", label: "Avg. Visibility Boost" }, { num: "60%", label: "More Calls on Avg." }].map((t, i) => (
                    <div key={i} className="trust-pill-stat">
                      <span className="trust-pill-num">{t.num}</span>
                      <span className="trust-pill-label">{t.label}</span>
                    </div>
                  ))}
                </div>
                <div className="reveal reveal-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <a href="#audit-form" className="btn-primary"><span>Get Free GMB Audit</span><ArrowRight style={{ width: 18, height: 18 }} /></a>
                  <a href="https://wa.me/919911689427" target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle style={{ width: 18, height: 18 }} />WhatsApp Us</a>
                </div>
              </div>
              <div className="reveal reveal-delay-3" style={{ alignSelf: "start", marginTop: 0 }}><GmbMockPreview /></div>
              <div className="reveal reveal-delay-2" style={{ alignSelf: "start", marginTop: 0 }}><LeadForm compact={false} /></div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* FOUNDER SECTION */}
        <section className="founder-fw-section">
          <div className="founder-fw-inner">
            <div className="founder-fw-left">
              <div className="founder-fw-img-wrap">
                <img src={Raushan} alt="Raushan Saxena" className="founder-fw-photo" />
              </div>
              <p className="founder-fw-name">Raushan Saxena</p>
              <p className="founder-fw-role">Founder, RoasBadhao</p>
              <div className="founder-fw-stats">
                <div className="founder-fw-stat"><span className="f-stat-num">6+</span><span className="f-stat-lbl">Years Experience</span></div>
                <div className="founder-fw-stat"><span className="f-stat-num">50+</span><span className="f-stat-lbl">Businesses Ranked</span></div>
              </div>
            </div>
            <div className="founder-fw-right">
              <div className="founder-badge"><span className="founder-dot" />Meet the Founder</div>
              <p className="founder-intro" style={{fontSize:"1.05rem",marginBottom:14}}>Raushan Saxena is the founder of <strong>RoasBadhao</strong> — a performance marketing agency built around one goal: generating qualified leads and measurable business growth.</p>
              <p className="founder-desc">With over 6 years in digital marketing, Raushan has worked across local businesses, e-commerce, real estate, D2C, FMCG, Ayurveda, and cosmetics. He has helped 50+ local businesses rank in the top 3 on Google Maps — driving real calls, enquiries, and walk-ins, not just vanity metrics.</p>
              <div className="founder-quote">"Not just visibility — result-driven marketing systems that increase ROI and real business growth."</div>
              <p className="founder-tags-label">Focus Areas</p>
              <div className="founder-tags" style={{marginBottom:24}}>
                {["Google Maps SEO","Lead Generation","Local Business Growth","Performance Marketing","ROI Optimisation"].map((tag, i) => (
                  <span key={i} className="founder-tag">{tag}</span>
                ))}
              </div>
              <a href="https://wa.me/919911689427" target="_blank" rel="noopener noreferrer" className="founder-cta-btn">
                <MessageCircle style={{ width: 16, height: 16 }} />Talk to Raushan
              </a>
            </div>
          </div>
        </section>

        <div className="divider" />



        {/* STATS */}
        <section className="stats-section">
          <div className="stats-inner">
            {animatedStats.map((s, i) => (
              <React.Fragment key={i}>
                <StatBlock value={s.value} suffix={s.suffix} label={s.label} />
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* LOGOS */}
        <section className="logos-section">
          <p className="logos-label">Trusted by 195+ businesses across India</p>
          <div className="logos-track-wrapper">
            <div className="logos-track">
              {allLogos.map((logo, i) => (
                <div key={i} className="logo-chip">
                  <img src={logo.initial} className="logo-avatar" alt={logo.name} />
                  <span className="logo-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PORTFOLIO */}
        <PortfolioSection />

        <div className="divider" />

        {/* PROBLEMS */}
        <section className="gmb-section" style={{ background: "var(--dark2)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px" }}>
              <h2 className="section-title reveal">Why Isn't Your Business<br /><span style={{ background: "linear-gradient(135deg,#e05555,#f0a040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Showing Up on Google Maps?</span></h2>
              <p className="section-desc reveal">These are the most common GMB problems we fix every day</p>
            </div>
            <div className="grid-3 stagger">
              {problems.map((p, i) => (
                <div key={i} className="prob-card reveal">
                  <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "1.05rem", color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: "#8a9a93", fontSize: "0.88rem", lineHeight: 1.6 }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SERVICES */}
        <section className="gmb-section" style={{ background: "var(--dark)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
              <p className="section-label reveal">What We Do</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">Complete <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>GMB Management</span></h2>
              <p className="section-desc reveal">Everything your Google Business Profile needs to rank, attract, and convert</p>
            </div>
            <div className="grid-3 stagger">
              {services.map((s, i) => (
                <div key={i} className="glass-card reveal" style={{ padding: "36px 28px" }}>
                  <div className="icon-wrap-sm">{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "1.1rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "#8ab09a", fontSize: "0.88rem", lineHeight: 1.65 }}>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CASE STUDIES */}
        <section className="gmb-section" style={{ background: "var(--dark2)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
              <p className="section-label reveal">Real Results</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">Before &amp; After — <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>GMB Profiles We Fixed</span></h2>
              <p className="section-desc reveal">Real businesses. Real numbers.</p>
            </div>
            <div className="grid-3 stagger">
              {caseStudies.map((cs, i) => <CaseCard key={i} cs={cs} />)}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* RESULTS */}
        <section className="gmb-section" style={{ background: "var(--dark)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <p className="section-label reveal">Real Results</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">What Our <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Clients See</span></h2>
            </div>
            <div className="grid-3 stagger">
              {results.map((r, i) => (
                <div key={i} className="result-card reveal">
                  <span className="result-val">{r.value}</span>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "1.1rem", color: "#fff", marginBottom: 4 }}>{r.label}</p>
                  <p style={{ fontSize: "0.8rem", color: "#8ab09a" }}>{r.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PROCESS */}
        <section className="gmb-section" style={{ background: "var(--dark2)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <p className="section-label reveal">How We Work</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">Our <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>4-Step GMB Process</span></h2>
            </div>
            <div className="grid-4 stagger">
              {process.map((step, i) => (
                <div key={i} className="proc-card reveal">
                  <div className="proc-num">{step.number}</div>
                  <div className="icon-wrap" style={{ marginBottom: 16 }}>{step.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "1.15rem", color: "#fff", marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: "#8ab09a", fontSize: "0.88rem", lineHeight: 1.65 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* TESTIMONIALS */}
        <section className="gmb-section" style={{ background: "var(--dark)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <p className="section-label reveal">Testimonials</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">What Our <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Clients Say</span></h2>
              <p className="section-desc reveal">Don't take our word for it — here's what real business owners experienced</p>
            </div>
            <div className="grid-3 stagger">
              {testimonials.map((t, i) => (
                <div key={i} className="testi-card reveal">
                  <div className="testi-stars">{[...Array(t.rating)].map((_, j) => <span key={j} className="testi-star">★</span>)}</div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.initial}</div>
                    <div><p className="testi-name">{t.name}</p><p className="testi-biz">{t.business}</p></div>
                    <div className="testi-tag">{t.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* BOOKING STRIP */}
        <div className="booking-strip">
          <div className="booking-strip-inner">
            <div>
              <div className="booking-strip-badge"><span>📅</span> Limited Availability</div>
              <h3 className="booking-strip-heading">
                Free audit available until {deadlineStr} only.<br />
                <span style={{ color: "var(--g4)" }}>Book 1:1 Call Now.</span>
              </h3>
              <p className="booking-strip-sub">Only 4 spots remaining — Don't miss out</p>
            </div>
            <a href="https://wa.me/919911689427" target="_blank" rel="noopener noreferrer" className="btn-book-call">
              <Phone style={{ width: 18, height: 18 }} />Book 1:1 Call Now
            </a>
          </div>
        </div>

        {/* OFFER */}
        <section className="gmb-section" style={{ background: "var(--dark2)" }}>
          <div className="gmb-inner">
            <div className="offer-block reveal">
              <div className="icon-wrap" style={{ margin: "0 auto 24px" }}><Sparkles style={{ width: 32, height: 32 }} /></div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>Get a Free <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>GMB Profile Audit</span></h2>
              <p style={{ color: "#a3c4b0", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
                We'll audit your Google Business Profile and show you exactly why you're not ranking — and what we'll do to fix it
              </p>
              <div className="offer-pill-row">
                {["Profile Score Review", "Ranking Analysis", "Competitor Comparison", "Growth Roadmap"].map((pill, i) => (
                  <div key={i} className="offer-pill"><CheckCircle2 style={{ width: 16, height: 16, color: "var(--g3)" }} />{pill}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FORM */}
        <section id="audit-form" className="gmb-section" style={{ background: "var(--dark)" }}>
          <div className="gmb-inner" style={{ maxWidth: 620 }}>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
              <p className="section-label reveal">Free Audit</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">Claim Your <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Free GMB Audit</span></h2>
            </div>
            <div className="form-card reveal"><LeadForm compact={true} /></div>
          </div>
        </section>

        <div className="divider" />

        {/* FAQ */}
        <section className="gmb-section" style={{ background: "var(--dark2)" }}>
          <div className="gmb-inner">
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <p className="section-label reveal">FAQ</p>
              <div className="glow-line reveal" style={{ margin: "0 auto 24px" }} />
              <h2 className="section-title reveal">Frequently Asked <span style={{ background: "linear-gradient(135deg,#00b86e,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Questions</span></h2>
            </div>
            <div className="reveal"><FaqSection /></div>
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="cta-section">
          <div className="orb orb1" style={{ left: "-15%", top: "-20%", opacity: 0.4 }} />
          <div className="orb orb2" style={{ right: "-15%", bottom: "-20%", opacity: 0.4 }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto" }}>
            <div className="glow-line reveal" style={{ margin: "0 auto 28px" }} />
            <h2 className="section-title reveal" style={{ textAlign: "center", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
              Your Customers Are Searching.<br />
              <span style={{ background: "linear-gradient(135deg,#c9a84c,#f0c95e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Make Sure They Find You First.</span>
            </h2>
            <p className="reveal" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", textAlign: "center", marginBottom: 48, lineHeight: 1.7 }}>
              Let's rank your business at the top of Google Maps and turn local searches into real customers
            </p>
            <div className="reveal" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
              <a href="#audit-form" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
                <span>Get Free GMB Audit</span><ArrowRight style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://wa.me/919911689427" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1rem", padding: "16px 32px" }}>
                <MessageCircle style={{ width: 18, height: 18 }} />WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}