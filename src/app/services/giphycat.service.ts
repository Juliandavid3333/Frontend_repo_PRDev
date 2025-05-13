import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CatGifResult {
  fact: string;
  gifUrl: string;
}
export interface GifSearch {
  fraseCompleta: string;
  queryFact: string;
  gifUrl: string;
  fechaBusqueda: string;
}

@Injectable({
  providedIn: 'root'
})

export class GiphycatService {
  private apiUrl = 'https://localhost:7173/api';
  constructor(private http: HttpClient) { }
  
  getFactWithGif(): Observable<CatGifResult> {
    return this.http.get<CatGifResult>(`${this.apiUrl}/fact`);
  }

  getHistory(): Observable<GifSearch[]> {
    return this.http.get<GifSearch[]>(`${this.apiUrl}/history`);
  }

  getGifByQuery(query: string): Observable<string> {
    return this.http.get(`${this.apiUrl}/gif?query=${encodeURIComponent(query)}`, { responseType: 'text' });
  }
  refreshGif(fact: string) {
      return this.http.post<{ gifUrl: string }>(
    `${this.apiUrl}/refresh-gif`, 
    JSON.stringify(fact),
    { headers: { 'Content-Type': 'application/json' } }
  );
  }
}
