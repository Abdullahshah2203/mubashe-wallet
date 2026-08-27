import { Component } from '@angular/core';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../core/data/product.model';
import { PRODUCTS } from '../../core/data/products';

@Component({
  selector: 'app-collection',
  imports: [ProductCard],
  templateUrl: './collection.html',
  styleUrl: './collection.css'
})
export class Collection {

  products: Product[] = PRODUCTS;

  selectedCategory = 'All';

  categories = [
    'All',
    'Bifold Wallet',
    'Slim Wallet',
    'Leather Wallet',
    'Card Holder'
  ];


  get filteredProducts(): Product[] {

    if (this.selectedCategory === 'All') {
      return this.products;
    }

    return this.products.filter(
      product =>
        product.category === this.selectedCategory
    );
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

}