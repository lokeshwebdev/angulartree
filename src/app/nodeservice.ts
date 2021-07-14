import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFiles() {
    return this.http.get<any>('https://mocki.io/v1/22e1ace7-2ed8-499e-9ad3-940645cb6567')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
    getData() {
      let url ="https://mocki.io/v1/22e1ace7-2ed8-499e-9ad3-940645cb6567";
      return this.http.get<any>(url)
        .toPromise()
        .then(res => <TreeNode[]>res.data);
      }

getData1()
  {
    let url ="https://mocki.io/v1/22e1ace7-2ed8-499e-9ad3-940645cb6567";
    return this.http.get<any>(url);

  }
}