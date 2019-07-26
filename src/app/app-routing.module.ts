import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AdminPassComponent } from './admin-pass/admin-pass.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'playlist/:num', component: PlaylistComponent},
  {path: 'favourites', component: FavouriteComponent},
  {path: 'adminPass', component: AdminPassComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
