import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'portfolio',
		component: PortfolioComponent,
		children: [{ path: ':id', component: PortfolioComponent }],
	},
	{ path: 'contatos', component: ContatosComponent },
	{ path: '**', redirectTo: '' },
];
