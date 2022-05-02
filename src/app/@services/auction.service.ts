import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AuctionNotice, PropertyType, ProvinceModel } from '../@models/auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(private http: HttpClient) { }

  getPropertyTypeList(options: any): Observable<PropertyType> {
    return this.http.get<PropertyType>('/api/property-type', {params: options});
  }

  getAuctionList(options: any): Observable<AuctionNotice> {
    return this.http.get<AuctionNotice>('/api/auction-notice',  {params: options});
  }

  getProvinceList(options: any): Observable<ProvinceModel> {
   return this.http.get<ProvinceModel>('/api/province', {params: options}); 
  }
}
