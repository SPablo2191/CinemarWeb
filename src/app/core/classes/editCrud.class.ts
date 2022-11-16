import { FormGroup } from "@angular/forms";

export class editCrud{
    formGroup! : FormGroup

    createForm() : void{}

    submit(){
        console.log(this.formGroup);
        
    }
}