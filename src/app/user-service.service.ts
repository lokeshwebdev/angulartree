import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TreeNode } from 'primeng/api';
 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  
  getData()
  {
    let url ="https://mocki.io/v1/d018a78b-6866-4f30-90de-ac41e2926288";
    return this.http.get(url);

  } 
}
