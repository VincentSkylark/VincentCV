import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [NavComponent],
    exports: [
        NavComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      NgbModule
    ]
})
export class NavModule { }
