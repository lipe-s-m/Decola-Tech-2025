import { Component } from '@angular/core';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ApresentacaoComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {}
