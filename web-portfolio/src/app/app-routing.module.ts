import { NgModule } from '@angular/core';
import { AppModule } from "./app.module";
import { RouterModule, Routes } from '@angular/router';
import {AniTestComponent} from "./ani-test/ani-test.component";
import {LandingComponent} from "./landing/landing.component";
import {ResumeComponent} from "./resume/resume.component";
import {CodeProjectsComponent} from "./code-projects/code-projects.component";
import {CreativeCollectionComponent} from "./creative-collection/creative-collection.component";
import {PhotojournalComponent} from "./creative-collection/photojournal/photojournal.component";
import {MusingsComponent} from "./creative-collection/musings/musings.component";
import {VisualArtComponent} from "./creative-collection/visual-art/visual-art.component";
import {AboutComponent} from "./about/about.component";
import {NavbarComponent} from "./navbar/navbar.component";
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'code-projects', component: CodeProjectsComponent},
  {path: 'creative-collection', component: CreativeCollectionComponent},
  {path: 'creative-collection/photojournal', component: PhotojournalComponent},
  {path: 'creative-collection/musings', component: MusingsComponent},
  {path: 'creative-collection/visual-art', component: VisualArtComponent},
  {path: 'about', component: AboutComponent},
  {path: 'ani-test', component: AniTestComponent},
  {path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    RouterModule],

  declarations: [
    AboutComponent,
    AniTestComponent,
    CodeProjectsComponent,
    CreativeCollectionComponent,
    MusingsComponent,
    PhotojournalComponent,
    VisualArtComponent,
    LandingComponent,
    ResumeComponent,
    NavbarComponent
  ],
  exports: [RouterModule, NavbarComponent]
})
export class AppRoutingModule { }
