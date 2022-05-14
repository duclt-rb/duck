import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

const PRIME_NG = [
  InputTextModule,
  CalendarModule,
  CheckboxModule
]
@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ...PRIME_NG
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
