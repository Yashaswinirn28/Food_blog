import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [HttpClientModule, FormsModule],
  styleUrls: ['./signup.component.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    // this.fetchData();
  }

  public fetchData() {
    this.http.get('http://localhost:3000/test').subscribe((res) => {
      console.log(res);
    });
  }

  public signup(formData: any) {
    const data = {
      email: formData.email,
      password: formData.password,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(data);

    this.http
      .post('http://localhost:3001/users/signup', data, { headers })
      .subscribe((res) => {
        console.log('Signup response:', res);
        this.router.navigate(['/home'])
      });
  }
}
