import { Component } from '@angular/core';

@Component({
  selector: 'app-why-mubashe',
  imports: [],
  templateUrl: './why-mubashe.html',
  styleUrl: './why-mubashe.css'
})
export class WhyMubashe {

  features = [
    {
      number: '01',
      title: 'Premium Leather',
      description:
        'Carefully selected leather that develops character and elegance with time.'
    },
    {
      number: '02',
      title: 'Handcrafted Detail',
      description:
        'Every wallet receives careful attention to stitching, finishing and detail.'
    },
    {
      number: '03',
      title: 'Made in Pakistan',
      description:
        'Proudly crafted in Pakistan by skilled hands with a passion for quality.'
    },
    {
      number: '04',
      title: 'Built to Last',
      description:
        'Timeless designs created for everyday use and years of carrying.'
    }
  ];

}