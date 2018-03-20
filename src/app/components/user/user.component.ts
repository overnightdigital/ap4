import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;


  constructor(private dataService:DataService) {
    console.log('constructor ran ...');
   }

  ngOnInit() {
    console.log('ngOnInit ran ...');
    this.name = 'John Doe2';
    this.age = 30;
    this.address = {
      street:'50 Main st',
      city: 'Boston',
      state: 'MA'
    }

    this.hobies = ['write code', 'watch movies', 'listen to music'];
    this.hello = true;
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Brad';
    this.email = 'test@email';
    this.hobies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobies.length; i++) {
      if(this.hobies[i] === hobby){
        this.hobies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street:string,
    city:string,
    state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
