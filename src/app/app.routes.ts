import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Collection } from './features/collection/collection';
import { ProductDetails } from './features/product-details/product-details';
import { About } from './features/about/about';

import { Contact } from './features/contact/contact';
export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'collection',
    component: Collection
  },

  {
    path: 'product/:id',
    component: ProductDetails
  },{
  path: 'about',
  component: About
},{
  path: 'contact',
  component: Contact
}

];
