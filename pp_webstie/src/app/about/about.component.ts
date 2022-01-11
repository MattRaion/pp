import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "We are PunkPirates";
  titlePl = "Jesteśmy PunkPirates";
  titleEn = "We are PunkPirates";

  descP1 = "WE LOVE VIRTUAL REALITY TECHNOLOGY BECAUSE IT gives US a chance";
  descP1Pl = "Uwielbiamy technologię wirtualnej rzeczywistości,";
  descP1En = "WE LOVE VIRTUAL REALITY TECHNOLOGY BECAUSE IT gives US a chance";

  descP2 = "TO CREATE ANY SCENERY WHILE MAINTAINING REAL-WORLD REALISM AND EMOTIONS.";
  descP2Pl = "ponieważ daje nam ona możliwość tworzenia dowolnej scenerii przy zachowaniu realizmu i emocji z realnego świata.";
  descP2En = "TO CREATE ANY SCENERY WHILE MAINTAINING REAL-WORLD REALISM AND EMOTIONS.";

  descMain = "We are PunkPirates, an independent VR game development studio. We supervise the production, publication, and marketing of the titles we publish. Virtual reality technology lets us create any world while maintaining the realism of the real world. We provide our players with products that will allow them to immerse themselves in the virtual world. We have successfully launched two games on the market: Escape Room VR and Escape Room VR: Stories, which have been positively received by players from around the world.";
  descMainPl = "Jesteśmy PunkPirates, niezależnym studiem tworzącym gry VR. Nadzorujemy produkcję, publikację i marketing wydawanych przez nas tytułów. Technologia wirtualnej rzeczywistości pozwala tworzyć dowolny świat przy zachowaniu realizmu prawdziwego świata. Dostarczamy naszym graczom produkty, które pozwolą im zanurzyć się w wirtualnym świecie. Z sukcesem wprowadziliśmy na rynek dwie gry: Escape Room VR i Escape Room VR: Stories, które zostały pozytywnie odebrane przez graczy z całego świata.";
  descMainEn = "We are PunkPirates, an independent VR game development studio. We supervise the production, publication, and marketing of the titles we publish. Virtual reality technology lets us create any world while maintaining the realism of the real world. We provide our players with products that will allow them to immerse themselves in the virtual world. We have successfully launched two games on the market: Escape Room VR and Escape Room VR: Stories, which have been positively received by players from around the world.";

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
        this.descP1 = this.descP1Pl;
        this.descP2 = this.descP2Pl;
        this.descMain = this.descMainPl;
      }
      else {
        this.title = this.titleEn;
        this.descP1 = this.descP1En;
        this.descP2 = this.descP2En;
        this.descMain = this.descMainEn;
      }
    }

  ngOnInit() {
  }

}
