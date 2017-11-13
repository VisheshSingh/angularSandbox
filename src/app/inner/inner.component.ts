import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InnerComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
