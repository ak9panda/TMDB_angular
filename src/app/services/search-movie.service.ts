import { Movies } from './../model/movies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchMovies } from '../model/search-movies';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '44ba3fd8b25161b1ce7444f55d772ce9';

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(query: string, page: number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=en&query=${query}&page=${page}`;

    return this.http.get<SearchMovies>(searchUrl)
    .pipe (
      tap(_ => this.log('fetched popular movies')),
      catchError(this.handleError<SearchMovies>('getPopularMovies'))
    )
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
