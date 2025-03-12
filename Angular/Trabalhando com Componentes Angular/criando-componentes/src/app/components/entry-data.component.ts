import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-entry-data',
	imports: [FormsModule], // Adicione FormsModule aqui
	templateUrl: './entry-data.component.html',
	styleUrl: './entry-data.component.css',
})
export class EntryDataComponent {
	textoInput: string = '';
	passkey: string = '';
	color: string = 'red';
	atualizarParagrafo(): string {
		return this.textoInput;
	}
}
