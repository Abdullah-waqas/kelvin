import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

article = [false, false];


	toggleArticle(articleNumber) {

	this.article[articleNumber] = !this.article[articleNumber];

	for(let i =0; i<this.article.length; i++ ){
		if(i == articleNumber){
			this.article[articleNumber] = this.article[articleNumber];
		}
		else{
				this.article[i] = false;
		}
	}

	

	console.log(this.article); 

	}


}


