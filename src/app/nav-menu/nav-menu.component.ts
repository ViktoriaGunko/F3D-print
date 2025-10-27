import { Component } from '@angular/core';
declare var bootstrap: any; // ✅ щоб Angular бачив Bootstrap JS API

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  closeOffcanvas() {
    const offcanvasElement = document.getElementById('mobileMenu');
    if (offcanvasElement) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }
}
