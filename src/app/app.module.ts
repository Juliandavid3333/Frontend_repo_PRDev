import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GiphycatComponent } from './giphycat/giphycat.component';
import { FormsModule } from '@angular/forms';
import { HistoryPageComponent } from './history/history-page/history-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphycatComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
