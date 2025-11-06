import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

declare global {
  interface Window {
    Email?: {
      send: (options: any) => Promise<any>;
    };
  }
}

@Injectable({ providedIn: 'root' })
export class SmtpService {
  constructor(private snackBar: MatSnackBar) {}

  submitForm(formData: any) {
    if (window.Email && typeof window.Email.send === 'function') {
      window.Email.send({
        SecureToken: 'YOUR_SMTP_TOKEN',
        To: 'youremail@example.com',
        From: 'youremail@example.com',
        Subject: `Нове замовлення: ${formData.service}`,
        Body: `
          <h3>Нова заявка з сайту</h3>
          <p><b>Ім’я:</b> ${formData.name}</p>
          <p><b>Телефон:</b> ${formData.phone}</p>
          <p><b>Email:</b> ${formData.email || '—'}</p>
          <p><b>Тип послуги:</b> ${formData.service}</p>
          <p><b>Коментар:</b> ${formData.comment || '—'}</p>
          <p><b>Файл:</b> ${formData.fileName || '—'}</p>
        `
      }).then(
        () => this.snackBar.open('Форма успішно відправлена!', 'OK', { duration: 3000 }),
        () => this.snackBar.open('Помилка при відправленні!', 'OK', { duration: 3000 })
      );
    } else {
      this.snackBar.open('Помилка: EmailJS/SMTP скрипт не підключений', 'OK', { duration: 3000 });
      console.warn('EmailJS/SMTP скрипт не підключений');
    }
  }
}
