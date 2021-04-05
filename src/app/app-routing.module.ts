import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './modules/contact/component/contact.component';
import {PortfolioComponent} from './modules/portfolio/component/portfolio.component';
import {ResumeComponent} from './modules/resume/component/resume.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/component/home.component';
import {AboutMeComponent} from './modules/about-me/component/about-me.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
