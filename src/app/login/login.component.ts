import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private authService: AuthService, private router: Router, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  onClickSubmit(data: any) {
    if (this.formData.invalid) {
      return;
    }

    this.formData.patchValue({
      userName: data.userName,
      password: data.password,
    });
    console.log(this.formData.get('userName'));

    console.log("Login page user name: " + data.userName);
    console.log("Login page password: " + data.password);

    const userName = this.formData.get('userName')!.value ?? '';
    const password = this.formData.get('password')!.value ?? '';

    const logged = this.authService.login(userName, password);
    if (logged) {
      this.router.navigate(['/']);
    }
  }

}
