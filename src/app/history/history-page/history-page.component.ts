import { Component, OnInit } from '@angular/core';
import { GifSearch, GiphycatService } from 'src/app/services/giphycat.service';

@Component({
  selector: 'app-history',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  
  historial: GifSearch[] = [];

  constructor(private catGiphyService: GiphycatService) {}

  ngOnInit(): void {
    this.catGiphyService.getHistory().subscribe(data => {
      this.historial = data;
    });
  }
}
