import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-deathmanager',
  templateUrl: './deathmanager.component.html',
  styleUrls: ['./deathmanager.component.css']
})
export class DeathmanagerComponent implements OnInit {

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
  releasePl = "Q4 2021";
  releaseEn = "Q4 2021"

  cs = "Coming soon";
  csPl = "Wkrótce";
  csEn = "Coming soon"

  desc = "During the game, a scientist faces the challenge of blocking the spread of a deadly virus. Player’s role is to solve logical puzzles that will allow him to stop the danger and escape from the laboratory trap. The procedures against leak of a virus from the laboratory are not determined and it’s up to us to figure it out. Only a few minutes separate the player from a catastrophe affecting the world."

  descPl = `To nie jest zwykła gra w zarządzanie cmentarzem. Death Manager VR to gra action adventure z dużą ilością czarnego poczucia humoru. Nasz bohater zostaje spadkobiercą cmentarza, a wraz z nim dziedziczy wszystkie tajemnice, które skrywa. Na jego rękach spoczywa los tego miejsca oraz obowiązek pokonania zła, które tu czyha. Wszystko to w szalonym i kolorowym świecie lat 80-tych.

`;
  
  descEn = `The player impersonates a hero taking over a family business from an ill grandfather. The game consists of two modes. In the daytime segment, the funeral home has to be constantly developed and looked after to meet the clients requirements. You’re the one responsible for preparing funerals, from gathering materials to preparing bodies, almost everything lies in your hands. . At night, graves open, from which the zombies come out. The cemetery hides catacombs under its grounds that are full of secrets and mysteries but also lots of bad juju dwelling in the darkness. It is up to you to enter the labyrinth of death and discover what’s causing all the chaos.`;

  desc2 = "";
  desc2Pl = "Wiele lat temu, w małym cichym miasteczku Hoof Hearted, wydarzyło się coś przerażającego. Mrożąca krew w żyłach historia została pogrzebana w tajemnicy, a wszyscy, którzy o niej wiedzieli modlili się, aby nic takiego nie przytrafiło się ponownie. Jednak zło powróciło, a wraz z nim na stare śmieci wrócił Justin Case. Jeszcze nie wie co go czeka, ale szybko się przekona, że nie jest to miejsce dla mięczaków. Czy uda mu się pokonać zło i odkryć upiorne tajemnice sprzed pokoleń?";
  desc2En = "Meet John and get to know his past in possibly the only adventure game with a non-linear plot, procedurally generated user path and (more than) a pinch of the atmosphere of your favorite horrors.";
  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x) {
    console.log(x);
    if (x === '1') {
      console.log(x);
      this.platform = this.platformPl;
      this.publisher = this.publisherPl;
      this.developer = this.developerPl;
      this.releaseDate = this.releaseDatePl;
      this.release = this.releasePl;
      this.desc = this.descPl;
      this.cs = this.csPl;
      this.desc2 = this.desc2Pl; this.scrollDown = this.scrollDownPl;
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
    let el = document.getElementById('images-game-det-deathmanager');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
