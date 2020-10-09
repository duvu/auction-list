import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionListComponent } from './auction-list.component';

const routes: Routes = [{ path: '', component: AuctionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionListRoutingModule { }
