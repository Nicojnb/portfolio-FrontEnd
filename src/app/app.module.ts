import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AttitudesComponent } from './components/attitudes/attitudes.component';
import { StudiesComponent } from './components/studies/studies.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AchievementsFormComponent } from './components/achievements-form/achievements-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { StudiesFormComponent } from './components/studies-form/studies-form.component';
import { RingGraphComponent } from './components/ring-graph/ring-graph.component';
import { AttitudesFormComponent } from './components/attitudes-form/attitudes-form.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    IntroComponent,
    ExperienceComponent,
    AttitudesComponent,
    StudiesComponent,
    AchievementsComponent,
    LoginComponent,
    PortfolioComponent,
    AchievementsFormComponent,
    ExperienceFormComponent,
    StudiesFormComponent,
    RingGraphComponent,
    AttitudesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
