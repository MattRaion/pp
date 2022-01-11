import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-vrstories',
  templateUrl: './vrstories.component.html',
  styleUrls: ['./vrstories.component.css']
})
export class VrstoriesComponent implements OnInit {

  scrollDown = "scroll down";
  scrollDownPl = "przewiń"
  scrollDownEn = "scroll down";

  platform = "Platforms";
  platformPl = "Platformy";
  platformEn = "Platforms";

  publisher = "Publisher"; 
  publisherPl = "Wydawca";
  publisherEn = "Publisher";

  developer = "Developers";
  developerPl = "Twórcy";
  developerEn = "Developers";

  releaseDate = "Release Date";
  releaseDatePl = "Data wydania";
  releaseDateEn = "Release Date";

  release = "Released";
  releasePl = "Wydano";
  releaseEn = "Released"

  desc = "Escape Room VR: Stories uses VR capabilities to its full potential. The locations are filled with objects that players can interact with; the environment is very realistic and detailed. Each room has its plot that combines into one story. The plot is presented through graphic novel cutscenes."

  descPl = "Escape Room VR: Stories w pełni wykorzystuje możliwości VR. Lokacje są wypełnione obiektami, z którymi gracze mogą wchodzić w interakcje, co w praktyce oznacza, że otoczenie jest realistyczne i szczegółowe. Każdy pokój ma swoją fabułę, która łączy się w jedną historię i przedstawiana jest za pomocą przerywników filmowych."

  descEn = "Escape Room VR: Stories uses VR capabilities to its full potential. The locations are filled with objects that players can interact with; the environment is very realistic and detailed. Each room has its plot that combines into one story. The plot is presented through graphic novel cutscenes."

  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x) {
    if (x === '1') {
      this.platform = this.platformPl;
      this.publisher = this.publisherPl;
      this.developer = this.developerPl;
      this.releaseDate = this.releaseDatePl;
      this.release = this.releasePl;
      this.desc = this.descPl;
      this.scrollDown = this.scrollDownPl;

    }
    else {
      this.platform = this.platformEn;
      this.publisher = this.publisherEn;
      this.developer = this.developerEn;
      this.releaseDate = this.releaseDateEn;
      this.release = this.releaseEn
      this.desc = this.descEn;
      this.scrollDownEn = this.scrollDownEn;
    }
  }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-vrstories');
    el.scrollIntoView({ behavior: 'smooth' });
  }

 

}
