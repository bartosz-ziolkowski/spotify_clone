import { AddSongComponent } from './components/add-song/add-song.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-song',
    component: AddSongComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
  },
];
