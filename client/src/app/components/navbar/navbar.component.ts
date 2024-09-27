import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../Global-variable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [GlobalVariable],
})
export class NavbarComponent implements OnInit {
  constructor(public global: GlobalVariable, private router: Router) {}

  getSessionData(key: string) {
    const sessionValue = sessionStorage.getItem(key);
    console.log(sessionValue);
    return sessionValue;
  }

  logout() {
    sessionStorage.removeItem('UID');
    this.flag = true;
  }

  UID: string = this.getSessionData('UID');
  flag: boolean = true;
  ngOnInit(): void {
    if (this.UID != null) {
      this.flag = false;
    }
  }

  home() {
    this.router.navigateByUrl('/home');
  }

  posts() {
    this.router.navigateByUrl('/posts');
  }

  contact() {
    this.router.navigateByUrl('/contact');
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
  login() {
    this.router.navigateByUrl('/login');
  }
}
