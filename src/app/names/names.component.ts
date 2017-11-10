import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NamesComponent implements OnInit {
  nameList = ['John', 'Dave', 'Sam', 'Kim']
  constructor() { }

  ngOnInit() {
  }

}
