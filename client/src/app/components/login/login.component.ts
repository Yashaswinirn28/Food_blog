import { Component } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginPage {
  constructor(private http: HttpClient, private router: Router) {}
  public errorMessage: string = '';

  setSessionData(value: string) {
    sessionStorage.setItem('UID', value);
  }

  getSessionData(key: string) {
    const sessionValue = sessionStorage.getItem(key);
    console.log(sessionValue);
  }

  public login(formData: any) {
    console.log(formData.email);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = {
      email: formData.email,
      password: formData.password,
    };
    console.log(data);

    this.http
      .post('http://localhost:3001/users/login', data, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res.length > 0) {
          console.log('success! UID='+res[0].UID);
          this.setSessionData(res[0].UID)
          this.router.navigate(['/postform']);
        } else {
          console.log('failed!');
        }
      });
  }

  private handleError(error: any) {
    if (error.status === 401) {
      this.errorMessage = 'Invalid email or password.';
      console.log('failed to login');
    } else if (error.status === 500) {
      this.errorMessage = 'Server error. Please try again later.';
      console.log('failed to login');
    } else {
      this.errorMessage = 'An unknown error occurred. Please try again.';
      console.log('failed to login');
    }
  }
}
