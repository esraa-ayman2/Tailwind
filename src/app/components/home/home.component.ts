import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
