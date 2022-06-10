import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as feedMock from '../../../../mocks/user.json';
import { FeedInterface } from '../interfaces/tweet';

const feed = feedMock as any;

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  public getFeed(): Observable<FeedInterface>{
    return of(feed)
  }
}
