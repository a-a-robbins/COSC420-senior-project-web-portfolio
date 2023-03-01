import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import {RouterModule} from "@angular/router";
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CodeProjectsComponent } from './code-projects/code-projects.component';
import { CreativeCollectionComponent } from './creative-collection/creative-collection.component';
import { PhotojournalComponent } from './creative-collection/photojournal/photojournal.component';
import { MusingsComponent } from './creative-collection/musings/musings.component';
import { VisualArtComponent } from './creative-collection/visual-art/visual-art.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResumeComponent,
    NavbarComponent,
    CodeProjectsComponent,
    CreativeCollectionComponent,
    PhotojournalComponent,
    MusingsComponent,
    VisualArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'landing', component: LandingComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'code-projects', component: CodeProjectsComponent},
      {path: 'creative-collection', component: CreativeCollectionComponent},
      {path: 'creative-collection/photojournal', component: PhotojournalComponent},
      {path: 'creative-collection/musings', component: MusingsComponent},
      {path: 'creative-collection/visual-art', component: VisualArtComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
