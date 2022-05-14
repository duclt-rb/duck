import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'a-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
