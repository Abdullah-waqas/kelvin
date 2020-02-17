import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  content = {
    heading: '23/07/2019 - Kelvin App Alpha Testing',
    text: `The Kelvin App is slated for release in late 2019, however we'll be
    conducting some Alpha testing with various building companies and architectural
    firms over the next few months to get feedback from our primary users. If you'd
    like to have early access to the app and give us feedback on its use, please
    contact: accounts@kelvinconsultants.com.au`
  };
}
