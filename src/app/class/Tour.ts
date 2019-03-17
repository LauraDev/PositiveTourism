
export class Tour {
  id;
  name: string;
  url: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  pictures: Array<any>;
  overviewImage: string;
  overviewTitle: string;
  overviewSubtitle: string;

  constructor(dbTour?: any) {
    Object.assign(this, dbTour);
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
