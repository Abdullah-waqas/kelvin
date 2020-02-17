import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	constructor(
		private metaTagService: Meta
	) { }

	ngOnInit() {
		this.metaTagService.addTags([
			{ name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
			{ name: 'robots', content: 'index, follow' },
			{ name: 'author', content: 'Digamber Singh' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
			{ charset: 'UTF-8' }
		]);
	}
	human = false;
	dmain = 'kelvinconsultants';
	dcdau = '.com.au';
	mbile = '';
	handle_david = 'david';
	handle_app = 'app';
	test = 0;
	display = '';
	nameDavid = ``;
	quotationDavid = '';
	quotationDavidDisplay = '';
	appTeam = '';
	flip = 'Show Contact Details';


	change() {
		if (this.human == false) {
			this.display = '';
			this.nameDavid = ``;
			this.mbile = '';
			this.quotationDavid = '';
			this.quotationDavidDisplay = '';
			this.appTeam = '';

		}
		else {
			this.display = `mailto:app%40` + this.dmain + this.dcdau + `?subject= Request for Kelvin App Early Access&body=Hi there,%0A%0AI'd like to be a part of the Kelvin App early access testing. Please register my interest for when this becomes available.`;
			this.nameDavid = `David`;
			this.mbile = '0417 329 642';
			this.quotationDavid = `mailto:david%40` + this.dmain + this.dcdau + `?subject=New Project Quotation Request&body= Hi David,%0A%0ACould you please provide me with a quote for the energy assessment on this project?`
			this.quotationDavidDisplay = this.handle_david + `@` + this.dmain + this.dcdau;
			this.appTeam = this.handle_app + `@` + this.dmain + this.dcdau;

		}
	}
}
