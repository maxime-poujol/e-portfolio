import { TimelineItem } from '../shared/interfaces/timeline-item';
import * as moment from 'moment/moment';

const generateDateFormat = (date: string|null = null) => (date ? moment(date) : moment()).format('MMM YYYY')
const randomColor = (): string => {
  const color = "#" + ((1 << 24) * Math.random() | 0).toString(16);

  if (['#5c722'].includes(color)) {
    return randomColor();
  }

  return color;
};

export const experiencesData = (): TimelineItem[] => [
  {
    color: randomColor(),
    dateStart: generateDateFormat('202210'),
    dateEnd: generateDateFormat(),
    jobTitle: 'Full Stack Developper',
    company: 'Matooma',
    companyStatus: 'CDI',
    city: 'Pérols',
    postalCode: '34000',
    country: 'France',
    description: '',
  },
  {
    color: randomColor(),
    dateStart: generateDateFormat('202204'),
    dateEnd: generateDateFormat('202210'),
    jobTitle: 'Web Developper',
    company: 'Nelis',
    companyStatus: 'ALTERNANCE',
    city: 'Montpellier',
    postalCode: '34000',
    country: 'France',
    description: '',
  },
  {
    color: randomColor(),
    dateStart: generateDateFormat('202109'),
    dateEnd: generateDateFormat('202204'),
    jobTitle: 'Web Developper',
    company: "Sup'Perform",
    companyStatus: 'ALTERNANCE',
    city: 'Montpellier',
    postalCode: '34000',
    country: 'France',
    description: '',
  },
  {
    color: randomColor(),
    dateStart: generateDateFormat('202107'),
    dateEnd: generateDateFormat('202109'),
    jobTitle: 'Web Developper',
    company: "Sup'Perform",
    companyStatus: 'CDD',
    city: 'Montpellier',
    postalCode: '34000',
    country: 'France',
    description: '',
  },
  {
    color: randomColor(),
    dateStart: generateDateFormat('202104'),
    dateEnd: generateDateFormat('202107'),
    jobTitle: 'Web Developper',
    company: "Pro'Perform",
    companyStatus: 'STAGE',
    city: 'Montpellier',
    postalCode: '34000',
    country: 'France',
    description: '',
  },
];
