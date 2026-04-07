import { ComponentType, SVGProps } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;

  iconName: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  role: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SecurityLevel {
  BASIC = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ELITE = 'Elite',
}