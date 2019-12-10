import mongoose, { Schema, SchemaTypes } from 'mongoose';

const Basics = new Schema({
  name: String,
  label: String,
  picture: String,
  email: String,
  phone: String,
  website: String,
  summary: String,
  location: {
    address: String,
    postalCode: String,
    city: String,
    countryCode: String,
    region: String,
  },
  profiles: [{
    network: String,
    username: String,
    url: String
  }],
  headline: String,
  'date-of-birth': String,
  kvk: String
});

const Work = new Schema({
  company: String,
  position: String,
  website: String,
  startDate: String,
  endDate: String,
  summary: String,
  highlights: [String],
  tools: [String]
});

const Volunteer = new Schema({
  organization: String,
  position: String,
  website: String,
  startDate: String,
  endDate: String,
  summary: String,
  highlights: [String]
});

const Education = new Schema({
  institution: String,
  area: String,
  studyType: String,
  startDate: String,
  endDate: String,
  gpa: {type: String, required: false},
  courses: {type: [String], required: false}
});

const Award = new Schema({
  title: String,
  date: String,
  awarder: String,
  summary: String
});

const Publication = new Schema({
  name: String,
  publisher: String,
  releaseDate: String,
  website: String,
  summary: String
});

const Skill = new Schema({
  name: String,
  level: String,
  keywords: {type: [String], required: false}
});

const Language = new Schema({
  language: String,
  fluency: String
});

const Interest = new Schema({
  name: String,
  keywords: {type: [String], required: false}
});

const Reference = new Schema( {
  name: String,
  reference: String
});

export default mongoose.model('Resume', new mongoose.Schema({
  language: { type: String, required: true },
  basics: { type: Basics, required: true },
  work: { type: [Work], required: true },
  volunteer: { type: [Volunteer], required: false },
  education: { type: [Education], required: true },
  awards: { type: [Award], required: false },
  publications: { type: [Publication], required: false },
  skills: { type: [Skill], required: false },
  languages: { type: [Language], required: true },
  interests: { type: [Interest], required: false },
  references: { type: [Reference], required: false },
}, { collection : 'resumes' }));
