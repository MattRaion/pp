import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-titans',
  templateUrl: './titans.component.html',
  styleUrls: ['./titans.component.css']
})
export class TitansComponent implements OnInit {
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
  releasePl = "Q2 2021";
  releaseEn = "Q2 2021"

  cs = "Coming soon";
  csPl = "Wkrótce";
  csEn = "Coming soon"

  desc = "Escape Room VR: Stories uses VR capabilities to its full potential. The locations are filled with objects that players can interact with; the environment is very realistic and detailed. Each room has its plot that combines into one story. The plot is presented through graphic novel cutscenes."

  descPl = "Nadrzędnym celem gracza jest wygrywanie kolejnych bitew w celu przejęcia władzy nad całą Europą. Gracz steruje Tytanem a jego zadaniem jest zarządzanie swoim wojskiem oraz prowadzenie najtrudniejszych walk własnoręcznie. W Titans VR opartej na grze planszowej o tym samym tytule, gracz ma możliwość wcielić się w Tytana i z widoku pierwszej osoby pokierować swoją armią do wygranej. Celem gry jest zajęcie całej Europy poprzez przejęcie kontroli nad kolejnymi sektorami, a zadaniem gracza będzie taktyczne ustawienie armii tak, aby wojska wroga nie przeszkadzały mu w pokonaniu Tytana wrogiego narodu oraz pomogą w zdobyciu twierdzy.Gracz będzie miał do dyspozycji bronie tradycyjne oraz umiejętności unikalne dla każdego z narodów.Im lepiej gracz poradzi sobie w danej bitwie tym łatwiej będzie wygrać kolejną"

  descEn = "The game is set in a historical fantasy setting of 17th century Europe. Endless wars are taking their toll as the people fall into despair. There is no hope for an end, no prospects for a peaceful order. The faith of the people slowly burns out. Dormant Spirits of the Nations wake up from centuries-long rest, rekindling the hearts of the people and raising ancient warriors called the Titans. People, filled with extraordinary powers, standing hand-by-hand with mighty Titans, fight to reclaim Europe. That war will end it all, and a King of Kings will be chosen. In Titans, players take the role of a king that leads an Army with a mythical Titan into Battle."

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
      this.scrollDown = this.scrollDownPl;

    }
    else {
      this.platform = this.platformEn;
      this.publisher = this.publisherEn;
      this.developer = this.developerEn;
      this.releaseDate = this.releaseDateEn;
      this.release = this.releaseEn
      this.desc = this.descEn;
      this.cs = this.csEn;
      this.scrollDown = this.scrollDownEn;
    }
  }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-titans');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
