import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  isLoading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm){
    this.isLoading = true;
    if(form.valid){
      this.authService.logIn(form.value).subscribe(resData => {
        console.log("Prijava uspesna");
        console.log(resData);
        this.isLoading = false;
        this.router.navigateByUrl('/performances');
      });

    }

  }

}
