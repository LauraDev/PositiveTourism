import { Contact } from './../../shared/models/Contact';
import { ContactService } from './../../shared/services/contact.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  /**
   * Has the form been sent successfully to the API ?
   * @var isSent: boolean
   */
  public isSent: boolean;

  /**
   * Has the contact form been submitted ?
   * @var isSubmitted: boolean
   */
  public isSubmitted: boolean;

  /**
   * Sanitized url -> display google map
   * @var safeUrl: SafeUrl
   */
  public safeUrl: SafeUrl;

  constructor(
    private contactService: ContactService,
    private domSanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.contact.mapUrl);
    this.isSent = false;
    this.isSubmitted = false;
  }

  /**
   * Send a client message to a tour organizer
   * @method sendMessage
   * @param form NgForm
   */
  sendMessage(form: NgForm) {
    this.isSent = false;

    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;

    this.contactService.postMessage(name, email, message, this.contact.email ).then(
      success => this.isSubmitted = true,
      error => this.isSent = true
    );
  }

}
