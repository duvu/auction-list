import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionListRoutingModule } from './auction-list-routing.module';
import { AuctionListComponent } from './auction-list.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AuctionListComponent],
  imports: [
    CommonModule,
      SharedModule,
    AuctionListRoutingModule
  ]
})
export class AuctionListModule { }
