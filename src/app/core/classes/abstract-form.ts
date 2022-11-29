import { FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";

export class abstractForm{
    formGroup! : FormGroup
    constructor(private messageService : MessageService) {
    }

    createForm() : void{}

    submit(){
        console.log(this.formGroup);  
    }
    addMessageService(severity: string, summary: string, key: string, detail: string, data?: string) {
        this.messageService.add({
            severity: severity,
            summary: summary,
            key: key,
            detail: detail,
            data: data,
            life: 3000,
        })
    }
}