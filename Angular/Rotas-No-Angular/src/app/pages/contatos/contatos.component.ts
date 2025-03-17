import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contatos',
	standalone: true,
	imports: [],
	templateUrl: './contatos.component.html',
	styleUrl: './contatos.component.css',
})
export class ContatosComponent implements OnInit {
	public timer: number = 5;
	private intervalId: any;
	constructor(private router: Router) {}

	ngOnInit(): void {
		this.cronometro();
		setTimeout(() => {
			clearInterval(this.intervalId);
			//forçar navegamento
			this.router.navigate(['/']);
		}, 5000);
	}

	public cronometro(): void {
		this.intervalId = setInterval(() => {
			this.timer--;
		}, 1000);
	}
}
