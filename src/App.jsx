import React, { useState, useEffect } from 'react';
import { 
  Award, ShieldAlert, HeartHandshake, Activity, HeartPulse, Beaker, Pill, BedDouble, 
  MapPin, Phone, CheckCircle2,
  Menu, X, Clock, Sparkles, User, Play, Star, Video
} from 'lucide-react';

// Local User-Provided Clinical Media Assets
import imgNormalDelivery from './assets/images/Service Images/normal deivery.jpeg';
import imgHighRisk from './assets/images/Service Images/high risk pregnancy.jpeg';
import imgSurgery from './assets/images/Service Images/surgery.jpeg';
import imgFertility from './assets/images/Service Images/fertility.jpeg';
import imgMenstrual from './assets/images/Service Images/menstrual disorders.jpeg';
import imgFibroids from './assets/images/Service Images/uterine fibroids.jpg.jpeg';
import imgPcod from './assets/images/Service Images/pcod.jpeg';
import imgThyroid from './assets/images/Service Images/thyroid.jpeg';
import imgRecanalization from './assets/images/Service Images/tubal recanalization.jpeg';

import imgCtg from './assets/images/Facilities/CTG.jpeg';
import videoEcg from './assets/images/Facilities/ECG.mp4';
import imgLab from './assets/images/Facilities/lab.jpeg';
import imgPharmacy from './assets/images/Facilities/PHARMACY (2).jpeg';
import imgUltrasound from './assets/images/Facilities/ultra sound scanning.jpeg';

// User-Provided Carousel Images (Latest Updated Banners)
import imgC1 from './assets/carousel/c1.png';
import imgC2 from './assets/carousel/c2.png';
import imgC3 from './assets/carousel/c3.png';

const InstagramIcon = ({ style, className, stroke = "currentColor" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={stroke} 
    strokeWidth="2.4" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style} 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ style, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    style={style} 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);



export default function App() {
  // Hero Image Carousel Data
  const carouselSlides = [
    {
      badge: "Safe Maternity Care • Madanapalle",
      title: "Because Every Mother Deserves Safe & Caring Hands",
      subtitle: "Over 3000+ Happy Births Guided By Dr. Jyothsna Rayal MS (OBG)",
      desc: "Comprehensive pregnancy tracking, painless labor options, and 24/7 delivery emergency care.",
      image: imgC1,
      ctaPrimary: "Book Appointment",
      ctaSecondary: "Explore Services"
    },
    {
      badge: "Advanced Fetal Care & Ultrasound",
      title: "Comprehensive Obstetric & Gynaecology Care",
      subtitle: "High-Definition 4D Scans & Organ Monitoring",
      desc: "Early pregnancy viability checks, baby organ mapping, and egg growth follicular tracking.",
      image: imgC2,
      ctaPrimary: "Explore Facilities",
      ctaSecondary: "View Facilities"
    },
    {
      badge: "Sterile Cleanroom Infrastructure",
      title: "24/7 Modular Operation Theatre & Lab Services",
      subtitle: "Ready Round-The-Clock For Mother & Baby",
      desc: "Positive-pressure sterile surgical theatre equipped for instantaneous emergency deliveries.",
      image: imgC3,
      ctaPrimary: "Hospital Infrastructure",
      ctaSecondary: "Contact Us"
    }
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const nextSlide = () => {
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => prev - 1);
  };

  const goToSlide = (targetIdx) => {
    const total = carouselSlides.length;
    const currentDot = ((slideIndex % total) + total) % total;
    let diff = targetIdx - currentDot;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    setSlideIndex((prev) => prev + diff);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const totalSlides = carouselSlides.length;
  const activeDotIndex = ((slideIndex % totalSlides) + totalSlides) % totalSlides;

  // Generate 5 virtual slide slots around slideIndex for infinite conveyor belt
  const visibleSlots = [];
  for (let k = slideIndex - 2; k <= slideIndex + 2; k++) {
    const dataIdx = ((k % totalSlides) + totalSlides) % totalSlides;
    visibleSlots.push({
      virtualIndex: k,
      data: carouselSlides[dataIdx]
    });
  }
  // Real Verified Patient Reviews & Justdial Rating Index Data (151+ Ratings Across Web)
  const userReviewsList = [
    { name: "khaja", date: "10 Jan", rating: 5, tag: "Gentle Care", comment: "Jyothsna Maternity & General Hospital offers very gentle care. The staff is kind and friendly. They help with all questions and make patients feel safe. The hospital is clean and calm, which is nice for everyone. I felt comfortable during my visit. It is a good place for mothers and families. I recommend it to anyone looking for caring support!" },
    { name: "SRI RAMA ENTERPRISES", date: "06 Jul 2024", rating: 5, tag: "Best Hospital", comment: "Very good responsible doctor. I am so happy with doctor, staff has very good responsibility.... one of the best hospitals!" },
    { name: "BALAJI", date: "08 Aug 2021", rating: 4, tag: "Polite Doctor", comment: "Overall Good Especially Doctor's Way Of Talking. Very polite and comforting guidance." },
    { name: "Roja", date: "04 May 2020", rating: 5, tag: "Good Treatment", comment: "My favorite doctor and good treatment in Madanapalle town." },
    { name: "prashanth naidu", date: "27 Oct 2018", rating: 5, tag: "Amazing Care", comment: "Very good hospital and treatment is amazing thank you so much Jyothsna mam.." },
    { name: "kalpana", date: "29 Dec 2021", rating: 5, tag: "Patient Care", comment: "Nice doctor and nice staff with very patient care. Good communication skills and obedient doctor." },
    { name: "Sasidhar", date: "24 Jul 2019", rating: 5, tag: "24x7 Quality", comment: "Best in Madanapalle and Quality treatment 24×7 emergency care." },
    { name: "Anitha", date: "23 Jul 2019", rating: 5, tag: "Affordable Care", comment: "Jyothsna mam is friendly in nature, good treatment, well maintained hospital with low budget.." },
    { name: "Patient Review", date: "23 Jul 2019", rating: 4, tag: "Satisfying Care", comment: "The way doctor treats patients is very satisfying, cool, and comforting." },
    { name: "nitheesh raj", date: "05 Dec 2021", rating: 5, tag: "Super Clinic", comment: "Super clinic and excellent maternal doctor guidance." },
    { name: "B Soundarya", date: "30 Dec 2020", rating: 5, tag: "Good Care", comment: "Good treatment and very supportive nursing staff." },
    { name: "Reddy Eani", date: "26 Jul 2019", rating: 5, tag: "Good Service", comment: "Good hospital service for maternity and emergency care." },
    { name: "Noor Ahmed", date: "05 Jan 2019", rating: 4, tag: "Good Treatment", comment: "Good treatment for OBG consultation and recovery." },
    { name: "Chalapathi", date: "18 Sep 2018", rating: 5, tag: "Nice Treatment", comment: "Nice treatment and polite hospital staff." },
    { name: "Hyder", date: "18 Sep 2018", rating: 5, tag: "Good Support", comment: "Good medical care and 24/7 labor suite support." },
    { name: "Mohan Katari", date: "18 Sep 2018", rating: 5, tag: "Excellent Hospital", comment: "Excellent hospital facilities in Madanapalle region." },
    { name: "Suri", date: "18 Sep 2018", rating: 5, tag: "Nice Treatment", comment: "Nice treatment for pregnancy checkups and scans." },
    { name: "Nawaaz", date: "17 Sep 2018", rating: 4, tag: "Polite Staff", comment: "Nice doctor & polite medical staff." },
    { name: "Sreenivasulu", date: "17 Sep 2018", rating: 5, tag: "Good Consultation", comment: "Good consultation and clear medical diagnosis." },
    { name: "lg", date: "17 Sep 2018", rating: 5, tag: "Good Care", comment: "Good overall treatment and nursing care." },
    { name: "mohan redyd", date: "15 Sep 2018", rating: 5, tag: "Nice Treatment", comment: "Nice treatment for maternal health and recovery." },
    { name: "Iqbal", date: "15 Sep 2018", rating: 5, tag: "Prompt Response", comment: "Good treatment and prompt response." },
    { name: "Reddynagaraju", date: "15 Sep 2018", rating: 5, tag: "Excellent Care", comment: "Excellent experience with Dr. Jyothsna Rayal." },
    { name: "Chinna rajulu", date: "14 Sep 2018", rating: 4, tag: "Clean Facility", comment: "Nice treatment and clean, hygienic hospital environment." },
    { name: "RAJANIKANTH", date: "14 Sep 2018", rating: 5, tag: "Good Care", comment: "Good medical care and patient support." },
    { name: "SRINATH", date: "14 Sep 2018", rating: 5, tag: "Family Care", comment: "Good treatment for my family." },
    { name: "Mahaboob Khan", date: "14 Sep 2018", rating: 5, tag: "Good Hospital", comment: "Good hospital and knowledgeable doctor." },
    { name: "Sana", date: "12 Sep 2018", rating: 5, tag: "Good Guidance", comment: "Good patient care and guidance." },
    { name: "Zabi", date: "12 Sep 2018", rating: 4, tag: "Good Treatment", comment: "Good treatment for all health queries." },
    { name: "Chandhan shkear", date: "12 Sep 2018", rating: 5, tag: "Good Services", comment: "Good services and well equipped OT." },
    { name: "amanulla", date: "08 Sep 2018", rating: 5, tag: "Friendly Doctor", comment: "Treatment is good and doctor is friendly." },
    { name: "Shadq", date: "08 Sep 2018", rating: 5, tag: "Good Experience", comment: "Good experience at Jyothsna hospital." },
    { name: "Kadhar", date: "08 Sep 2018", rating: 5, tag: "Hygienic Hospital", comment: "Hospital is very nice and hygienic." },
    { name: "Abdul Aziz Shaik", date: "08 Sep 2018", rating: 5, tag: "Good Hospital", comment: "Good Hospital for maternity and OBG." },
    { name: "Saleem", date: "07 Sep 2018", rating: 4, tag: "Gentle Approach", comment: "Good treatment and gentle approach." },
    { name: "Gurumurthy", date: "07 Sep 2018", rating: 5, tag: "Helpful Staff", comment: "Nice treatment and helpful staff." },
    { name: "Javeed Studio", date: "05 Sep 2018", rating: 5, tag: "Labor Support", comment: "Good service and 24/7 labor support." },
    { name: "Sasi kala", date: "04 Sep 2018", rating: 5, tag: "Clear Advice", comment: "Doctor is good and explains everything clearly." },
    { name: "sayed shameer Basha", date: "04 Sep 2018", rating: 5, tag: "Good Facility", comment: "Good medical facility." },
    { name: "sri sastha agencies", date: "04 Sep 2018", rating: 4, tag: "Quick Response", comment: "Nice Treatment and quick response." },
    { name: "Rafi", date: "01 Sep 2018", rating: 5, tag: "Emergency Care", comment: "Good services and emergency care." },
    { name: "Ashok", date: "31 Aug 2018", rating: 5, tag: "Patient Listening", comment: "Doctor is good and listens patiently." },
    { name: "BALAJI GR", date: "30 Aug 2018", rating: 5, tag: "Nice Doctor", comment: "Nice Doctor with great expertise." },
    { name: "Narasimhalu", date: "25 Aug 2018", rating: 5, tag: "Excellent Care", comment: "Excellent treatment and hospital." },
    { name: "Chinna", date: "25 Aug 2018", rating: 4, tag: "Friendly Staff", comment: "Good Services and friendly staff." },
    { name: "ashaChaithanya", date: "18 Aug 2024", rating: 5, tag: "Excellent Treatment", comment: "Excellent treatment for delivery and checkup." },
    { name: "J Revathi", date: "07 Mar 2025", rating: 5, tag: "Well Connected", comment: "Excellent treatment, well connected hospital." },
    { name: "roopa", date: "06 Oct 2021", rating: 5, tag: "Polite Behavior", comment: "Very polite behavior and excellent medical care." },
    { name: "Taja", date: "23 Jul 2019", rating: 5, tag: "Efficient Staff", comment: "Friendly doctor and efficient nursing team." },
    { name: "ramesh", date: "28 Mar 2024", rating: 4, tag: "Helpful Doctor", comment: "Very helpful doctor and quick consultation." },
    { name: "Pavan Kalyan", date: "07 Apr 2025", rating: 5, tag: "Best Experience", comment: "Best maternity hospital experience." },
    { name: "nani saila", date: "07 Mar 2025", rating: 5, tag: "Good Experience", comment: "Very good experience and affordable." },
    { name: "Divya Sree", date: "10 Jun 2024", rating: 5, tag: "Highly Recommended", comment: "Highly recommended OBG specialist." },
    { name: "Naresh", date: "20 Oct 2023", rating: 5, tag: "Labor Support", comment: "Great support during labor delivery." },
    { name: "Patient Review", date: "24 Jul 2023", rating: 4, tag: "Prompt Care", comment: "Prompt treatment and gentle staff." },
    { name: "gowthami", date: "26 May 2023", rating: 5, tag: "Kind Doctor", comment: "Kind doctor with patient listening." },
    { name: "Pavan Kalyan", date: "28 Apr 2023", rating: 5, tag: "Maternity Care", comment: "Excellent maternity care and lab facility." },
    { name: "yeshwanth", date: "15 Sep 2022", rating: 5, tag: "Top Quality OBG", comment: "Top quality OBG hospital in Madanapalle." },
    { name: "Saiteja", date: "01 Aug 2022", rating: 5, tag: "24/7 Nursing", comment: "Comfortable stay & 24/7 nursing availability." },
    { name: "SLIKITH SAITEJA", date: "21 Jul 2022", rating: 5, tag: "Outstanding Doctor", comment: "Outstanding doctor and responsible staff." },
    { name: "Patient Review", date: "09 Jul 2022", rating: 4, tag: "Trustworthy", comment: "Trustworthy maternity and newborn care." },
    { name: "MUNNA", date: "14 Apr 2022", rating: 5, tag: "Clean Rooms", comment: "Very polite team and clean hospital rooms." },
    { name: "SRUTHI", date: "31 Mar 2022", rating: 5, tag: "Proper Guidance", comment: "Excellent treatment and proper guidance." },
    { name: "MANOHARREDDY", date: "09 Feb 2022", rating: 5, tag: "Best Doctor", comment: "Best doctor in Madanapalle town." },
    { name: "Prathyusha", date: "08 Feb 2022", rating: 5, tag: "Safe Delivery", comment: "Safe delivery and supportive care team." },
    { name: "Patient Review", date: "01 Feb 2022", rating: 4, tag: "Clear Advice", comment: "Good treatment and clear advice." },
    { name: "RAMESH", date: "30 Dec 2021", rating: 5, tag: "Professional Care", comment: "Professional medical care and facilities." },
    { name: "sai", date: "19 Mar 2021", rating: 5, tag: "Caring Team", comment: "Caring doctor and responsive team." },
    { name: "DHANA", date: "06 Feb 2021", rating: 5, tag: "Good Hospital", comment: "Very good hospital experience." },
    { name: "RAMAKRISHNA", date: "02 Nov 2020", rating: 5, tag: "Good Environment", comment: "Good environment and attentive care." },
    { name: "s ramesh", date: "24 Feb 2020", rating: 4, tag: "Top Quality", comment: "Top quality medical service." },
    { name: "Reddeppa", date: "23 Jul 2019", rating: 5, tag: "Great Treatment", comment: "Excellent doctor and great treatment." },
    { name: "Subashini", date: "23 Jul 2019", rating: 5, tag: "Happy Delivery", comment: "Very happy with the delivery treatment." },
    { name: "Ananth", date: "23 Jul 2019", rating: 5, tag: "Affordable Care", comment: "Clean environment and affordable care." },
    { name: "Vasavi", date: "23 Jul 2019", rating: 5, tag: "Compassionate", comment: "Compassionate doctor and caring staff." },
    { name: "Reddy prasad", date: "23 Jul 2019", rating: 4, tag: "Great Guidance", comment: "Great guidance for pregnant women." },
    { name: "JASWANTH", date: "23 Jul 2019", rating: 5, tag: "Excellent OT", comment: "Excellent hospital facilities & OT." },
    { name: "SATHYA", date: "18 Nov 2018", rating: 5, tag: "Emergency Care", comment: "Reliable 24/7 emergency support." }
  ];

  // Navigation & Page Routing States
  const [activePage, setActivePage] = useState('home');
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoadmapStage, setActiveRoadmapStage] = useState(1);
  const [checkedPackingItems, setCheckedPackingItems] = useState({});
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState('all');
  const [openFaqIds, setOpenFaqIds] = useState([]);
  const [visibleReels, setVisibleReels] = useState(9);

  // All Instagram Reel shortcodes from @jyothsnamaternity
  const instagramReels = [
    'DXRdvdhCUuv', 'DcV58rvp0Qt', 'DZCxokIpm_q', 'DcQ0nIvJjMW', 'DYpDPdgpHn8',
    'DcOVEsvplqV', 'Dc0zdTxpSC0', 'DcJDPbGTUM6', 'DcyQNt6pDT2', 'Dcvp8RppUVy',
    'Dcn0xk5JGg7', 'DcivUs3piV8', 'DcgMW6jp-gS', 'DcGE3lopzYM', 'Db-zrUGJrpu',
    'Db8IH9aJ7Bw', 'Db5o3VSJg8a', 'Db3BLTYiX2y', 'Dbst62XCcBR', 'DbqKz1TJD56',
    'Dbk7fFjtWhQ', 'DbgDBEbJgf7', 'DbasV-xCWCO', 'DbYL7I9peRK', 'DbVkwb5J38Z',
    'DbTBalTCSxc', 'DbN6N_qphkB', 'DbLPLTEsDmx', 'DbIgqFGCflp', 'DbGJf6xia5a',
    'DbDjQ3spsCl', 'DbA-LsViSw2', 'Da73qxBpD4s', 'Da5WWh5J3k5', 'Da2ten0tjDF',
    'DanfSOPPXIw', 'DakhwTRnS6h', 'DaiEbcjvU0W', 'DaVK4CjhNn9', 'DaSprpLsCJW',
    'DaPV__6tIx-', 'DaLAVnqpd4b', 'DaDXWkwpAjv', 'DZ46vKUJaVU', 'DZ-CWN8p3OF',
    'DZxL29Fp_Z6', 'DZujweCJMT9', 'DZr-92mNcFi', 'DZpc3cvpjao', 'DZm0zz5JX8U',
    'DZjaUvKJWYb', 'DZfKn5Qpo9B', 'DZP0kpaJH63'
  ];

  const toggleFaqId = (id) => {
    setOpenFaqIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleAllFaqs = () => {
    if (openFaqIds.length > 0) {
      setOpenFaqIds([]);
    } else {
      setOpenFaqIds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  };

  const allFaqsList = [
    {
      id: 1,
      category: 'OPD & Appointments',
      question: "What are Dr. Jyothsna Rayal's OPD consultation timings and hospital location?",
      answer: "Dr. Jyothsna Rayal MS (OBG) is available for OPD consultation Monday through Saturday from 9:00 AM to 4:00 PM at Jyothsna Maternity Hospital, Door Number 2-253-D_5-1 (Op Building), Opp Line to Touch Ice Cream Parlour, Society Colony, Madanapalle-517325, Andhra Pradesh. Emergency casualty, labor rooms, and surgical OTs operate 24/7."
    },
    {
      id: 2,
      category: 'Pregnancy & Delivery',
      question: "Does Jyothsna Hospital prioritize Normal Deliveries?",
      answer: "Yes! We strongly support natural vaginal deliveries whenever medically safe. Dr. Jyothsna provides dedicated labor support, continuous fetal CTG monitoring, gentle birth exercise guidance, and maternal care to encourage smooth natural birth."
    },
    {
      id: 3,
      category: 'Pregnancy & Delivery',
      question: "Are Painless Delivery options (Epidural Analgesia) available?",
      answer: "Absolutely. We offer Epidural Pain Relief (Painless Delivery) administered by experienced anaesthetists, allowing mothers to experience a comfortable and stress-free labor process while actively participating in birth."
    },
    {
      id: 4,
      category: 'Scans & Diagnostics',
      question: "What scanning and 4D Ultrasound diagnostic facilities are available in-house?",
      answer: "Our in-house imaging suite features advanced 4D HD Ultrasound equipment for early viability scans, 1st trimester NT screening, 4D fetal anomaly scans (18-22 weeks), growth Doppler tracking, and follicular monitoring for fertility patients."
    },
    {
      id: 5,
      category: 'Surgeries & Emergency',
      question: "Is 24/7 Emergency Labor Room and Casualty service available?",
      answer: "Yes, our emergency casualty, labor suites, pathology lab, and modular surgical operation theatre operate 24 hours a day, 7 days a week with round-the-clock emergency medical staff on duty."
    },
    {
      id: 6,
      category: 'Pregnancy & Delivery',
      question: "What high-risk pregnancy conditions are treated by Dr. Jyothsna?",
      answer: "Dr. Jyothsna specializes in managing high-risk obstetrics including Pregnancy Induced Hypertension (Preeclampsia), Gestational Diabetes (GDM), Thyroid disorders in pregnancy, Twin/Multiple pregnancies, Prev C-Section (VBAC evaluation), and Recurrent Pregnancy Loss."
    },
    {
      id: 7,
      category: 'Surgeries & Emergency',
      question: "What laparoscopic and minimally invasive gynaecology surgeries are performed?",
      answer: "We perform advanced keyhole laparoscopic and hysteroscopic surgeries for ovarian cyst removal, uterine fibroid myomectomy, tubal testing/recanalization, ectopic pregnancy management, and laparoscopic hysterectomy with minimal pain and quick recovery."
    },
    {
      id: 8,
      category: 'Scans & Diagnostics',
      question: "What infertility workup and ovulation treatments are provided?",
      answer: "We offer complete couple infertility evaluation, follicular growth tracking scans, hormonal profiling, tubal patency testing (HSG/Laparoscopy), ovulation induction, and timed intercourse protocols."
    },
    {
      id: 9,
      category: 'OPD & Appointments',
      question: "How can I book an appointment with Dr. Jyothsna Rayal?",
      answer: "You can book an appointment instantly by clicking the 'Book Appointment' button on our website, calling our helpline at +91 63036 74536, or messaging us directly on WhatsApp or Instagram."
    },
    {
      id: 10,
      category: 'OPD & Appointments',
      question: "What items and documents should I bring for delivery hospital admission?",
      answer: "Please bring parent ID proof (Aadhaar), all antenatal checkup files & ultrasound scan reports, blood group cards, comfortable maternity wear for mom, newborn swaddles/diapers, and insurance documents if applicable."
    }
  ];

  const togglePackingItem = (id) => {
    setCheckedPackingItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const facilityDataMap = {
    ultrasound: {
      title: "Ultrasound / Scanning",
      subtitle: "Advanced 4D HD Fetal Imaging & Diagnostic Scans",
      badge: "4D HD Ultrasound",
      image: imgUltrasound,
      icon: <Activity style={{ width: '28px', height: '28px' }} />,
      desc: "In-house advanced 4D HD Ultrasound equipment for pregnancy viability, anomaly scans, and Doppler tracking.",
      features: [
        "1st Trimester NT Screening & Viability Scans",
        "4D Fetal Anomaly & Growth Scans",
        "Uterine & Placental Color Doppler",
        "Egg Growth Follicular Tracking for Fertility"
      ],
      statNum: "4D HD",
      statLbl: "In-House Ultrasound Imaging",
      gradient: "linear-gradient(135deg, #880E4F 0%, #C2185B 100%)",
      graphicIcon: <Activity style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    monitoring: {
      title: "ECG & CTG",
      subtitle: "Continuous baby heartbeat & contraction monitoring",
      badge: "Fetal Monitor",
      image: imgCtg,
      video: videoEcg,
      icon: <Activity style={{ width: '28px', height: '28px' }} />,
      desc: "Real-time cardiotocography tracking fetal heartbeat and uterine contraction intensity during labor.",
      features: [
        "Real-Time Baby Heartbeat Tracking (FHR)",
        "Labor Contraction Intensity Monitoring",
        "Maternal Cardiac ECG Monitoring",
        "24/7 Delivery Room Safety Feeds"
      ],
      statNum: "Real-Time",
      statLbl: "CTG Waveform Sync",
      gradient: "linear-gradient(135deg, #C2185B 0%, #880E4F 100%)",
      graphicIcon: <Activity style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    ot: {
      title: "Advanced Operation Theatre",
      subtitle: "100% Sterile cleanroom for C-sections & surgeries",
      badge: "Modular OT",
      image: imgSurgery,
      icon: <HeartPulse style={{ width: '28px', height: '28px' }} />,
      desc: "Positive-pressure air filtration cleanroom surgical theatre ready 24/7 for planned and emergency C-sections.",
      features: [
        "Planned & Emergency C-Section Surgeries",
        "Advanced Keyhole Laparoscopic Surgical Unit",
        "HEPA Air Filtration & Anesthesia Workstation",
        "24/7 Instant Emergency OT Readiness"
      ],
      statNum: "24/7 OT",
      statLbl: "Instant Emergency Readiness",
      gradient: "linear-gradient(135deg, #AD1457 0%, #880E4F 100%)",
      graphicIcon: <HeartPulse style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    lab: {
      title: "Laboratory Services",
      subtitle: "In-house blood testing & emergency lab reports",
      badge: "24/7 Pathology Lab",
      image: imgLab,
      icon: <Beaker style={{ width: '28px', height: '28px' }} />,
      desc: "In-house clinical lab operating round-the-clock to process urgent blood panels and pregnancy tests.",
      features: [
        "Complete Blood Count (CBC) & Hemoglobin",
        "Blood Grouping & Cross-Matching",
        "Glucose Screening for Pregnancy Diabetes",
        "Thyroid & Pregnancy Hormone Tests"
      ],
      statNum: "< 15 Mins",
      statLbl: "Emergency Lab Turnaround",
      gradient: "linear-gradient(135deg, #D81B60 0%, #C2185B 100%)",
      graphicIcon: <Beaker style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    pharmacy: {
      title: "Pharmacy Services",
      subtitle: "24/7 Genuine pregnancy medicines & mother care",
      badge: "On-Site Pharmacy",
      image: imgPharmacy,
      icon: <Pill style={{ width: '28px', height: '28px' }} />,
      desc: "Stocked 24/7 exclusively with genuine clinical-grade obstetric medications and supplements.",
      features: [
        "Genuine Pregnancy Vitamins & Iron Supplements",
        "Critical Emergency Delivery Medications",
        "Post-Delivery Mother Recovery Packs",
        "Newborn Baby Care Essentials"
      ],
      statNum: "24/7",
      statLbl: "On-Site Pharmacy Stocking",
      gradient: "linear-gradient(135deg, #AD1457 0%, #D81B60 100%)",
      graphicIcon: <Pill style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    emergency247: {
      title: "24/7 Hospital Services",
      subtitle: "Round-the-Clock Emergency Casualty, Labor & Admission Care",
      badge: "24/7 Emergency Care",
      image: imgHighRisk,
      icon: <Clock style={{ width: '28px', height: '28px' }} />,
      desc: "Round-the-clock emergency casualty, labor suite readiness, and duty doctor support for maternal emergencies.",
      features: [
        "24/7 Emergency Casualty & Duty Doctor On Call",
        "24/7 Labor Suite & Normal/C-Section Backup",
        "24/7 In-House Pharmacy & Pathology Testing",
        "Emergency Nurse Call Systems & Patient Care"
      ],
      statNum: "24/7",
      statLbl: "Emergency Hospital Care",
      gradient: "linear-gradient(135deg, #880E4F 0%, #AD1457 100%)",
      graphicIcon: <Clock style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    },
    suites: {
      title: "Private Recovery Suites",
      subtitle: "Spacious private rooms for post-delivery healing",
      badge: "Recovery Suites",
      image: imgNormalDelivery,
      icon: <ShieldAlert style={{ width: '28px', height: '28px' }} />,
      desc: "Hygienic private recovery rooms with attached restrooms, attendant spaces, and nursing call buttons.",
      features: [
        "Air-Conditioned Private Family Rooms",
        "Attached Restrooms & 24/7 Hot Water",
        "Attendant Bed for Family Member",
        "24/7 Emergency Nurse Call Buttons"
      ],
      statNum: "24/7 Nursing",
      statLbl: "Private Comfort & Care",
      gradient: "linear-gradient(135deg, #D81B60 0%, #AD1457 100%)",
      graphicIcon: <ShieldAlert style={{ width: '110px', height: '110px', opacity: 0.15, position: 'absolute', right: '20px', bottom: '20px', color: '#ffffff' }} />
    }
  };

  // Pregnancy Calculator State
  const [lmpDate, setLmpDate] = useState('');
  const [eddResult, setEddResult] = useState(null);

  // Ovulation Calculator State
  const [ovulationLmpDate, setOvulationLmpDate] = useState('');
  const [ovulationCycleLength, setOvulationCycleLength] = useState('28');
  const [ovulationResult, setOvulationResult] = useState(null);

  // Appointment Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Header scroll state tracker
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for page navigation & smooth scroll to top of separate pages
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compact Dedicated Page Hero Header Banner (No Top Gap)
  const renderPageHeader = (title, subtitle, badgeText) => (
    <div style={{ background: 'linear-gradient(135deg, #880E4F 0%, #AD1457 50%, #D81B60 100%)', color: '#fff', padding: '24px 1.5rem 24px', textAlign: 'center', position: 'relative', borderBottom: '2px solid var(--soft-blush)', boxShadow: '0 8px 20px rgba(136, 14, 79, 0.2)' }}>
      <div className="container">
        <button onClick={() => navigateTo('home')} className="cta-button-pink" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '5px 14px', fontSize: '0.8rem', marginBottom: '8px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px', cursor: 'pointer' }}>
          ← Back to Main Home
        </button>
        <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2.5px', color: '#FCE4EC', fontWeight: 800, marginBottom: '4px' }}>
          {badgeText}
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', margin: 0, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.2)', lineHeight: 1.2 }}>
          {title}
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#FCE4EC', maxWidth: '650px', margin: '6px auto 0', opacity: 0.95 }}>
          {subtitle}
        </p>
      </div>
    </div>
  );



  // EDD Calculator maths
  const handleEddCalculate = (e) => {
    e.preventDefault();
    if (!lmpDate) {
      alert('Please select your Last Menstrual Period date.');
      return;
    }

    const lmp = new Date(lmpDate);
    const today = new Date();
    
    if (lmp > today) {
      alert('LMP date cannot be in the future.');
      return;
    }

    // Naegele's rule: lmp + 280 days
    const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const diffTime = Math.abs(today - lmp);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const currentWeeks = Math.floor(diffDays / 7);
    
    const diffTimeLeft = edd - today;
    const daysLeft = Math.max(0, Math.ceil(diffTimeLeft / (1000 * 60 * 60 * 24)));

    setEddResult({
      dateStr: edd.toLocaleDateString('en-US', options),
      weeks: currentWeeks,
      daysLeft: daysLeft
    });
  };

  // Ovulation Calculator Logic
  const handleOvulationCalculate = (e) => {
    e.preventDefault();
    if (!ovulationLmpDate) {
      alert('Please select your Last Menstrual Period date.');
      return;
    }

    const lmp = new Date(ovulationLmpDate);
    const today = new Date();
    const cycleLen = parseInt(ovulationCycleLength) || 28;
    
    // Ovulation typically occurs 14 days before the next period
    const lutealPhase = 14;
    const ovulationDay = cycleLen - lutealPhase;
    
    // Calculate next 3 cycles of ovulation dates
    const cycles = [];
    for (let i = 0; i < 3; i++) {
      const cycleStart = new Date(lmp.getTime() + (i * cycleLen * 24 * 60 * 60 * 1000));
      const ovulationDate = new Date(cycleStart.getTime() + (ovulationDay * 24 * 60 * 60 * 1000));
      const fertileStart = new Date(ovulationDate.getTime() - (5 * 24 * 60 * 60 * 1000));
      const fertileEnd = new Date(ovulationDate.getTime() + (1 * 24 * 60 * 60 * 1000));
      const nextPeriod = new Date(cycleStart.getTime() + (cycleLen * 24 * 60 * 60 * 1000));
      
      cycles.push({
        cycleNum: i + 1,
        ovulationDate,
        fertileStart,
        fertileEnd,
        nextPeriod
      });
    }
    
    setOvulationResult({
      cycles,
      cycleLength: cycleLen,
      ovulationDay
    });
  };

  // GSAP ScrollTrigger refresh on activePage change
  useEffect(() => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    });
  }, [activePage]);

  // Booking details form handler — Direct Instant WhatsApp Redirection
  const handleFormSubmit = (e, isModal = false) => {
    e.preventDefault();
    const form = e.target;
    
    const name = form.elements[isModal ? 'modal-name' : 'form-name'].value;
    const phone = form.elements[isModal ? 'modal-phone' : 'form-phone'].value;
    const age = form.elements[isModal ? 'modal-age' : 'form-age'].value;
    const doctor = form.elements[isModal ? 'modal-doctor' : 'form-doctor']?.value || 'Dr. Jyothsna Rayal MS (OBG)';
    const reason = form.elements[isModal ? 'modal-reason' : 'form-reason'].value;
    const date = form.elements[isModal ? 'modal-date' : 'form-date'].value;
    const time = form.elements[isModal ? 'modal-time' : 'form-time'].value;
    const notes = form.elements[isModal ? 'modal-notes' : 'form-notes'].value || 'None';

    const whatsappMsg = `Hello Jyothsna Hospital, I would like to book an appointment:%0A%0A` +
                        `👤 Patient Name: ${encodeURIComponent(name)}%0A` +
                        `📞 Phone: ${encodeURIComponent(phone)}%0A` +
                        `🎂 Age: ${encodeURIComponent(age)}%0A` +
                        `👨‍⚕️ Preferred Doctor: ${encodeURIComponent(doctor)}%0A` +
                        `🏥 Consultation: ${encodeURIComponent(reason)}%0A` +
                        `📅 Date: ${encodeURIComponent(date)}%0A` +
                        `⏰ Time Slot: ${encodeURIComponent(time)}%0A` +
                        `📝 Medical Notes: ${encodeURIComponent(notes)}`;
                        
    const redirectUrl = `https://wa.me/916303674536?text=${whatsappMsg}`;
    
    // Direct Instant Redirection to WhatsApp
    window.location.href = redirectUrl;
  };

  // Services list database for Services Page
  const allServicesData = [
    {
      id: 'normal-deliveries',
      category: 'obg',
      badge: 'Natural Birth Care',
      title: 'Normal Deliveries',
      image: imgNormalDelivery,
      desc: 'Encouraging natural vaginal birth with gentle labor support and mother-baby bonding.',
      points: [
        "Gentle Natural Vaginal Birth Support",
        "Continuous Baby Heartbeat (CTG) Tracking",
        "Painless Labor & Comfort Care Options",
        "Immediate Post-Birth Mother & Baby Bonding"
      ],
      bgGradient: 'linear-gradient(135deg, #880E4F 0%, #C2185B 100%)',
      icon: <HeartHandshake style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'high-risk-deliveries',
      category: 'obg',
      badge: 'High-Risk Safety',
      title: 'High-Risk Deliveries',
      image: imgHighRisk,
      desc: 'Specialized 24/7 care and monitoring for complex pregnancies and medical conditions.',
      points: [
        "24/7 Monitoring for Complex Pregnancies",
        "Blood Pressure & Pregnancy Diabetes Care",
        "Twin Pregnancy & Previous C-Section Safety",
        "24/7 Emergency Surgical OT Backup"
      ],
      bgGradient: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
      icon: <ShieldAlert style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'cesarean-operations',
      category: 'obg',
      badge: 'Surgical Delivery',
      title: 'Caesarean Section (C-Section)',
      image: imgSurgery,
      desc: 'Planned and emergency C-section deliveries in a sterile modular surgical theatre.',
      points: [
        "Planned & Emergency C-Section Surgery",
        "100% HEPA Sterile Cleanroom Surgery Theatre",
        "Experienced Anesthesia & Surgical Team",
        "Immediate Newborn Pediatric Care Setup"
      ],
      bgGradient: 'linear-gradient(135deg, #880E4F 0%, #AD1457 100%)',
      icon: <HeartPulse style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'infertility-treatment',
      category: 'fertility',
      badge: 'Fertility Care',
      title: 'Infertility Treatment',
      image: imgFertility,
      desc: 'Comprehensive couple evaluation, egg growth tracking scans, and conception counseling.',
      points: [
        "Complete Couple Fertility Evaluation",
        "4D Egg Growth Scans (Follicular Monitoring)",
        "Hormone Testing & Ovulation Guidance",
        "Personalized Conception Treatment Plans"
      ],
      bgGradient: 'linear-gradient(135deg, #C2185B 0%, #880E4F 100%)',
      icon: <Sparkles style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'menstrual-disorders',
      category: 'gynaec',
      badge: 'Women Health',
      title: 'Treatment for Menstrual Disorders',
      image: imgMenstrual,
      desc: 'Evaluation and personalized care for period irregularities, pain, and heavy bleeding.',
      points: [
        "Treatment for Irregular or Missed Periods",
        "Heavy Menstrual Bleeding Evaluation",
        "Severe Period Pain Relief (Dysmenorrhea)",
        "Hormonal Balance & Ovulation Care"
      ],
      bgGradient: 'linear-gradient(135deg, #AD1457 0%, #D81B60 100%)',
      icon: <User style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'uterine-fibroids',
      category: 'gynaec',
      badge: 'Gynaec Surgery',
      title: 'Treatment for Uterine Fibroids',
      image: imgFibroids,
      desc: 'Medical management and laparoscopic surgical removal of uterine fibroids.',
      points: [
        "Medical & Hormonal Fibroid Management",
        "Laparoscopic Keyhole Fibroid Surgery",
        "Uterine Preservation & Safety Techniques",
        "Pelvic Pain & Bleeding Relief"
      ],
      bgGradient: 'linear-gradient(135deg, #880E4F 0%, #AD1457 100%)',
      icon: <Award style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'pcod-thyroid',
      category: 'gynaec',
      badge: 'Hormonal Balance',
      title: 'Treatment for PCOD & Thyroid Problems',
      image: imgPcod,
      desc: 'Medical management, ovulation restoration, and thyroid hormone balancing for PCOD/PCOS.',
      points: [
        "Hormone Testing & Metabolic Profiling",
        "Thyroid Screening & Dosage Titration",
        "Ovulation Restoration Treatment",
        "Period Regularity & Lifestyle Counseling"
      ],
      bgGradient: 'linear-gradient(135deg, #D81B60 0%, #C2185B 100%)',
      icon: <Activity style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 'e-consultation',
      category: 'telehealth',
      badge: 'Online & Remote Care',
      title: 'E-Consultation',
      image: imgThyroid,
      desc: 'Connect with Dr. Jyothsna Rayal remotely via Video or Phone Call for expert medical guidance.',
      points: [
        "Online Video & Phone Doctor Consultations",
        "Prescription & Ultrasound Report Reviews",
        "First & Second Medical Opinions",
        "Direct WhatsApp & Tele-health Support"
      ],
      bgGradient: 'linear-gradient(135deg, #AD1457 0%, #880E4F 100%)',
      icon: <Video style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    },
    {
      id: 're-canalisation',
      category: 'fertility',
      badge: 'Microsurgery',
      title: 'Re-Canalisation',
      image: imgRecanalization,
      desc: 'Microsurgical tubal recanalization to restore natural fertility after tubal ligation.',
      points: [
        "Microsurgical Tubal Re-Canalisation Surgery",
        "Restoring Natural Fertility After Ligation",
        "Minimally Invasive Precision Surgery",
        "Post-Surgery Conception Support"
      ],
      bgGradient: 'linear-gradient(135deg, #C2185B 0%, #D81B60 100%)',
      icon: <Sparkles style={{ width: '80px', height: '80px', opacity: 0.18, position: 'absolute', right: '15px', bottom: '10px', color: '#ffffff' }} />
    }
  ];



  return (
    <>


      {/* 2. Site Header (100% Full Width From Left to Right) */}
      <header className={isHeaderScrolled ? 'scrolled' : ''}>
        <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <img src="/logo.jpg" alt="Jyothsna Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">Jyothsna</span>
            <span className="logo-subtitle">Maternity Hospital</span>
          </div>
        </div>

        <nav>
          <ul className="nav-links">
            <li><button className={activePage === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Home</button></li>
            <li><button className={activePage === 'care-journey' ? 'active' : ''} onClick={() => navigateTo('care-journey')}>Care Journey</button></li>
            <li><button className={activePage === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>About Us</button></li>
            <li><button className={activePage === 'services' ? 'active' : ''} onClick={() => navigateTo('services')}>Services</button></li>
            <li><button className={activePage === 'facilities' ? 'active' : ''} onClick={() => navigateTo('facilities')}>Facilities</button></li>
            <li><button className={activePage === 'pregnancy-guide' ? 'active' : ''} onClick={() => navigateTo('pregnancy-guide')}>Pregnancy Guide</button></li>
            <li><button className={activePage === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact Us</button></li>
          </ul>
        </nav>

        <div className="cta-group">
          <button className="cta-button-pink" onClick={() => { setIsModalOpen(true); setModalBookingSuccessUrl(''); }} id="book-appt-header">
            Book Appointment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(prev => !prev)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* 3. Mobile Navigation Drawer & Backdrop */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-drawer-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
          <X />
        </button>
        <div className="logo-container" style={{ marginBottom: '0.5rem' }}>
          <img src="/logo.jpg" alt="Jyothsna Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title" style={{ color: '#fff' }}>Jyothsna</span>
            <span className="logo-subtitle" style={{ color: 'var(--soft-blush)' }}>Maternity Hospital</span>
          </div>
        </div>
        <ul className="mobile-nav-links">
          <li><button className={activePage === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Home</button></li>
          <li><button className={activePage === 'care-journey' ? 'active' : ''} onClick={() => navigateTo('care-journey')}>Care Journey</button></li>
          <li><button className={activePage === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>About Us</button></li>
          <li><button className={activePage === 'services' ? 'active' : ''} onClick={() => navigateTo('services')}>Services</button></li>
          <li><button className={activePage === 'facilities' ? 'active' : ''} onClick={() => navigateTo('facilities')}>Facilities</button></li>
          <li><button className={activePage === 'pregnancy-guide' ? 'active' : ''} onClick={() => navigateTo('pregnancy-guide')}>Pregnancy Guide</button></li>
          <li><button className={activePage === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact Us</button></li>
        </ul>
        <button className="cta-button-pink" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }} onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}>
          Book Appointment
        </button>
      </div>

      {/* 4. Main Content Wrapper */}
      <main className="main-content">
        {/* ======================================================== */}
        {/* PAGE 1: HOME PAGE ONLY (FUTURISTIC LANDING SHOWCASE)      */}
        {/* ======================================================== */}
        {activePage === 'home' && (
          <div className="page-view home-page-view">
            {/* SECTION 1: HERO IMAGE CAROUSEL SHOWCASE (100% Original Crystal Clear Banners) */}
            <section className="hero-carousel-section" id="home" style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#FFF0F5' }}>
              <div 
                className="hero-carousel-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Infinite Moving Conveyor Track */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `translateX(-${slideIndex * 100}%)`,
                    transition: 'transform 0.75s cubic-bezier(0.25, 1, 0.4, 1)',
                    willChange: 'transform'
                  }}
                >
                  {visibleSlots.map(({ virtualIndex, data }) => (
                    <div
                      key={virtualIndex}
                      style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: `${virtualIndex * 100}%`,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <img 
                        src={data.image} 
                        alt={`Carousel Banner ${virtualIndex}`} 
                        className="hero-carousel-img"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows with High Contrast */}
                <button 
                  onClick={prevSlide}
                  className="carousel-arrow-btn carousel-arrow-prev"
                  aria-label="Previous Slide"
                >
                  ‹
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="carousel-arrow-btn carousel-arrow-next"
                  aria-label="Next Slide"
                >
                  ›
                </button>

                {/* Carousel Indicator Dots */}
                <div className="carousel-dots-container">
                  {carouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      style={{
                        width: idx === activeDotIndex ? '32px' : '10px',
                        height: '10px',
                        borderRadius: '10px',
                        background: idx === activeDotIndex ? 'var(--primary-pink)' : 'rgba(0, 0, 0, 0.35)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 2: LANDING PAGE OVULATION & FERTILITY CALCULATOR */}
            <section className="section section-pink" id="calculator-landing-section" style={{ padding: '3.5rem 0 4rem', background: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 100%)' }}>
              <div className="container">
                <span className="sec-tag" style={{ textAlign: 'center', marginBottom: '6px' }}>Track Your Fertile Window</span>
                <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                  Ovulation & Fertility <span>Calculator</span>
                </h2>
                <p style={{ textAlign: 'center', fontSize: '0.96rem', color: 'var(--text-dark)', maxWidth: '650px', margin: '0 auto 1.8rem', lineHeight: 1.6 }}>
                  Know your most fertile days each cycle. Enter your last period date and average cycle length to estimate your ovulation date and fertile window.
                </p>
                <div className="glass-panel" style={{ padding: '2.5rem 2.8rem', borderRadius: '24px', maxWidth: '750px', margin: '0 auto', boxShadow: '0 15px 40px rgba(216, 27, 96, 0.1)', border: '2px solid rgba(216, 27, 96, 0.2)', background: '#ffffff' }}>
                  <form onSubmit={handleOvulationCalculate}>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label className="form-label" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--deep-rose)', display: 'block', marginBottom: '8px' }}>
                        First Day of Last Menstrual Period (LMP)
                      </label>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={ovulationLmpDate} 
                        onChange={(e) => setOvulationLmpDate(e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '14px 20px', borderRadius: '14px', border: '1.5px solid var(--primary-pink)', fontSize: '1rem', background: '#ffffff' }}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1.8rem' }}>
                      <label className="form-label" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--deep-rose)', display: 'block', marginBottom: '8px' }}>
                        Average Menstrual Cycle Length (days)
                      </label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <input 
                          type="range" 
                          min="21" max="40" 
                          value={ovulationCycleLength} 
                          onChange={(e) => setOvulationCycleLength(e.target.value)} 
                          style={{ flex: 1, accentColor: 'var(--primary-pink)' }} 
                        />
                        <span style={{ 
                          background: 'var(--primary-pink)', 
                          color: '#ffffff', 
                          padding: '8px 18px', 
                          borderRadius: '20px', 
                          fontWeight: 800, 
                          fontSize: '1rem', 
                          minWidth: '70px', 
                          textAlign: 'center' 
                        }}>
                          {ovulationCycleLength} days
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Normal range: 21–40 days. Average cycle length is 28 days.</p>
                    </div>
                    <button type="submit" className="cta-button-pink" style={{ width: '100%', textAlign: 'center', padding: '14px 20px', fontSize: '1.05rem', fontWeight: 700 }}>
                      Calculate Ovulation & Fertile Days 🌸
                    </button>
                  </form>

                  {ovulationResult && (
                    <div style={{ marginTop: '2rem' }}>
                      <div style={{ background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)', padding: '1.2rem 1.5rem', borderRadius: '16px', marginBottom: '1rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--primary-pink)', fontWeight: 800, letterSpacing: '1px' }}>Your Cycle Insight</span>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', margin: '6px 0 0', lineHeight: 1.5 }}>
                          With a <strong>{ovulationResult.cycleLength}-day cycle</strong>, ovulation typically occurs around <strong>Day {ovulationResult.ovulationDay}</strong> of your cycle.
                        </p>
                      </div>

                      {ovulationResult.cycles.map((cycle) => {
                        const opts = { year: 'numeric', month: 'short', day: 'numeric' };
                        return (
                          <div key={cycle.cycleNum} style={{ 
                            background: '#ffffff', 
                            border: '1.5px solid rgba(216, 27, 96, 0.15)', 
                            borderRadius: '18px', 
                            padding: '1.5rem', 
                            marginBottom: '1rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                              <span style={{ background: 'var(--primary-pink)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                                {cycle.cycleNum}
                              </span>
                              <h4 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--deep-rose)' }}>Cycle {cycle.cycleNum}</h4>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                              <div style={{ background: 'var(--light-pink)', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary-pink)', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Ovulation Date</span>
                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--deep-rose)' }}>{cycle.ovulationDate.toLocaleDateString('en-US', opts)}</span>
                              </div>
                              <div style={{ background: '#E8F5E9', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Fertile Window</span>
                                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1B5E20' }}>{cycle.fertileStart.toLocaleDateString('en-US', opts)} – {cycle.fertileEnd.toLocaleDateString('en-US', opts)}</span>
                              </div>
                              <div style={{ background: '#FFF3E0', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#E65100', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Next Period</span>
                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#BF360C' }}>{cycle.nextPeriod.toLocaleDateString('en-US', opts)}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div style={{ background: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '14px', padding: '1rem 1.2rem', marginTop: '0.5rem' }}>
                        <p style={{ fontSize: '0.82rem', color: '#5D4037', margin: 0, lineHeight: 1.5 }}>
                          <strong>⚠️ Disclaimer:</strong> This calculator provides estimates based on average cycle patterns. Individual ovulation timing may vary. For accurate fertility assessment, consult Dr. Jyothsna Rayal at Jyothsna Maternity Hospital.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* SECTION 3: Maternal Care & Wellness Section */}
            <section className="care-journey-section" id="maternal-care">
              <div className="mother-absolute-left-screen">
                <img 
                  src="/pregnant_woman_clean.png" 
                  alt="Pregnant Woman Care" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    objectPosition: 'left bottom',
                    filter: 'drop-shadow(0 15px 35px rgba(136, 14, 79, 0.3))'
                  }} 
                />
              </div>

              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="maternal-care-wrapper">
                  <div className="maternal-care-content">
                    <span className="sec-tag">Mother & Child Healthcare</span>
                    <h2 className="sec-title" style={{ marginBottom: '1.2rem' }}>
                      Empowering Every Mother Through a <span>Safe & Joyful Journey</span>
                    </h2>
                    <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                      At <strong>Jyothsna Maternity Hospital</strong>, we celebrate motherhood as a sacred life experience. Led by chief consultant <strong>Dr. Jyothsna Rayal, MBBS, MS (OBG)</strong> and Senior Anaesthesia Specialist <strong>Dr. Jaswanth Rayal, MBBS, DA</strong>, our expert medical team provides comprehensive trimester tracking, specialized high-risk pregnancy care, painless labor support, and 24/7 emergency response.
                    </p>

                    <div className="grid-2x2-balanced" style={{ marginBottom: '2rem' }}>
                      <div className="advantage-card-3d">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Sparkles style={{ width: '20px', height: '20px' }} />
                          </div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep-rose)', margin: 0 }}>Personalized Prenatal Care</h3>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Individualized trimester checkups, maternal nutrition advice, and 4D ultrasound growth monitoring.</p>
                      </div>

                      <div className="advantage-card-3d">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <ShieldAlert style={{ width: '20px', height: '20px' }} />
                          </div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep-rose)', margin: 0 }}>High-Risk Obstetrics Support</h3>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Expert clinical management for pregnancies with hypertension, diabetes, or past C-sections.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                      <button className="cta-button-pink" onClick={() => setIsModalOpen(true)}>
                        Book Maternity Consultation ↗
                      </button>
                      <button onClick={() => navigateTo('care-journey')} className="cta-button-white">
                        Explore Care Journey Roadmap →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: THE JYOTHSNA STANDARD (PERFECT BALANCED 2x2 GRID) */}
            <section className="section section-white" style={{ padding: '5rem 0' }}>
              <div className="container">
                <h2 className="sec-title">State-of-the-Art <span>Clinical Infrastructure</span></h2>

                {/* SINGLE ROW SLEEK GRID FOR INFRASTRUCTURE CARDS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
                  {/* Card 1: Operation Theatre */}
                  <div className="advantage-card-3d" style={{ padding: '1.4rem', borderRadius: '22px' }}>
                    <div>
                      {/* Photo Visual Banner */}
                      <div style={{ width: '100%', height: '110px', borderRadius: '16px', marginBottom: '1rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(216,27,96,0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <img src={imgSurgery} alt="Operation Theatre" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <HeartPulse style={{ width: '18px', height: '18px' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-pink)', background: 'var(--light-pink)', padding: '3px 10px', borderRadius: '12px' }}>MODULAR OT</span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '6px' }}>Operation Theatre</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>HEPA sterile cleanroom surgical theatre ready 24/7 for planned & emergency C-sections.</p>
                    </div>
                    <button onClick={() => navigateTo('facilities')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'left', padding: 0 }}>Explore OT →</button>
                  </div>

                  {/* Card 3: ECG & CTG (WITH LIVE ANIMATED ECG MONITOR WAVE / VIDEO) */}
                  <div className="advantage-card-3d" style={{ padding: '1.4rem', borderRadius: '22px' }}>
                    <div>
                      {/* Dynamic Visual Banner with Real User ECG Video */}
                      <div style={{ width: '100%', height: '110px', borderRadius: '16px', background: '#000000', marginBottom: '1rem', position: 'relative', overflow: 'hidden', border: '1.5px solid rgba(37, 211, 102, 0.5)', boxShadow: '0 8px 20px rgba(37, 211, 102, 0.2)' }}>
                        <video src={videoEcg} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{ position: 'absolute', top: '8px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#25D366', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 800 }}>LIVE ECG</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Activity style={{ width: '18px', height: '18px' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-pink)', background: 'var(--light-pink)', padding: '3px 10px', borderRadius: '12px' }}>LIVE SYNC</span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '6px' }}>ECG & CTG</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Real-time baby heartbeat waveforms & maternal contraction tracking.</p>
                    </div>
                    <button onClick={() => navigateTo('facilities')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'left', padding: 0 }}>Explore ECG & CTG →</button>
                  </div>

                  {/* Card 4: Private Recovery Suites */}
                  <div className="advantage-card-3d" style={{ padding: '1.4rem', borderRadius: '22px' }}>
                    <div>
                      {/* Photo Visual Banner */}
                      <div style={{ width: '100%', height: '110px', borderRadius: '16px', marginBottom: '1rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(216,27,96,0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <img src={imgNormalDelivery} alt="Private Recovery Suites" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <BedDouble style={{ width: '18px', height: '18px' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-pink)', background: 'var(--light-pink)', padding: '3px 10px', borderRadius: '12px' }}>PRIVATE ROOM</span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '6px' }}>Private Recovery Suites</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Private family recovery rooms with attached restrooms & 24/7 nursing call buttons.</p>
                    </div>
                    <button onClick={() => navigateTo('facilities')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'left', padding: 0 }}>Explore Suites →</button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: FEATURED SERVICES OVERVIEW (2 x 2 BALANCED GRID) */}
            <section className="section section-pink" style={{ padding: '5rem 0' }}>
              <div className="container">
                <span className="sec-tag">Specialized Care Directory</span>
                <h2 className="sec-title">Explore Our <span>Specialities</span></h2>

                {/* SINGLE HORIZONTAL ROW GRID FOR SPECIALITY CARDS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
                  <div className="advantage-card-3d" style={{ padding: '1.5rem 1.2rem', borderRadius: '22px' }}>
                    <User style={{ width: '32px', height: '32px', color: 'var(--primary-pink)', marginBottom: '10px' }} />
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '6px' }}>OBG & Antenatal Checkup</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.8rem' }}>Routine gynaecological screening, pre-conception counselling, and PCOD care.</p>
                    <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', padding: 0 }}>Learn More →</button>
                  </div>

                  <div className="advantage-card-3d" style={{ padding: '1.5rem 1.2rem', borderRadius: '22px' }}>
                    <ShieldAlert style={{ width: '32px', height: '32px', color: 'var(--primary-pink)', marginBottom: '10px' }} />
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '6px' }}>High-Risk Delivery Care</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.8rem' }}>Clinical tracking for hypertension, gestational diabetes, thyroid, and twin births.</p>
                    <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', padding: 0 }}>Learn More →</button>
                  </div>

                  <div className="advantage-card-3d" style={{ padding: '1.5rem 1.2rem', borderRadius: '22px' }}>
                    <Sparkles style={{ width: '32px', height: '32px', color: 'var(--primary-pink)', marginBottom: '10px' }} />
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '6px' }}>Infertility & Laparoscopy</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.8rem' }}>Ovulation tracking, keyhole fibroid/cyst removal, and fertility assistance.</p>
                    <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: 'var(--primary-pink)', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', padding: 0 }}>Learn More →</button>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button onClick={() => navigateTo('services')} className="cta-button-pink">
                    View Complete Services & Specialities Catalog ↗
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 6: PATIENT REVIEWS MARQUEE */}
            <section className="section section-white" style={{ padding: '2.5rem 0 2rem', overflow: 'hidden' }}>
              <div className="container" style={{ marginBottom: '1.2rem' }}>
                <span className="sec-tag" style={{ marginBottom: '4px' }}>100% Patient Feedback</span>
                <h2 className="sec-title" style={{ marginBottom: '1.2rem' }}>
                  What Patients Say <span>About Dr. Jyothsna Rayal</span>
                </h2>

                {/* Rating Summary Card */}
                <div style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 100%)', border: '1.5px solid var(--primary-pink)', borderRadius: '20px', padding: '1rem 1.5rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', boxShadow: '0 8px 25px rgba(216, 27, 96, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--primary-pink)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900, boxShadow: '0 6px 16px rgba(216, 27, 96, 0.25)' }}>
                      4.9
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFB800', marginBottom: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} style={{ fill: '#FFB800', width: '18px', height: '18px' }} />
                        ))}
                        <span style={{ color: 'var(--deep-rose)', fontWeight: 800, fontSize: '1rem', marginLeft: '6px' }}>4.9 / 5.0 Rating Index</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                        <strong>151 Ratings</strong> • Rating Index based on 151 patient ratings & reviews across the web
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#128C7E', padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      ✓ 100% Patient Rating Index
                    </span>
                  </div>
                </div>
              </div>

              {/* Single Row Continuous Moving Testimonial Marquee Ticker */}
              <div className="reviews-marquee-container" style={{ padding: '0.2rem 0' }}>
                <div className="reviews-marquee-track-left">
                  {[...userReviewsList, ...userReviewsList].map((review, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        minWidth: '310px', 
                        maxWidth: '350px', 
                        background: '#ffffff', 
                        border: '1.5px solid rgba(216, 27, 96, 0.15)', 
                        borderRadius: '20px', 
                        padding: '1.1rem 1.3rem', 
                        boxShadow: '0 8px 25px rgba(216, 27, 96, 0.06)',
                        flexShrink: 0
                      }}
                    >
                      {/* TOP: Patient Name & Tag */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <div style={{ fontWeight: 800, color: 'var(--deep-rose)', fontSize: '1.02rem' }}>{review.name}</div>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary-pink)', background: 'var(--light-pink)', padding: '3px 10px', borderRadius: '12px' }}>
                          {review.tag}
                        </span>
                      </div>

                      {/* SECOND ROW: Stars + Date */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingBottom: '6px', borderBottom: '1px dashed rgba(216, 27, 96, 0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                style={{ 
                                  fill: i < (review.rating || 5) ? '#FFB800' : '#E0E0E0', 
                                  color: i < (review.rating || 5) ? '#FFB800' : '#E0E0E0', 
                                  width: '15px', 
                                  height: '15px' 
                                }} 
                              />
                            ))}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          Madanapalle • {review.date}
                        </span>
                      </div>

                      {/* BODY: Comment Text directly below! */}
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
                        "{review.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 7: EMERGENCY HELPLINE BANNER */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #880E4F 0%, #AD1457 100%)', color: '#ffffff', padding: '3rem 0', textAlign: 'center', boxShadow: '0 20px 50px rgba(136, 14, 79, 0.4)' }}>
              <div className="container">
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4rem', margin: '0 0 10px', color: '#ffffff' }}>
                  Need Immediate Medical Assistance or Appointment?
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#FCE4EC', maxWidth: '650px', margin: '0 auto 2rem' }}>
                  Our emergency casualty and labor suites are open 24 hours a day, 7 days a week in Madanapalle.
                </p>
                <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {/* PERFECT BOLD DARK ROSE TEXT ON WHITE BUTTON FIX */}
                  <a href="tel:+916303674536" className="cta-button-white" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                    📞 Call 24/7 Helpline: +91 63036 74536
                  </a>
                  <button onClick={() => navigateTo('contact')} className="cta-button-pink" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                    Book Appointment Online ↗
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 2: CARE JOURNEY & MATERNITY ROADMAP                  */}
        {/* ======================================================== */}
        {activePage === 'care-journey' && (
          <div className="page-view care-journey-page-view">
            {renderPageHeader(
              "Care Journey & Maternity Roadmap",
              "Comprehensive Step-by-Step Prenatal Care & Delivery Timeline",
              "Maternity Roadmap"
            )}
            
            <section className="section section-white" id="care-roadmap" style={{ padding: '4.5rem 0 5rem' }}>
              <div className="container">
                <span className="sec-tag">Your Care Roadmap</span>
                <h2 className="sec-title" style={{ marginBottom: '2.5rem' }}>Step-by-Step <span>Maternity Journey</span></h2>

                {/* Sleek & Compact 4-Column Single Row Care Journey Grid */}
                <div className="roadmap-4col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem', maxWidth: '1400px', margin: '0 auto' }}>
                  
                  {/* Stage 1 Card */}
                  <div 
                    onClick={() => setActiveRoadmapStage(1)}
                    style={{
                      background: activeRoadmapStage === 1 ? 'linear-gradient(135deg, rgba(216, 27, 96, 0.04) 0%, rgba(173, 20, 87, 0.08) 100%)' : '#ffffff',
                      border: activeRoadmapStage === 1 ? '2.5px solid var(--primary-pink)' : '1.5px solid rgba(216, 27, 96, 0.2)',
                      borderRadius: '20px',
                      padding: '1.2rem 1.1rem',
                      boxShadow: activeRoadmapStage === 1 ? '0 15px 35px rgba(216, 27, 96, 0.18)' : '0 6px 20px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Photography Header */}
                      <div style={{ width: '100%', height: '115px', borderRadius: '14px', overflow: 'hidden', marginBottom: '0.8rem', position: 'relative', boxShadow: '0 6px 18px rgba(216, 27, 96, 0.15)', border: '1.5px solid rgba(216, 27, 96, 0.2)' }}>
                        <img src={imgLab} alt="Prenatal Vaccination Care" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '6px 10px', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          ✦ Stage 01 • Immunization
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-pink)' }}>
                          Stage 01
                        </span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.68rem', fontWeight: 800 }}>
                          Early Trimester
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 10px', fontWeight: 700, lineHeight: 1.25 }}>
                        Vaccination & Immunization
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.8rem', borderTop: '1.5px dashed rgba(216, 27, 96, 0.2)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Tdap & Tetanus Boosters
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Maternal Antibody Shield
                      </div>
                    </div>
                  </div>

                  {/* Stage 2 Card */}
                  <div 
                    onClick={() => setActiveRoadmapStage(2)}
                    style={{
                      background: activeRoadmapStage === 2 ? 'linear-gradient(135deg, rgba(216, 27, 96, 0.04) 0%, rgba(173, 20, 87, 0.08) 100%)' : '#ffffff',
                      border: activeRoadmapStage === 2 ? '2.5px solid var(--primary-pink)' : '1.5px solid rgba(216, 27, 96, 0.2)',
                      borderRadius: '20px',
                      padding: '1.2rem 1.1rem',
                      boxShadow: activeRoadmapStage === 2 ? '0 15px 35px rgba(216, 27, 96, 0.18)' : '0 6px 20px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Photography Header */}
                      <div style={{ width: '100%', height: '115px', borderRadius: '14px', overflow: 'hidden', marginBottom: '0.8rem', position: 'relative', boxShadow: '0 6px 18px rgba(216, 27, 96, 0.15)', border: '1.5px solid rgba(216, 27, 96, 0.2)' }}>
                        <img src={imgHighRisk} alt="Obstetric Growth Scanning" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '6px 10px', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          ✦ Stage 02 • Fetal Health Check
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-pink)' }}>
                          Stage 02
                        </span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.68rem', fontWeight: 800 }}>
                          Mid Trimester
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 10px', fontWeight: 700, lineHeight: 1.25 }}>
                        Anatomy & Growth Mapping
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.8rem', borderTop: '1.5px dashed rgba(216, 27, 96, 0.2)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Organ Growth Check (18-22 Wks)
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Color Doppler & Heartbeat
                      </div>
                    </div>
                  </div>

                  {/* Stage 3 Card */}
                  <div 
                    onClick={() => setActiveRoadmapStage(3)}
                    style={{
                      background: activeRoadmapStage === 3 ? 'linear-gradient(135deg, rgba(216, 27, 96, 0.04) 0%, rgba(173, 20, 87, 0.08) 100%)' : '#ffffff',
                      border: activeRoadmapStage === 3 ? '2.5px solid var(--primary-pink)' : '1.5px solid rgba(216, 27, 96, 0.2)',
                      borderRadius: '20px',
                      padding: '1.2rem 1.1rem',
                      boxShadow: activeRoadmapStage === 3 ? '0 15px 35px rgba(216, 27, 96, 0.18)' : '0 6px 20px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between'
                    }}
                  >
                    <div>
                      {/* Photography Header */}
                      <div style={{ width: '100%', height: '115px', borderRadius: '14px', overflow: 'hidden', marginBottom: '0.8rem', position: 'relative', boxShadow: '0 6px 18px rgba(216, 27, 96, 0.15)', border: '1.5px solid rgba(216, 27, 96, 0.2)' }}>
                        <img src={imgCtg} alt="Child Grows & Delivery Prep" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '6px 10px', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          ✦ Stage 03 • Delivery Prep
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-pink)' }}>
                          Stage 03
                        </span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.68rem', fontWeight: 800 }}>
                          Late Trimester
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 10px', fontWeight: 700, lineHeight: 1.25 }}>
                        Birth Prep & CTG
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.8rem', borderTop: '1.5px dashed rgba(216, 27, 96, 0.2)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> CTG Fetal Heart Monitoring
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> 24/7 OT & Labor Suite
                      </div>
                    </div>
                  </div>

                  {/* Stage 4 Card */}
                  <div 
                    onClick={() => setActiveRoadmapStage(4)}
                    style={{
                      background: activeRoadmapStage === 4 ? 'linear-gradient(135deg, rgba(216, 27, 96, 0.04) 0%, rgba(173, 20, 87, 0.08) 100%)' : '#ffffff',
                      border: activeRoadmapStage === 4 ? '2.5px solid var(--primary-pink)' : '1.5px solid rgba(216, 27, 96, 0.2)',
                      borderRadius: '20px',
                      padding: '1.2rem 1.1rem',
                      boxShadow: activeRoadmapStage === 4 ? '0 15px 35px rgba(216, 27, 96, 0.18)' : '0 6px 20px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between'
                    }}
                  >
                    <div>
                      {/* Photography Header */}
                      <div style={{ width: '100%', height: '115px', borderRadius: '14px', overflow: 'hidden', marginBottom: '0.8rem', position: 'relative', boxShadow: '0 6px 18px rgba(216, 27, 96, 0.15)', border: '1.5px solid rgba(216, 27, 96, 0.2)' }}>
                        <img src={imgNormalDelivery} alt="Happy Family & Postpartum Care" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '6px 10px', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          ✦ Stage 04 • Postpartum Care
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-pink)' }}>
                          Stage 04
                        </span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.68rem', fontWeight: 800 }}>
                          Postpartum
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.1rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 10px', fontWeight: 700, lineHeight: 1.25 }}>
                        Postpartum & Newborn Care
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.8rem', borderTop: '1.5px dashed rgba(216, 27, 96, 0.2)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Newborn Pediatric Checkup
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--light-pink)', padding: '6px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--deep-rose)' }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: 'var(--primary-pink)', flexShrink: 0 }} /> Lactation & Recovery Support
                      </div>
                    </div>
                  </div>

                </div>
                <div style={{ maxWidth: '1150px', margin: '4rem auto 0', background: 'var(--light-pink)', padding: '3rem 3.5rem', borderRadius: '28px', border: '2px solid rgba(216, 27, 96, 0.25)', boxShadow: '0 15px 40px rgba(216, 27, 96, 0.1)' }}>
                  <span className="sec-tag" style={{ textAlign: 'left' }}>Hospital Bag Checklist</span>
                  <h3 style={{ fontSize: '2rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', fontWeight: 700 }}>
                    What to Pack for Delivery Day
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Mother Bag */}
                    <div style={{ background: '#ffffff', padding: '1.8rem 2rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.15)', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
                      <h4 style={{ color: 'var(--primary-pink)', fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px' }}>For Mother</h4>
                      {[
                        { id: 'm1', text: 'Comfortable maternity gowns & front-open dresses' },
                        { id: 'm2', text: 'Nursing bras & breast pads' },
                        { id: 'm3', text: 'Maternity sanitary napkins' },
                        { id: 'm4', text: 'Personal toiletries & non-slip slippers' }
                      ].map(item => (
                        <div key={item.id} onClick={() => togglePackingItem(item.id)} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', cursor: 'pointer', fontSize: '0.95rem', background: checkedPackingItems[item.id] ? 'var(--light-pink)' : 'transparent', border: checkedPackingItems[item.id] ? '1.5px solid var(--primary-pink)' : '1.5px solid transparent', padding: '10px 14px', borderRadius: '14px', transition: 'all 0.2s ease', boxShadow: checkedPackingItems[item.id] ? '0 4px 12px rgba(216, 27, 96, 0.15)' : 'none' }}>
                          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: checkedPackingItems[item.id] ? 'var(--primary-pink)' : '#e0e0e0', color: checkedPackingItems[item.id] ? '#ffffff' : '#888888', border: '1.5px solid var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0 }}>✓</span>
                          <span style={{ fontWeight: checkedPackingItems[item.id] ? 700 : 600, color: checkedPackingItems[item.id] ? 'var(--deep-rose)' : 'var(--text-dark)' }}>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Baby Bag */}
                    <div style={{ background: '#ffffff', padding: '1.8rem 2rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.15)', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
                      <h4 style={{ color: 'var(--primary-pink)', fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px' }}>For Baby</h4>
                      {[
                        { id: 'b1', text: 'Soft cotton baby swaddles & blankets' },
                        { id: 'b2', text: 'Newborn diapers & gentle wet wipes' },
                        { id: 'b3', text: 'Baby caps, mittens & socks' },
                        { id: 'b4', text: 'Soft cotton bibs & washcloths' }
                      ].map(item => (
                        <div key={item.id} onClick={() => togglePackingItem(item.id)} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', cursor: 'pointer', fontSize: '0.95rem', background: checkedPackingItems[item.id] ? 'var(--light-pink)' : 'transparent', border: checkedPackingItems[item.id] ? '1.5px solid var(--primary-pink)' : '1.5px solid transparent', padding: '10px 14px', borderRadius: '14px', transition: 'all 0.2s ease', boxShadow: checkedPackingItems[item.id] ? '0 4px 12px rgba(216, 27, 96, 0.15)' : 'none' }}>
                          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: checkedPackingItems[item.id] ? 'var(--primary-pink)' : '#e0e0e0', color: checkedPackingItems[item.id] ? '#ffffff' : '#888888', border: '1.5px solid var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0 }}>✓</span>
                          <span style={{ fontWeight: checkedPackingItems[item.id] ? 700 : 600, color: checkedPackingItems[item.id] ? 'var(--deep-rose)' : 'var(--text-dark)' }}>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Documents */}
                    <div style={{ background: '#ffffff', padding: '1.8rem 2rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.15)', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
                      <h4 style={{ color: 'var(--primary-pink)', fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px' }}>Medical & ID Documents</h4>
                      {[
                        { id: 'd1', text: 'Aadhaar Card / ID Proof of both parents' },
                        { id: 'd2', text: 'All previous antenatal checkup files & scans' },
                        { id: 'd3', text: 'Blood group cards & latest lab reports' },
                        { id: 'd4', text: 'Insurance card or cashless policy file' }
                      ].map(item => (
                        <div key={item.id} onClick={() => togglePackingItem(item.id)} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', cursor: 'pointer', fontSize: '0.95rem', background: checkedPackingItems[item.id] ? 'var(--light-pink)' : 'transparent', border: checkedPackingItems[item.id] ? '1.5px solid var(--primary-pink)' : '1.5px solid transparent', padding: '10px 14px', borderRadius: '14px', transition: 'all 0.2s ease', boxShadow: checkedPackingItems[item.id] ? '0 4px 12px rgba(216, 27, 96, 0.15)' : 'none' }}>
                          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: checkedPackingItems[item.id] ? 'var(--primary-pink)' : '#e0e0e0', color: checkedPackingItems[item.id] ? '#ffffff' : '#888888', border: '1.5px solid var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0 }}>✓</span>
                          <span style={{ fontWeight: checkedPackingItems[item.id] ? 700 : 600, color: checkedPackingItems[item.id] ? 'var(--deep-rose)' : 'var(--text-dark)' }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 3: ABOUT US PAGE VIEW & DR. JYOTHSNA CARD FIX        */}
        {/* ======================================================== */}
        {activePage === 'about' && (
          <div className="page-view about-page-view">
            {renderPageHeader(
              "About Jyothsna Hospital",
              "Over 15 Years of Compassionate Obstetrics & Gynaecology Care in Madanapalle",
              "Who We Are"
            )}

            <section className="section section-pink" id="about">
              <div className="container">
                <span className="sec-tag">Who We Are</span>
                <h2 className="sec-title">Caring for Madanapalle with <span>Warmth & Expertise</span></h2>
                
                {/* Hospital Overview Header Card */}
                <div style={{ background: '#ffffff', border: '2px solid rgba(216, 27, 96, 0.25)', borderRadius: '28px', padding: '2.2rem 2rem', boxShadow: '0 15px 40px rgba(216, 27, 96, 0.12)', marginBottom: '2.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.2px' }}>
                    Welcome to Jyothsna Maternity & General Hospital
                  </h3>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '12px' }}>
                    Founded in <strong>2018</strong> by <strong>Dr. Jyothsna Rayal, MBBS, MS (OBG)</strong> and <strong>Dr. Jaswanth Rayal, MBBS, DA</strong>, our hospital has proudly supported mothers and families with <strong>3000+ successful deliveries</strong> till date in Madanapalle.
                  </p>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '16px' }}>
                    From routine antenatal checkups to <strong>painless labor epidurals, high-risk obstetrics, and 24/7 emergency surgeries</strong>, our expert doctors provide seamless, compassionate care under one roof.
                  </p>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--primary-pink)', fontWeight: 700, paddingLeft: '14px', borderLeft: '3.5px solid var(--primary-pink)' }}>
                    “Because Every Mother Deserves Safe & Caring Hands”
                  </div>
                </div>

                <span className="sec-tag">Medical Leadership</span>
                <h3 className="sec-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Our Senior <span>Consultant Doctors</span></h3>

                {/* 2-Column Grid for Both Doctors */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  
                  {/* Doctor 1: Dr. Jyothsna Rayal */}
                  <div style={{ background: '#ffffff', border: '2px solid rgba(216, 27, 96, 0.25)', borderRadius: '28px', padding: '2.2rem 2rem', boxShadow: '0 15px 40px rgba(216, 27, 96, 0.12)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                    <div>
                      <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary-pink)', boxShadow: '0 8px 25px rgba(216, 27, 96, 0.3)', background: 'linear-gradient(180deg, #FFF0F5 0%, #F8BBD0 100%)', margin: '0 auto 1rem' }}>
                        <img 
                          src="/dr_jyothsna_nobg.png" 
                          alt="Dr. Jyothsna Rayal MS (OBG)" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
                        />
                      </div>

                      <h3 style={{ fontSize: '1.75rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 4px', fontWeight: 700 }}>Dr. Jyothsna Rayal</h3>
                      <p style={{ color: 'var(--primary-pink)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>MBBS, MS (OBG)</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '1rem', fontWeight: 600 }}>Founder & Chief Obstetrician & Gynaecologist</p>

                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>Founded in 2018</span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>3000+ Safe Births</span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>High-Risk Pregnancy</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ background: 'var(--light-pink)', border: '1px solid var(--soft-blush)', padding: '10px 14px', borderRadius: '16px', textAlign: 'left', marginBottom: '1rem', fontSize: '0.84rem', color: 'var(--deep-rose)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span>🗓 OPD Consultation:</span>
                          <strong>Mon – Sat (9 AM – 4 PM)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>🚑 Labor Suite & Casualty:</span>
                          <strong style={{ color: 'var(--primary-pink)' }}>24/7 Emergency Open</strong>
                        </div>
                      </div>

                      <button onClick={() => setIsModalOpen(true)} className="cta-button-pink" style={{ width: '100%', fontSize: '0.92rem', padding: '11px 18px' }}>
                        Book Consultation with Dr. Jyothsna ↗
                      </button>
                    </div>
                  </div>

                  {/* Doctor 2: Dr. Jaswanth Rayal */}
                  <div style={{ background: '#ffffff', border: '2px solid rgba(216, 27, 96, 0.25)', borderRadius: '28px', padding: '2.2rem 2rem', boxShadow: '0 15px 40px rgba(216, 27, 96, 0.12)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                    <div>
                      <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary-pink)', boxShadow: '0 8px 25px rgba(216, 27, 96, 0.3)', background: 'linear-gradient(135deg, #880E4F 0%, #D81B60 100%)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                        <User style={{ width: '75px', height: '75px', opacity: 0.95 }} />
                      </div>

                      <h3 style={{ fontSize: '1.75rem', color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)', margin: '0 0 4px', fontWeight: 700 }}>Dr. Jaswanth Rayal</h3>
                      <p style={{ color: 'var(--primary-pink)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>MBBS, DA (Anaesthesia Specialist)</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '1rem', fontWeight: 600 }}>Consultant Anaesthesiologist & Critical Care Specialist</p>

                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>Anaesthesia Specialist</span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>Painless Labor Epidurals</span>
                        <span style={{ background: 'var(--light-pink)', color: 'var(--primary-pink)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>Surgical OT Safety</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ background: 'var(--light-pink)', border: '1px solid var(--soft-blush)', padding: '10px 14px', borderRadius: '16px', textAlign: 'left', marginBottom: '1rem', fontSize: '0.84rem', color: 'var(--deep-rose)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span>🏥 Surgical OT Care:</span>
                          <strong>24/7 OT & Surgery Backup</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>💉 Painless Delivery Care:</span>
                          <strong style={{ color: 'var(--primary-pink)' }}>On Demand 24/7</strong>
                        </div>
                      </div>

                      <button onClick={() => setIsModalOpen(true)} className="cta-button-pink" style={{ width: '100%', fontSize: '0.92rem', padding: '11px 18px' }}>
                        Book Consultation with Dr. Jaswanth ↗
                      </button>
                    </div>
                  </div>

                </div>

                {/* Core Clinical Values Grid */}
                <div style={{ marginTop: '4rem' }} className="grid-2x2-balanced">
                  <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.18)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <HeartHandshake style={{ width: '22px', height: '22px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '8px' }}>Patient-First Compassion</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>Listening to every patient's concerns with empathy, dignity, and personalized care.</p>
                  </div>

                  <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.18)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <ShieldAlert style={{ width: '22px', height: '22px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '8px' }}>HEPA Infection Control</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>Maintaining modular cleanroom surgical OTs for 100% sterile C-section procedures.</p>
                  </div>

                  <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.18)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <Sparkles style={{ width: '22px', height: '22px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '8px' }}>Normal Birth Encouragement</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>Guiding mothers through gentle birth exercises, labor pain relief, and natural delivery.</p>
                  </div>

                  <div style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.18)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--light-pink)', color: 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <Clock style={{ width: '22px', height: '22px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--deep-rose)', fontWeight: 700, marginBottom: '8px' }}>24/7 Clinical Readiness</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>In-house blood lab, pharmacy, and casualty team operating 24 hours every single day.</p>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 4: SERVICES PAGE VIEW                                */}
        {/* ======================================================== */}
        {/* ======================================================== */}
        {/* PAGE 4: SERVICES CATALOG (ALL SERVICES DIRECTLY DISPLAYED) */}
        {/* ======================================================== */}
        {activePage === 'services' && (
          <div className="page-view services-page-view">
            {renderPageHeader(
              "Specialized Medical Services",
              "Expert Care for Every Stage of Women's Health & Wellness",
              "Specialized Care"
            )}

            <section className="section section-white" id="services">
              <div className="container">
                <span className="sec-tag">Specialized Care</span>
                <h2 className="sec-title">Providing Care at <span>Every Stage of Life</span></h2>

                {/* Services Grid displaying ALL 9 Services */}
                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2rem' }}>
                  {allServicesData.map(service => (
                    <div key={service.id} style={{ background: '#ffffff', border: '1.5px solid rgba(216, 27, 96, 0.18)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(216, 27, 96, 0.08)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                      {/* Real Clinical Photography Header */}
                      <div style={{ width: '100%', height: '190px', position: 'relative', overflow: 'hidden' }}>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          onError={(e) => { e.target.onerror = null; e.target.src = '/service_vaccination.jpg'; }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} 
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(136, 14, 79, 0.85) 100%)' }} />
                        <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.95)', color: 'var(--primary-pink)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                          {service.badge}
                        </span>
                        <div style={{ position: 'absolute', bottom: '15px', left: '18px', right: '18px', zIndex: 2 }}>
                          <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                        <div>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.5, marginBottom: '1.2rem', fontWeight: 500 }}>
                            {service.desc}
                          </p>

                          {service.points && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                              {service.points.map((pt, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--deep-rose)', background: 'var(--light-pink)', border: '1px solid rgba(216, 27, 96, 0.12)', padding: '8px 12px', borderRadius: '12px', fontWeight: 600 }}>
                                  <span style={{ color: 'var(--primary-pink)', fontWeight: 800 }}>✓</span> {pt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <button onClick={() => { setIsModalOpen(true); setModalBookingSuccessUrl(''); }} className="cta-button-pink" style={{ width: '100%', textAlign: 'center', fontSize: '0.95rem', padding: '12px 16px' }}>
                          Book Consultation ↗
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 5: FACILITIES PAGE VIEW (ALL FACILITIES DIRECTLY DISPLAYED) */}
        {/* ======================================================== */}
        {activePage === 'facilities' && (
          <div className="page-view facilities-page-view">
            {renderPageHeader(
              "Hospital Facilities & Infrastructure",
              "Everything Under One Roof for Comfort, Advanced Diagnostics & Recovery",
              "Our Facilities"
            )}

            <section className="section section-pink" id="facilities" style={{ padding: '4rem 0 5rem' }}>
              <div className="container">
                <span className="sec-tag">Everything Under One Roof</span>
                <h2 className="sec-title" style={{ marginBottom: '3rem' }}>Hospital Facilities & <span>Clinical Infrastructure</span></h2>

                {/* Sleek 3-Column Compact Grid for Facilities Page */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                  {Object.keys(facilityDataMap).map((key) => {
                    const facility = facilityDataMap[key];
                    return (
                      <div 
                        key={key}
                        style={{
                          background: '#ffffff',
                          border: '1.5px solid rgba(216, 27, 96, 0.18)',
                          borderRadius: '22px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(216, 27, 96, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {/* High-Res Compact Facility Header Photo / Video */}
                        <div style={{ width: '100%', height: '160px', position: 'relative', overflow: 'hidden' }}>
                          {facility.video ? (
                            <video src={facility.video} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <img 
                              src={facility.image} 
                              alt={facility.title} 
                              onError={(e) => { e.target.onerror = null; e.target.src = '/service_ultrasound.jpg'; }}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                            />
                          )}
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(136, 14, 79, 0.8) 100%)' }} />
                          
                          <div style={{ position: 'absolute', top: '12px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                            <span style={{ background: 'var(--primary-pink)', color: '#ffffff', padding: '4px 10px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              {facility.badge}
                            </span>
                          </div>

                          <div style={{ position: 'absolute', bottom: '12px', left: '14px', right: '14px', zIndex: 2 }}>
                            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                              {facility.title}
                            </h3>
                          </div>
                        </div>

                        <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                          <div>
                            <p style={{ fontSize: '0.92rem', color: 'var(--primary-pink)', fontWeight: 700, marginBottom: '0.9rem', fontFamily: 'var(--font-sans)', lineHeight: 1.4 }}>
                              {facility.subtitle}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.2rem' }}>
                              {facility.features.map((feat, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--deep-rose)', background: 'var(--light-pink)', border: '1px solid rgba(216, 27, 96, 0.12)', padding: '6px 10px', borderRadius: '10px', fontWeight: 600 }}>
                                  <span style={{ color: 'var(--primary-pink)', fontWeight: 800, flexShrink: 0 }}>✓</span> {feat}
                                </div>
                              ))}
                            </div>
                          </div>

                          <button onClick={() => { setIsModalOpen(true); setModalBookingSuccessUrl(''); }} className="cta-button-pink" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', padding: '10px 16px' }}>
                            Enquire About {facility.title} ↗
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 6: PREGNANCY GUIDE PAGE VIEW                         */}
        {/* ======================================================== */}
        {activePage === 'pregnancy-guide' && (
          <div className="page-view guide-page-view">
            {renderPageHeader(
              "Pregnancy Guide & Knowledge Hub",
              "Empowering Parents with Clinical Advice, Video Reels, FAQs & Ovulation & Fertility Calculator",
              "Pregnancy Hub"
            )}

            <section className="section section-white" id="knowledge-hub">
              <div className="container">
                {/* Quick Interactive Tools Bar */}
                <div style={{
                  display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center',
                  marginBottom: '2.5rem', background: 'var(--light-pink)', padding: '12px 20px',
                  borderRadius: '30px', border: '1px solid rgba(216, 27, 96, 0.15)'
                }}>
                  <button 
                    onClick={() => document.getElementById('ovulation-calculator-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cta-button-pink"
                    style={{ fontSize: '0.85rem', padding: '8px 18px', borderRadius: '20px' }}
                  >
                    🌸 Ovulation & Fertility Tracker
                  </button>
                  <button 
                    onClick={() => document.getElementById('trimester-guide-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cta-button-white"
                    style={{ fontSize: '0.85rem', padding: '8px 18px', borderRadius: '20px' }}
                  >
                    👶 Trimester Roadmap
                  </button>
                  <button 
                    onClick={() => document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cta-button-white"
                    style={{ fontSize: '0.85rem', padding: '8px 18px', borderRadius: '20px' }}
                  >
                    ❓ FAQs
                  </button>
                </div>

                <div className="hub-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                  
                  {/* SECTION 1: Video Guides & Instagram Reels */}
                  <div id="video-guides-section">
                    <span className="sec-tag" style={{ textAlign: 'left', marginBottom: '4px' }}>Video Knowledge Library</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--deep-rose)', marginBottom: '1.5rem' }}>
                      Video Guides & Official Reels
                    </h3>

                    {/* Instagram Channel Banner */}
                    <div style={{
                      background: 'linear-gradient(135deg, #880E4F 0%, #AD1457 40%, #D81B60 100%)',
                      borderRadius: '24px',
                      padding: '2rem 2.5rem',
                      color: '#ffffff',
                      marginBottom: '2rem',
                      boxShadow: '0 15px 35px rgba(136, 14, 79, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <InstagramIcon style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '180px', height: '180px', opacity: 0.12, color: '#ffffff' }} />
                      <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                          <InstagramIcon style={{ width: '14px', height: '14px' }} /> Official Instagram Channel
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '4px 0 8px', color: '#ffffff' }}>
                          Watch Clinical Reels & Maternity Guides
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#FCE4EC', margin: 0, lineHeight: 1.5 }}>
                          Follow Dr. Jyothsna Rayal MS (OBG) on Instagram for daily advice on pregnancy care, trimester tracking, painless delivery tips, and real patient stories.
                        </p>
                      </div>
                      <a href="https://www.instagram.com/jyothsnamaternity/" target="_blank" rel="noopener noreferrer" className="cta-button-white" style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', border: 'none', padding: '12px 24px', fontSize: '0.92rem', borderRadius: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: 700 }}>
                        <InstagramIcon style={{ width: '20px', height: '20px' }} /> Open Instagram Page ↗
                      </a>
                    </div>

                    {/* Instagram Reels Gallery */}
                    <div className="ig-reels-grid">
                      {instagramReels.slice(0, visibleReels).map((shortcode, idx) => (
                        <div key={shortcode} className="ig-reel-card">
                          {/* Reel number badge */}
                          <div style={{ padding: '12px 16px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{
                              display: 'inline-flex', alignItems: 'center', gap: '6px',
                              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                              color: '#ffffff', padding: '4px 12px', borderRadius: '20px',
                              fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}>
                              <InstagramIcon style={{ width: '12px', height: '12px' }} /> Reel #{idx + 1}
                            </span>
                          </div>

                          {/* Instagram Embed iframe */}
                          <div className="ig-reel-iframe-wrapper">
                            <iframe
                              src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                              width="100%"
                              height="480"
                              frameBorder="0"
                              scrolling="no"
                              loading="lazy"
                              allowTransparency="true"
                              allow="encrypted-media"
                              title={`Instagram Reel ${idx + 1}`}
                            />
                          </div>

                          {/* Watch Full Video button */}
                          <div style={{ padding: '12px 16px 14px' }}>
                            <a
                              href={`https://www.instagram.com/reel/${shortcode}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-button-pink"
                              style={{
                                width: '100%', textAlign: 'center',
                                fontSize: '0.85rem', padding: '11px 16px',
                                display: 'inline-flex', alignItems: 'center',
                                justifyContent: 'center', gap: '8px',
                                textDecoration: 'none', borderRadius: '14px'
                              }}
                            >
                              <InstagramIcon style={{ width: '16px', height: '16px' }} /> Watch Full Video ↗
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Load More / Show Less controls */}
                    <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                        Showing {Math.min(visibleReels, instagramReels.length)} of {instagramReels.length} Reels
                      </p>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {visibleReels < instagramReels.length && (
                          <button
                            onClick={() => setVisibleReels(prev => Math.min(prev + 9, instagramReels.length))}
                            className="cta-button-pink"
                            style={{ padding: '12px 32px', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                          >
                            <InstagramIcon style={{ width: '18px', height: '18px' }} /> Load More Reels
                          </button>
                        )}
                        {visibleReels > 9 && (
                          <button
                            onClick={() => setVisibleReels(9)}
                            className="cta-button-white"
                            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
                          >
                            Show Less
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Month-by-Month Care Guidelines */}
                  <div id="trimester-guide-section" style={{ borderTop: '2px dashed rgba(216, 27, 96, 0.15)', paddingTop: '3rem' }}>
                    <span className="sec-tag" style={{ textAlign: 'left', marginBottom: '4px' }}>Stage-by-Stage Roadmap</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--deep-rose)', marginBottom: '1.5rem' }}>
                      Month-by-Month Pregnancy Care Guide
                    </h3>
                    <div className="trimester-grid">
                      <div className="trimester-card glass-panel">
                        <span className="trimester-lbl">Months 1 – 3</span>
                        <h3 className="trimester-title">Early Pregnancy</h3>
                        <ul className="trimester-list">
                          <li>Folic Acid & prenatal vitamins daily</li>
                          <li>First Ultrasound scan & pregnancy confirmation</li>
                          <li>Early screening for blood pressure & sugar</li>
                        </ul>
                      </div>

                      <div className="trimester-card glass-panel">
                        <span className="trimester-lbl">Months 4 – 6</span>
                        <h3 className="trimester-title">Mid Pregnancy</h3>
                        <ul className="trimester-list">
                          <li>4D Anomaly Scan for baby's organ check</li>
                          <li>Tetanus (Tdap) immunizations</li>
                          <li>Balanced protein & calcium diet plans</li>
                        </ul>
                      </div>

                      <div className="trimester-card glass-panel">
                        <span className="trimester-lbl">Months 7 – 9</span>
                        <h3 className="trimester-title">Late Pregnancy & Delivery</h3>
                        <ul className="trimester-list">
                          <li>Bi-weekly growth & Doppler scans</li>
                          <li>Labor prep exercises & delivery planning</li>
                          <li>24/7 Casualty & emergency room readiness</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: Comprehensive FAQs */}
                  <div id="faqs-section" style={{ borderTop: '2px dashed rgba(216, 27, 96, 0.15)', paddingTop: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div>
                        <span className="sec-tag" style={{ textAlign: 'left', marginBottom: '4px' }}>Answers to Common Questions</span>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--deep-rose)', margin: 0 }}>
                          Frequently Asked Questions (FAQs)
                        </h3>
                      </div>
                      <button 
                        onClick={toggleAllFaqs}
                        style={{
                          background: 'var(--light-pink)',
                          color: 'var(--primary-pink)',
                          border: '1.5px solid var(--primary-pink)',
                          padding: '8px 18px',
                          borderRadius: '20px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        {openFaqIds.length > 0 ? 'Collapse All Answers' : 'Expand All Answers'}
                      </button>
                    </div>

                    {/* FAQ Controls: Search & Category Pills */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '1.5rem', borderRadius: '20px', border: '1.5px solid rgba(216, 27, 96, 0.18)', marginBottom: '2rem', boxShadow: '0 8px 25px rgba(216, 27, 96, 0.05)' }}>
                      <div style={{ position: 'relative', marginBottom: '1.2rem' }}>
                        <input 
                          type="text" 
                          placeholder="🔍 Search pregnancy, scanning, delivery timings, emergency questions..." 
                          value={faqSearchQuery}
                          onChange={(e) => setFaqSearchQuery(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            borderRadius: '30px',
                            border: '1.5px solid rgba(216, 27, 96, 0.3)',
                            outline: 'none',
                            fontSize: '0.92rem',
                            color: 'var(--text-dark)',
                            background: '#ffffff',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                          }}
                        />
                      </div>

                      {/* Category Pills */}
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--deep-rose)', textTransform: 'uppercase', letterSpacing: '0.5px', marginRight: '4px' }}>Filter by:</span>
                        {[
                          { id: 'all', label: 'All Questions' },
                          { id: 'Pregnancy & Delivery', label: 'Pregnancy & Delivery' },
                          { id: 'OPD & Appointments', label: 'OPD & Appointments' },
                          { id: 'Scans & Diagnostics', label: 'Scans & Diagnostics' },
                          { id: 'Surgeries & Emergency', label: 'Surgeries & Emergency' }
                        ].map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => setFaqCategoryFilter(cat.id)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '20px',
                              border: '1px solid var(--primary-pink)',
                              background: faqCategoryFilter === cat.id ? 'var(--primary-pink)' : '#ffffff',
                              color: faqCategoryFilter === cat.id ? '#ffffff' : 'var(--deep-rose)',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              transition: 'all 0.25s ease'
                            }}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Items List */}
                    <div className="faqs-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {(() => {
                        const filteredFaqs = allFaqsList.filter(faq => {
                          const matchesSearch = faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                                                faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
                          const matchesCategory = faqCategoryFilter === 'all' || faq.category === faqCategoryFilter;
                          return matchesSearch && matchesCategory;
                        });

                        if (filteredFaqs.length === 0) {
                          return (
                            <div style={{ textTransform: 'center', padding: '2.5rem', background: '#ffffff', borderRadius: '20px', border: '1px dashed var(--primary-pink)' }}>
                              <p style={{ fontSize: '1rem', color: 'var(--text-dark)', margin: 0 }}>No matching questions found for "{faqSearchQuery}". Please try another search term or contact us directly.</p>
                            </div>
                          );
                        }

                        return filteredFaqs.map(faq => {
                          const isOpen = openFaqIds.includes(faq.id);
                          return (
                            <div key={faq.id} className="faq-item glass-panel" style={{ borderRadius: '18px', overflow: 'hidden', border: isOpen ? '1.5px solid var(--primary-pink)' : '1px solid rgba(216, 27, 96, 0.15)', background: '#ffffff', boxShadow: isOpen ? '0 8px 25px rgba(216, 27, 96, 0.1)' : 'none' }}>
                              <div 
                                className="faq-header" 
                                onClick={() => toggleFaqId(faq.id)}
                                style={{
                                  padding: '1.2rem 1.6rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  cursor: 'pointer',
                                  background: isOpen ? 'var(--light-pink)' : 'transparent',
                                  gap: '1rem'
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                  <span style={{ background: 'rgba(216, 27, 96, 0.12)', color: 'var(--primary-pink)', padding: '3px 10px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {faq.category}
                                  </span>
                                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep-rose)', fontFamily: 'var(--font-serif)' }}>
                                    {faq.question}
                                  </span>
                                </div>
                                <span className="faq-toggle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: isOpen ? 'var(--primary-pink)' : 'var(--light-pink)', color: isOpen ? '#ffffff' : 'var(--primary-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0, transition: 'transform 0.3s ease' }}>
                                  {isOpen ? '−' : '+'}
                                </span>
                              </div>

                              {isOpen && (
                                <div className="faq-body" style={{ padding: '1.2rem 1.6rem 1.4rem', color: 'var(--text-dark)', fontSize: '0.94rem', lineHeight: 1.68, borderTop: '1px solid rgba(216, 27, 96, 0.1)', background: '#ffffff' }}>
                                  {faq.answer}
                                </div>
                              )}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>


                  {/* SECTION 5: Ovulation Calculator */}
                  <div id="ovulation-calculator-section" style={{ borderTop: '2px dashed rgba(216, 27, 96, 0.15)', paddingTop: '3rem' }}>
                    <span className="sec-tag" style={{ textAlign: 'center', marginBottom: '4px' }}>Track Your Fertile Window</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--deep-rose)', textAlign: 'center', marginBottom: '0.5rem' }}>
                      Ovulation & Fertility Calculator
                    </h3>
                    <p style={{ textAlign: 'center', fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                      Know your most fertile days each cycle. Enter your last period date and average cycle length to estimate your ovulation date and fertile window.
                    </p>
                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', maxWidth: '700px', margin: '0 auto' }}>
                      <form onSubmit={handleOvulationCalculate}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                          <label className="form-label">First Day of Last Menstrual Period (LMP)</label>
                          <input type="date" className="form-input" value={ovulationLmpDate} onChange={(e) => setOvulationLmpDate(e.target.value)} required />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                          <label className="form-label">Average Menstrual Cycle Length (days)</label>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <input 
                              type="range" 
                              min="21" max="40" 
                              value={ovulationCycleLength} 
                              onChange={(e) => setOvulationCycleLength(e.target.value)} 
                              style={{ flex: 1, accentColor: 'var(--primary-pink)' }} 
                            />
                            <span style={{ 
                              background: 'var(--primary-pink)', 
                              color: '#ffffff', 
                              padding: '6px 16px', 
                              borderRadius: '20px', 
                              fontWeight: 800, 
                              fontSize: '0.95rem', 
                              minWidth: '65px', 
                              textAlign: 'center' 
                            }}>
                              {ovulationCycleLength} days
                            </span>
                          </div>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>Normal range: 21–40 days. Average is 28 days.</p>
                        </div>
                        <button type="submit" className="cta-button-pink" style={{ width: '100%', textAlign: 'center' }}>
                          Calculate Ovulation & Fertile Days
                        </button>
                      </form>

                      {ovulationResult && (
                        <div style={{ marginTop: '2rem' }}>
                          <div style={{ background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)', padding: '1.2rem 1.5rem', borderRadius: '16px', marginBottom: '1rem', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--primary-pink)', fontWeight: 800, letterSpacing: '1px' }}>Your Cycle Insight</span>
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-dark)', margin: '6px 0 0', lineHeight: 1.5 }}>
                              With a <strong>{ovulationResult.cycleLength}-day cycle</strong>, ovulation typically occurs around <strong>Day {ovulationResult.ovulationDay}</strong> of your cycle.
                            </p>
                          </div>

                          {ovulationResult.cycles.map((cycle) => {
                            const opts = { year: 'numeric', month: 'short', day: 'numeric' };
                            return (
                              <div key={cycle.cycleNum} style={{ 
                                background: '#ffffff', 
                                border: '1.5px solid rgba(216, 27, 96, 0.15)', 
                                borderRadius: '18px', 
                                padding: '1.5rem', 
                                marginBottom: '1rem',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                  <span style={{ background: 'var(--primary-pink)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                                    {cycle.cycleNum}
                                  </span>
                                  <h4 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--deep-rose)' }}>Cycle {cycle.cycleNum}</h4>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                                  <div style={{ background: 'var(--light-pink)', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary-pink)', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Ovulation Date</span>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--deep-rose)' }}>{cycle.ovulationDate.toLocaleDateString('en-US', opts)}</span>
                                  </div>
                                  <div style={{ background: '#E8F5E9', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Fertile Window</span>
                                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1B5E20' }}>{cycle.fertileStart.toLocaleDateString('en-US', opts)} – {cycle.fertileEnd.toLocaleDateString('en-US', opts)}</span>
                                  </div>
                                  <div style={{ background: '#FFF3E0', padding: '10px 14px', borderRadius: '12px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#E65100', fontWeight: 800, display: 'block', marginBottom: '4px' }}>Next Period</span>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#BF360C' }}>{cycle.nextPeriod.toLocaleDateString('en-US', opts)}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          <div style={{ background: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '14px', padding: '1rem 1.2rem', marginTop: '0.5rem' }}>
                            <p style={{ fontSize: '0.82rem', color: '#5D4037', margin: 0, lineHeight: 1.5 }}>
                              <strong>⚠️ Disclaimer:</strong> This calculator provides estimates based on average cycle patterns. Individual ovulation timing may vary. For accurate fertility assessment, consult Dr. Jyothsna Rayal at Jyothsna Maternity Hospital.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* PAGE 7: CONTACT US PAGE VIEW                              */}
        {/* ======================================================== */}
        {activePage === 'contact' && (
          <div className="page-view contact-page-view">
            {renderPageHeader(
              "Contact Us & Book Appointment",
              "Schedule Your Consultation with Dr. Jyothsna Rayal MS (OBG)",
              "Get In Touch"
            )}

            <section className="section section-pink" id="contact">
              <div className="container">
                <span className="sec-tag">Schedule Consultation</span>
                <h2 className="sec-title">Book an appointment <span>with Dr. Jyothsna</span></h2>
              
                <div className="contact-grid">
                  <div className="contact-info-card glass-panel">
                    <div className="contact-details-list">
                      <div className="contact-item">
                        <div className="contact-icon contact-icon-location">
                          <MapPin style={{ width: '28px', height: '28px', color: '#ffffff', stroke: '#ffffff', strokeWidth: 2.4 }} />
                        </div>
                        <div>
                          <h4 className="contact-item-title">Hospital Address</h4>
                          <p className="contact-item-text" style={{ marginBottom: '6px' }}>Door Number 2-253-D_5-1 (Op Building), Opp Line to Touch Ice Cream Parlour, Society Colony, Madanapalle-517325, Andhra Pradesh</p>
                          <a 
                            href="https://www.google.com/maps/place/Jyoshna+maternity+hospital/@13.560765,78.495152,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb2670c9850a2a1:0xf8868b1803db518a!8m2!3d13.5607598!4d78.4977269!16s%2Fg%2F11hzwfdfh1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'var(--primary-pink)', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            📍 Open Location in Google Maps ↗
                          </a>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon contact-icon-phone">
                          <Phone style={{ width: '28px', height: '28px', color: '#ffffff', stroke: '#ffffff', strokeWidth: 2.4 }} />
                        </div>
                        <div>
                          <h4 className="contact-item-title">Phone Helplines</h4>
                          <p className="contact-item-text">+91 63036 74536 / +91 83095 47105</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon contact-icon-whatsapp">
                          <WhatsAppIcon style={{ width: '28px', height: '28px', color: '#ffffff', fill: '#ffffff' }} />
                        </div>
                        <div>
                          <h4 className="contact-item-title">WhatsApp Direct Support</h4>
                          <a href="https://wa.me/916303674536" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700, textDecoration: 'none' }}>
                            Chat on WhatsApp: +91 63036 74536 ↗
                          </a>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon contact-icon-instagram">
                          <InstagramIcon stroke="#ffffff" style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                        </div>
                        <div>
                          <h4 className="contact-item-title">Social Media Instagram</h4>
                          <a href="https://www.instagram.com/jyothsnamaternity/" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontWeight: 700, textDecoration: 'none' }}>
                            Follow @jyothsnamaternity ↗
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="contact-map-holder">
                      <iframe 
                        title="Jyothsna Maternity Hospital Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.512345!2d78.4977269!3d13.5607598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2670c9850a2a1%3A0xf8868b1803db518a!2sJyoshna%20maternity%20hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="190" 
                        style={{ border: 0, borderRadius: '14px' }} 
                        allowFullScreen="" 
                        loading="lazy">
                      </iframe>
                      <div style={{ marginTop: '8px', textAlign: 'right' }}>
                        <a 
                          href="https://www.google.com/maps/place/Jyoshna+maternity+hospital/@13.560765,78.495152,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb2670c9850a2a1:0xf8868b1803db518a!8m2!3d13.5607598!4d78.4977269!16s%2Fg%2F11hzwfdfh1" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cta-button-pink"
                          style={{ fontSize: '0.78rem', padding: '6px 14px', textDecoration: 'none', display: 'inline-block' }}
                        >
                          🗺️ Get Driving Directions ↗
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Booking Form Card */}
                  <div className="booking-form-card glass-panel">
                    <form onSubmit={(e) => handleFormSubmit(e, false)}>
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" name="form-name" className="form-input" placeholder="e.g. Anitha Reddy" required />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" name="form-phone" className="form-input" placeholder="e.g. 9876543210" required />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Select Doctor</label>
                        <select name="form-doctor" className="form-select">
                          <option value="Dr. Jyothsna Rayal MS (OBG)">Dr. Jyothsna Rayal MS (OBG) — Chief Obstetrician</option>
                          <option value="Dr. Jaswanth Rayal MBBS, DA">Dr. Jaswanth Rayal MBBS, DA — Anaesthesia Specialist</option>
                          <option value="Any Available Specialist Doctor">Any Available Specialist Doctor</option>
                        </select>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Age</label>
                          <input type="number" name="form-age" className="form-input" placeholder="28" required />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Consultation Reason</label>
                          <select name="form-reason" className="form-select" required>
                            <option value="Normal Deliveries">Normal Deliveries</option>
                            <option value="High-Risk Deliveries">High-Risk Deliveries</option>
                            <option value="Caesarean Section (C-Section)">Caesarean Section (C-Section)</option>
                            <option value="Infertility Treatment">Infertility Treatment</option>
                            <option value="Treatment for Menstrual Disorders">Treatment for Menstrual Disorders</option>
                            <option value="Treatment for Uterine Fibroids">Treatment for Uterine Fibroids</option>
                            <option value="Treatment for PCOD & Thyroid Problems">Treatment for PCOD & Thyroid Problems</option>
                            <option value="E-Consultation">E-Consultation</option>
                            <option value="Ultrasound / Scanning">Ultrasound / Scanning</option>
                            <option value="ECG & CTG">ECG & CTG</option>
                            <option value="Laboratory Services">Laboratory Services</option>
                            <option value="Pharmacy Services">Pharmacy Services</option>
                            <option value="Advanced Operation Theatre">Advanced Operation Theatre</option>
                            <option value="24/7 Hospital Services">24/7 Hospital Services</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Preferred Date</label>
                          <input type="date" name="form-date" className="form-input" required />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Preferred Time Slot</label>
                          <select name="form-time" className="form-select" required>
                            <option value="Morning (9:00 AM - 12:00 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                            <option value="Emergency Care">Emergency Care</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Additional Notes (Optional)</label>
                        <textarea name="form-notes" className="form-textarea" placeholder="Mention any medical history..."></textarea>
                      </div>

                      <button type="submit" className="cta-button-pink" style={{ width: '100%', textAlign: 'center' }}>
                        Confirm & Send via WhatsApp
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

      </main>

      {/* 5. Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <a href="#home" onClick={() => navigateTo('home')} className="logo-container" style={{ marginBottom: '1rem' }}>
                <img src="/logo.jpg" alt="Jyothsna Logo" className="logo-img" />
                <div className="logo-text">
                  <span className="logo-title" style={{ color: '#fff' }}>Jyothsna</span>
                  <span className="logo-subtitle" style={{ color: 'var(--soft-blush)' }}>Maternity Hospital</span>
                </div>
              </a>
              <p className="footer-desc">Founded in 2018 by Dr. Jyothsna Rayal MBBS, MS (OBG) & Dr. Jaswanth Rayal MBBS, DA (Anaesthesia Specialist), supporting mothers with 3000+ safe deliveries in Madanapalle.</p>
              <span className="footer-tagline">“Because Every Mother Deserves Safe & Caring Hands”</span>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigateTo('home')} className="footer-link-btn">Home</button></li>
                <li><button onClick={() => navigateTo('care-journey')} className="footer-link-btn">Care Journey</button></li>
                <li><button onClick={() => navigateTo('about')} className="footer-link-btn">About Our Doctors</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Specialized Services</button></li>
                <li><button onClick={() => navigateTo('facilities')} className="footer-link-btn">Hospital Facilities</button></li>
                <li><button onClick={() => navigateTo('pregnancy-guide')} className="footer-link-btn">Pregnancy Guide</button></li>
                <li><button onClick={() => { navigateTo('pregnancy-guide'); setTimeout(() => document.getElementById('ovulation-calculator-section')?.scrollIntoView({ behavior: 'smooth' }), 250); }} className="footer-link-btn" style={{ color: 'var(--primary-pink)', fontWeight: 700 }}>Ovulation Tracker 🌸</button></li>
                <li><button onClick={() => navigateTo('contact')} className="footer-link-btn">Contact Us</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Normal Deliveries</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">High-Risk Deliveries</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Caesarean Section (C-Section)</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Infertility Treatment</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Treatment for Menstrual Disorders</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Treatment for Uterine Fibroids</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">Treatment for PCOD & Thyroid</button></li>
                <li><button onClick={() => navigateTo('services')} className="footer-link-btn">E-Consultation</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Emergency & Timings</h4>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-blush)', marginBottom: '10px' }}>OPD: Mon – Sat (9 AM – 4 PM)</p>
              <p style={{ fontSize: '1.15rem', color: 'var(--soft-blush)', marginBottom: '15px' }}>Casualty & Labor Room: 24/7 Open</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                <a href="tel:+916303674536" className="cta-button-pink" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                  📞 Call Helpline
                </a>
                <a href="https://www.instagram.com/jyothsnamaternity/" target="_blank" rel="noopener noreferrer" className="cta-button-white" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', border: 'none', padding: '8px 16px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontWeight: 700 }}>
                  <InstagramIcon style={{ width: '16px', height: '16px' }} /> Instagram ↗
                </a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Jyothsna Maternity Hospital. All rights reserved. Madanapalle, Andhra Pradesh.</p>
          </div>
        </div>
      </footer>

      {/* 6. Floating Action Buttons Removed as per User Request (Kept on Contact Us page) */}

      {/* 7. Appointment Booking Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px', width: '90%', padding: '2rem', borderRadius: '28px', position: 'relative' }}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close Modal" style={{ position: 'absolute', top: '18px', right: '18px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--deep-rose)' }}>
              <X />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span className="sec-tag">Direct Scheduling</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--deep-rose)', margin: 0 }}>
                Book Appointment
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Dr. Jyothsna Rayal MS (OBG) • Madanapalle Clinic
              </p>
            </div>

            <form onSubmit={(e) => handleFormSubmit(e, true)}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="modal-name" className="form-input" placeholder="e.g. Lakshmi Devi" required />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="modal-phone" className="form-input" placeholder="e.g. 9876543210" required />
              </div>

              <div className="form-group">
                <label className="form-label">Select Doctor</label>
                <select name="modal-doctor" className="form-select">
                  <option value="Dr. Jyothsna Rayal MS (OBG)">Dr. Jyothsna Rayal MS (OBG) — Chief Obstetrician</option>
                  <option value="Dr. Jaswanth Rayal MBBS, DA">Dr. Jaswanth Rayal MBBS, DA — Anaesthesia Specialist</option>
                  <option value="Any Available Specialist Doctor">Any Available Specialist Doctor</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Age</label>
                  <input type="number" name="modal-age" className="form-input" placeholder="26" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Reason for Visit</label>
                  <select name="modal-reason" className="form-select" required>
                    <option value="Normal Deliveries">Normal Deliveries</option>
                    <option value="High-Risk Deliveries">High-Risk Deliveries</option>
                    <option value="Caesarean Section (C-Section)">Caesarean Section (C-Section)</option>
                    <option value="Infertility Treatment">Infertility Treatment</option>
                    <option value="Treatment for Menstrual Disorders">Treatment for Menstrual Disorders</option>
                    <option value="Treatment for Uterine Fibroids">Treatment for Uterine Fibroids</option>
                    <option value="Treatment for PCOD & Thyroid Problems">Treatment for PCOD & Thyroid Problems</option>
                    <option value="E-Consultation">E-Consultation</option>
                    <option value="Ultrasound / Scanning">Ultrasound / Scanning</option>
                    <option value="ECG & CTG">ECG & CTG</option>
                    <option value="Laboratory Services">Laboratory Services</option>
                    <option value="Pharmacy Services">Pharmacy Services</option>
                    <option value="Advanced Operation Theatre">Advanced Operation Theatre</option>
                    <option value="24/7 Hospital Services">24/7 Hospital Services</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" name="modal-date" className="form-input" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Slot</label>
                  <select name="modal-time" className="form-select" required>
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Emergency Care">Emergency Care</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Notes (Optional)</label>
                <textarea name="modal-notes" className="form-textarea" placeholder="Mention symptoms or past history..."></textarea>
              </div>

              <button type="submit" className="cta-button-pink" style={{ width: '100%', textAlign: 'center' }}>
                Confirm via WhatsApp ↗
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
