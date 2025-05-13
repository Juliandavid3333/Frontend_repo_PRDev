import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphycatComponent } from './giphycat/giphycat.component';
import { HistoryPageComponent } from './history/history-page/history-page.component';

const routes: Routes = [
  { path: 'giphy', component: GiphycatComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: '', redirectTo: '/giphy', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
