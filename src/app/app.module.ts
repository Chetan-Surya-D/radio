import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPassComponent } from './admin-pass/admin-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    FavouriteComponent,
    AdminComponent,
    AdminPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
