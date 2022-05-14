import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { DynamicFormModule } from '../components/dynamic-form/dynamic-form.module';



@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }
