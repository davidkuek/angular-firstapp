import { Component } from '@angular/core';
import { HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public httpService : HttpService) { 
	this.httpService.getCoaches()
    .subscribe(
      data =>{
         console.log(data);
         this.coaches = data;
      },
      err =>console.log("error"),
      () => console.log('user')
      );
 }
  title = 'app';
  newcoach = {
  	name:'',
  	description:'',
  	image_url:''
  }

  coaches
  //  = [{
  // 	name: 'aaa',
  // 	description:'zzzz',
  // 	image_url:'http://www.google.com'
  // },
  // {
  // 	name: 'bbb',
  // 	description:'zzzz',
  // 	image_url:'http://www.google.com'
  // },
  // {
  // 	name: 'ccc',
  // 	description:'zzzz',
  // 	image_url:'http://www.google.com'
  // }];

  saveCoach(newcoach){
  	this.httpService.addCoach(newcoach)
  	.subscribe(data => {
  		console.log(data)


  	this.coaches.push(this.newcoach);
  	this.newcoach = {
  		name:'',
  		description:'',
  		image_url:''
  	}
  })
  }
  
  click(){
  	
  	this.coaches.push(this.newcoach);
  	this.newcoach = {
  		name:'',
  		description:'',
  		image_url:''
  	}
  	console.log("good");
  }
}
