import { SearchMoviePageComponent } from './search-movie-page/search-movie-page.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MovieListPageComponent},
  {path: 'movie/:id', component: MovieDetailPageComponent},
  { path: 'search/:query', component: SearchMoviePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
