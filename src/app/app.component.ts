import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Забороняємо браузеру автоматичне відновлення позиції
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Невелика затримка, щоб Angular встиг побудувати DOM
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 100);
  }
}
