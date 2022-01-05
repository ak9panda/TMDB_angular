import { Movie } from './../model/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchMovieService } from '../services/search-movie.service';
import { SearchMovies } from '../model/search-movies';

@Component({
  selector: 'app-search-movie-page',
  templateUrl: './search-movie-page.component.html',
  styleUrls: ['./search-movie-page.component.css']
})
export class SearchMoviePageComponent implements OnInit {

  searchedMovies!: SearchMovies;
  movies!: Movie[];
  totalResults: number = 0;
  totalPages: number = 0;
  page: number = 0;
  query: string = "";

  constructor(
    private searchMovieService: SearchMovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.query = param['query'];
        this.page = 1;
        this.searchMovies(this.query, this.page);
      }
    )
  }

  searchMovies(query: string, page: number) {
    this.searchMovieService.searchMovies(query, page)
      .subscribe (
        searchMovie => {
          this.searchedMovies = searchMovie
          this.movies = this.searchedMovies.results
          this.totalResults = this.searchedMovies.total_results
          this.totalPages = this.searchedMovies.total_pages
          this.page = this.searchedMovies.page
        }
      );
  }

  goPage(go: number) {
    let newPage = this.page + go;
    if (newPage <= this.totalPages && newPage >= 1)
      this.searchMovies(this.query, newPage);
  }

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
