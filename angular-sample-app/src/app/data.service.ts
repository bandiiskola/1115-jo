import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://berenandor.moriczcloud.hu/users"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addPost(postData: any): Observable<any>{
    return this.http.get(this.apiUrl+"/feltolt/"+postData.name+"/"+postData.username);
  }
}
