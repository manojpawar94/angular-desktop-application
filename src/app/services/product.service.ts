import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  tableHeader = [
    { name: 'productId', header: 'Product Id', width: '100' },
    { name: 'productName', header: 'Product Name', width: '300' },
    { name: 'applicationName', header: 'Application Name', width: '150' }
  ];
  constructor() { }

  getProducts() {
    return [{
      productId: 1001,
      productName: 'Sample Product',
      applicationName: 'Sample Application'
    }, {
      productId: 1001,
      productName: 'Sample Product',
      applicationName: 'Sample Application'
    }, {
      productId: 1001,
      productName: 'Sample Product',
      applicationName: 'Sample Application'
    }, {
      productId: 1001,
      productName: 'Sample Product',
      applicationName: 'Sample Application'
    }];
  }

}
