export interface KnowledgePage {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export const KNOWLEDGE_PAGES: KnowledgePage[] = [
  {
    slug: 'fundamentals-of-nursing',
    title: 'Fundamentals of Nursing',
    description: 'Core concepts that form the foundation of safe and effective nursing practice.',
    content: `
      <h1>Fundamentals of Nursing</h1>
      <p>Fundamentals of nursing form the foundation of patient care and clinical practice in every care setting.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Basic patient care</li>
        <li>Infection control</li>
        <li>Vital signs monitoring</li>
        <li>Nursing ethics</li>
      </ul>
    `
  },
  {
    slug: 'medical-surgical-nursing',
    title: 'Medical Surgical Nursing',
    description: 'Principles of adult care for acute and chronic medical-surgical conditions.',
    content: `
      <h1>Medical Surgical Nursing</h1>
      <p>Medical surgical nursing focuses on assessment, planning, intervention, and evaluation for adult patients with complex conditions.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Preoperative and postoperative care</li>
        <li>Cardiovascular and respiratory nursing</li>
        <li>Pain management and wound care</li>
        <li>Fluid and electrolyte balance</li>
      </ul>
    `
  },
  {
    slug: 'community-health-nursing',
    title: 'Community Health Nursing',
    description: 'Population-focused nursing for prevention, promotion, and community wellbeing.',
    content: `
      <h1>Community Health Nursing</h1>
      <p>Community health nursing emphasizes preventive care, health education, and outreach for families and populations.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Primary healthcare principles</li>
        <li>Maternal and child health programs</li>
        <li>Immunization and disease prevention</li>
        <li>Health education and home visits</li>
      </ul>
    `
  },
  {
    slug: 'child-health-nursing',
    title: 'Child Health Nursing',
    description: 'Nursing care principles for infants, children, and adolescents.',
    content: `
      <h1>Child Health Nursing</h1>
      <p>Child health nursing supports growth, development, and age-appropriate care from newborn to adolescence.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Growth and development milestones</li>
        <li>Pediatric assessment</li>
        <li>Nutrition in childhood</li>
        <li>Family-centered pediatric care</li>
      </ul>
    `
  },
  {
    slug: 'mental-health-nursing',
    title: 'Mental Health Nursing',
    description: 'Therapeutic communication and care for mental health conditions.',
    content: `
      <h1>Mental Health Nursing</h1>
      <p>Mental health nursing includes therapeutic communication, crisis support, and person-centered psychiatric care.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Mental status assessment</li>
        <li>Therapeutic nurse-patient relationship</li>
        <li>Common psychiatric conditions</li>
        <li>Safety and de-escalation techniques</li>
      </ul>
    `
  },
  {
    slug: 'pharmacology-in-nursing',
    title: 'Pharmacology in Nursing',
    description: 'Medication principles for safe administration and monitoring in nursing care.',
    content: `
      <h1>Pharmacology in Nursing</h1>
      <p>Pharmacology in nursing covers how medicines work, safe administration, and monitoring patient response to drugs.</p>
      <h2>Key Topics</h2>
      <ul>
        <li>Drug classifications and actions</li>
        <li>Medication administration rights</li>
        <li>Adverse effects and interactions</li>
        <li>Patient education for medicines</li>
      </ul>
    `
  },
  {
    slug: 'infection-control-in-nursing',
    title: 'Infection Control in Nursing',
    description: 'Core infection prevention practices used in healthcare settings.',
    content: `
      <h1>Infection Control in Nursing</h1>
      <p>Infection control involves practices used to prevent the spread of infections in healthcare settings.</p>
      <h2>Common Methods</h2>
      <ul>
        <li>Hand hygiene</li>
        <li>Use of PPE</li>
        <li>Sterilization</li>
      </ul>
    `
  },
  {
    slug: 'hand-hygiene-procedure',
    title: 'Hand Hygiene Procedure',
    description: 'Practical steps and principles of effective hand hygiene in nursing care.',
    content: `
      <h1>Hand Hygiene Procedure</h1>
      <p>Hand hygiene is one of the most effective methods to reduce healthcare-associated infections.</p>
      <h2>When to Perform Hand Hygiene</h2>
      <ul>
        <li>Before touching a patient</li>
        <li>Before clean or aseptic procedures</li>
        <li>After body fluid exposure risk</li>
        <li>After touching a patient or surroundings</li>
      </ul>
    `
  },
  {
    slug: 'vital-signs-measurement',
    title: 'Vital Signs Measurement',
    description: 'Assessment basics for temperature, pulse, respiration, blood pressure, and oxygen saturation.',
    content: `
      <h1>Vital Signs Measurement</h1>
      <p>Vital signs provide essential information about patient status and response to treatment.</p>
      <h2>Core Vital Signs</h2>
      <ul>
        <li>Temperature</li>
        <li>Pulse</li>
        <li>Respiration</li>
        <li>Blood pressure and oxygen saturation</li>
      </ul>
    `
  },
  {
    slug: 'nursing-process-steps',
    title: 'Nursing Process Steps',
    description: 'Systematic care planning model used by nurses in all clinical settings.',
    content: `
      <h1>Nursing Process Steps</h1>
      <p>The nursing process is a structured method used to deliver individualized and evidence-based patient care.</p>
      <h2>Five Steps</h2>
      <ol>
        <li>Assessment</li>
        <li>Nursing diagnosis</li>
        <li>Planning</li>
        <li>Implementation</li>
        <li>Evaluation</li>
      </ol>
    `
  },
  {
    slug: 'patient-safety-in-nursing',
    title: 'Patient Safety in Nursing',
    description: 'Safety principles that reduce harm and improve quality of care.',
    content: `
      <h1>Patient Safety in Nursing</h1>
      <p>Patient safety in nursing involves preventing errors, reducing risk, and building a culture of safe care.</p>
      <h2>Safety Priorities</h2>
      <ul>
        <li>Correct patient identification</li>
        <li>Medication safety checks</li>
        <li>Fall prevention</li>
        <li>Clear communication and documentation</li>
      </ul>
    `
  },
  {
    slug: 'hand-washing-procedure-who',
    title: 'Hand Washing Procedure (WHO)',
    description: 'Stepwise WHO-aligned hand washing process for infection prevention.',
    content: `
      <h1>Hand Washing Procedure (WHO)</h1>
      <p>Hand hygiene is essential in preventing infections in healthcare settings.</p>
      <h2>Steps</h2>
      <ol>
        <li>Wet hands</li>
        <li>Apply soap</li>
        <li>Rub thoroughly</li>
        <li>Rinse and dry</li>
      </ol>
    `
  },
  {
    slug: 'injection-procedure-nursing',
    title: 'Injection Procedure in Nursing',
    description: 'Safe administration basics for intradermal, subcutaneous, and intramuscular injections.',
    content: `
      <h1>Injection Procedure in Nursing</h1>
      <p>Injection procedures require aseptic technique, correct patient identification, and careful monitoring after administration.</p>
      <h2>Core Steps</h2>
      <ol>
        <li>Verify order and patient identity</li>
        <li>Prepare equipment and medication safely</li>
        <li>Select correct site and administer using aseptic technique</li>
        <li>Document and observe for adverse reactions</li>
      </ol>
    `
  },
  {
    slug: 'blood-pressure-measurement',
    title: 'Blood Pressure Measurement',
    description: 'Procedure guidance for accurate blood pressure recording in clinical practice.',
    content: `
      <h1>Blood Pressure Measurement</h1>
      <p>Accurate blood pressure measurement is essential for diagnosis, treatment decisions, and ongoing patient monitoring.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Use correct cuff size</li>
        <li>Position patient properly</li>
        <li>Allow rest before measurement</li>
        <li>Record values with arm and position details</li>
      </ul>
    `
  },
  {
    slug: 'iv-infusion-procedure',
    title: 'IV Infusion Procedure',
    description: 'Intravenous infusion setup and monitoring principles for safe therapy.',
    content: `
      <h1>IV Infusion Procedure</h1>
      <p>IV infusion procedure includes preparation, cannula care, controlled flow rate, and monitoring for complications.</p>
      <h2>Monitoring Checklist</h2>
      <ul>
        <li>Patency of IV line</li>
        <li>Flow rate accuracy</li>
        <li>Signs of infiltration or phlebitis</li>
        <li>Intake-output and documentation</li>
      </ul>
    `
  },
  {
    slug: 'importance-of-nursing',
    title: 'Importance of Nursing',
    description: 'How nursing contributes to patient outcomes, continuity, and healthcare systems.',
    content: `
      <h1>Importance of Nursing</h1>
      <p>Nursing is central to healthcare delivery, providing continuous patient care, education, and advocacy.</p>
      <h2>Why Nursing Matters</h2>
      <ul>
        <li>Improves patient outcomes</li>
        <li>Supports patient and family education</li>
        <li>Coordinates multidisciplinary care</li>
        <li>Strengthens community health systems</li>
      </ul>
    `
  },
  {
    slug: 'role-of-nurse-in-healthcare',
    title: 'Role of Nurses in Healthcare',
    description: 'Clinical and educational roles of nurses across healthcare settings.',
    content: `
      <h1>Role of Nurses in Healthcare</h1>
      <p>Nurses play a critical role in patient care, treatment coordination, and recovery.</p>
      <h2>Core Roles</h2>
      <ul>
        <li>Direct patient care</li>
        <li>Care coordination with healthcare teams</li>
        <li>Health education and counseling</li>
        <li>Patient advocacy and safety monitoring</li>
      </ul>
    `
  },
  {
    slug: 'types-of-nursing-professions',
    title: 'Types of Nursing Professions',
    description: 'Overview of common nursing pathways and professional roles.',
    content: `
      <h1>Types of Nursing Professions</h1>
      <p>Nursing includes diverse roles in hospitals, community settings, education, public health, and research.</p>
      <h2>Common Professional Paths</h2>
      <ul>
        <li>Clinical nurse</li>
        <li>Critical care nurse</li>
        <li>Community health nurse</li>
        <li>Nurse educator and nurse administrator</li>
      </ul>
    `
  }
];
