import { BookOpen, Users, Trophy, ClipboardCheck, Stethoscope, GraduationCap, Zap, Crown, FileText } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/#courses' },
  { label: 'PYQ', href: '/pyq' },
  { label: 'Subject Tests', href: '/subject-tests' },
  { label: 'Mock Tests', href: '/mock-tests' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#contact' },
];

export const COURSES = [
  {
    id: 1,
    title: 'Test Series',
    description: 'The ultimate practice ground for nursing aspirants.',
    features: [
      '30,000+ Questions - QBank (Topic Wise)',
      'Each Question with Explanation',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions'
    ],
    link: 'https://qtestseries.nprep.in',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
    icon: FileText,
    popular: false
  },
  {
    id: 2,
    title: 'Rapid Revision 2.0',
    description: 'Fast-track your preparation with high-yield content.',
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explanations',
      'Daily Test Series',
      '30,000+ Questions - QBank (Topic Wise)',
      'Subject Wise Tests'
    ],
    link: 'https://rapid.nprep.in',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    icon: Zap,
    popular: true
  },
  {
    id: 3,
    title: 'GOLD Batch',
    description: 'Comprehensive foundation to advanced mastery.',
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers'
    ],
    link: 'https://gold.nprep.in',
    image: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=800',
    icon: Crown,
    popular: true
  },
];

export const PYQ_COLLECTIONS = [
  {
    category: "NORCET",
    description: "AIIMS Nursing Officer Recruitment Common Eligibility Test Papers",
    items: [
      { title: "NORCET - 3 (2022) Shift - 1", link: "https://links.nprep.in/f2X7pvwHMZb" },
      { title: "NORCET 3 - 2022 ; Shift-II", link: "https://links.nprep.in/K7VH496yQZb" },
      { title: "NORCET 7 prelims - ( sep.) 2024", link: "https://links.nprep.in/aXOX5oZXPZb" },
      { title: "NORCET 3 - June 2023", link: "https://links.nprep.in/weaumiphIZb" },
      { title: "NORCET 20 Nov, Shift 2", link: "https://links.nprep.in/xkOMXfpAhZb" },
    ]
  },
  {
    category: "RRB",
    description: "Railway Recruitment Board Nursing Officer Papers",
    items: [
      { title: "RRB Shift - I (20 JULY )", link: "https://links.nprep.in/Wm36lpRx0Zb" },
      { title: "RRB Shift - I (21 July 2019)", link: "https://links.nprep.in/9PwNw5DuPZb" },
      { title: "RRB Nursing Superintendent 29 APRIL Shift 3", link: "https://links.nprep.in/8LR9YaHPEZb" },
      { title: "RRB Nursing Officer", link: "https://links.nprep.in/iYJK63NtHZb" },
      { title: "RRB Nursing Officer-2021", link: "https://links.nprep.in/QNGYhi8GfZb" },
    ]
  },
  {
    category: "CHO (Community Health Officer)",
    description: "State-wise Community Health Officer Exam Papers",
    items: [
      { title: "MP CHO", link: "https://links.nprep.in/OT7EWR5r3Zb" },
      { title: "MP CHO Paper - 2022", link: "https://links.nprep.in/EKC5ZE7r3Zb" },
      { title: "Rajasthan CHO - 2024", link: "https://links.nprep.in/rocuf2uwYXb" },
      { title: "Rajasthan CHO-2023", link: "https://links.nprep.in/J4rAoKv3ZZb" },
      { title: "UK CHO - 2021", link: "https://links.nprep.in/3MAAJScs3Zb" },
      { title: "UP CHO", link: "https://links.nprep.in/7eNfOtC51Zb" },
      { title: "NHM Haryana CHO Official Paper (Held On_ 29 Jan 2023)", link: "https://links.nprep.in/SBr7raqs3Zb" },
    ]
  },
  {
    category: "ESIC",
    description: "Employees' State Insurance Corporation Nursing Exams",
    items: [
      { title: "ESIC 19 Mar, Shift 2", link: "https://links.nprep.in/wjFgvVwa7Zb" },
      { title: "ESIC shift 1 2016", link: "https://links.nprep.in/8IQ1zxGs8Zb" },
      { title: "ESIC Paper - 2019 Shift - I", link: "https://links.nprep.in/wpMKcyDzQZb" },
      { title: "ESIC 2019 shift 2", link: "https://links.nprep.in/Bk1Ehoy14Zb" },
      { title: "UPSC ESIC NO 07 July 2024", link: "https://links.nprep.in/PKB7mMivuZb" },
    ]
  },
  {
    category: "BTSC",
    description: "Bihar Technical Service Commission Staff Nurse",
    items: [
      { title: "BTSC Staff Nurse", link: "https://links.nprep.in/fCgXW8DSWZb" },
      { title: "BTSC Staff Nurse", link: "https://links.nprep.in/oCMagiQs8Zb" },
      { title: "BTSC Staff Nurse", link: "https://links.nprep.in/M23vprRs8Zb" },
      { title: "BTSC Staff Nurse Paper- 2025", link: "https://links.nprep.in/ZpyBui10qZb" },
    ]
  },
  {
    category: "DSSSB",
    description: "Delhi Subordinate Services Selection Board",
    items: [
      { title: "DSSSB Public health nurse solved paper 2015", link: "https://links.nprep.in/Q7Cp7d4n8Zb" },
      { title: "DSSSB Shift - I 28 August 2019", link: "https://links.nprep.in/PYdwRLVs8Zb" },
      { title: "DSSSB Shirt - II 28 AUG 2019", link: "https://links.nprep.in/FZqrzFWs8Zb" },
      { title: "DSSSB Shirt - II 29 Aug. 2019", link: "https://links.nprep.in/Na51lFXs8Zb" },
      { title: "DSSSB 29 Aug. S-I-2019", link: "https://links.nprep.in/e6PFDXYs8Zb" },
    ]
  },
  {
    category: "Other Institutes",
    description: "SGPGI, GMCH, PGIMS & PGIMER",
    items: [
      { title: "SGPGI Lucknow, Nursing Officer - 2022", link: "https://links.nprep.in/Vy4XCouzQZb" },
      { title: "GMCH Chandigarh", link: "https://links.nprep.in/Jol2zqwzQZb" },
      { title: "PGIMS Rohtak - 2017", link: "https://links.nprep.in/EWf3btIKZZb" },
      { title: "PGIMER Chandigarh, Staff Nurse - 2015", link: "https://links.nprep.in/w3MkLFIJZZb" },
    ]
  }
];

export const SUBJECT_TESTS = [
  { title: "MSN", link: "https://links.nprep.in/hm3aQhddIZb" },
  { title: "OBG", link: "https://links.nprep.in/cpRfJAdQPYb" },
  { title: "CHN", link: "https://links.nprep.in/vGYx4MAtWZb" },
  { title: "Pedia", link: "https://links.nprep.in/NbTlCc02ZZb" },
  { title: "Psychiatry", link: "https://links.nprep.in/mEhGXn27ZZb" },
  { title: "Nutrition", link: "https://links.nprep.in/xqzNDqLI1Zb" },
  { title: "Research", link: "https://links.nprep.in/IuYQSDcC6Zb" },
];

export const MOCK_TESTS = [
  { title: "NORCET", link: "https://links.nprep.in/XMYlOC6F5Zb" },
  { title: "AIIMS Nursing Officer Exams", link: "https://links.nprep.in/u34K12Mq6Zb" },
  { title: "KGMU Nursing Officer", link: "https://links.nprep.in/NOfgXlxg6Zb" },
  { title: "SGPGI Nursing Officer", link: "https://links.nprep.in/C0hk9CHg6Zb" },
  { title: "PGIMER", link: "https://links.nprep.in/X6m4Q62F6Zb" },
  { title: "RRB Nursing Officer", link: "https://links.nprep.in/pC4gYL3eSZb" },
  { title: "AIIMS CRE", link: "https://links.nprep.in/VpwyAGbG6Zb" },
];

export const FEATURES = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Learn from senior nursing officers and medical experts with years of teaching experience.',
  },
  {
    icon: BookOpen,
    title: 'Updated Syllabus',
    description: 'Study material strictly based on the latest exam patterns of NORCET and State exams.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Mock Tests',
    description: 'Weekly offline and online tests to track your progress and improve speed.',
  },
  {
    icon: Stethoscope,
    title: 'Offline + Online',
    description: 'Flexible learning options available. Attend classroom sessions or learn from home.',
  },
  {
    icon: GraduationCap,
    title: 'Personal Guidance',
    description: 'One-on-one mentorship to help you overcome weak areas and boost confidence.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: 'Highest selection ratio in Jaipur for Nursing Officer exams in the last 3 years.',
  },
];

export const BLOG_POSTS = [
  { id: 1, title: "How to Crack AIIMS NORCET in First Attempt" },
  { id: 2, title: "Top 10 Career Opportunities After B.Sc Nursing" },
  { id: 3, title: "GNM vs B.Sc Nursing: Which is Better?" },
  { id: 4, title: "Complete Syllabus for RRB Staff Nurse Exam 2025" },
  { id: 5, title: "Life of a Nursing Officer in AIIMS" },
  { id: 6, title: "Best Books for Nursing Competitive Exams" },
  { id: 7, title: "How to Prepare for CHO Exams while Working" },
  { id: 8, title: "Understanding the New Exam Pattern of NORCET 7" },
  { id: 9, title: "Scope of M.Sc Nursing in India and Abroad" }
];

export const RESULTS = [];
export const GALLERY_IMAGES = [];
