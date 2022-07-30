import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './userlogin.component.html'
})

export class UserloginComponent implements OnInit{

  myGroup!: FormGroup;

  ngOnInit() {
    this.myGroup = new  FormGroup({
      'name': new FormGroup(null, Validators.required)
    })
  }
}
