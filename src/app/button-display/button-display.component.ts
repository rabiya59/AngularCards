import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.scss']
})
export class ButtonDisplayComponent implements OnInit {
  display: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  displayCards(): void {
    this.display = !this.display;

  }
}
