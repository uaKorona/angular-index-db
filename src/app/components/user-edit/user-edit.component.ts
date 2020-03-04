import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component( {
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
} )
export class UserEditComponent implements OnInit {

    @Input() user: User;
    @Input() userId: string;
    userEditForm: FormGroup;

    constructor( private fb: FormBuilder ) {
    }

    ngOnInit() {
      this.userEditForm = this.getForm(this.fb, this.user);
    }

    private getForm(fb: FormBuilder, user: User): FormGroup {
      return fb.group({
        name: [user.name],
        email: [user.email],
      });
    }

}
