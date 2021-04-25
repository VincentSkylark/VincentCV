import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routeConfig} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ResumeModule } from './modules/resume/resume.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import {NavModule} from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    PortfolioModule,
    ResumeModule,
    RouterModule.forRoot(routeConfig),
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
