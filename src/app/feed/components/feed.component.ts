import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TweetInterface } from '../interfaces/tweet';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public tweets!: TweetInterface[];
  form: any;
  tweet: any;
  photo = 'assets/img/ProfilePic.png';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.showTweets();
    this.form = new FormGroup({
      name: new FormControl('David Oliveira'),
      tweet: new FormControl(''),
      photo: new FormControl('assets/img/ProfilePic.png'),
      adress: new FormControl('@davidoliveira_'),
    });
  }

  public delete() {
    console.log('fui clicado');
  }

  public tweetPost(): void {
    const post: TweetInterface = this.form.value;
    this.tweets.push(post);
    localStorage.setItem('BD', JSON.stringify(this.tweets));
    this.form.reset();
  }

  public onSubmit(): void {
    this.tweets = Object.assign(this.tweet, this.form.value);
    localStorage.setItem('BD', JSON.stringify(this.tweets));
  }

  showTweets(): void {
    if (localStorage.getItem('BD')) {
      this.tweets = JSON.parse(localStorage.getItem('BD') || '{}');
    } else {
      this.tweets = [];
    }
  }

  deleteItem(): void {

  }
}
