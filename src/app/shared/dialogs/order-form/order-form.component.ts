import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmtpService } from '../../services/smtp.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  form: FormGroup;
  fileName: string | null = null;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<OrderFormComponent>,
    private smtpService: SmtpService
  ) {
    // ✅ Створення реактивної форми
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email]],
      service: [data?.serviceType || '', Validators.required],
      comment: [''],
      fileName: [''],
      personalData: [false, Validators.requiredTrue]
    });
  }

  // ✅ Обробка вибору файлу
  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
      this.form.patchValue({ fileName: this.fileName });
    }
  }

  // ✅ Надсилання форми
  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = {
      ...this.form.value,
      serviceType: this.data?.serviceType,
      fileName: this.fileName
    };

    this.smtpService.submitForm(formData);
    this.dialogRef.close();
  }
}
