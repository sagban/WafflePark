import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  constructor(
    private http:HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) { }

  signup(data:any):any{

    var url = 'http://'+this.document.location.hostname+':3000/api/signup';
    return this.http.post(url, data, {
      withCredentials: true  // <=========== important!
    });
  }

  login(data:any):any{

    var url = 'http://'+this.document.location.hostname+':3000/api/login';
    return this.http.post(url, data, {
      withCredentials: true  // <=========== important!
    });
  }

}
