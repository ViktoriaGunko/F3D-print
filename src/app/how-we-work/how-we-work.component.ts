import { Component } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent {
  steps = [
    { id: '01', icon: 'assets/images/how_we_work/Icon1.png', text: 'Ми приймаємо ваше замовлення або створюємо ТЗ' },
    { id: '02', icon: 'assets/images/how_we_work/Icon2.png', text: 'Ви оплачуєте послуги' },
    { id: '03', icon: 'assets/images/how_we_work/Icon3.png', text: 'Виготовляємо виріб відповідно до ТЗ (3D друк)' },
    { id: '04', icon: 'assets/images/how_we_work/icon4.png', text: 'Перевіряємо якість та надсилаємо вам фото-звіт' },
    { id: '05', icon: 'assets/images/how_we_work/icon5.png', text: 'Відправляємо ваше замовлення (поштою або самовивіз)' }
  ];
}
