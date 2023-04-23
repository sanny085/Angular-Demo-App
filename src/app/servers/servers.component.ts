import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: ` <p>Multiple Servers works!</p>
    <app-server /><app-server />`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
