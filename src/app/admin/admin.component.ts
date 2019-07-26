import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  categories = [
    "Vedagosha",
    "Mankutimmana Kagga",
    "Saadakara Kathegalu",
    "Makkala Hakkugalu",
    "Makkala Aarogya Mahiti",
    "Radio Cinema",
    "Mahila Sabaleekarana",
    "Namma Parisara",
    "Radio Drama",
    "Todays Special",
    "Children International News",
    "Jalada Jaadu",
    "Ooru Keari",
    "Quiz",
    "Eddalo Manja",
    "Naati Ideas",
    "GHPS Duragada Halli",
    "Siddaganga School",
    "Sri Basaveshwara",
    "Makkale Namma Sangeetha",
    "Speech of Achievers",
    "Spell Bee",
    "Ajji Kathegalu",
    "Soft Music",
    "Hongirana",
    "News",
    "Good deeds",
    "Information"
  ]

  successText = "";
  errorText = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  accept(form: NgForm) {
    var filtered = {
      audioname: form.value.aname,
      filename: form.value.fname,
      category: form.value.category
    }
    this.http.post("http://localhost:1025/main/create", filtered).subscribe((responseData) => {
      if(responseData["status"] == "success") {
        this.errorText = "";
        this.successText = "Audio successfully added";
        console.log(responseData["data"]);
      } else if(responseData["status"] == "fail") {
        this.errorText = "Audio exists already";
        this.successText = "";
      } else {
        this.errorText = "Server Error";
        this.successText = "";
      }
    })
  }
}
