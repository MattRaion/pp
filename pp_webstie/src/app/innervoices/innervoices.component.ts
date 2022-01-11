import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-innervoices',
  templateUrl: './innervoices.component.html',
  styleUrls: ['./innervoices.component.css']
})
export class InnervoicesComponent implements OnInit {

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

  desc = "Escape Room VR: Stories uses VR capabilities to its full potential. The locations are filled with objects that players can interact with; the environment is very realistic and detailed. Each room has its plot that combines into one story. The plot is presented through graphic novel cutscenes."

  descPl = "Głównym bohaterem jest John Blake – mężczyzna uwięziony w mrocznym wymiarze przypominającym czyściec. Protagonista cierpi na amnezję, a kluczem do rozwikłania zagadki jego przeszłości zdaje się być podążanie za tajemniczym głosem. Udzielane przez niego wskazówki prowadzą bohatera przez to posępne miejsce, będące niejako skrzywionym odzwierciedleniem jego wspomnień poddanych działaniu nieznanej, złowrogiej siły."

  descEn = "Tune yourself to the voices lurking in the head of John Blake – the tormented man dwelling in a trap… that only you can guide him out of. You will never know whether what you see is true – and you can be sure that even after you’ve escaped the trap, not all has been discovered… You will be constantly searching for a way to escape the randomized maze of rooms, you will be haunted by new voices and you will be the one to decide… who lives and who dies."

  desc2 = "";
  desc2Pl = "Jest to pierwszoosobowa gra przygodowa z elementami horroru osadzona w krainie inspirowanej mroczną twórczością H.P. Lovecrafta, E.A Poe i S. Kinga. Dzięki rozwiązywaniu zagadek logicznych o różnych stopniach trudności, stopniowo poznasz historię Johna Blake’a. ";
  desc2En = "Meet John and get to know his past in possibly the only adventure game with a non-linear plot, procedurally generated user path and (more than) a pinch of the atmosphere of your favorite horrors.";
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
      this.cs = this.csPl;
      this.desc2 = this.desc2Pl;
      this.desc = this.descPl;
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
  }

  scroll() {
    let el = document.getElementById('images-game-det-iv');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
