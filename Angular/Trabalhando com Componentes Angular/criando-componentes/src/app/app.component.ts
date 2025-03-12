//app.component.ts

import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, MenuComponent, Button, EntryDataComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'criando-componentes';
	buttonComprar: string = 'COMPRAR';
	buttonFavoritar: string = 'FAVORITAR';
}
