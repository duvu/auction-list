
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
  

  export interface PropertyType {
    id: number;
    code: string;
    name: string;
    des: string;
    catType: string;
    parentId: number;
    level: number;
    createdBy: string;
    createdDate: Date;
    modifiedBy: string;
    modifiedDate: Date;
    status: number;
  }

export interface ProvinceModel {
    id: number;
    code: string;
    name: string;
    catType: string;
    des: string;
}