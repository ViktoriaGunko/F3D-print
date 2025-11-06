import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var bootstrap: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  private currentFragment: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Слухаємо зміну маршруту
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

    // Якщо вже на головній сторінці
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl === '/') {
      this.scrollSmoothly(fragment);
    } else {
      await this.router.navigate(['/'], { fragment });
    }

    // Закриваємо offcanvas (на мобільному)
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
