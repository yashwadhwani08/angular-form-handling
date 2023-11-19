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
  // a new JS object not dirwectly related to form
  user = {
    // the property names can be having the different names than form-controls
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // using the form object to set the value of a field.
    // to the setValue method, you need to pass the JS object 'exactly representing our form

    // this approach has downside: if we already have something entered in the form in the rest of the inputs, this approach would override all other content. Hence not necessarily, the best approach. But, this can be helpful when we to set the values of all controls in one go with one convenient command (setValue).

    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    // better approach to access the form
    // use form method on the ngForm object, on it we have patchValue method. A JS object has to be passed, here we can override specific controls, hence since we needed to change username which is inside userData, hence the object key starts as userData and username passed (not email, neither any other form-control). Note: patchValue only available on the form wrapped by ng-form itself. (setValue is available on the form wrapped by ng-form too).

    //setValue to set your whole form
    //patchValue: to set as many controls of your liking of your form (to set parts of the form)
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
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
    this.submitted = true;
    // using the value property and on it pass the control-group (if any) and the on it, the 'name' of the form control whose value you want.
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;


    //Resetting form on submission
    this.signupForm.reset();
    // We can pass the same object as in setValue() to reset() which will then reset the form to specific values

    // This doesn't only empty the inputs (which could be done by setValue() too) it will also reset the state, like the valid detached and so on these properties.

  }
}
