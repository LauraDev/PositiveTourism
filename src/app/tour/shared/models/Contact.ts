export class Contact {

  address: string;
  city: string;
  email: string;
  mapUrl: string;
  phone: string;
  postcode: string;

  constructor(contact?: any) {
    Object.assign(this, contact);
  }

}

