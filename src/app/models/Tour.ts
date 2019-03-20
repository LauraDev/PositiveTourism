import { Contact } from './Contact';

export class Tour {
  id;
  clientBenefits: string;
  contact: Contact;
  communityBenefits: string;
  description: string;
  duration: string;
  location: string;
  name: string;
  pictures: Array<{img: string, alt: string, text: string}>;
  price: string;
  overviewImage: string;
  overviewTitle: string;
  overviewSubtitle: string;
  url: string;
  validated: boolean;
  volunteering: string;

  constructor(dbTour?: any) {
    Object.assign(this, dbTour);
    if (!this.contact) {
      this.pictures = [];
    }
    if (!this.pictures) {
      this.pictures = [];
    }
    this.url = this.replaceSpacesByDash(this.name);
  }

  private replaceSpacesByDash(name: string): string {
    const url: string = name.replace('-', '').replace(/\s+/g, '-').toLowerCase();
    return url;
  }
}

