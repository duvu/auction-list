import { Component, OnInit } from '@angular/core';
import {AuctionService} from './auction.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAuctionList(1000).subscribe(
        data => console.log(data)
    );
  }

}
