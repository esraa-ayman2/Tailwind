import { Component, Input } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-portfolio-card',
  imports: [ModalComponent],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
@Input({required:true}) image !:string

showModal = false
openModal(){
  this.showModal = true
  console.log(this.showModal)
}
closeModal = () => {
    this.showModal = false;
  }
}