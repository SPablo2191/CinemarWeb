import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";


export class crud{
    ref!: DynamicDialogRef;
    constructor(protected dialogService : DialogService){

    }
    getDialog(component : any, title : string, data = {}){
        this.ref = this.dialogService.open(component, {
            header: `${title}`,
            width: '80%',
            data : data
          });
    }
    get() : void{}
    add(){}
    edit(item : any) {}
    delete(item : any) {}
}