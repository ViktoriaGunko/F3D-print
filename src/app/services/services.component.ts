import { Component } from '@angular/core';

interface ServiceButton {
  label: string;
  type: string;
  icon?: string; // ← додаємо опціональне поле
}

interface Service {
  title: string;
  text: string;
  image: string;
  buttons: ServiceButton[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: '3D Друк',
      text: ' Ми пропонуємо:\n' +
        ' FDM друк розміром до (45x45x60)\n' +
        ' SLA друк розміром до',
      image: 'assets/images/hero-slide/hero1.png',
      buttons: [
        { label: 'Замовити друк', type: 'primary', icon: 'assets/images/icon_buttons/order_printing.png' }
      ]
    },
    {
      title: '3D Моделювання',
      text: 'Перетворіть ваші ідеї або ескізи на тривимірні цифрові моделі...',
      image: 'assets/images/hero-slide/hero1.png',
      buttons: [
        { label: 'Замовити моделювання', type: 'primary', icon: 'assets/images/icon_buttons/make_simulations.png' },
        { label: 'Детальніше', type: 'secondary', icon: 'assets/images/icon_buttons/details.png' }
      ]
    },
    {
      title: '3D Сканування',
      text: 'Отримайте точні цифрові копії фізичних об’єктів за допомогою 3D-сканування...',
      image: 'assets/images/hero-slide/hero1.png',
      buttons: [
        { label: 'Детальніше', type: 'secondary', icon: 'assets/images/icon_buttons/details.png'},
        { label: 'Замовити сканування', type: 'primary', icon: 'assets/images/icon_buttons/disable_scanning.png' }
      ]
    }
  ];
}


