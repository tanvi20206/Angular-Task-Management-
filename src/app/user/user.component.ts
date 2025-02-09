import { Component, computed, Input, signal ,input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//   id: string;
//   avatar : string;
//   name: string;
// }

// interface User{
//   id: string;
//   avatar : string;
//   name: string;
// }

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // selectedUser = DUMMY_USERS[randomIndex];
//2
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }



  // onSelectUser() {
  //   console.log('clicked');
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }



  /////////////signal////////////////


  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath= computed(()=>'assets/users/'+this.selectedUser().avatar)
  // onSelectUser() {
  //   console.log('clicked');
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  //   
  // }

  // @Input({required:true}) id !: string;
  //  @Input({required:true}) avatar !: string ;
  //  @Input({required:true}) name !: string ;
  // //  @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();

  // get imagePath(){
  //   return 'assets/users/'+this.avatar
  // }
  // onSelectedUser(){
  //       this.select.emit(this.id);
  // }


  
  // select = output<string>();
  // get imagePath(){
  //   return 'assets/users/'+this.avatar
  // }
  // onSelectedUser(){
  //       this.select.emit(this.id);
  // }




  /// Input using SIGNALS  ABOVE ALTERNATIVE WAY ///


//  avatar=input.required<string>();
//  name =input.required<string>();

//  imagePath=computed(()=>{
//   return 'assets/users/'+this.avatar();
//  })



//  onSelectedUser(){
      

//  }

///////////////// making all input in one///////////////


  // @Input({required:true}) id !: string;
  //  @Input({required:true}) avatar !: string ;
  //  @Input({required:true}) name !: string ;
  //  @Output() select = new EventEmitter();

  // @Input() user !: {
    
  //  id: string;
  //  avatar: string;
  //  name: string;
  // };

  @Input() user !: User;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }
  onSelectedUser(){
        this.select.emit(this.user.id);
  }
@Input({required:true}) selected !: boolean;
}
