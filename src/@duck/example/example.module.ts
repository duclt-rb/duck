import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { DynamicFormModule } from '../components/dynamic-form/dynamic-form.module';
import { HeaderModule } from '../components/header/header.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { LayoutModule } from '../components/layout/layout.module';



@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    DynamicFormModule,
    HeaderModule,
    SidebarModule,
    LayoutModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }
