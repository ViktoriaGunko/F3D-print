import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {DialogService} from "../shared/services/dialog.service";
import {OrderFormComponent} from "../shared/dialogs/order-form/order-form.component";

declare var bootstrap: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent implements OnInit {
  private currentFragment: string | null = null;
  constructor(private router: Router, private dialogService: DialogService) {}

  openOrder(serviceType: string) {
    console.log('openOrder', serviceType)
    this.dialogService.openDialog(OrderFormComponent, {
      data: {
        title: `Заявка на ${serviceType}`,
        serviceType: serviceType,
        applyButtonText: 'Надіслати заявку'
      },
      panelClass: 'custom-dialog'
    });
  }
  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.currentFragment) {
          // Чекаємо, поки контент зрендериться
          setTimeout(() => this.scrollSmoothly(this.currentFragment!), 150);
        }
      });
  }


  async scrollToSection(fragment: string, closeMenu: boolean = false) {
    this.currentFragment = fragment;
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl === '/') {
      this.scrollSmoothly(fragment);
    } else {
      await this.router.navigate(['/'], { fragment });
    }

    if (closeMenu) {
      const offcanvasElement = document.getElementById('mobileMenu');
      if (offcanvasElement) {
        const bsOffcanvas =
          bootstrap.Offcanvas.getInstance(offcanvasElement) ||
          new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.hide();
      }
    }
  }

  private scrollSmoothly(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      const yOffset = -70; // компенсує висоту хедера
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}
