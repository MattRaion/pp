import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  motto = "An Independent";
  mottoEn = "An Independent";
  mottoPl = "Jesteśmy PunkPirates ";
 
  motto2 = "VR Game Development Studio.";
  motto2En = "VR Game Development Studio.";
  motto2Pl = " niezależnym studiem tworzącym gry VR.";

  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    console.log(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
     this.set(x);
    })
  }

  ngOnInit() {
  }

  set(val)
  {
    if (val === '1') {
      this.motto = this.mottoPl;
      this.motto2 = this.motto2Pl;
    }
    else {
      this.motto = this.mottoEn;
      this.motto2 = this.motto2En;
    }
  }

  scroll() {
    let el = document.getElementById('scrollTarget');
    el.scrollIntoView( { behavior: 'smooth' });
  }

}
