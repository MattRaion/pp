import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-escaperoom',
  templateUrl: './escaperoom.component.html',
  styleUrls: ['./escaperoom.component.css']
})
export class EscaperoomComponent implements OnInit {
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

  cs = "Coming soon";
  csPl = "Wkrótce";
  csEn = "Coming soon"

  desc = "During the game, a scientist faces the challenge of blocking the spread of a deadly virus. Player’s role is to solve logical puzzles that will allow him to stop the danger and escape from the laboratory trap. The procedures against leak of a virus from the laboratory are not determined and it’s up to us to figure it out. Only a few minutes separate the player from a catastrophe affecting the world."

  descPl = `Escape Room VR wykorzystuje znaną powszechnie formę ucieczki z zamkniętego pokoju. Gry tego typu składają się z serii zagadek, oraz ukrytych wskazówek. Gracze muszą znaleźć rozwiązanie i wyjście w określonym czasie. Natomiast ich sukces zależy od analitycznych i obserwacyjnych umiejętności.
`;

  descEn = `Escape Room VR uses a widely known form of real-life room escape game. It usually consists of a series of puzzles and hidden clues. The players have to find their way out in a certain amount of time. Their success depends on their analytical and observation skills.`;

  desc2 = "";
  desc2Pl = "Jest to pierwszoosobowa gra przygodowa z elementami horroru osadzona w krainie inspirowanej mroczną twórczością H.P. Lovecrafta, E.A Poe i S. Kinga. Dzięki rozwiązywaniu zagadek logicznych o różnych stopniach trudności, stopniowo poznasz historię Johna Blake’a. ";
  desc2En = "Meet John and get to know his past in possibly the only adventure game with a non-linear plot, procedurally generated user path and (more than) a pinch of the atmosphere of your favorite horrors.";
  

  selected = '';


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
      this.cs = this.csPl;
      this.desc2 = this.desc2Pl;
      this.scrollDown = this.scrollDownPl;
    }
    else {

      this.platform = this.platformEn;
      this.publisher = this.publisherEn;
      this.developer = this.developerEn;
      this.releaseDate = this.releaseDateEn;
      this.release = this.releaseEn
      this.cs = this.csEn;
      this.desc2 = this.desc2En;
      this.desc = this.descEn;
      this.scrollDown = this.scrollDownEn;
    }
  }

  ngOnInit() {

    this.set(this.languageService.getIsPolish());
  }

  scroll() {
    let el = document.getElementById('images-game-det-eascaperoom');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
