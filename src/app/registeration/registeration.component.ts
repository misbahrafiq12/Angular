import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
 constructor(private router:Router){}
  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])

  registeration = new FormGroup({
    email: this.email,
    password: this.password 
  })
  signup(){
    console.log(this.registeration.value); 
    this.router.navigate(['/login'])
  }
}
