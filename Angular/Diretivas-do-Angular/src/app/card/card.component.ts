import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  produtos: string[] = [];

  @Input()
  produto: string = '';
  isAliveCard: boolean;
  userType: string = '';

  constructor() {
    this.produtos = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'Fonte'];
    this.isAliveCard = true;
    this.userType = 'superUser';
  }

  adicionarProduto(): void {
    this.produtos.push(this.produto);
    this.produto = '';
  }
  removerProduto(index: number): void {
    this.produtos.splice(index, 1);
  }
  destruirCard(): void {
    this.isAliveCard = false;
  }
}
