import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-pass',
  templateUrl: './admin-pass.component.html',
  styleUrls: ['./admin-pass.component.scss']
})
export class AdminPassComponent implements OnInit {

  errorStatus: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accept(passForm: NgForm){
    if(passForm.value.passCode == "nammaschoolradio"){
      this.errorStatus = false;
      this.router.navigate(['../admin']);
    } else {
      this.errorStatus = true;
    }
  }

  setErrorStatus(){
    this.errorStatus = false;
  }

}

