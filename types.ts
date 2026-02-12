
export interface NavItem {
  label: string;
  path: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  affiliation?: string;
}

export interface RegistrationCategory {
  category: string;
  earlyBird: string;
  regular: string;
}

export interface Deadline {
  event: string;
  date: string;
  isPassed: boolean;
}
