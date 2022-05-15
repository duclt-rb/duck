import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducer, SidebarFeatureKey } from './store/sidebar.reducer';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, StoreModule.forFeature(SidebarFeatureKey, reducer)],
    exports: [SidebarComponent]
})
export class SidebarModule {}
