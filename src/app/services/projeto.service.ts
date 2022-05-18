import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private http: HttpClient) { }

  public getAllProjetos(): Observable<any> {
    return this.http.get(AppConstants.baseServidor + 'projeto/all/' + AppConstants.tokenConta);
  }

  public getAllProjetosBySkills(skill: string): Observable<any> {
    return this.http.get(AppConstants.baseServidor + 'projeto/skill/' + AppConstants.tokenConta + '/' + skill);
  }

  public getByLink(link: string): Observable<any> {
    return this.http.get<any>(AppConstants.baseServidor + 'projeto/' + AppConstants.tokenConta + '/' + link);
  }

  public likeProjeto(link: string): Observable<any> {
    return this.http.post<any>(AppConstants.baseServidor + 'like/' + link, '');
  }

  public getLikes(link: string): Observable<any>{
    return this.http.get<any>(AppConstants.baseServidor + 'like/' + AppConstants.tokenConta + '/' + link);
  }
}
