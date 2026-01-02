import { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface City {
  name: string;
  slug: string;
  state: string;
}

export interface ServiceCard {
  title: string;
  icon: LucideIcon;
  slug: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}