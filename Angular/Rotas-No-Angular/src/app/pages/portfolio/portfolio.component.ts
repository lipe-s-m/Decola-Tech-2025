import { Component } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-portfolio',
	standalone: true,
	imports: [CardsComponent],
	templateUrl: './portfolio.component.html',
	styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
	constructor(private activatedRoute: ActivatedRoute) {
		//recuperar parametros na url
		this.activatedRoute.params.subscribe((res) => {
			console.log(res);
		});

		//recuperar parametros na url (se tiver filhos na URL)
		this.activatedRoute.firstChild?.params.subscribe((res) => {
			console.log(res);
		});

		//recuperar queryparams na url
		//exemplo: http://localhost:4200/portfolio/3?name=felipe&token=1234 / res => {name=felipe, token=1234}
		this.activatedRoute.queryParams.subscribe((res) => {
			console.log(res);
		});
	}
}
