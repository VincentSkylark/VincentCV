import {Component} from '@angular/core';
import {PortfolioModel} from '../../Model/portfolio.model';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html'
})
export class PortfolioModalComponent{
  public portfolio: PortfolioModel = {} as PortfolioModel;
  constructor() {
  }
}
