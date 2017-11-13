import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OuterComponent implements OnInit {
  @Input() names;
  constructor() { }

  ngOnInit() {
  }

}
