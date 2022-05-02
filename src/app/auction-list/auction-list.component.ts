import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AuctionItem, AuctionNotice } from '../@models/auction.model';
import {AuctionService} from '../@services/auction.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit, AfterViewInit {
  dataSource: AuctionItem[];
  displayedColumns: string[] = ['publishTime1', 'propertyName', 'subPropertyName'];
  constructor(private auctionService: AuctionService) { }
  resultsLength = 0;

  ngOnInit(): void {
    this.auctionService.getAuctionList(1000).subscribe(
        (data: AuctionNotice) => {
          console.log(data);
          this.dataSource = data.items;
          this.resultsLength = data.items.length;
        }
    );
  }

  ngAfterViewInit(): void {
  }

}
