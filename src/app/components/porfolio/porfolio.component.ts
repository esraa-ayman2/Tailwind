import { Component } from '@angular/core';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-porfolio',
  imports: [PortfolioCardComponent, TitleComponent],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css',
})
export class PorfolioComponent {
image1= './images/poert1.png'
  image2= './images/port2.png'
  image3= './images/port3.png'
}
