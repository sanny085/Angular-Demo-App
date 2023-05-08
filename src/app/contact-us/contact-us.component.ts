import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  name = '';
  address = '';
  isSubmitted = false;
  constructor() {
    this.isSubmitted = false;
  }

  onSubmit = () => {
    // const { name, address } = this;
    this.isSubmitted = true;
  };
  onResetForm = () => {
    this.name = '';
    this.address = '';
    this.isSubmitted = false;
  };
}
