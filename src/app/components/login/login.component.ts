import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected form: FormGroup;
  protected isLogged: boolean = false;
  protected isLoginFail: boolean = false;
  protected loginUser!: Login;
  protected userName: string = '';
  protected password: string = '';
  protected roles: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private tokenServ: TokenService,
    private authServ: AuthService,
    private router: Router) {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    }

    )
  }

  ngOnInit(): void {
    if (this.tokenServ.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenServ.getAuthorities();
    }
    this.form.reset();
  }

  setValue() {
    this.form.setValue({
      userName:"",
      password:""
     });
  }

  ngOnChanges(){
    this.setValue();
    this.form.reset();
  }

  onLogin(): void {
    if (this.form.get('userName')?.value)
      this.userName = this.form.get('userName')?.value;

    if (this.form.get('password')?.value)
      this.password = this.form.get('password')?.value;

    this.loginUser = new Login(this.userName, this.password);
    this.authServ.logIn(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenServ.setToken(data.token);
        this.tokenServ.setUserName(data.userName);
        this.tokenServ.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.error(err.error.message);
      }
    );
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
