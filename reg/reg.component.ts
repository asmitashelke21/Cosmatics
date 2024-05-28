import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent  implements OnInit{
  reg:Register=new Register();
  ngOnInit(): void {
  }
  constructor(private regServ:RegisterServiceService,private router:Router)
  {

  } 
  submitdata()
  {
    this.regServ.newUser(this.reg).subscribe((data:Register)=>{
      if(data!=null)
        {
          alert('Registration Successful')
        }
    })
  }

}
