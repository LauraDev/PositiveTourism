import { Contact } from './Contact';
import { FullDayProgram } from './FullDayProgram';

export class Tour {
  id;
  clientBenefits: string;
  communityBenefits: string;
  contact: Contact;
  description: string;
  duration: string;
  isValidated: boolean;
  location: string;
  name: string;
  overviewImage: string;
  overviewTitle: string;
  overviewSubtitle: string;
  pictures: Array<{img: string, alt: string, text: string}>;
  price: string;
  program: Array<FullDayProgram>;
  url: string;
  volunteering: string;

  constructor(dbTour?: any) {
    Object.assign(this, dbTour);
    if (!this.contact) {
      this.contact = new Contact();
    }
    if (!this.isValidated) {
      this.isValidated = false;
    }
    if (!this.pictures) {
      this.pictures = [];
    }
    if (!this.program) {
      this.program = [];
    }
    this.url = this.replaceSpacesByDash(this.name);
  }

  private replaceSpacesByDash(name: string): string {
    const url: string = name.replace('-', '').replace(/\s+/g, '-').toLowerCase();
    return url;
  }
}

