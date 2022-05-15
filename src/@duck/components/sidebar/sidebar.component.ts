import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SidebarSelector from './store/sidebar.selectors';

@Component({
    selector: 'a-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
    modules$ = this.store.select(SidebarSelector.selectModules);
    visible$ = this.store.select(SidebarSelector.selectVisible);

    constructor(private store: Store) {}

    ngOnInit(): void {}
}
