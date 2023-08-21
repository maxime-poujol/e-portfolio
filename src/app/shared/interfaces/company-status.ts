const CDI = 'CDI';
const CDD = 'CDD';
const ALTERNANCE = 'ALTERNANCE'
const STAGE = 'STAGE';

export const COMPANY_STATUS = [
  CDI,
  CDD,
  ALTERNANCE,
  STAGE,
] as const;

export type CompanyStatus = typeof COMPANY_STATUS[number];
