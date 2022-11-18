import { FormGroup } from "@angular/forms";

export class abstractForm{
    formGroup! : FormGroup

    createForm() : void{}

    submit(){
        console.log(this.formGroup);
        
    }
}