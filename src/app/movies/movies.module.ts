import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    MovieGridComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
