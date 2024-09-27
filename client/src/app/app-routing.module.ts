import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostdetailsComponent } from './components/posts/postdetails/postdetails.component'
import { FormpostComponent } from './components/posts/formpost/formpost.component'
import { SignUpPage } from './components/signUp/signup.component';
import { LoginPage } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'postdetails',
    component: PostdetailsComponent
  },
  {
    path: 'postform',
    component: FormpostComponent
  },
  {
    path: 'signup',
    component: SignUpPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
