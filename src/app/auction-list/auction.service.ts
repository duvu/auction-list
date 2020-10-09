import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuctionNotice} from "./auction-list.component";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAuctionList(pageSize: number): Observable<AuctionNotice> {
    // tslint:disable-next-line:max-line-length
    //const url = 'https://dgts.moj.gov.vn/portal/search/auction-notice?assetName=&numberPerPage=1000&p=1&provinceId=100001&selectedOrganizationId=';
    // const xHeaders = {
    //     'Host': 'dgts.moj.gov.vn',
    //     'Connection': 'keep-alive',
    //     'Accept': 'application/json, text/plain, */*',
    //     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
    //     'Sec-Fetch-Site': 'same-origin',
    //     'Sec-Fetch-Mode': 'cors',
    //     'Sec-Fetch-Dest': 'empty',
    //     'Referer': 'https://dgts.moj.gov.vn/thong-bao-cong-khai-viec-dau-gia.html',
    //     'Accept-Encoding': 'gzip, deflate, br',
    //     'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
    //   // tslint:disable-next-line:max-line-length
    //     'Cookie': '_ga=GA1.3.806843893.1601445935; _gid=GA1.3.1482739007.1602209651; __zi=3000.SSZzejyD5T4XnFUYmmq4q7N6exoD0noJATIfevz13eKoa_Rbb411oZMNykAJ34RBCDpmv9C9Hy0oDZS.1; fpsend=148352; JSESSIONID=E0958FC97F2C1D2634918ED9614082A0; _gat_gtag_UA_58615077_6=1'
    // };
    const url = '/api' + '/auction-notice?assetName=&numberPerPage=1000&p=1&provinceId=100001&selectedOrganizationId=';
    return this.http.get('/api');
  }
}
