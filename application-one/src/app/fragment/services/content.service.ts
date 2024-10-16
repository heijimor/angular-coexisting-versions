import { Injectable, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public getData(): { data: string; asyncData: Observable<string> } {
    return {
      data: 'content from application-one',
      asyncData: of('mock async data'), // Assuming an Observable
    };
  }
}
