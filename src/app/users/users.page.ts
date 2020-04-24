import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users:User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService:UsersService,
    private router: Router
    ) {}

      
  ngOnInit() {
    // this.getUsers();
    this.activatedRoute.params.subscribe(params=>{
      this.getUsers();
    });
  }

  public getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response:any) => {
        // console.log = (response);
        this.users = response.users;
      }
    );
  }

}