import { AngularFirestore, DocumentReference, DocumentChangeAction } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable( {
    providedIn: "root"
} )
export class FirebaseService {

    private usersCollection = 'coffeeUsers';

    constructor( private firestore: AngularFirestore ) {
        this.createUser({name: 'Ivan', email: 'ivan@gmail.com'});
    }

    createUser( data: User ): Promise<DocumentReference> {
        return this.firestore
            .collection( this.usersCollection )
            .add( data )
            .catch(err => {
                console.log( err );
                return err;
            })
    }

    getUserList$(): Observable<DocumentChangeAction<User>[]> {
        return this.firestore
            .collection<User>(this.usersCollection)
            .snapshotChanges();
    }
}

export class User {
    name: string;
    email: string;
}
