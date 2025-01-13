export interface WorkExperience {
  employer: string;
  position: string;
  duration: string;
  responsibilities?: string;
}

export interface JobApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  position: string;
  employmentType: string;
  availability: string;
  shifts: string[];
  workExperience: WorkExperience[];
  educationLevel: string;
  school: string;
  graduationYear: string;
  additionalInfo?: string;
  legallyEligible: boolean;
}