import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  answer:string = '';
  genders = ['male', 'female'];
  errors = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form.value.email)
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
      .subscribe((res)=>{console.log(res)},
        (err)=>{
          this.errors = err.error
        })
  }
}
