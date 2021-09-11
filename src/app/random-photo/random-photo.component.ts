import { Component, OnInit } from '@angular/core';
import texts from '../../assets/texts.json';

function generateNum(size: number, ) {
  let len = Math.ceil(Math.log10(size));
  let num = Math.round(Math.random() * size);
  let s = new Array(len + 1).join("0") + num;
  return s.substr(s.length - len);
}

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {
  src = `./assets/imgs/seed${generateNum(5)}.jpeg`;
  surname = "ВИШНЕВСКИЙ";
  personal = "Борис Генадьевич";
  text = [""];
  constructor() {
    this.text = texts.texts[Math.floor(texts.texts.length * Math.random())].split("\n");
    console.log(this.text)
  }

  ngOnInit(): void { }
}
