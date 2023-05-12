import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import * as acciones from '../../libs/state/actions/index'
import * as modelos from '../../libs/models/index'
import {Store} from "@ngrx/store";
import {AppState} from "../../libs/state/AppState";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!:FormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store<AppState>
    ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public submitForm(): void {
    if (this.validateForm.valid) {
      this.store.dispatch(acciones.login(
        {
          username:this.validateForm.value.userName,
          password: this.validateForm.value.password
        }
        ))
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }
}
