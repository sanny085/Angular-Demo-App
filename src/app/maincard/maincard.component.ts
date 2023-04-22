import { Component } from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css'],
})
export class MaincardComponent {
  name: string = 'Sanny';
  age: number = 20;
  registrationStatus: string = 'Check the status';
  isMature = () => {
    if (this.age > 18) {
      return 'He can vote';
    }
    return 'He can not vote';
  };
  color: string = 'white';
  allow: boolean = false;

  constructor() {
    //Properties Binding Approach after 2 seconds
    setTimeout(() => {
      this.name = 'Pankaj';
      this.allow = true;
    }, 2000);
  }
  onRegistrationStatus = () => {
    return (this.registrationStatus = 'Registration is going on');
  };
}
