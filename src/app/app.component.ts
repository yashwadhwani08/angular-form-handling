import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submiited!');
  //   console.log(form);
  //   // The vaue in this form object contains the the names we set and user-input values for those inputs as key-value pairs.
  // }

  // using the ViewChild()
  // In this approach, we don't reauire to pass the local reference to the method.
  onSubmit() {
    console.log(this.signupForm);
  }
}
