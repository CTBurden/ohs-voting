import { Component } from '@angular/core';

@Component({
  selector: 'ohs-voting-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  open = false;
  toggleOpen() {
    this.open = !this.open;
  }
}
