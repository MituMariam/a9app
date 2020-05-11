import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
urls:{
  regular: string;
}
}

@Injectable({
  providedIn: 'root'
})
export class PhotoShowService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers:{
        Authorization: 'Client-ID 2hzBbPig-rRs7ns951XodC4ROxKR1DJ_JRGyyqqTyJ0',
      }
    })
  }
}
