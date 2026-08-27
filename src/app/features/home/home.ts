import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { FeaturedProducts } from './featured-products/featured-products';
import { WhyMubashe } from './why-mubashe/why-mubashe';
import { Craftsmanship } from './craftsmanship/craftsmanship';
import { WhatsappCta } from './whatsapp-cta/whatsapp-cta';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    FeaturedProducts,
    WhyMubashe,
    Craftsmanship,
    WhatsappCta
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}