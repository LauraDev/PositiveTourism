import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Contact } from '../../models/Contact';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  public safeUrl: SafeUrl;
  public sendError: boolean;
  public submitted: boolean;

  constructor(
    private contactService: ContactService,
    private domSanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.contact.mapUrl);
    this.sendError = false;
    this.submitted = false;
  }

  sendMessage(form: NgForm) {
    this.sendError = false;

    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;

    this.contactService.postMessage(name, email, message, this.contact.email ).then(
      success => this.submitted = true,
      error => this.sendError = true
    );
  }

}
