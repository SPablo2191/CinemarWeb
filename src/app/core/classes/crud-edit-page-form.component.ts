/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Location as LocationUrl } from '@angular/common'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { plainToClass } from 'class-transformer'
import { NgxSpinnerService } from 'ngx-spinner'
import { LazyLoadEvent, MessageService } from 'primeng/api'
import { BaseApi } from './base.api'
import { validateAllFormFields } from '../utils/validator.util'
import { BaseModel } from './base.model'
import { QueryCriteria } from './query-criteria.class'
import { SortCriterion } from './sort-criterion.class'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
    template: '',
})
export class CrudEditPageFormComponent<TModel extends BaseModel> implements OnInit, OnDestroy {
    id: number
    record: BaseModel
    recordTyped: TModel
    onSave: (record: BaseModel) => void
    @ViewChild('responseDialog') responseDialog

    formGroup: FormGroup
    submitted: boolean = false

    modelClass: typeof BaseModel
    spinner: string = 'page'

    section = 'object'

    constructor(
        protected route: ActivatedRoute,
        protected locationUrl: LocationUrl,
        protected messageService: MessageService,
        protected spinnerService: NgxSpinnerService,
        protected api: BaseApi<TModel>,
        protected fb: FormBuilder
    ) {
        this.createForm()
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.processQuery(params)
            this.open()
            this.listen()
        })
    }

    ngOnDestroy() {}
    processQuery(params: any) {}
    createForm() {}
    fetchs() {}
    loaded() {}
    listen() {}
    cleanup() {}

    open() {
        //this.formGroup.reset()
        this.cleanup()
        this.record = null
        this.fetchs()
        this.reload()
    }

    reload() {
        if (this.id) {
            this.spinnerService.show(this.spinner)

            this.api
                .get(this.id)
                .pipe(untilDestroyed(this))
                .subscribe((record: BaseModel) => {
                    this.record = record
                    this.recordTyped = record as TModel
                    this.formGroup.patchValue(this.record)
                    this.spinnerService.hide(this.spinner)

                    this.loaded()
                })
        } else {
            this.formGroup.patchValue(new BaseModel())
        }
    }

    back() {
        this.locationUrl.back()
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
            this.api
                .update(record)
                .pipe(untilDestroyed(this))
                .subscribe(
                    (records: BaseModel) => {
                        this.addMessageService('custom', 'Changes saved', 'success', 'Changes made sucessfully saved')
                        if (this.onSave) {
                            this.onSave(records)
                        }
                        this.back()
                    },
                    (error) => {
                        const errorText = typeof error?.error === 'string' ? error.error : 'Server Error'
                        this.addMessageService('custom', 'Error', 'error', errorText)
                    }
                )
        } else {
            this.api
                .insert(record)
                .pipe(untilDestroyed(this))
                .subscribe(
                    (records: BaseModel) => {
                        const summary = `New ${this.section} created`
                        const detail = `New ${this.section} created sucessfully`
                        this.addMessageService('custom', summary, 'success', detail)
                        if (this.onSave) {
                            this.onSave(records)
                        }
                        this.back()
                    },
                    (error) => {
                        const errorText = typeof error?.error === 'string' ? error.error : 'Server Error'
                        this.addMessageService('custom', 'Error', 'error', errorText)
                    }
                )
        }
    }

    onClose() {
        this.submitted = false
    }

    sortByQueryCriteria(propertyName: string) {
        const queryCriteriaOptions = new QueryCriteria()
        const sort = { propertyName: propertyName, descending: false } as SortCriterion
        queryCriteriaOptions.sorts.push(sort)
        return btoa(JSON.stringify(queryCriteriaOptions))
    }

    onSubmit() {
        if (this.validate()) {
            const recordModified = plainToClass(BaseModel, this.parse(this.formGroup.getRawValue()))
            this.save(recordModified)
        } else {
            this.submitted = true
            validateAllFormFields(this.formGroup)
            return
        }
    }

    protected getQueryCriteria(event: LazyLoadEvent) {
        const queryCriteria = new QueryCriteria()

        if (event && event.globalFilter) {
            queryCriteria.search = event.globalFilter
        }

        if (event && event.sortField) {
            queryCriteria.sorts.push({ propertyName: event.sortField, descending: event.sortOrder === 1 ? false : true } as SortCriterion)
        }

        return queryCriteria
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
