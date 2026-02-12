
import { NavItem, CommitteeMember, RegistrationCategory, Deadline } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Committees', path: '/committees' },
  { label: 'Call for Papers', path: '/call-for-papers' },
  { label: 'Registration', path: '/registration' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Venue', path: '/venue' },
  { label: 'Contact', path: '/contact' },
];

export const DEADLINES: Deadline[] = [
  { event: 'Abstract Submission Starts', date: 'October 15, 2025', isPassed: false },
  { event: 'Deadline for Abstract Submission', date: 'December 31, 2025', isPassed: false },
  { event: 'Notification of Acceptance', date: 'January 15, 2026', isPassed: false },
  { event: 'Early Bird Registration Deadline', date: 'January 30, 2026', isPassed: false },
  { event: 'Conference Dates', date: 'March 12-14, 2026', isPassed: false },
];

export const REGISTRATION_FEES: RegistrationCategory[] = [
  { category: 'Research Scholar / Student', earlyBird: '₹ 2,500', regular: '₹ 3,000' },
  { category: 'Faculty / Academician', earlyBird: '₹ 4,500', regular: '₹ 5,000' },
  { category: 'Industry Professionals', earlyBird: '₹ 7,000', regular: '₹ 8,000' },
  { category: 'International Participants', earlyBird: '$ 200', regular: '$ 250' },
];

export const COMMITTEES = {
  patrons: [
    { name: 'Prof. (Dr.) V. L. Maheshwari', role: 'Hon\'ble Vice-Chancellor, KBCNMU' },
    { name: 'Prof. (Dr.) S. T. Bendre', role: 'Pro-Vice-Chancellor, KBCNMU' },
  ],
  advisory: [
    { name: 'Prof. J. V. Deshpande', role: 'Former President, ISPS' },
    { name: 'Prof. B. L. S. Prakasa Rao', role: 'CR Rao AIMSCS, Hyderabad' },
    { name: 'Prof. Somnath Datta', role: 'University of Florida, USA' },
  ],
  organizing: [
    { name: 'Prof. R. L. Shinde', role: 'Convener & Head, School of Math Sciences' },
    { name: 'Dr. S. K. Patil', role: 'Organizing Secretary' },
  ]
};
