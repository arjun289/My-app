import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  stringIp = "this is string interpolation";
  numIp = 2;

  constructor() { }

  ngOnInit() {
  }

}
