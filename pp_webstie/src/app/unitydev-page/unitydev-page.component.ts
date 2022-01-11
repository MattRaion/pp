import { Component, OnInit } from '@angular/core';
import { send } from 'process';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-unitydev-page',
  templateUrl: './unitydev-page.component.html',
  styleUrls: ['./unitydev-page.component.css']
})
export class UnitydevPageComponent implements OnInit {

  desc = "";
  descPl = "Jesteśmy PunkPirates, niezależnym studiem tworzącym gry VR. Zajmujemy się produkcją, publikacją i marketingiem wydawanych tytułów.";
  descEn = "We are PunkPirates, an independent VR game development studio based in Warsaw. We supervise the production, publication, and marketing of the titles we publish."

  desc2 = "";
  desc2Pl = "Poszukujemy programisty C# / Unity Developera!";
  desc2En = "If you are C# / Unity Developer, we are looking for you!";

  respTitle ="";
  respTitlePl = "Obowiązki, czyli co będziesz robił:";
  respTitleEn = "C#/Unity Developer Responsibilities:";


  desc3 = "";
  desc3En = ` You’ll create games in Unity Engine.
    You’ll optimize game code and rendering, write shaders, and continually improve our graphics to achieve top-notch visual
    quality and optimal performance.
    You'll be able to play a key role in bringing to life high quality characters and art assets. You’ll design and
    implement flexible combat engine features as well as integrate art and implement mechanics for combat characters and
    environments.
    You’ll work in a collaborative environment with a cross-functional team of artists, designers, and QA to create game
    features, build art integration pipeline tooling and infrastructure, and bring designer specs to life in the game
    engine.
    Don’t just make the game - change the game!`;
  desc3Pl = ` Tworzył gry w silniku Unity.
 Optymalizował! Wybór właściwych narzędzi, aby osiągnąć dany cel, zmaksymalizować jakość i zminimalizować czas spędzony nad projektami.
 Zmieniał branżę, razem z nami - bądź proaktywny, cokolwiek robisz.
 Projektował, dopracowywał i weryfikował architekturę kodu.
`

  keyReq = "";
  keyReqPl = "Twoje doświadczenie jako programista:";
  keyReqEn = "C#/Unity Developer Key Requirements:"

  keyreqList = new Array<string>();
  keyreqListEn = ['Strong C# background', 'Extensive experience with Unity game engine','Using VCS like Plastic SCM or GIT',];
  keyreqListPl = ['Doskonała znajomość C#.', 'VCSy (np. Git, Plastic SCM).'];

  unityReq = "";
  unityReqPl = "Twoje doświadczenie jako Unity developer - im więcej, tym lepiej:";
  unityReqEn = "C#/Unity Developer Nice to Have Requirements:";

  unityReqList = new Array<string>();
  unityReqeqListEn = ['Writing shaders, lightening, pipeline tooling and rendering.', 'Unity 3D', 'Unity UI and User Session Management', 'Animations assets', 'Physics simulations', 'Understanding the relationship between Unity and exporting to Nintendo Switch and PC', 'An interest and passion for gaming', 'Working well in a team'];
  unityReqListPl = ['Szeroka wiedza Unity 3D, pipeline’ów renderowania, shaderów.', 'Unity UI oraz user session management.', 'Systemy animacji.', 'Silnik i symulacje fizyki.', 'System oświetlenia. Wiesz jak konfigurować sceny, źródła światła, lightmapy, materiały i tekstury, zapewniając maksymalny stosunek jakości i realizmu do wydajności.',
    'Doświadczenie w kompilowaniu i wdrażaniu projektów Unity dla Nintendo Switch, PC.', 'Znajomość dostępnych wtyczek, dodatków, komponentów dodających efekty wizualne/świetlne.'];

  offer = "";
  offerPl = "Chcielibyśmy również, żebyś:";
  offerEn = "What we offer:"

  offerList = new Array<string>();
  offerListEn = ['Salary: 7.0k-12.0k (B2B) PLN / month.', 'Flexible working hours', 'Creative and interesting projects allowing you to grow and gain experience.',
   `You'll be part of an energetic, diverse, and collaborative environment.`, 'We provide hardware, software and all the tools you’ll need to work effectively.'];
  offerListPl = ['Wynagrodzenie: 7 000 - 12 000 PLN netto / miesiąc B2B - zależne od doświadczenia.', 'Elastyczne godziny pracy.', 'Ekscytująca praca, za którą możesz wziąć odpowiedzialność i rozwijać się.',
   `Rodzinna atmosfera - chcemy się jak najlepiej poznać i mieć do siebie szczere zaufanie w kwestiach obowiązków i otwartej komunikacji.`,
   `Sprzęt, oprogramowanie - wszystko, czego potrzebujesz, aby pracować w najbardziej komfortowy i wydajny sposób.`];

  department = "";
  departmentPl = "Dział:";
  departmentEn = "Department:";

  location = "Location:";
  locationPl = "Lokalizacja:";
  locationEn = "Location:"

  location2 = "";
  location2Pl = "Warszawa";
  location2En = "Warsaw";

  sendCv = "Send your CV";
  sendCvPl = "Wyślij swoje CV";
  sendCvEn = "Send your CV";

  address = "address:";
  addressPl = "email:"
  addressEn = "address:"

  sendMessage = "Send message";
  sendMEssagePl  = "Wyślij wiadomość";
  sendMessageEn = "Send message";

  constructor(private languageService: LanguageService) {
    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })

  }

  set(val) {
    if (val === '1') {
      this.desc = this.descPl;
      this.desc2 = this.desc2Pl;
      this.respTitle = this.respTitlePl;
      this.desc3 = this.desc3Pl;
      this.keyReq = this.keyReqPl;
      this.keyreqList = this.keyreqListPl;
      this.unityReq = this.unityReqPl;
      this.unityReqList = this.unityReqListPl;
      this.offer = this.offerPl;
      this.offerList = this.offerListPl;
      this.location = this.locationPl;
      this.department = this.departmentPl;
      this.location2 = this.location2Pl;
      this.sendCv = this.sendCvPl;
      this.address = this.addressPl;
      this.sendMessage = this.sendMEssagePl;

    }
    else {
      this.desc = this.descEn;
      this.desc = this.desc2En;
      this.respTitle = this.respTitleEn;
      this.desc3 = this.desc3En;
      this.keyReq = this.keyReqEn;
      this.keyreqList = this.keyreqListEn;
      this.unityReqList = this.unityReqeqListEn;
      this.offer = this.offerEn;
      this.offerList = this.offerListEn;
      this.location = this.locationEn;
      this.department = this.departmentEn;
      this.location2 = this.location2En;
      this.sendCv = this.sendCvEn;
      this.address = this.addressEn;
      this.sendMessage = this.sendMessageEn;

    }
  }

  ngOnInit() {
  }

}
