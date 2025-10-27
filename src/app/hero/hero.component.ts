import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  images = [
    'assets/images/hero-slide/hero1.png',
    'assets/images/hero-slide/hero2.jpg',
    'assets/images/hero-slide/hero3.jpg'
  ];

  currentIndex = 0;
  get currentImage() {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
