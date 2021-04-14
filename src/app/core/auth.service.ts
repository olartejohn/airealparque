import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(public firebaseAuth: AngularFireAuth) { 
    this.user$= this.firebaseAuth.user;

  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.firebaseAuth.signInWithPopup(provider);
  }
}
