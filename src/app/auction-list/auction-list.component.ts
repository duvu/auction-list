import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuctionService} from './auction.service';

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

export interface AuctionNotice {
  rowCount: number;
  pageNumber: number;
  pageList: number[];
  pageCount: number;
  numberPerPage: number;
  items: AuctionItem[];
}

export interface AuctionItem {
  id: number;
  propertyName: string;
  publishTime1: number;
  subPropertyName: string;
  titleName: string;
}
