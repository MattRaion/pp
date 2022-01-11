import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-excapelab',
  templateUrl: './excapelab.component.html',
  styleUrls: ['./excapelab.component.css']
})
export class ExcapelabComponent implements OnInit {


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
  releasePl = "Q4 2020";
  releaseEn = "Q4 2020"

  cs = "Coming soon";
  csPl = "Wkrótce";
  csEn = "Coming soon"

  desc = "During the game, a scientist faces the challenge of blocking the spread of a deadly virus.Player’s role is to solve logical puzzles that will allow him to stop the danger and escape from the laboratory trap.The procedures against leak of a virus from the laboratory are not determined and it’s up to us to figure it out.Only a few minutes separate the player from a catastrophe affecting the world.";

  descPl = `Gracz wchodzi w postać naukowca, który jako pierwszy odkrywa zagrożenie
  wycieku groźnego wirusa poza mury laboratorium.Aby uniknąć pandemii na skalę
  globalną, należy, jak najszybciej powstrzymać narastające niebezpieczeństwo.W
  rękach naukowca leżą losy całego świata.Zrób wszystko co w Twojej mocy, żeby nie
  pozwolić na wyciek wirusa, który sparaliżuje cały świat i pochłonie setki tysięcy
  istnień.
`;

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
  }

  scroll() {
    let el = document.getElementById('images-game-det-el');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
