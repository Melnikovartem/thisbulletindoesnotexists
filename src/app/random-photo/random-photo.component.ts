import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Data = { patronymic: string, bio: string[] };
/*
  function generateNum(size: number) {
    // mot including upper bound
    let len = Math.ceil(Math.log10(size));
    let num = Math.floor(Math.random() * size);
    let s = new Array(len + 1).join("0") + num;
    return s.substr(s.length - len);
  }
*/

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {
  src = `./assets/imgs/${Math.floor(Math.random() * 3000)}.png`;
  surname = "ВИШНЕВСКИЙ";
  personal = "Борис ";
  text: string[] = [];
  constructor(private http: HttpClient) {
    // do NOT do it like this kids
    let url = "https://raw.githubusercontent.com/Melnikovartem/thisbulletindoesnotexists/gh-pages/";
    http.get(`${url}assets/texts/${Math.floor(Math.random() * 10000)}.json`)
      .subscribe(res => {
        this.text = (<Data>res).bio;
        this.personal += (<Data>res).patronymic;
      });
  }

  ngOnInit(): void { }
}
