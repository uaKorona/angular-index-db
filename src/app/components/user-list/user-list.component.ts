import { Component, OnInit } from '@angular/core';
import { FirebaseService, User } from "../../services/firebase.service";
import { Observable } from "rxjs";
import { QueryDocumentSnapshot } from "@angular/fire/firestore";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userDocs$: Observable<QueryDocumentSnapshot<User>[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.userDocs$ = this.firebaseService.getUserList$()
  }

}
