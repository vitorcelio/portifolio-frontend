import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  public getListSkills(): Observable<any>{
    return this.http.get(AppConstants.baseServidor + 'skill/all/' + AppConstants.tokenConta);
  }
}
