import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import { AuthService } from './../auth.service';
import { AppState } from './../../reducers/index';
import { AuthActions } from './../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AppState>) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
   this.auth.login(this.form.value.email, this.form.value.password).pipe(
     tap((res)=>{
       console.log(res);
       this.store.dispatch(AuthActions.login({user:res}));
       this.router.navigateByUrl('/courses');
     })
   ).subscribe(
     noop,
     ()=>alert('Login Failed')
   )
  }

}

