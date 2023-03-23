import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../interfaces/user";
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  userId!: number;
  user!: User;
  username!: string;
  valid: boolean = true;
  action!: MyTableActionsEnum;
  showPasswordInput!: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.userId = parseInt(params['userId']);
    })
    if (this.action === MyTableActionsEnum.NEW_ROW) {
      this.showPasswordInput = true;
    }
    if (this.action === MyTableActionsEnum.EDIT) {
      this.showPasswordInput = false;
      this.userService.getUserById(this.userId).subscribe(user => {
        this.user = user;
        this.username = user.username;
      });
    } else {
      this.user = {
        id: null,
        name: '',
        surname: '',
        isAdmin: false,
        username: '',
        password: ''
      }
    }
  }

  post(editUser: User) {
    if (editUser.username.length >= 8 && editUser.name != '' && editUser.surname != '' && Array.from(editUser.name)[0] != ' '
      && Array.from(editUser.surname)[0] != ' ' && !editUser.username.includes(' ')) {
      this.userService.updateUser(editUser).subscribe(() => {
        this.valid = true;
        if (editUser.id === parseInt(localStorage.getItem('userId')!) && editUser.username != this.username) {
          alert('Dopo la modifica dell\'username è necessario effettuare di nuovo il login.');
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          localStorage.removeItem('admin');
          this.router.navigate(['login']);
        } else {
          if (localStorage.getItem('admin') === 'true') {
            this.router.navigate(['users'])
          } else {
            this.router.navigate(['reservation', localStorage.getItem('userId')])
          }
        }
      });
    } else {
      this.valid = false;
    }
  }

}
