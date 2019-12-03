import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment as env } from './../../environments/environment';
import { Guida } from '../core/model/guida';
import { throwError, Observable, of, timer } from 'rxjs';
import { catchError, finalize, tap, retryWhen, delayWhen, max, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuidaService {

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get<Guida>(env.apiUrl + '/guida/' + id)
      .pipe(
        // tap(() => console.log("HTTP request executed"))
           catchError(this.errorHandler)
        // , catchError(this.errorHandler) //example Observable chain
        // , finalize(() => console.log("first finalize() block executed"))
        // , catchError(this.errorHandler) //example Observable chain
        // , finalize(() => console.log("second finalize() block executed"))
        // , catchError(err => of(this.get(id)) )
        /*
        // immediate retry
        , retryWhen(errors => {
          return errors
                  .pipe(
                      tap(() => console.log('retrying...'))
                  );
      } )
      */

      /*
      // delayed retry
     , retryWhen(errors => {
        return errors
                .pipe(
                    delayWhen(() => timer(2000)),
                    tap(() => console.log('retrying...'))
                );
        } )
        */

        // retry senza il when prova per n volte lo stesso observable di partenza
        , retry(2)

      );
  }

  getAll() {
    return this.http.get<Guida[]>(env.apiUrl + '/guida/');
  }

  getLatest(){
    return this.http.get<Guida[]>(env.apiUrl + '/guida/latest');
  }

  getByName(name: string): Observable<Guida[]> {
    return this.http.get<Guida[]>(env.apiUrl + '/guida/search/' + name);
  }

  getShort(id: number) {
    return this.http.get<Guida>(env.apiUrl + '/guida/short/' + id);
  }

  /*GESTIONE ERRORI*/
  // https://blog.angular-university.io/rxjs-error-handling/
  errorHandler(error: any) {
    console.log('HOOK here error', error);
    if (false) {
      // bypasso logica di business e arriva tale e quale al subscriber
      // return of(error); // torna un nuovo Observable e va in success, ma poi l'Observable è completato con errore
      return throwError(error); // riemette nuovamente l'errore ricevuto
      // oppure default item
      /*
      let guida = new Guida();
      guida.descrizione = 'unknown';
      guida.nome = 'unknown';
      guida.id = -1;
      guida.image = 'unknown';
      guida.url = 'unknown';
      guida.livello = null;
      return of(guida);
      */
    } else {
      // modifico l'errore in ingresso per una gestione custom
      let msg: string;
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
          msg = 'Applicazione offline';
        } else {
          msg = `Si è verificato un errore: ${error.error.msg} (server status code ${error.status})`;
        }
        return throwError(msg);
      }
      return throwError(`Si è verificato un errore di tipo: ${error.message}`);
    }
  } // end errorHandler


}
