import { Service, Testimonial } from './types';
import { Shield, Users, Camera, Truck, Lock, Radio,} from 'lucide-react';

export const COMPANY_NAME = "VANTAGE SECURITY AND FACILITY MANAGEMENT";
export const SHORT_NAME = "Vantage Security";

export const SERVICES: Service[] = [
  {
    id: 'manned-guarding',
    title: 'Manned Guarding',
    description: 'Highly trained security personnel for corporate, residential, and industrial premises. Our guards are vetted, uniformed, and disciplined.',
    iconName: 'Users',
    features: ['Access Control', 'Perimeter Patrol', 'Reception Duties', 'Emergency Response']
  },
  {
    id: 'parking-access-control-security',
    title: 'Parking & Access Control Security',
    description: 'Ensuring safe, controlled, and organized vehicle movement within your premises.',
    iconName: 'TrafficCone',
    features: ['Traffic Flow', 'Gate Monitoring', 'Entry Logs', 'Permit Check']
  },
  {
    id: 'office-security',
    title: 'Office Security',
    description: 'Our Office Security service provides a strong physical and technological protection layer for corporate offices, commercial buildings, and administrative centers.',
    iconName: 'Building2',
    features: ['Access Control', 'Visitor Management', 'ID Verification', 'Parking Safety']
  },
  {
    id: 'event-security',
    title: 'Event Security',
    description: 'Comprehensive security planning and crowd management for corporate events, concerts, weddings, and public gatherings.',
    iconName: 'Speech',
    features: ['Crowd Control', 'VIP Protection', 'Traffic Management', 'Venue Screening']
  },
  {
    id: 'personal-protection',
    title: 'Personal Protection',
    description: 'Elite bodyguards and close protection officers for executives, celebrities, and high-net-worth individuals.',
    iconName: 'UserLock',
    features: ['Close Protection', 'Travel Security', 'Risk Assessment', 'Secure Transport']
    
  },
  {
    id: 'electronic-surveillance',
    title: 'Electronic Surveillance',
    description: 'State-of-the-art CCTV and alarm systems monitoring. We integrate technology with human vigilance for 24/7 protection.',
    iconName: 'Spotlight',
    features: ['CCTV Monitoring', 'Intrusion Detection', 'Biometric Access', 'Remote Command Center']
  },
 
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: '',
    company: '',
    role: '',
    quote: "Vantage Security has transformed our campus security. Their guards are professional and the management team is always responsive."
  },
  {
    id: '2',
    name: '',
    company: '',
    role: '',
    quote: " The personal protection service provided by DSAS gave me peace of mind during my travels."
  },
  {
    id: '3',
    name: '',
    company: '',
    role: '',
    quote: "Their event security team ensured our corporate event went off without a hitch. Highly recommend!"
  }
];
