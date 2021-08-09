import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';


export interface User {
  name: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public title = {
    sesion: "Iniciar Sesión",
    forget: "Recuperar Contraseña",
    facebook: "Conectate con Facebook",
    google: "Conectate con Google",
    email: "Ingrese un email válido",
    password: "Ingrese una contaseña válida"
  }
  
  constructor(private router: Router, public loginServices: LoginService) { }
  
  ngOnInit(): void { }
    loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  login() {
    if (this.loginForm.valid) {
      this.loginServices.login(this.loginForm.value).subscribe(result=>{
        console.log(result);
        this.router.navigate(['home']);
        this.alertSuccess();
      }, (error)=>{
        this.alertError();
        this.loginForm.reset()
      })
    } else {
      this.alertError();
      this.loginForm.reset()
    }
  }
  /////////////////Sweet Alert////////////////
  alertSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Bienvenido'
    })
  }
  alertError() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: 'Usuario o Contraseña Incorrecta'
    })
  }
}

