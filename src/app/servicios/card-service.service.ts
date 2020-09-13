import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CardService {

  constructor(private readonly http: HttpClient) {}

  /*
  * Get a list of images from picsum based on the board settings
  */
  getImageList() : Observable<any> {
    const NUMBER_OF_IMAGES = Math.round(5 * 3 / 2);
    return this.http.get('https://picsum.photos/v2/list?limit=' + NUMBER_OF_IMAGES);
  }
}