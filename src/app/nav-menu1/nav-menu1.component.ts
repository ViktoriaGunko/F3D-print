import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu1',
  templateUrl: './nav-menu1.component.html',
  styleUrls: ['./nav-menu1.component.scss']
})
export class NavMenu1Component {
  makeAppointment() {
    // this.dialogService.openOrderCallDialog(OrderAppointmentDialogData, true);
  }
  closeNavbar() {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar) {
      // this.renderer.removeClass(navbar, 'show');
    }
  }
}
