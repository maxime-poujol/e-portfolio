import { CompanyStatus } from './company-status';

export interface TimelineItem {
  color: string;
  dateStart: string;
  dateEnd: string;
  jobTitle: string;
  company: string;
  companyStatus: CompanyStatus;
  city: string;
  postalCode: string;
  country: string;
  description: string;
}
