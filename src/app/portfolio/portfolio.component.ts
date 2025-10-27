import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  images = [
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-1' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-2' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-2' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-3' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-1' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-4' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-3' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-5' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-2' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-2' },
    { src: 'assets/images/hero-slide/hero1.png', size: 'size-2' },
  ];

  moreImages = [
    { src: 'assets/images/hero1.png', size: 'size-3' },

  ];

  showMore() {
    this.images = [...this.images, ...this.moreImages];
    this.moreImages = [];
  }
}
