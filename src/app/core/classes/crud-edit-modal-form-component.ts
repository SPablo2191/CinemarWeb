/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { plainToClass } from 'class-transformer'
import { NgxSpinnerService } from 'ngx-spinner'
import { MessageService } from 'primeng/api'
import { BaseApi } from './base.api'
import { BaseModel } from './base.model'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryCriteria } from './query-criteria.class'
import { SortCriterion } from './sort-criterion.class'

@UntilDestroy()
@Component({
    template: '',
})
export class CrudEditModalFormComponent<TModel extends BaseModel> implements OnInit, OnDestroy {
    @ViewChild('uiCrudDialog') uiCrudDialog

    record: BaseModel
    recordTyped: TModel
    onSave: (record: BaseModel) => void
    formGroup: FormGroup
    submitted: boolean = false
    modelClass: typeof BaseModel
    spinner: string = 'modal'
    section: string = 'object'

    constructor(
        protected messageService: MessageService,
        protected spinnerService: NgxSpinnerService,
        protected api: BaseApi<TModel>,
        protected fb: FormBuilder
    ) {
        this.createForm()
    }

    ngOnInit() {
        this.listen()
    }

    ngOnDestroy() {}
    createForm() {}
    fetchs() {}
    loaded() {}
    listen() {}
    cleanup() {}
    open(record?: BaseModel) {
        this.formGroup.reset()
        this.cleanup()
        this.record = Object.assign(new this.modelClass(), record)
        this.fetchs()
        this.reload()
        this.uiCrudDialog.open()
    }

    reload() {
        if (this.record?.getIdentity()) {
            this.spinnerService.show(this.spinner)
            this.api
                .get(this.record.getIdentity())
                .pipe(untilDestroyed(this))
                .subscribe((record: BaseModel) => {
                    this.record = record
                    this.recordTyped = record as TModel
                    this.formGroup.patchValue(this.record)
                    this.spinnerService.hide(this.spinner)
                    this.loaded()
                })
        } else {
            this.record = null
            this.recordTyped = null
            this.formGroup.patchValue(new BaseModel())
            this.formGroup.get('enabled')?.patchValue(true)
        }
    }

    close() {
        this.uiCrudDialog.close()
    }

    parse(record: any) {
        record.enabled = record.enabled === null ? false : record.enabled
        return record
    }

    validate() {
        return this.formGroup.valid
    }

    save(record: BaseModel) {
        if (this.record?.getIdentity()) {
            this.spinnerService.show(this.spinner)
            this.api
                .update(record)
                .pipe(untilDestroyed(this))
                .subscribe(
                    (records: BaseModel) => {
                        this.addMessageService('custom', 'Changes saved', 'success', 'Changes made sucessfully saved')
                        this.onSave(records)
                        this.spinnerService.hide(this.spinner)
                        this.close()
                    },
                    (error) => {
                        const errorText = typeof error?.error === 'string' ? error.error : 'Server Error'
                        this.addMessageService('custom', 'Error', 'error', errorText)
                        this.spinnerService.hide(this.spinner)
                    }
                )
        } else {
            this.spinnerService.show(this.spinner)
            this.api
                .insert(record)
                .pipe(untilDestroyed(this))
                .subscribe(
                    (records: BaseModel) => {
                        const summary = `New ${this.section} created`
                        const detail = `New ${this.section} created sucessfully`
                        this.addMessageService('custom', summary, 'success', detail)
                        this.onSave(records)
                        this.spinnerService.hide(this.spinner)
                        this.close()
                    },
                    (error) => {
                        const errorText = typeof error?.error === 'string' ? error.error : 'Server Error'
                        this.addMessageService('custom', 'Error', 'error', errorText)
                        this.spinnerService.hide(this.spinner)
                    }
                )
        }
    }

    onClose() {
        this.submitted = false
    }

    onSubmit() {
        Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.controls[key].markAsDirty()
            this.formGroup.controls[key].markAsTouched()
        })

        this.submitted = true
        if (this.validate()) {
            const recordModified = plainToClass(BaseModel, this.parse(this.formGroup.getRawValue()))
            this.save(recordModified)
        }
    }
    sortByQueryCriteria(propertyName: string) {
        const queryCriteriaOptions = new QueryCriteria()
        const sort = { propertyName: propertyName, descending: false } as SortCriterion
        queryCriteriaOptions.sorts.push(sort)
        return btoa(JSON.stringify(queryCriteriaOptions))
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
