import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductCard } from '../../../shared/product-card/product-card';

import { Product } from '../../../core/data/product.model';
import { PRODUCTS } from '../../../core/data/products';

@Component({
  selector: 'app-featured-products',

  imports: [
    ProductCard,
    RouterLink
  ],

  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css'
})
export class FeaturedProducts {

  featuredProducts: Product[] = PRODUCTS.filter(
    product => product.featured
  );

}