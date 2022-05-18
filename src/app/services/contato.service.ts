import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/constants';
import { Contato } from '../models/contato';
import { Newslatter } from '../models/newslatter';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  public contatar(contato: Contato): Observable<any>{
    return this.http.post<any>(AppConstants.baseServidor + 'contato/' + AppConstants.tokenConta, contato);
  }

  public newsletter(newsletter: Newslatter): Observable<any>{
    return this.http.post<any>(AppConstants.baseServidor + 'newsletter/' + AppConstants.tokenConta, newsletter);
  }
}
