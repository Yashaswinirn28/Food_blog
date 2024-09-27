import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3001/posts/addPost'; // URL to the Express server

  constructor(private http: HttpClient) {}

  createPost(postData: any): Observable<any> {
    console.log(postData);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, postData, { headers });
  }

  updatePost(postData: any, postId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/${postId}`, postData, { headers });
  }
}
