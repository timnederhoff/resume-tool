interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: Profile[];
  headline: string;
  'date-of-birth': string;
  kvk: string;
}

export interface Work {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  tools: string[];
}

interface Volunteer {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
}

interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: string;
  keywords?: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

interface Interest {
  name: string;
  keywords: string[];
}

interface Reference {
  name: string;
  reference: string;
}

export default interface Resume {
  language: string;
  basics: Basics;
  work: Work[];
  volunteer?: Volunteer[];
  education: Education[];
  awards?: Award[];
  publications?: Publication[];
  skills?: Skill[];
  languages: Language[];
  interests?: Interest[];
  references?: Reference[];
}
