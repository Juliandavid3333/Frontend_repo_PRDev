import { Component, OnInit } from '@angular/core';
import { CatGifResult, GifSearch, GiphycatService } from '../services/giphycat.service';
@Component({
  selector: 'app-giphycat',
  templateUrl: './giphycat.component.html',
  styleUrls: ['./giphycat.component.css']
})
export class GiphycatComponent implements OnInit {
resultado?: CatGifResult;
  historial: GifSearch[] = [];

constructor(private catGiphyService: GiphycatService) {}
ngOnInit(): void {
this.obtenerFraseYGif();
}
  obtenerFraseYGif() {
    this.catGiphyService.getFactWithGif().subscribe(data => {
      this.resultado = data;
    });
  }

  verHistorial() {
    this.catGiphyService.getHistory().subscribe(historial => {
      this.historial = historial;
    });
  }

  refrescargif() {
    if (!this.resultado?.fact) return;
      this.catGiphyService.refreshGif(this.resultado.fact).subscribe(response => {
      this.resultado!.gifUrl = response.gifUrl;
    });
  }
}