import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";


export class crud{
    ref!: DynamicDialogRef;
    constructor(protected dialogService : DialogService){

    }
    getDialog(component : any, title : string, data = {}){
        this.ref = this.dialogService.open(component, {
            header: `${title}`,
            width: '70%',
            data : data
          });
    }
    get() : void{}
    add() : void{}
    edit(item : any) {}
    delete(item : any) {}
}