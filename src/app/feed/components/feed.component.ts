import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FeedInterface } from '../interfaces/tweet';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public tweets!: FeedInterface[];
  data!: FeedInterface
  form: any;
  photo = 'assets/img/ProfilePic.png';

  constructor(
    private readonly feed: FeedService
  ) {
  }

  ngOnInit(): void {
    this.showTweets();
    this.form = new FormGroup({
      name: new FormControl(''),
      tweet: new FormControl('', Validators.maxLength(130)),
      photo: new FormControl(''),
      adress: new FormControl(''),
    });
  }



  public tweetPost(): void {
    const post: FeedInterface = this.form.value;
    this.tweets.push(post);
    localStorage.setItem('BD', JSON.stringify(this.tweets));
    this.form.get('tweet').reset();
  }



  showTweets(): void {
    this.feed.getFeed().subscribe((data: FeedInterface) => {
      this.data = data
      if (localStorage.getItem('BD')) {
        this.tweets = JSON.parse(localStorage.getItem('BD') || '{}');
      } else {
        this.tweets = [];
      }
    })
  }

  deleteItem(): void {

  }
}
