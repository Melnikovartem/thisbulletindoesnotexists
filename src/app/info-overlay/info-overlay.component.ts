import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-overlay',
  templateUrl: './info-overlay.component.html',
  styleUrls: ['./info-overlay.component.css']
})
export class InfoOverlayComponent implements OnInit {
  style = "";

  constructor() { }

  hide() {
    this.style = "display: none";
  }

  ngOnInit(): void { }

}
