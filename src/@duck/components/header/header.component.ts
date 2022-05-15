import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from '../sidebar/store/sidebar.actions';

@Component({
    selector: 'a-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    constructor(private store: Store) {}

    ngOnInit(): void {}

    onSidebarClick() {
        this.store.dispatch(toggleSidebar());
    }

    onBellClick() {}
    onUserClick() {}
}
