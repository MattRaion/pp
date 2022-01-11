import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoradofdirectorsComponent } from './boradofdirectors/boradofdirectors.component';
import { CalendariumComponent } from './calendarium/calendarium.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { CompanyComponent } from './company/company.component';
import { ContacComponent } from './contac/contac.component';
import { DatenshiComponent } from './datenshi/datenshi.component';
import { DeathmanagerComponent } from './deathmanager/deathmanager.component';
import { DocumentsComponent } from './documents/documents.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { ExcapelabComponent } from './excapelab/excapelab.component';
import { FinancialComponent } from './financial/financial.component';
import { FlyinfatComponent } from './flyinfat/flyinfat.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { GeneralmeetingComponent } from './generalmeeting/generalmeeting.component';
import { GroupComponent } from './group/group.component';
import { InnervoicesComponent } from './innervoices/innervoices.component';
import { InvestorRelationPageComponent } from './investor-relation-page/investor-relation-page.component';
import { InvestorsContactComponent } from './investors-contact/investors-contact.component';
import { LonelyislandComponent } from './lonelyisland/lonelyisland.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ManagementComponent } from './management/management.component';
import { MenuComponent } from './menu/menu.component';
import { PaintBallComponent } from './paintball/paintball.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ShareholdingComponent } from './shareholding/shareholding.component';
import { TitansComponent } from './titans/titans.component';
import { UnitydevPageComponent } from './unitydev-page/unitydev-page.component';
import { VrstoriesComponent } from './vrstories/vrstories.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContacComponent },
  { path: 'careers', component: CareersPageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'innerVoices', component: InnervoicesComponent },
  { path: 'escapeLab', component: ExcapelabComponent },
  { path: 'vrStories', component: VrstoriesComponent },
  { path: 'unityDev', component: UnitydevPageComponent },
 // { path: 'titans', component: TitansComponent },
  { path: 'deathManager', component: DeathmanagerComponent },
  { path: 'paintball', component: PaintBallComponent },
  { path: 'escapeRoom', component: EscaperoomComponent },
  { path: 'privacy', component: PrivacypolicyComponent },
  {path: 'investorRelation', component: InvestorRelationPageComponent, children: [
    {
      path: '', component: QuotesComponent
    },
    {
       path: 'quotes', component: QuotesComponent 
    },
    {
      path: 'company', component: CompanyComponent
    },
    {
      path: 'management', component: ManagementComponent
    },
    {
      path: 'shareholding', component: ShareholdingComponent
    },
    {
      path: 'investorscontact', component: InvestorsContactComponent
    },
    {
       path: 'boardOfDirectors', component: BoradofdirectorsComponent ,
    },
    {
      path: 'group', component: GroupComponent,
    }
    ,
    {
      path: 'presentation', component: PresentationComponent,
    }
    ,
    {
      path: 'financialData', component: FinancialComponent,
    }
    ,
    {
      path: 'calendarium', component: CalendariumComponent,
    }
    ,
    {
      path: 'generalMeeting', component: GeneralmeetingComponent,
    }
    ,
    {
      path: 'documents', component: DocumentsComponent,
    }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
