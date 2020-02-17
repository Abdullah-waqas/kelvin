import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  pricingList = [
    {
      icon: 'residential.png',
      heading: 'Residential',
      text: `We have a fixed pricing structure which helps our clients budget for upcoming projects. Billing can vary with design, so always ask for our best price for a particular project. `
    },
    {
      icon: 'kelvin.png',
      heading: 'Kelvin App',
      text: `We're offering free early access to the Kelvin App to improve the service based on user feedback. The App is scheduled for release as a subscription service in early 2020.`
    },
    {
      icon: 'commercial.png',
      heading: 'Commercial',
      text: `Commercial projects vary greatly in scope, size and application, hence we like to quote on each project. If you'd like us to quote for your next project, please email\
      us the plans.`
    }

  ];

  content = {
    heading: 'Our Principles',
    text: `We're upfront with our pricing - that means no suprises come billing time. If\
    we need to do more work or issue a variation for an invoice, we'll always clear it with\
    you first and explain what work we're undertaking. We're happy to meet your needs should\
    you require a quote on each project or a fixed pricing structure. For large volume work,\
    some economies of scale do apply, so always ask for our best price.`
  };
  emailstring = "mailto:david@kelvinconsultants.com.au?subject=Thanks for the HTML code&body=This would be good";
}
