import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuctionNotice} from './auction-list.component';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(private http: HttpClient) { }
  getAuctionList(pageSize: number): Observable<AuctionNotice> {
    const url = '/api' + '/auction-notice?assetName=&numberPerPage=1000&p=1&provinceId=100001&selectedOrganizationId=';
    return this.http.get<AuctionNotice>('/api');
  }
}
