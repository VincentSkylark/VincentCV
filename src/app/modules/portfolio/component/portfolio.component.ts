import { Component } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PortfolioModalComponent} from './portfolio-modal/portfolio-modal.component';
import {PortfolioModel} from '../Model/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(public modalService: NgbModal) {
  }

  open(portfolio: PortfolioModel): void{
    const modalRef = this.modalService.open(PortfolioModalComponent, {size: 'lg', scrollable: true, keyboard: true});
    modalRef.componentInstance.portfolio = portfolio;
  }

}
