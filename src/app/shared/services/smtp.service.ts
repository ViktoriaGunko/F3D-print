import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SmtpService {
  private apiKey = 'ADB1D7525C1FEAF61F08749D35E1C40AD9715834B81496DA0327198734DDA2219C692B0CDC62A18E58132BD659EE1440';

  constructor(private snackBar: MatSnackBar) {}

  async submitForm(formData: any) {
    const payload = {
      Recipients: [
        { Email: 'f3dprintwork@gmail.com' } // отримувач(і)
      ],
      Content: {
        From: 'f3dprintwork@gmail.com', // має бути verified
        Subject: `Нове замовлення: ${formData.service || '—'}`,
        Body: [
          {
            ContentType: 'HTML',
            Charset: 'utf-8',
            Content: `
              <h3>Нова заявка з сайту</h3>
              <p><b>Ім’я:</b> ${this.escape(formData.name) || '—'}</p>
              <p><b>Телефон:</b> ${this.escape(formData.phone) || '—'}</p>
              <p><b>Email:</b> ${this.escape(formData.email) || '—'}</p>
              <p><b>Тип послуги:</b> ${this.escape(formData.service) || '—'}</p>
              <p><b>Коментар:</b> ${this.escape(formData.comment) || '—'}</p>
              <p><b>Файл:</b> ${this.escape(formData.fileName) || '—'}</p>
            `
          }
        ]
      }
    };

    try {
      // Відправка запиту
      const res = await fetch('https://api.elasticemail.com/v4/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // заголовок із API ключем (назва нечутлива до регістру)
          'X-ElasticEmail-ApiKey': this.apiKey
        },
        body: JSON.stringify(payload)
      });

      // Спроба прочитати тіло відповіді (API часто повертає JSON з поясненням помилки)
      const text = await res.text();
      let json: any = null;
      try { json = text ? JSON.parse(text) : null; } catch { /* не JSON */ }

      if (!res.ok) {
        // Покажи в консоль деталі — це допоможе діагностувати 400
        console.error('Elastic Email responded with error:', res.status, res.statusText, json ?? text);
        // Показуємо користувачу просте повідомлення, в консоль — деталі
        this.snackBar.open('❌ Помилка при відправленні (див. консоль)', 'OK', { duration: 5000 });
        return;
      }

      // Успіх
      console.log('Elastic Email response:', json ?? text);
      this.snackBar.open('✅ Форма успішно відправлена!', 'OK', { duration: 3000 });
    } catch (err) {
      console.error('Network/Fetch error while sending email:', err);
      this.snackBar.open('❌ Помилка мережі при відправленні!', 'OK', { duration: 4000 });
    }
  }

  // Невеликий escape для вставки в HTML (базово)
  private escape(input: any) {
    if (input == null) return '';
    return String(input)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}


// import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
//
// declare global {
//   interface Window {
//     Email?: {
//       send: (options: any) => Promise<any>;
//     };
//   }
// }
//
// @Injectable({ providedIn: 'root' })
// export class SmtpService {
//   constructor(private snackBar: MatSnackBar) {}
//
//   submitForm(formData: any) {
//     if (window.Email && typeof window.Email.send === 'function') {
//       window.Email.send({
//         Host: 'smtp.elasticemail.com',
//         Username: 'F3D-print', // ← твій логін із SMTP Elastic Email
//         Password: 'DCF0495FCD994974B268F4015B295B0E955F', // ← встав сюди свій SMTP пароль
//         Port: 2525, // або 587 (якщо 2525 не працює)
//         To: 'f3dprintwork@gmail.com', // куди надсилати заявки
//         From: 'f3dprintwork@gmail.com', // має бути перевірена пошта в Elastic Email
//         Subject: `Нове замовлення: ${formData.service}`,
//         Body: `
//           <h3>Нова заявка з сайту</h3>
//           <p><b>Ім’я:</b> ${formData.name}</p>
//           <p><b>Телефон:</b> ${formData.phone}</p>
//           <p><b>Email:</b> ${formData.email || '—'}</p>
//           <p><b>Тип послуги:</b> ${formData.service}</p>
//           <p><b>Коментар:</b> ${formData.comment || '—'}</p>
//           <p><b>Файл:</b> ${formData.fileName || '—'}</p>
//         `
//       }).then(
//         () => this.snackBar.open('✅ Форма успішно відправлена!', 'OK', { duration: 3000 }),
//         (err) => {
//           console.error('SMTP Error:', err);
//           this.snackBar.open('❌ Помилка при відправленні!', 'OK', { duration: 3000 });
//         }
//       );
//     } else {
//       this.snackBar.open('⚠️ Помилка: SMTP скрипт не підключений', 'OK', { duration: 3000 });
//       console.warn('EmailJS/SMTP скрипт не підключений');
//     }
//   }
// }
