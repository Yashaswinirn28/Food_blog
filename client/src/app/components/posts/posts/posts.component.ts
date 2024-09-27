import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/fontawesome-free';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts: Object;
  public hideLoader: boolean = true;
  faPlus = faPlus;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }
  public fetchData() {
    this.http
      .get('http://localhost:3001/posts/getAllPosts')
      .subscribe((res) => {
        console.log(res);
        this.posts = res;
      });
  }

  clickEvent(): void {
    this.router.navigateByUrl('/postform');
  }
}
