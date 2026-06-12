export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "clinic" | "before-after" | "treatment";
  beforeImage?: string;
  afterImage?: string;
  singleImage?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
  gender: "male" | "female";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentData {
  fullName: string;
  mobile: string;
  email: string;
  age: string;
  gender: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}
