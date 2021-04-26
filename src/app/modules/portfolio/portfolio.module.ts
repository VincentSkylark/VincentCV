import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './component/portfolio.component';
import {PortfolioModalComponent} from './component/portfolio-modal/portfolio-modal.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [PortfolioComponent, PortfolioModalComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ]
})
export class PortfolioModule { }
