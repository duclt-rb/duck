import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'a-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  selectedValues: string[] = [];
  value?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
