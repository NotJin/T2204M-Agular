import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './userlogin.component.html'
})

export class UserloginComponent implements OnInit{

  exform: FormGroup;

  ngOnInit() {
    this.exform = new  FormGroup({
      'name': new FormGroup(null, )
    })
  }
}
