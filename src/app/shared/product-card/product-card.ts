import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe, NgClass } from '@angular/common';

import { Product } from '../../core/data/product.model';

@Component({
  selector: 'app-product-card',
  imports: [
    RouterLink,
    DecimalPipe,
    NgClass
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;


  getColorClass(color: string): string {

    return color
      .toLowerCase()
      .replace(/\s+/g, '-');

  }

}