import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {
  contactForm


  title1 = "Get in touch";
  title1Pl = "Pozostań z nami";
  title1En = "Get in touch";

  title2 = "with us";
  title2Pl = "w kontakcie!";
  title2En = "with us";

  name = "Your name*";
  namePl = "Imię*";
  nameEn = "Your name*"

  email = "Your email*";
  emailPl = "Email*";
  emailEn = "Your email*"

  subject = "Subject";
  subjectEn = "Subject";
  subjectPl = "Temat";

  message = "Your message";
  messagePl = "Wiadomość"
  messageEn = "Your message";

  send = "Send message";
  sendPl = "Wyślij wiadomość"
  sendEn = "Send message";


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private languageService: LanguageService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: '',
      text: ['', Validators.required]
    });


    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
   }

   set(x)
   {
     if (x === '1') {
       this.title1 = this.title1Pl;
       this.title2 = this.title2Pl;
       this.name = this.namePl;
       this.email = this.emailPl;
       this.subject = this.subjectPl;
       this.message = this.messagePl;
       this.send = this.sendPl;
     }
     else {
       this.title1 = this.title1En;
       this.title2 = this.title2En;
       this.name = this.nameEn;
       this.email = this.emailEn;
       this.subject = this.subjectEn;
       this.message = this.messageEn;
       this.send = this.sendEn;
     }
   }

  ngOnInit() {
  }

  onSubmit(form) {

    if (this.contactForm.invalid) {
      return;
    }

    this.contactForm.reset();

    this.httpClient.post('https://raionmailing.hostingasp.pl/mail/sendmail/1', form).subscribe(() => {
      this.contactForm.name = '';
      this.contactForm.email = '';
      this.contactForm.subject = '';
      this.contactForm.text = '';
    });

  }

}
