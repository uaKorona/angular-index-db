import { AngularFirestore, DocumentReference, DocumentChangeAction, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class FirebaseService {

    private usersCollection = 'coffeeUsers';

    constructor( private firestore: AngularFirestore ) {
        // this.createUser({name: 'Ivan', email: 'ivan@gmail.com'});
    }

    createUser( data: User ): Promise<DocumentReference> {
        return this.firestore
            .collection( this.usersCollection )
            .add( data )
            .catch(err => {
                console.log( err );
                return err;
            });
    }

    getUserList$(): Observable<QueryDocumentSnapshot<User>[]> {
        return this.firestore
            .collection<User>(this.usersCollection)
            .snapshotChanges()
            .pipe(map((docs: DocumentChangeAction<User>[]) => {
                return docs.map(doc => {
                    return doc.payload.doc;
                });
            }));
    }
}

export class User {
    name: string;
    email: string;
}
