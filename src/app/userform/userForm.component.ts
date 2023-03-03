import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../interfaces/user";
import {Location} from "@angular/common";
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  customerId!:number;
  user!:User;
  users!:User[];
  valid:boolean=true;
  action!:MyTableActionsEnum;

  constructor(private route: ActivatedRoute, private router:Router, private userService: UsersService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.customerId = Number.parseInt(params['customerId']);
    })
    if(this.action===MyTableActionsEnum.EDIT){
      this.userService.getUserById(this.customerId).subscribe(user => this.user = user);
    } else {
      this.user= {
        id:null,
        name:'',
        surname:'',
        isAdmin:false,
        username:'',
        password:''
      }
    }
  }

  post(user: User) {
    if(user.username.length>=8 && user.password.length>=8 && user.name!='' && user.surname!='' && Array.from(user.name)[0]!=' '
      && Array.from(user.surname)[0]!=' ' && !user.username.includes(' ') && !user.password.includes(' ')){
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
