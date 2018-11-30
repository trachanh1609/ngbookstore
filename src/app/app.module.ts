import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MzIconModule,
    MzIconMdiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
