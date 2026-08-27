import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { Product } from '../../core/data/product.model';
import { PRODUCTS } from '../../core/data/products';

@Component({
  selector: 'app-product-details',
  imports: [DecimalPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  product: Product | undefined;

  selectedColor = '';
  quantity = 1;

  whatsappNumber = '923170804572';


  constructor(
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = PRODUCTS.find(
      product => product.id === id
    );

    if (this.product) {

      this.selectedColor =
        this.product.colors[0];

    }

  }


  selectColor(color: string): void {

    this.selectedColor = color;

  }


  increaseQuantity(): void {

    this.quantity++;

  }


  decreaseQuantity(): void {

    if (this.quantity > 1) {

      this.quantity--;

    }

  }


  orderOnWhatsApp(): void {

    if (!this.product) {
      return;
    }


    const total =
      this.product.price * this.quantity;


    const message =

      `Assalam o Alaikum,

I want to order from MUBASHÉ Wallet.

Product: ${this.product.name}
Category: ${this.product.category}
Color: ${this.selectedColor}
Quantity: ${this.quantity}
Price: PKR ${this.product.price.toLocaleString()}
Total: PKR ${total.toLocaleString()}

Please confirm my order.

Thank you.`;


    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappUrl,
      '_blank'
    );

  }

}