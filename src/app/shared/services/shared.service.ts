import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClientService } from './http-client.service';
import { ResponseBody } from '../model/shared.model';

import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClientService) { }

  public launchPrgms(): Observable<HttpResponse<ResponseBody<any>>> {
    const url = environment.BASE_URL;
    return this.http.get(url)
      .pipe(catchError((error) => throwError(error)));
  }
}
