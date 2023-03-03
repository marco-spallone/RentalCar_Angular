import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../user";
import {Location} from "@angular/common";
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  id!:number;
  user!:User;
  users!:User[];
  valid:boolean=true;
  action!:MyTableActionsEnum;

  constructor(private route: ActivatedRoute, private router:Router, private userService: UsersService, private location:Location) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.id = Number.parseInt(params['id']);
    })
    if(this.action===MyTableActionsEnum.EDIT){
      this.userService.getUserById(this.id).subscribe(user => this.user = user);
    } else {
      this.user= {
        id:this.id,
        name:'',
        surname:'',
        isAdmin:false,
        username:'',
        password:''
      }
    }
  }

  post(user: User) {
    if(user.username.length>=8 && user.password.length>=8 && user.name!='' && user.surname!=''){
      if(this.action===MyTableActionsEnum.EDIT){
        this.userService.updateUser(user).subscribe(() => this.router.navigate(['users']));
      } else if(this.action===MyTableActionsEnum.NEW_ROW) {
        this.userService.addUser(user).subscribe(() => this.router.navigate(['users']));
      }
      this.valid=true;
    } else {
      this.valid=false;
    }
  }

}
