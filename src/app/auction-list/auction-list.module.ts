import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionListRoutingModule } from './auction-list-routing.module';
import { AuctionListComponent } from './auction-list.component';


@NgModule({
  declarations: [AuctionListComponent],
  imports: [
    CommonModule,
    AuctionListRoutingModule
  ]
})
export class AuctionListModule { }
