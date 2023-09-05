import { Component } from '@angular/core';
import { GoogleAuthProvider} from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(public auth: AngularFireAuth) {
    this.auth.user.subscribe(t=> 
      console.info(t)
      )
  }
  login() {
    this.auth.signInWithPopup(new GoogleAuthProvider());

  }
  logout() {
    this.auth.signOut();
  }

}
