import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
}
