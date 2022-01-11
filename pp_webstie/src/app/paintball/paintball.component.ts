import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-paintball',
  templateUrl: './paintball.component.html',
  styleUrls: ['./paintball.component.css']
})
export class PaintBallComponent implements OnInit {

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
  releasePl = "Q3 2021";
  releaseEn = "Q3 2021"

  desc = "Escape Room VR: Stories uses VR capabilities to its full potential. The locations are filled with objects that players can interact with; the environment is very realistic and detailed. Each room has its plot that combines into one story. The plot is presented through graphic novel cutscenes."
  desc1 = '';
  desc2 = '';

  descPl = `Community Paintball VR jest grą multiplayer typu battle royale, skierowana do znacznie większej publiczności, niż pozostałe gry tego typu. Tytuł posiada lżejszy i weselszy ton w kolorowym świecie, gdzie nikt nie umiera. Gracze nie odpadają z gry zbyt szybko, aby się nie zniechęcić, a bardzo niski poziom przemocy pozwala na dotarcie do szerszej grupy wiekowej, tak, aby cała rodzina mogła dołączyć do zabawy.
`
  desc1Pl = 'Twój plac zabaw to Uniwersytet, gdzie zamiast zwężającego się okręgu kolejne klasy będą zamykane, pozostawiając jedną z trzech największych sal do ostatecznej rozgrywki - jadalnię, bibliotekę lub salę gimnastyczną.'
  desc2PL = ' Graj przystojnym ziomkiem albo starym zgredem, kobietą lub mężczyzną. Przebierz się za dinozaura albo banana. Różnorodność ludzi i kultur na uniwersytecie jest wszelaka i my również zapewnimy ci szeroki wybór wieku, płci i koloru skóry. Przy czym żadnych dzieci. W końcu to poważna gra dla dorosłych na uniwersytecie a nie jakieś tam zabawy w gimnazjum.'

  descEn = `Community Paintball VR is a battle royale game, where all of its characters - all the students, teachers and even Dean - are attending an annual paintball game… where needless to say, things are quickly going out of hand. And the only people who don't really approve this whole event are janitors. Play with a wide range of toy guns that shoot colourful balls, leaving a beautiful mess wherever you go!`


  desc1En = 'Your playground is a college, where instead of a shrinking bubble - classrooms are being locked with only one big room left at the very end for the final shootout - the dining room.'
  desc2En = `Be a handsome loverboy, or an old grumpy fart, dress up like a dinosaur or a banana.The variety of different people in Community College is wide! And you will have plenty of characters to choose from.Boys and girls, young and old.No kids, though.It's a community college, not a high school after all.`

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
      this.desc1 = this.desc1Pl;
      this.desc2 = this.desc2PL;
    }
    else {
      this.platform = this.platformEn;
      this.publisher = this.publisherEn;
      this.developer = this.developerEn;
      this.releaseDate = this.releaseDateEn;
      this.release = this.releaseEn
      this.desc = this.descEn;
      this.scrollDownEn = this.scrollDownEn;
      this.desc1 = this.desc1En;
      this.desc2 = this.desc2En;
    }
  }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-vrstories');
    el.scrollIntoView({ behavior: 'smooth' });
  }



}
