import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SmtpService} from "../shared/services/smtp.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  form = {
    name: '',
    phone: '',
    email: '',
    comment: ''
  };

  isSending = false;
  sent = false;
  submitted = false;
  constructor(private smtpService: SmtpService) {}

  sendMessage(contactForm: NgForm) {
    this.submitted = true;

    if (contactForm.invalid) {
      contactForm.control.markAllAsTouched();
      return;
    }

    this.smtpService.submitForm({ ...this.form });
    contactForm.resetForm();
    this.submitted = false;
  }

}
