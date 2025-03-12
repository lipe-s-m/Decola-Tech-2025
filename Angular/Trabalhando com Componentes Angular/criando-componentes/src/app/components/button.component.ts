import { Component, Input } from '@angular/core';

@Component({
	selector: 'button-default',
	templateUrl: './button.component.html',
	styleUrl: './button.component.css',
})
export class Button {
	@Input() label: string = '';
	@Input() textoOpcional?: string;
	buttonText: string = '';

	handlerClick(numero?: number) {
		alert(
			this.label +
				'\n' +
				(this.textoOpcional ? this.textoOpcional : '') +
				'\n' +
				numero
		);
	}
}
