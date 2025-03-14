import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas-atributos.component.html',
  styleUrl: './diretivas-atributos.component.css',
})
export class DiretivasAtributosComponent {
  estilo: string;
  isVermelho: boolean = false;
  constructor() {
    this.estilo = 'enable';
  }
  mudarCor(): void {
    this.isVermelho = !this.isVermelho;
    if (this.estilo === 'enable') this.estilo = 'disable';
    else this.estilo = 'enable';
  }
}
