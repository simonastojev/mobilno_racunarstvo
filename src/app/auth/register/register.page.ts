import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private loadingCtl: LoadingController,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7)])
    });
  }

  onRegister() {
    this.loadingCtl
    .create({message: "Registracija..."})
    .then((loadingEl) => {
        loadingEl.present();
        this.authService.register(this.registerForm.value).subscribe(resData => {
          console.log("Registracija uspela");
          console.log(resData);
        });
        loadingEl.dismiss();
        this.router.navigateByUrl('/performances');
    });

  }

}
