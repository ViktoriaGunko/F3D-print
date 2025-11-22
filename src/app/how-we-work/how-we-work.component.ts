import { Component } from '@angular/core';
import {OrderFormComponent} from "../shared/dialogs/order-form/order-form.component";
import {DialogService} from "../shared/services/dialog.service";

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent {
  constructor(private dialogService: DialogService) {
  }
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
  steps = [
    { id: '01', icon: 'assets/images/how_we_work/Icon1.png', text: 'Ми приймаємо ваше замовлення або створюємо ТЗ' },
    { id: '02', icon: 'assets/images/how_we_work/Icon2.png', text: 'Ви оплачуєте послуги' },
    { id: '03', icon: 'assets/images/how_we_work/Icon3.png', text: 'Виготовляємо виріб відповідно до ТЗ (3D друк)' },
    { id: '04', icon: 'assets/images/how_we_work/icon4.png', text: 'Перевіряємо якість та надсилаємо вам фото-звіт' },
    { id: '05', icon: 'assets/images/how_we_work/icon5.png', text: 'Відправляємо ваше замовлення (поштою або самовивіз)' }
  ];
}
