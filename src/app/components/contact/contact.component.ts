import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  public safeUrl: SafeUrl;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.contact.mapUrl);
  }

}
