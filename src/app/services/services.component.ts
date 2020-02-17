import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  servicesList = [
    {
      icon: 'star.png',
      heading: '6 Star Assesment',
      text: `The most common way for new homes to achieve energy compiance is via a 6 star energy report.
      We construct a model of your dwelling in our simulation software, then provide you with an email detailing the insulation and glazing products
      you'll need to achieve the required star rating. Upon confirmation, we provide a nationally recognised NatHERS certificate with our report.`
    },
    {
      icon: 'kelvin.png',
      heading: 'Kelvin App',
      text: `Get real-time feedback on your residential projects via the Kelvin Web App! Don't wait for the
      energy efficiency assessment to find out how your project will perform - use the
      Kelvin App during the client consultation and planning phases to optimise your
      design, manage client expectations and forecast the glazing and insulation requirements.`,
      Title:'Get started with your free trial'
    },
    {
      icon: 'satisfy.png',
      heading: 'Deemed to Satisfy',
      text: `The National Construction Code provides us another acceptable method to assess new homes; a series of regulations that are often referred to as 
      the "Deemed to Satisfy" provisions. This method is simple, procedural, and most often suited to assessing extensions or additions.
      If this method yields the best results for your project, we can provide you with a Deemed to Satisfy report.`
    },
    {
      icon: 'performance.png',
      heading: 'Performance Solution',
      text: `Custom designs sometimes require a custom assessment. When 6 Star or Deemed to Satisfy methods produce less than favourable results,
      we can use a Performance Solution assessment to find a better outcome. This is one of the competitive advantages we feel help distinguish us as technical experts in our field. 
      Contact us to find out if a Performance Solution can help you achieve compliance on your next project. 
      `
    },
    {
      icon: 'commercial.png',
      heading: 'Commercial Assesment',
      text: `We provide Section J reports for commercial buildings that minimise the total cost required to achieve energy
      compliance. With the 2019 National Construction Code (NCC) becoming applicable in
      May of 2019, we can provide commercial reports based on either the 2019 NCC or 2016 NCC regulations during the 1 year transition phase. 
      `
    },
    {
      icon: 'BASIX.png',
      heading: 'BASIX Report',
      text: `In NSW and the ACT, Building Sustainability Index reports are part of the required documentation for residential building applications.
      If you have a new development or are renovating an existing dwelling, contact us for a quote on a BASIX report. 
       `
    },
    {
      icon: 'consultation.png',
      heading: 'Design Consultation',
      text: `Your goals may not be limited to just achieving energy compliance, and that's okay! We've helped our clients design an 8 star house, tune insulation in
      a warehouse to minimise the loss of perishable stock, and help navigate regulations to convert a heritage barn into a secondary dwelling. If you'd like consultation on your next project, call us and we'll arrange a visit! `
    }

  ];
}
