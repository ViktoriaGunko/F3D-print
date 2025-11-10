import { Component } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { OrderFormComponent } from '../shared/dialogs/order-form/order-form.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  constructor(private dialogService: DialogService) {}

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
