import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  form = {
    name: '',
    phone: '',
    email: '',
    comment: ''
  };

  sendMessage() {
    console.log('Форма відправлена:', this.form);
    alert('Дякуємо за звернення!');
    this.form = { name: '', phone: '', email: '', comment: '' };
  }
}
