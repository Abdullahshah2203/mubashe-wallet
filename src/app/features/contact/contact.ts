import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  whatsappNumber = '923170804572';

  openWhatsApp(): void {

    const message =
      `Assalam o Alaikum, I want to know more about MUBASHÉ wallets.`;

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

  }

}