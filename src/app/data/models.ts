export interface Contact {
  type: 'phone' | 'email' | 'portfolio' | 'linkedin';
  href: string;
  label: string;
}

export interface Header {
  name: string;
  photoAlt: string;
  role: string;
  targetRoleLabel: string;
  targetRoleValue: string;
  contacts: Contact[];
}

export interface Highlights {
  title: string;
  items: string[];
}

export interface Snapshot {
  title: string;
  profileLabel: string;
  profileValue: string;
  keywordsLabel: string;
  keywords: string[];
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface Metrics {
  title: string;
  items: Metric[];
}

export interface AboutMe {
  title: string;
  summary: string;
  content: string;
  points: string[];
}

export interface Narrative {
  challenge: string;
  action: string;
  impact: string;
}

export type RoleType = 'primary' | 'supporting';

export interface ExperienceEntry {
  company: string;
  period: string;
  position: string;
  roleType: RoleType;
  narrative?: Narrative;
  description?: string;
}

export interface Experience {
  title: string;
  otherTitle: string;
  featuredLabel: string;
  supportingLabel: string;
  items: ExperienceEntry[];
}

export interface EducationEntry {
  degree: string;
  period: string;
  institution: string;
  description: string;
}

export interface Education {
  title: string;
  items: EducationEntry[];
}

export interface Courses {
  title: string;
  items: EducationEntry[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Skills {
  title: string;
  categories: SkillCategory[];
}

export interface Footer {
  rights: string;
  designed: string;
}

export interface CvData {
  header: Header;
  highlights: Highlights;
  snapshot: Snapshot;
  metrics: Metrics;
  aboutMe: AboutMe;
  experience: Experience;
  education: Education;
  courses: Courses;
  skills: Skills;
  footer: Footer;
}
