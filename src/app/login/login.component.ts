import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

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

    this.authService.login(userName, password)
      .subscribe((data: string) => {
        console.log("Is Login Success: " + data);

        if (data) this.router.navigate(['/']);
      });
  }

}
