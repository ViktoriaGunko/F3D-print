// import { Injectable } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// import { OrderFormComponent } from '../dialogs/order-form/order-form.component';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DialogService {
//   private _dialog: MatDialogRef<any> | null = null;
//
//   constructor(private dialog: MatDialog) {}
//
//   openOrderFormDialog(service?: string): Observable<any> {
//     const config: MatDialogConfig = {
//       width: '400px',
//       data: { service }
//     };
//
//     this._dialog = this.dialog.open(OrderFormComponent, config);
//     return this._dialog.afterClosed();
//   }
// }
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(component: any, config: any = {}) {
    return this.dialog.open(component, config);
  }
}

