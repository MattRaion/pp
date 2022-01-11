import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public IsPolish : Subject<string> = new Subject<string>();


  public setIsPolish(val)
  {
    localStorage.setItem('isPolish', val);
  }

  public getIsPolish()
  {
    return localStorage.getItem('isPolish');
  }

  constructor() {
    var userLang = navigator.language
    if(userLang === 'pl-PL')
    {
      this.setIsPolish('1');
      this.IsPolish.next('1');
    }
   }
}
