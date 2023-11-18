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
  answer: string = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // using the form object to set the value of a field.
    // to the setValue method, you need to pass the JS object 'exactly representing our form

    // this approach has downside: if we already have something entered in the form in the rest of the inputs, this approach would override all other content. Hence not necessarily, the best approach. But, this can be helpful when we to set the values of all controls in one go with one convenient command (setValue).
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male',
    });
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
