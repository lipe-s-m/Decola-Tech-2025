import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-small-card',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './small-card.component.html',
	styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
	@Input()
	cardImage: string = '';
	@Input()
	cardTitle: string = '';
	// @Input()
	// cardDescription: string = '';
	@Input()
	cardData: string = '';
	@Input()
	cardLink: string = '';
	@Input()
	id: string = '';
}
