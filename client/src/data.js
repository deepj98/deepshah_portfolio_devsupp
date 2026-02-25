// Edit this file to update your portfolio content

export const profile = {
  name: 'Deep Shah ',
  title: 'Application Support and Automation',
  summary:
    'ABOUT ME: Overall, with 4+ years of experience. At technical front, I leverage Python, SQL, and REST APIs to automate workflows and integrate Spring Boot services. I have successfully streamlined database migrations and reduced manual monitoring by 35% through custom scripting. \n\n Operationally, I manage real-time field services using Dynamics 365 and IFS FSM. I excel at incident triage and SLA-driven coordination, maintaining 90% customer satisfaction via technical troubleshooting and workforce scheduling.',
  avatar: null, // optional: '/avatar.jpg'
}

export const projects = [
  {
    id: 1,
    title: 'Database Migration Automation – Python, PostgreSQL, MySQL',
    type: 'Automation',
    description: 'Built a Python-based automation script to migrate data from PostgreSQL to MySQL, including table structures and records, without manual table creation',
    tech: ['Python', 'PostgreSQL', 'MySQL', 'Pandas', 'SQLAlchemy', 'psycopg2-binary', 'PyMySQL'],
    link: null,
  },
  {
    id: 2,
    title: 'Internal Dashboard',
    type: 'Website',
    description: 'Internal tool for viewing metrics and reports.',
    tech: ['React', 'Node'],
    link: null,
  },
  {
    id: 3,
    title: 'Landing Page Project',
    type: 'Website',
    description: 'Marketing landing page with forms and analytics.',
    tech: ['React', 'Vite'],
    link: null,
  },
]

export const work = [
  {
    id: 1,
    role: 'Analyst, Workforce planning (Contract)',
    company: 'Reliance Home Comfort',
    location: 'Toronto, ON',
    period: 'October 2025 – December 2025',
    points: ['Promoted to Workforce Planning role following exceptional performance as a vendor partner.', 'Monitored real-time field operations for 30+ technicians/contractors using Dynamics 365, IFS FSM, and PSO 360', 'Managed daily capacity planning and scheduling to maintain 90% SLA compliance.','Resolved operational escalations via cross-functional coordination, achieving 80% same-day resolution.' ],
  },
  {
    id: 2,
    role: 'Customer Solutions Specialist',
    company: 'Reliance Home Comfort (Voysus)',
    location: 'Toronto, ON',
    period: 'Ocober 2024 – October 2025',
    points: ['Provided technical HVAC support using Dynamics 365 CMS, maintaining a 90% NPS via documented workflows and SharePoint resources. Microsoft Dynamics 365', 'Validated legacy contracts and SLA details utilizing SQL reports and Banner lookup tools. SQL Documentation.','Achieved 85%+ quality scores through first-call resolution and a 13-minute average handle time.'],
  },
  {
    id: 3,
    role: 'Customer support',
    company: 'La Diperie Ltd',
    location: 'Toronto, ON',
    period: 'March 2024 – September 2024',
    points: ['Led and coached a team of 12+ staff, handling scheduling, onboarding, training, and performance feedback.', 'Acted as escalation point for customer and operational issues, ensuring timely resolution and service quality.'],
  },
  {
    id: 4,
    role: 'Full Stack Developer (Intern)',
    company: 'Mesons INC',
    location: 'Toronto, ON',
    period: 'September 2023 – January 2024',
    points: ['Supported application functionality by integrating React.js frontend components with Spring Boot backend services and REST APIs, improving data exchange reliability.', 'Troubleshot API integration issues using Postman, resolving CORS and data flow errors and reducing repeated test failures by 30%, resulting stable builds for QA validation.','Developed a proof-of-concept location-based feature using OpenStreetMap, enabling early feasibility validation and shortening design decision timelines by 20%.'],
  },
  {
    id: 5,
    role: 'Software Engineer',
    company: 'Enhanced software Solutions Pvt Ltd (RBL Bank)',
    location: 'Mumbai, India',
    period: 'August 2020 – April 2022',
    points: ['Facilitated adoption of the OutSystems low-code platform, training 8+ junior developers and accelerating internal application development and deployment timelines by approximately 20%.','Automated recurring workflows using schedulers, reducing manual monitoring and follow-up efforts by 35% for payment reminders and routine data updates.','Designed and maintained SQL database models and backend business logic, improving data accuracy and reducing reporting discrepancies by 25%']
  }
]

export const about = {
  bio: 'A few sentences about you: what you care about, how you work, and what you’re looking for. Keep it brief and genuine.',
  email: 'you@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
}
