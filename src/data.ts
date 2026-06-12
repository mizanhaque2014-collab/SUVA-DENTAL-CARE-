import { ServiceItem, TreatmentItem, GalleryItem, TestimonialItem, FAQItem } from "./types";

export const CLINIC_INFO = {
  name: "Suva Dental Care",
  tagline: "Your Smile, Our Priority",
  subtagline: "Advanced Multi Speciality Dental Care for the Entire Family.",
  phone: "+91 9433307652",
  whatsapp: "+91 9433307652",
  address: "Birshibpur, Uluberia, Howrah, West Bengal, India – 711302",
  doctor: {
    name: "Dr. Suva Salim Lee",
    qualification: "B.D.S (W.B.U.H.S)",
    role: "Founder & Chief Dental Surgeon",
    description: "Dr. Suva Salim Lee is a dedicated and compassionate dental professional committed to providing high-quality oral healthcare with a patient-first approach. With expertise in preventive, restorative, and cosmetic dentistry, Dr. Lee focuses on delivering comfortable, personalized, and effective treatment solutions for patients of all age groups. Combining modern dental techniques with advanced technology, the clinic strives to create healthy, confident, and beautiful smiles in a safe and welcoming environment.",
    highlights: [
      "Personalized Dental Care",
      "Modern Treatment Techniques",
      "Gentle Procedures",
      "Family-Friendly Services",
      "Advanced Equipment",
      "Patient Satisfaction Focus"
    ]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "checkup",
    title: "Dental Check-Up",
    description: "Comprehensive oral examinations, diagnostic digital X-rays, and customized treatments planning.",
    iconName: "Stethoscope"
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Surgical and simple painless extractions of damaged, impacted, or crowded teeth, including wisdom teeth.",
    iconName: "Trash"
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Saves severely decayed or infected teeth with state-of-the-art painless root end sealing therapy.",
    iconName: "Activity"
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to eliminate hard calculus deposits, preventing gum diseases.",
    iconName: "Sparkles"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Premium laser teeth whitening to brighten your smile up to 8 shades in a single clinical session.",
    iconName: "Flame"
  },
  {
    id: "fillings",
    title: "Dental Fillings",
    description: "Aesthetic tooth-colored composite restorations to repair decay, chips, and minor fractures seamlessly.",
    iconName: "ShieldAlert"
  },
  {
    id: "crowns",
    title: "Dental Crown",
    description: "Custom premium porcelain and zirconia caps to restore damaged teeth strength, form, and size.",
    iconName: "Crown"
  },
  {
    id: "bridge",
    title: "Dental Bridge",
    description: "Permanent prosthetic solution bridging the gap created by one or more missing sequence teeth.",
    iconName: "Grid"
  },
  {
    id: "dentures",
    title: "Dentures",
    description: "High-grade flexible complete or partial dentures designed for premium comfort and natural chewing.",
    iconName: "Layers"
  },
  {
    id: "braces",
    title: "Braces Treatment",
    description: "Orthodontic braces and clear aligners to correct malocclusion, crowding, and jaw misalignment.",
    iconName: "Infinity"
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Extra-gentle, child-friendly oral healthcare, cavity prevention, and behavior guidance for kids.",
    iconName: "Smile"
  },
  {
    id: "gum",
    title: "Gum Treatment",
    description: "Periodontal therapy to treat bleeding gums, bad breath, and advanced mobile teeth conditions.",
    iconName: "HeartPulse"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Aesthetic enhancements using custom veneers, bonding, and recontouring for a gorgeous smile.",
    iconName: "Sparkles"
  },
  {
    id: "smile_design",
    title: "Smile Designing",
    description: "Digital smile mock-ups and holistic corrections tailored to your golden facial ratios.",
    iconName: "Heart"
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    description: "Express same-day support for toothaches, trauma, broken restorations, or bleeding conditions.",
    iconName: "AlertCircle"
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "rct-showcase",
    title: "Root Canal",
    description: "Save deeply damaged or infected teeth with precise modern micro-endodontic therapy that relieves pain almost instantly.",
    benefits: ["Maintains tooth structure", "Prevents spread of infection", "Virtually pain-free treatment", "Painless laser technology"],
    duration: "1 - 2 Sessions",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cosmetic-showcase",
    title: "Cosmetic Dentistry",
    description: "Craft a signature, radiant smile using dynamic ceramic veneers, composite enhancements, and detailed aesthetic alignment.",
    benefits: ["Conceals chips and gaps", "Stain-resistant finishes", "Tailored to facial geometry", "Boosts self-confidence"],
    duration: "1 - 3 Sessions",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "whitening-showcase",
    title: "Teeth Whitening",
    description: "Remove decades of corporate stains, coffee, or smoking yellowing with advanced clinical whitening options.",
    benefits: ["Instant radiant result", "Enamel-safe ingredients", "Includes home maintenance tips", "Uniform color correction"],
    duration: "45 Minutes",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "smiledesign-showcase",
    title: "Smile Makeover",
    description: "A complete, holistic approach to transforming your mouth's entire harmony via teeth shape, shade, and gum contouring.",
    benefits: ["3D visualization preview", "Custom composite matching", "Reduces look of aging", "Long-lasting oral health"],
    duration: "2 - 3 Weeks",
    image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "aligners-showcase",
    title: "Braces & Aligners",
    description: "Straighten teeth discreetly with either high-durability modern self-ligating brackets or clear, removable plastic aligners.",
    benefits: ["Virtually invisible aligners", "Corrects severe bites", "Easy to clean and maintain", "Enhances bite functionality"],
    duration: "6 - 18 Months",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "crowns-showcase",
    title: "Dental Crowns",
    description: "Protect compromised or cracked tooth structures with customized high-translucency Zirconia or E-Max porcelain crowns.",
    benefits: ["Restores absolute bite force", "Perfect biometric match", "Highly chip-resistant", "Protects weak root ends"],
    duration: "2 Sessions",
    image: "https://images.unsplash.com/photo-1447479251311-2dc9911dd462?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "replacement-showcase",
    title: "Tooth Replacement",
    description: "Permanent dental implants, bridges, or advanced lightweight dentures that feel and function exactly like natural luxury teeth.",
    benefits: ["Restores facial profile", "Prevents bone deterioration", "No slippage or click noises", "Eat your favorite meals"],
    duration: "Varies on type",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "preventive-showcase",
    title: "Preventive Dental Care",
    description: "Avoid extensive future clinical work with diagnostic digital mapping, cleanings, fluoride, and sealant application.",
    benefits: ["Catches cavities super early", "Saves high long-term costs", "Maintains dynamic freshness", "Protects general heart health"],
    duration: "Ongoing (6 mos)",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal1",
    title: "Advanced Diagnostic Clinic & Dental Unit",
    category: "clinic",
    singleImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal2",
    title: "Ultramodern Operation Theater & Sterilization",
    category: "clinic",
    singleImage: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal3",
    title: "Cosmetic Teeth Whitening Correction",
    category: "before-after",
    beforeImage: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=400", // real patient before whitening checkup
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400" // sparkling white smile after
  },
  {
    id: "gal4",
    title: "Full Arch Rehabilitation Crown Placement",
    category: "treatment",
    singleImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal5",
    title: "Clear Aligners Therapy Realignment",
    category: "before-after",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "gal6",
    title: "Smile Makeover Cosmetic Veneers Match",
    category: "treatment",
    singleImage: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Subrata Chatterjee",
    location: "Uluberia, Howrah",
    rating: 5,
    text: "Dr. Salim Lee's clinic is extraordinarily hygienic. I got my root canal treatment done and felt absolutely no pain. Highly recommended multi speciality clinic in West Bengal!",
    treatment: "Root Canal",
    gender: "male"
  },
  {
    id: "t2",
    name: "Priya Das",
    location: "Bauria, Howrah",
    rating: 5,
    text: "Fantastic experience! The teeth cleaning and whitening was rapid, very affordable, and the results are sparkling. I can smile freely again.",
    treatment: "Teeth Whitening",
    gender: "female"
  },
  {
    id: "t3",
    name: "Rahman Ali",
    location: "Birshibpur, Uluberia",
    rating: 5,
    text: "Dr. Suva Salim is highly dedicated and spent time understanding my issues. The clinic is equipped with the latest modern dental tools. Outstanding care!",
    treatment: "Dental Implants",
    gender: "male"
  },
  {
    id: "t4",
    name: "Sreya Ghoshal",
    location: "Kolkata, WB",
    rating: 5,
    text: "Best cosmetic dentist. My customized ceramic crowns look exactly like natural teeth and feel completely comfortable to chew with.",
    treatment: "Dental Crown",
    gender: "female"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How often should I visit Suva Dental Care for regular dental checkups?",
    answer: "For healthy oral hygiene, we recommend scheduling a regular checkup and professional scaling twice a year (every 6 months). This allows us to detect potential issues like caries or early gum disease before they escalate."
  },
  {
    id: "faq2",
    question: "Is Root Canal Treatment (RCT) painful?",
    answer: "No, root canal treatment is not painful at Suva Dental Care. We use state-of-the-art local anesthetic techniques to completely numb the area, making the procedure feel similar to a standard composite dental filling. Our goal is to relieve your severe toothache, not cause more."
  },
  {
    id: "faq3",
    question: "How long does clinical teeth whitening take and is it safe for my enamel?",
    answer: "An in-office clinical laser whitening session takes approximately 45 to 60 minutes. Under our professional dentist's supervision, the procedure is extremely safe, clinically approved, and does not pose a threat to your enamel."
  },
  {
    id: "faq4",
    question: "What are my options for tooth alignment? Are clear aligners available?",
    answer: "We offer traditional modern braces as well as premium custom clear tooth aligners. Clear aligners are virtually invisible, comfortable, and removable, allowing you to maintain exceptional hygiene and eat whatever you like."
  },
  {
    id: "faq5",
    question: "What is your booking process, and how will I get confirmation?",
    answer: "You can book easily using our online system. Specify your name, treatment required, and desired date. Once submitted, our system securely prompts you with a pre-filled WhatsApp message or SMS to +91 9433307652 in 1 click to lock in your slot instantly."
  },
  {
    id: "faq6",
    question: "Do you offer emergency dental services in Uluberia/Howrah?",
    answer: "Yes, we accept same-day emergency emergency drop-ins for severe dental pain, wisdom tooth crisis, deep fractures, or physical mouth traumas. Call +91 9433307652 immediately for urgent assistance."
  }
];

export const STATS = [
  { value: 4800, suffix: "+", label: "Happy Patients", icon: "Smile" },
  { value: 6500, suffix: "+", label: "Successful Treatments", icon: "CheckCircle" },
  { value: 10, suffix: "+", label: "Years of Service", icon: "Clock" },
  { value: 99, suffix: "%", label: "Positive Reviews", icon: "ThumbsUp" }
];

export const REASON_TO_CHOOSE = [
  { id: 1, title: "Experienced Dentist", description: "Led by highly qualified Dr. Suva Salim Lee, B.D.S with extensive clinical mastery.", icon: "Award" },
  { id: 2, title: "Modern Dental Tech", description: "State-of-the-art diagnostic digital radiography, laser devices, and high-tech dental units.", icon: "Zap" },
  { id: 3, title: "Affordable Treatment", description: "Extremely competitive and crystal clear transparent pricing without hidden consultation fees.", icon: "DollarSign" },
  { id: 4, title: "Sterilized Instruments", description: "Class-B autoclaving, rigorous chemical sterilization protocols for supreme infection defense.", icon: "ShieldCheck" },
  { id: 5, title: "Comfortable Environment", description: "Warm, air-conditioned, calming ambient dental chair layout designed to reduce dentist anxieties.", icon: "Activity" },
  { id: 6, title: "Emergency Dental Care", description: "On-call support for acute pains, tooth fractures, or urgent trauma care in Uluberia, Howrah.", icon: "Clock" },
  { id: 7, title: "Patient-Centered Service", description: "Your safety, choices, and treatment comfort are prioritized with custom care plans.", icon: "Users" },
  { id: 8, title: "Quality Treatment Standards", description: "We use top-tier global restorative dental composites and brand manufacturers (US/Europe).", icon: "Crown" }
];
