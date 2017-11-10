import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NameTagComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
