import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heading = 'The thermal design professionals';
  content = `At Kelvin Consultants, we provide energy efficiency reports and design consultation
    for residential and commercial projects. Our goal is to find the best energy compliance
    solution through friendly communication, diligence and our in-depth knowledge of thermal
    design principles. We strive for customer satisfaction, and enjoy building good
    relationships with our clients. Please take a few minutes to familiarise yourself
    with our services and see if we can help you on your next project.`;
}
