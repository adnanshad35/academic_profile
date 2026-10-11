export const contact = {
  email: 'adnanshad.contact@gmail.com',
  location: 'Madhabpur, Habiganj, Bangladesh',
  resume: '/Abu_Adnan_Shad_CV.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Academics' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'teaching', label: 'Teaching & Leadership' },
]

// Brand marks on a 24x24 grid (single paths from Simple Icons).
export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abuadnanshad/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adnanshad35',
    icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/adnan_35',
    icon: 'M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z',
  },
  {
    label: 'Email',
    copy: contact.email,
    icon: 'M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm.4 2h15.2L12 12.7 4.4 7zM4 9.2l7.4 5.6a1 1 0 0 0 1.2 0L20 9.2V17H4V9.2z',
  },
]

export const role = 'Prospective MS/PhD Student · Machine Learning for Healthcare'

export const researchInterests = [
  'Machine Learning for Healthcare',
  'Trustworthy AI',
  'Imbalanced Learning',
  'Explainable AI',
  'Deep Learning',
  'Computer Vision',
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    school: 'Leading University, Sylhet, Bangladesh',
    period: '2022–2026',
    score: '3.62',
    scoreLabel: 'CGPA out of 4.00',
    coursework:
      'Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Linear Algebra, Probability & Statistics, Calculus, Database Systems, Operating Systems',
  },
]

// Shown behind the "Earlier education" dropdown in Academic Background.
export const earlierEducation = [
  {
    period: '2018–2020',
    title: 'Higher Secondary Certificate (HSC)',
    school: 'Murarichand College, Sylhet',
    score: 'GPA 5.00 / 5.00',
    note: 'Govt. Board Scholarship',
  },
  {
    period: '2018',
    title: 'Secondary School Certificate (SSC)',
    school: 'Gobindapur Govt. High School',
    score: 'GPA 5.00 / 5.00',
    note: 'Govt. Board Scholarship',
  },
]

// Each card in the Skills section: a broad area split into labelled groups.
export const skills = [
  {
    title: 'Machine Learning',
    groups: [
      {
        label: 'Models',
        items: ['Logistic Regression', 'Random Forest', 'SVM', 'XGBoost', 'CatBoost'],
      },
      {
        label: 'Libraries',
        items: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SHAP'],
      },
    ],
  },
  {
    title: 'Programming & Development',
    groups: [
      { label: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Dart'] },
      {
        label: 'App development',
        items: ['Flutter', 'Android', 'Firebase', 'HTML', 'CSS'],
      },
      {
        label: 'Tools & platforms',
        items: ['Git', 'GitHub', 'Google Colab', 'VS Code', 'Android Studio'],
      },
    ],
  },
  {
    title: 'Currently Learning',
    learning: true,
    wide: true,
    groups: [
      { label: 'Frameworks', items: ['PyTorch', 'TensorFlow'] },
      { label: 'Deep learning', items: ['CNNs (VGG, MobileNet)', 'LSTM/GRU', 'GNNs'] },
      { label: 'Computer vision', items: ['Vision Transformers', 'YOLO'] },
      { label: 'Language & multimodal', items: ['Transformers (BERT, LLaMA)', 'VLMs'] },
    ],
  },
]

export const research = {
  kind: 'Undergraduate Thesis',
  title: 'Engineered CatBoost for Imbalanced Chronic Kidney Disease Screening',
  href: 'https://github.com/adnanshad35/ckd-catboost-screening',
  tags: ['Python', 'CatBoost', 'scikit-learn', 'XGBoost', 'SHAP'],
  supervisor: 'Md. Jamaner Rahaman',
  period: '2025–2026',
  points: [
    {
      label: 'Data',
      text: 'Built a screening pipeline on 1,659 records with 38 features, where 92% of cases are CKD and only 8% are non-CKD.',
    },
    {
      label: 'Approach',
      text: 'Led a two-student team and handled the modeling, implementation, and analysis. Compared CatBoost with logistic regression, random forest, XGBoost, and SVM, using class weights and a stratified split.',
    },
    {
      label: 'Evaluation',
      text: 'Chose the decision threshold on validation data to keep sensitivity at 0.92 or above, favouring caught cases over false alarms. Results above are on the held-out test set.',
    },
    {
      label: 'Interpretability',
      text: 'Used SHAP to check that the model relies on known kidney markers (creatinine, GFR, urine protein).',
    },
    { label: 'Status', text: 'Manuscript under revision.' },
  ],
  metrics: [
    { value: '0.96', label: 'Sensitivity' },
    { value: '0.57', label: 'Specificity' },
    { value: '0.77', label: 'Balanced accuracy' },
    { value: '0.82', label: 'ROC-AUC' },
  ],
}

export const projects = [
  {
    title: 'ClubMate',
    href: 'https://github.com/redwan-edu/ClubMate',
    tags: ['Android', 'Firebase', 'Cloudinary'],
    points: [
      'Android app that gives university clubs one place to communicate instead of scattered group chats.',
      'Supports messaging, announcements, member management, role-based groups, notice boards, private channels, and media sharing, all end-to-end encrypted.',
      'Built as a team; I contributed to research and development and tested the app.',
    ],
  },
  {
    title: 'HostelMate',
    href: 'https://github.com/adnanshad35/hostel-meal-calculator',
    tags: ['Flutter', 'Dart', 'Firebase'],
    points: [
      'Android app for hostel residents to track meals, shared expenses, shop dues, and monthly balances, which were calculated by hand and often caused errors and disputes.',
      'Calculates monthly balances automatically; role-based access lets only administrators change records.',
      'Built on my own, with Firebase for secure data storage.',
    ],
  },
  {
    title: 'RobGlass',
    tags: ['Arduino', 'Ultrasonic Sensors', 'Buzzer'],
    points: [
      'Low-cost assistive glasses that help visually impaired users detect nearby obstacles.',
      'Ultrasonic sensors detect obstacles and a buzzer alerts the wearer; the detection settings can be adjusted.',
      'Built with a team; I worked on research and development, programming, and circuit design.',
    ],
  },
]

export const leadership = [
  {
    role: 'Founding Member and Program Manager',
    org: 'Igniting Smiles Foundation',
    period: '2022–Present',
    text: 'Coordinates aid initiatives for low-income communities and disaster relief in Bangladesh.',
  },
  {
    role: 'Publications and Newsletter Coordinator',
    org: 'IEEE Computer Society, LU Student Branch',
    period: '2024–2025',
    text: 'Coordinated publication, newsletter, and event-documentation activities.',
  },
]

export const outreach = {
  role: 'STEM Content Creator',
  org: '180 Seconds with Adnan',
  href: 'https://web.facebook.com/180secondwithadnan',
  period: '2022–Present',
  text: 'Created and presented short educational science videos for a general audience.',
  // Facebook video shown beside the text; it starts playing once scrolled into view.
  video: 'https://www.facebook.com/180secondwithadnan/videos/1682429852265551/',
}

export const teaching = [
  {
    role: 'Student Assistant',
    org: 'Machine Learning Laboratory',
    period: 'Fall 2025',
    text: 'Selected by the course instructor to support junior students with laboratory exercises and machine-learning concepts.',
  },
]

// Shown behind the "More teaching" dropdown in the Teaching card.
export const moreTeaching = [
  {
    role: 'Home Tutor',
    period: '2020–Present',
    text: 'Tutoring Class 6–12 students in Mathematics, Physics, Chemistry, Biology, and ICT.',
  },
  {
    role: 'Part-time Teacher',
    org: 'Pi Academy (Tutorial Center)',
    period: '2023–2025',
    text: 'Taught ICT and Physics to HSC-level students in classroom settings.',
  },
  {
    role: 'Occasional Teacher',
    org: 'Error Solution (Tutorial Center)',
    period: '2024',
    text: 'Provided teaching in Mathematics and Physics to SSC-level students.',
  },
]

export const competitive = [
  {
    value: '250+',
    text: 'problems solved on Codeforces and CodeChef, mostly data structures, DP, and graphs.',
  },
  {
    value: '50+',
    text: 'online and onsite contests, including the intra-university ICPC selection contest.',
  },
]

export const honors = [
  {
    title: 'Most Promising Volunteer Award',
    org: 'IEEE Computer Society, Leading University',
    period: '2023 & 2024',
  },
  {
    title: 'Student Member',
    org: 'Institute of Electrical and Electronics Engineers (IEEE)',
    period: '2024–Present',
  },
  { title: 'Member', org: 'Leading University ACM Community', period: '2023–2025' },
]

export const ielts = {
  date: 'September 19, 2026',
  scores: [
    { label: 'Overall', value: '6.5' },
    { label: 'Listening', value: '6.5' },
    { label: 'Reading', value: '6.0' },
    { label: 'Writing', value: '6.0' },
    { label: 'Speaking', value: '6.5' },
  ],
}
