import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GlobalVariable } from '../../../Global-variable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss'],
  providers: [GlobalVariable],
})
export class PostdetailsComponent implements OnInit {
  public id: number;
  public postedById: number;
  public image: string;
  public title: string;
  public subtitle: string;
  public postedName: string;
  public bodyPost: string;
  public postDetails: any;
  public rating: number;
  public starRating: number[];
  public userLogged: boolean = false;
  star = faStar;
  private PID: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.getUrlId();
  }

  getUrlId() {
    this.route.queryParams.subscribe((params) => {
      this.PID = params.id;
    });
    this.getPostById();
  }
  postData: any[] = [];
  getPostById() {
    console.log(this.PID);
    const params = new HttpParams().set('PID', this.PID);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .get(`http://localhost:3001/posts/getPost`, {
        headers,
        params,
      })
      .subscribe({
        next: (res) => {
          this.postData = res as any[];
          console.log(this.postData);
        },
        error: (err) => {
          console.error('Error retrieving history:', err);
        },
      });
  }
}
