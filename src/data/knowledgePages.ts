export interface KnowledgePage {
  slug: string;
  title: string;
  intro: string;
  overviewTitle: string;
  overviewItems: string[];
  cardsTitle: string;
  cards: Array<{ title: string; description: string }>;
  quickPointsTitle: string;
  quickPoints: string[];
}

export const KNOWLEDGE_PAGES: KnowledgePage[] = [
  {
    slug: 'fundamentals-of-nursing',
    title: 'Fundamentals of Nursing',
    intro: 'Fundamentals of nursing form the foundation of patient care and clinical practice.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Basic patient care', 'Infection control', 'Vital signs monitoring', 'Nursing ethics'],
    cardsTitle: 'Core Learning Areas',
    cards: [
      { title: 'Patient-Centered Care', description: 'Understand comfort, hygiene, mobility, and holistic nursing support.' },
      { title: 'Clinical Observation', description: 'Build a strong base for monitoring, reporting, and early intervention.' },
      { title: 'Professional Standards', description: 'Develop accountability, ethics, and communication in every shift.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Use a systematic approach for assessment and care planning.', 'Prioritize patient safety and infection prevention in all procedures.', 'Document observations clearly and communicate changes promptly.']
  },
  {
    slug: 'medical-surgical-nursing',
    title: 'Medical Surgical Nursing',
    intro: 'Medical surgical nursing focuses on evidence-based care for adults with acute and chronic health conditions.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Preoperative and postoperative care', 'Cardiovascular and respiratory care', 'Pain and wound management', 'Fluid and electrolyte balance'],
    cardsTitle: 'Clinical Focus Areas',
    cards: [
      { title: 'Perioperative Nursing', description: 'Prepare, monitor, and recover patients safely through surgical pathways.' },
      { title: 'Acute Care Management', description: 'Respond to changing patient status using timely nursing interventions.' },
      { title: 'Rehabilitation Support', description: 'Promote recovery, mobility, and discharge readiness with coordinated care.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Correlate assessments with disease process and treatment goals.', 'Use care plans to prioritize complications and nursing actions.', 'Educate patients and families for continuity of care after discharge.']
  },
  {
    slug: 'community-health-nursing',
    title: 'Community Health Nursing',
    intro: 'Community health nursing promotes prevention, early detection, and health education at population level.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Primary healthcare principles', 'Maternal and child health services', 'Immunization and prevention', 'Home visit and community assessment'],
    cardsTitle: 'Community Practice Areas',
    cards: [
      { title: 'Health Promotion', description: 'Deliver awareness programs for nutrition, sanitation, and healthy living.' },
      { title: 'Public Health Programs', description: 'Support implementation of local and national health initiatives.' },
      { title: 'Family-Centered Outreach', description: 'Assess family needs and provide nursing support in community settings.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Focus on prevention before treatment whenever possible.', 'Track risk groups and follow continuity in community visits.', 'Use culturally appropriate communication during education sessions.']
  },
  {
    slug: 'child-health-nursing',
    title: 'Child Health Nursing',
    intro: 'Child health nursing supports growth, development, and age-specific care from newborn to adolescence.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Growth and development', 'Pediatric assessment', 'Nutrition in childhood', 'Family-centered pediatric care'],
    cardsTitle: 'Pediatric Care Areas',
    cards: [
      { title: 'Developmental Care', description: 'Plan care based on age, milestones, and developmental needs.' },
      { title: 'Communication with Family', description: 'Partner with parents and caregivers for safe, supportive care.' },
      { title: 'Prevention and Screening', description: 'Support immunization, nutrition, and early illness recognition.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Adapt communication for child age and understanding.', 'Monitor hydration, temperature, and respiratory status carefully.', 'Promote family participation in all routine and clinical care.']
  },
  {
    slug: 'mental-health-nursing',
    title: 'Mental Health Nursing',
    intro: 'Mental health nursing emphasizes therapeutic communication, safety, and compassionate psychiatric care.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Mental status examination', 'Therapeutic nurse-patient relationship', 'Common psychiatric disorders', 'Safety and crisis management'],
    cardsTitle: 'Therapeutic Care Areas',
    cards: [
      { title: 'Communication Skills', description: 'Use active listening, empathy, and boundaries for therapeutic outcomes.' },
      { title: 'Risk Management', description: 'Identify early warning signs and maintain safe care environments.' },
      { title: 'Recovery-Oriented Care', description: 'Promote dignity, coping skills, and long-term wellbeing support.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Build trust through non-judgmental communication.', 'Prioritize patient safety during high-risk behavior changes.', 'Collaborate with multidisciplinary teams and families effectively.']
  },
  {
    slug: 'pharmacology-in-nursing',
    title: 'Pharmacology in Nursing',
    intro: 'Pharmacology in nursing covers medication actions, safe administration, and patient monitoring.',
    overviewTitle: 'Key Topics',
    overviewItems: ['Drug classifications and actions', 'Medication administration rights', 'Adverse effects and interactions', 'Patient medication education'],
    cardsTitle: 'Medication Safety Areas',
    cards: [
      { title: 'Safe Administration', description: 'Apply medication rights and standard checks before every dose.' },
      { title: 'Monitoring & Reporting', description: 'Observe therapeutic effects and promptly report adverse reactions.' },
      { title: 'Patient Counseling', description: 'Teach dosage, timing, precautions, and follow-up instructions clearly.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Verify the medication order, dose, route, and timing every time.', 'Document administration and response accurately.', 'Teach patients signs that require immediate medical attention.']
  },
  {
    slug: 'infection-control-in-nursing',
    title: 'Infection Control in Nursing',
    intro: 'Infection control includes nursing practices used to prevent transmission in healthcare settings.',
    overviewTitle: 'Common Methods',
    overviewItems: ['Hand hygiene', 'Use of PPE', 'Sterilization and disinfection', 'Isolation precautions'],
    cardsTitle: 'Prevention Priorities',
    cards: [
      { title: 'Standard Precautions', description: 'Apply universal precautions consistently with every patient contact.' },
      { title: 'Transmission-Based Care', description: 'Use contact, droplet, and airborne protocols as indicated.' },
      { title: 'Environmental Hygiene', description: 'Support clean surfaces, equipment safety, and waste segregation.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Perform hand hygiene at key moments of care.', 'Use PPE according to exposure risk and policy.', 'Maintain aseptic technique during procedures and dressing care.']
  },
  {
    slug: 'hand-hygiene-procedure',
    title: 'Hand Hygiene Procedure',
    intro: 'Hand hygiene is one of the most effective nursing interventions for infection prevention.',
    overviewTitle: 'When to Perform Hand Hygiene',
    overviewItems: ['Before touching a patient', 'Before clean or aseptic procedures', 'After body fluid exposure risk', 'After touching a patient and surroundings'],
    cardsTitle: 'Technique Guidance',
    cards: [
      { title: 'Soap and Water', description: 'Use when hands are visibly soiled or after exposure to contaminants.' },
      { title: 'Alcohol-Based Rub', description: 'Use for routine decontamination when hands are not visibly dirty.' },
      { title: 'Compliance Practice', description: 'Integrate hand hygiene into workflow without skipping key moments.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Cover all hand surfaces including thumbs and fingertips.', 'Follow adequate rubbing duration for effectiveness.', 'Dry hands properly before patient contact or glove use.']
  },
  {
    slug: 'vital-signs-measurement',
    title: 'Vital Signs Measurement',
    intro: 'Vital signs provide baseline and ongoing indicators of patient condition and treatment response.',
    overviewTitle: 'Core Vital Signs',
    overviewItems: ['Temperature', 'Pulse', 'Respiration', 'Blood pressure and oxygen saturation'],
    cardsTitle: 'Assessment Focus',
    cards: [
      { title: 'Accurate Measurement', description: 'Use proper technique and calibrated tools for reliable readings.' },
      { title: 'Trend Analysis', description: 'Compare values over time to identify deterioration or improvement.' },
      { title: 'Clinical Response', description: 'Escalate abnormal findings and implement timely interventions.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Ensure patient is at rest when possible before recording.', 'Document time, method, and context of each reading.', 'Report significant changes immediately to the clinical team.']
  },
  {
    slug: 'nursing-process-steps',
    title: 'Nursing Process Steps',
    intro: 'The nursing process is a systematic method for delivering individualized, evidence-based care.',
    overviewTitle: 'Five Steps',
    overviewItems: ['Assessment', 'Nursing diagnosis', 'Planning', 'Implementation', 'Evaluation'],
    cardsTitle: 'Process Application',
    cards: [
      { title: 'Data to Decision', description: 'Convert assessment findings into focused nursing priorities.' },
      { title: 'Goal-Oriented Planning', description: 'Set measurable patient outcomes and aligned interventions.' },
      { title: 'Continuous Evaluation', description: 'Review outcomes and adapt the care plan based on response.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Base interventions on patient-specific needs and priorities.', 'Use clear, measurable goals while planning care.', 'Reassess regularly and update care plans as needed.']
  },
  {
    slug: 'patient-safety-in-nursing',
    title: 'Patient Safety in Nursing',
    intro: 'Patient safety in nursing focuses on reducing harm through reliable, high-quality care practices.',
    overviewTitle: 'Safety Priorities',
    overviewItems: ['Correct patient identification', 'Medication safety checks', 'Fall prevention', 'Communication and documentation'],
    cardsTitle: 'Safety Practice Areas',
    cards: [
      { title: 'Medication Safety', description: 'Use verification steps and double checks to reduce medication errors.' },
      { title: 'Risk Prevention', description: 'Identify fall, pressure injury, and infection risks early.' },
      { title: 'Team Communication', description: 'Use structured handovers and clear documentation for continuity.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Always verify patient identity before care.', 'Use safety checklists during procedures and transitions.', 'Encourage reporting and learning from near-miss events.']
  },
  {
    slug: 'hand-washing-procedure-who',
    title: 'Hand Washing Procedure (WHO)',
    intro: 'WHO-aligned hand washing steps improve hygiene quality and reduce infection transmission.',
    overviewTitle: 'Steps',
    overviewItems: ['Wet hands', 'Apply soap', 'Rub thoroughly', 'Rinse and dry'],
    cardsTitle: 'Technique Breakdown',
    cards: [
      { title: 'Preparation', description: 'Use clean running water and remove barriers like rings when possible.' },
      { title: 'Rubbing Sequence', description: 'Rub palms, dorsum, fingers, thumbs, and fingertips thoroughly.' },
      { title: 'Completion', description: 'Rinse fully and dry with a clean towel or air dryer.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Follow each motion step to ensure full surface coverage.', 'Use sufficient soap and proper duration.', 'Dry hands completely to reduce contamination risk.']
  },
  {
    slug: 'injection-procedure-nursing',
    title: 'Injection Procedure in Nursing',
    intro: 'Injection procedures require aseptic technique, precise administration, and post-care observation.',
    overviewTitle: 'Core Steps',
    overviewItems: ['Verify order and patient identity', 'Prepare equipment and medication', 'Administer using aseptic technique', 'Document and observe response'],
    cardsTitle: 'Procedure Focus',
    cards: [
      { title: 'Preparation and Safety', description: 'Check medication details, allergies, and route before administration.' },
      { title: 'Site and Technique', description: 'Choose appropriate anatomical site and maintain sterile handling.' },
      { title: 'Aftercare', description: 'Observe for reactions and document dose, time, and patient response.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Use the right route, right site, and right technique.', 'Maintain clear patient communication before and after injection.', 'Monitor and report adverse effects without delay.']
  },
  {
    slug: 'blood-pressure-measurement',
    title: 'Blood Pressure Measurement',
    intro: 'Accurate blood pressure measurement is essential for diagnosis, monitoring, and treatment decisions.',
    overviewTitle: 'Best Practices',
    overviewItems: ['Use correct cuff size', 'Position patient properly', 'Allow rest before reading', 'Record context with values'],
    cardsTitle: 'Accuracy Factors',
    cards: [
      { title: 'Patient Positioning', description: 'Support arm at heart level and ensure proper seated posture.' },
      { title: 'Measurement Technique', description: 'Follow consistent cuff placement and reading method each time.' },
      { title: 'Interpretation', description: 'Evaluate readings with symptoms and previous trends.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Avoid measurement immediately after activity or stress.', 'Repeat reading when values are unexpectedly abnormal.', 'Document arm, posture, and timing for clinical clarity.']
  },
  {
    slug: 'iv-infusion-procedure',
    title: 'IV Infusion Procedure',
    intro: 'IV infusion care includes setup accuracy, aseptic handling, and continuous monitoring for complications.',
    overviewTitle: 'Monitoring Checklist',
    overviewItems: ['Patency of IV line', 'Flow rate accuracy', 'Signs of infiltration or phlebitis', 'Intake-output documentation'],
    cardsTitle: 'Infusion Care Areas',
    cards: [
      { title: 'Preparation', description: 'Confirm order, fluid, rate, and patient identity before starting infusion.' },
      { title: 'Ongoing Monitoring', description: 'Observe site condition and patient tolerance throughout therapy.' },
      { title: 'Complication Prevention', description: 'Respond early to pain, swelling, leakage, or flow abnormalities.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Maintain aseptic care during line handling.', 'Verify infusion rate at regular intervals.', 'Document intake and patient response accurately.']
  },
  {
    slug: 'importance-of-nursing',
    title: 'Importance of Nursing',
    intro: 'Nursing is central to healthcare quality, patient recovery, and continuity of care.',
    overviewTitle: 'Why Nursing Matters',
    overviewItems: ['Improves patient outcomes', 'Supports patient and family education', 'Coordinates multidisciplinary care', 'Strengthens health systems'],
    cardsTitle: 'Impact Areas',
    cards: [
      { title: 'Direct Clinical Care', description: 'Nurses provide continuous bedside assessment and intervention.' },
      { title: 'Patient Advocacy', description: 'Nurses protect patient rights, safety, and informed decision-making.' },
      { title: 'System Support', description: 'Nurses connect teams, workflows, and community follow-up services.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Nursing outcomes influence both safety and recovery quality.', 'Education and counseling improve treatment adherence.', 'Strong nursing teams improve healthcare efficiency overall.']
  },
  {
    slug: 'role-of-nurse-in-healthcare',
    title: 'Role of Nurses in Healthcare',
    intro: 'Nurses play a critical role in patient care, treatment coordination, and recovery.',
    overviewTitle: 'Core Roles',
    overviewItems: ['Direct patient care', 'Care coordination', 'Health education', 'Patient advocacy and safety monitoring'],
    cardsTitle: 'Role Dimensions',
    cards: [
      { title: 'Clinical Decision Support', description: 'Use assessment data to guide day-to-day nursing interventions.' },
      { title: 'Interprofessional Coordination', description: 'Work with doctors and allied teams for integrated patient management.' },
      { title: 'Education and Prevention', description: 'Empower patients and families with practical health guidance.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Nurses connect clinical plans with bedside execution.', 'Effective communication improves patient safety.', 'Education by nurses supports long-term health outcomes.']
  },
  {
    slug: 'types-of-nursing-professions',
    title: 'Types of Nursing Professions',
    intro: 'Nursing professions include diverse roles across clinical care, community services, education, and leadership.',
    overviewTitle: 'Common Professional Paths',
    overviewItems: ['Clinical nurse', 'Critical care nurse', 'Community health nurse', 'Nurse educator and nurse administrator'],
    cardsTitle: 'Career Path Categories',
    cards: [
      { title: 'Hospital-Based Roles', description: 'General wards, ICUs, operation theaters, and emergency care settings.' },
      { title: 'Community and Public Health', description: 'Outreach, prevention, and population-focused nursing services.' },
      { title: 'Education and Leadership', description: 'Nurse educators, supervisors, and administrative nursing roles.' }
    ],
    quickPointsTitle: 'Quick Essentials',
    quickPoints: ['Choose pathways based on interest, skills, and care setting.', 'Each role requires strong communication and clinical judgment.', 'Continuous learning supports long-term nursing growth.']
  }
];
