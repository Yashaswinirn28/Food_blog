import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.scss'],
})
export class FormpostComponent implements OnInit {
  Title: string = '';
  Subtitle: string = '';
  PostBody: string = '';
  ImgUrl: string = '';
  Rating: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  getSessionData(key: string) {
    const sessionValue = sessionStorage.getItem(key);
    console.log(sessionValue);
    return sessionValue;
  }
  UID: string = null;

  ngOnInit(): void {
    // this.fetchData();
    this.UID = this.getSessionData('UID');
    if (this.UID == null) {
      this.router.navigate(['/login']);
    }
  }

  public fetchData() {
    this.http
      .get('http://localhost:3001/posts/getAllPosts')
      .subscribe((res) => {
        console.log(res);
      });
  }

  onSubmit(form: any) {
    const formData = {
      Title: form.value.Title,
      Subtitle: form.value.Subtitle,
      PostBody: form.value.PostBody,
      ImgUrl: form.value.ImgUrl,
      Rating: form.value.Rating,
      UID: parseInt(this.UID),
    };
    // console.log(formData);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post('http://localhost:3001/posts/addPost', formData, { headers })
      .subscribe(
        (res) => {
          console.log('Response:', res);
          // this.router.navigate(['/home']);
          alert("post added!")
        },
        (error) => {
          console.error('Error:', error); // Handle errors gracefully
        }
      );
  }
}
