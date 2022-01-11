import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import { OfferTabComponent } from './offer-tab/offer-tab.component';
import { GameComponent } from './game/game.component';
import { OurgamesComponent } from './ourgames/ourgames.component';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { FooterComponent } from './footer/footer.component';
import { Banner2Component } from './banner2/banner2.component';
import { ContacComponent } from './contac/contac.component';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { CareersComponent } from './careers/careers.component';
import { MenuComponent } from './menu/menu.component';
import { DatenshiComponent } from './datenshi/datenshi.component';
import { UnitydevPageComponent } from './unitydev-page/unitydev-page.component';
import { FlyinfatComponent } from './flyinfat/flyinfat.component';
import { LonelyislandComponent } from './lonelyisland/lonelyisland.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { NewsletterpopupComponent } from './newsletterpopup/newsletterpopup.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { InvestorRelationPageComponent } from './investor-relation-page/investor-relation-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TradingviewComponent } from './tradingview/tradingview.component';
import { CompanyComponent } from './company/company.component';
import { ManagementComponent } from './management/management.component';
import { ShareholdingComponent } from './shareholding/shareholding.component';
import { InvestorsContactComponent } from './investors-contact/investors-contact.component';
import { InnervoicesComponent } from './innervoices/innervoices.component';
import { ExcapelabComponent } from './excapelab/excapelab.component';
import { VrstoriesComponent } from './vrstories/vrstories.component';
import { TitansComponent } from './titans/titans.component';
import { DeathmanagerComponent } from './deathmanager/deathmanager.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { BoradofdirectorsComponent } from './boradofdirectors/boradofdirectors.component';
import { GroupComponent } from './group/group.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FinancialComponent } from './financial/financial.component';
import { CalendariumComponent } from './calendarium/calendarium.component';
import { GeneralmeetingComponent } from './generalmeeting/generalmeeting.component';
import { DocumentsComponent } from './documents/documents.component';
import { PaintBallComponent } from './paintball/paintball.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    AboutComponent,
    OfferComponent,
    OfferTabComponent,
    GameComponent,
    OurgamesComponent,
    ContactMainComponent,
    FooterComponent,
    Banner2Component,
    ContacComponent,
    ContactAddressComponent,
    MainPageComponent,
    CareersPageComponent,
    CareersComponent,
    MenuComponent,
    DatenshiComponent,
    UnitydevPageComponent,
    FlyinfatComponent,
    LonelyislandComponent,
    NewsletterpopupComponent,
    GamesPageComponent,
    InvestorRelationPageComponent,
    QuotesComponent,
    TradingviewComponent,
    CompanyComponent,
    ManagementComponent,
    ShareholdingComponent,
    InvestorsContactComponent,
    InnervoicesComponent,
    ExcapelabComponent,
    VrstoriesComponent,
    TitansComponent,
    DeathmanagerComponent,
    EscaperoomComponent,
    BoradofdirectorsComponent,
    GroupComponent,
    PresentationComponent,
    FinancialComponent,
    CalendariumComponent,
    GeneralmeetingComponent,
    DocumentsComponent,
    PaintBallComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
