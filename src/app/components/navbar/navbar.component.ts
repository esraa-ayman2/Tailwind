import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled = false
isOpen = false;

toggleMenu() {
  this.isOpen = !this.isOpen;
}

  @HostListener('window:scroll')
  onScroll(){
    const scrolltop = window.pageYOffset
    this.isScrolled =scrolltop>0
  }
   @Output() toggleDarkMode = new EventEmitter<boolean>();
  darkMode = false;
  toggleDark(){
    this.darkMode = !this.darkMode
    console.log(this.darkMode);

    this.toggleDarkMode.emit(this.darkMode)
  }
}
