import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslationObject } from './translationObject';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  postUrl = "http://9.193.211.189:8180/rest/emp/translation";
  postUrl1 = "http://9.193.217.24:8180/rest/emp/translation";

  constructor(private http: Http) { }

  getTranslation(translationObj: TranslationObject) : Observable<TranslationObject>{
    console.log("inside service...:"+JSON.stringify(translationObj));
    return this.http.post(this.postUrl1, translationObj)
          .pipe(map((response: Response) => {return response.json()}));
  }

  getTranslation1(translationObj: TranslationObject) : Promise<TranslationObject>{
    console.log("inside service...:"+JSON.stringify(translationObj));
    return this.http.post(this.postUrl1, translationObj).toPromise()
    .then(response => response.json() as TranslationObject).catch(error => this.handleCatch(error.json()));
    //return this.http.get(this.postUrl).toPromise()
    //.then(response => response.json() as TranslationObject).catch();
  }

  handleCatch(error){
    console.log("error...");
    return error;
  }

}
