import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-small-card',
	standalone: true,
	imports: [],
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

	navigateToLink(): void {
		if (this.cardLink) {
			window.open(this.cardLink, '_blank');
		}
	}
}
