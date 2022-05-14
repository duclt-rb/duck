import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'a-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
