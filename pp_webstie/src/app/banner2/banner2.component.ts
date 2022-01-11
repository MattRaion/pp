import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component implements OnInit {


  scrollDown = "scroll down";
  scrollDownPl = "przewiń"
  scrollDownEn = "scroll down";
  @Input() motto: string = '';
  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x)
  {
    if(x === '1')
    {
      this.scrollDown = this.scrollDownPl;
    }
    else{
      this.scrollDown = this.scrollDownEn;
    }
  }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('banner2scrollTarget');
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
