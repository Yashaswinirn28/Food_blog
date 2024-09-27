import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/fontawesome-free';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts: Array<any> = [];
  public hideLoader: boolean = true;
  public sortedPosts: Array<any> = [];
  faPlus = faPlus;
  constructor(private router: Router, private http: HttpClient) {}

  public fetchData() {
    this.http.get<Array<any>>('http://localhost:3001/posts/getAllPosts')
      .subscribe((res) => {
        this.posts = res;
        this.bubbleSort(this.posts);
        this.sortedPosts = [...this.posts]; // Create a copy to store sorted posts
        console.log(this.sortedPosts);
      });
  }

  bubbleSort(arr: Array<any>) {
    let n = arr.length;
    let swapped: boolean;
    
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i].Rating < arr[i + 1].Rating) {
          // Swap items
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      // Reduce the range for optimization
      // n--;
    } while (swapped);
  }


  getSessionData(key: string) {
    const sessionValue = sessionStorage.getItem(key);
    console.log(sessionValue);
  }

  ngOnInit(): void {
    this.fetchData();
    this.getSessionData('UID');
  }

  clickEvent(): void {
    this.router.navigateByUrl('/postform');
  }
}
