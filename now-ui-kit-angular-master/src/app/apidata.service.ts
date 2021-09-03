import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
//const API_URL = environment.apiurl;
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin': '*',
//     'Authorization': 'authkey',


//   })
// };
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('X-CLIENT-APP', '8db8042c072f11ec89fc22bffcdfb5e4',)
  .set('Access-Control-Allow-Origin', '*');
@Injectable({ providedIn: 'root' })
export class ApidataService {
  constructor(private http: HttpClient) { }


  getdepartmentUser(data:any){
   return this.http.post(`https://www.radiantgirlclothing.com/api/contact`, data, {headers:headers});
  }
}
