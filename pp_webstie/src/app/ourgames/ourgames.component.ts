import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-ourgames',
  templateUrl: './ourgames.component.html',
  styleUrls: ['./ourgames.component.css']
})
export class OurgamesComponent implements OnInit {

  title = "Our games";
  titleEn = "Our games";
  titlePl = "Gry";

  @Input() displayButton: boolean = true;
  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x)
  {
    if (x === '1') {
      this.title = this.titlePl;
    }
    else {
      this.title = this.titleEn;
    }
  }

  ngOnInit() {
  }

}
