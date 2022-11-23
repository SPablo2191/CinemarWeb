/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UntilDestroy } from '@ngneat/until-destroy'
import { NgxSpinnerService } from 'ngx-spinner'
import { MessageService } from 'primeng/api'
import { BaseModel } from './base.model'
import { FilterCriterion } from './filter-criterion.class'
import { QueryCriteria } from './query-criteria.class'
import { SortCriterion } from './sort-criterion.class'

@UntilDestroy()
@Component({
    template: '',
})
export class CrudFilterModalFormComponent<TModel extends BaseModel> implements OnInit, OnDestroy {
    @ViewChild('uiCrudDialog') uiCrudDialog

    record: BaseModel
    recordTyped: TModel
    onSave: (filtersConfig?: FilterCriterion[]) => void
    formGroup: FormGroup
    submitted: boolean = false
    modelClass: typeof BaseModel
    spinner: string = 'filterModal'
    filtersConfig: { propertyName: string; type: string; value?: string }[]
    filters: FilterCriterion[] = []

    constructor(protected messageService: MessageService, protected spinnerService: NgxSpinnerService, protected fb: FormBuilder) {
        this.createForm()
        this.configFilters()
    }

    ngOnInit() {
        this.fetchs()
        this.listen()
    }

    ngOnDestroy() {}
    createForm() {}
    configFilters() {}
    fetchs() {}
    loaded() {}
    listen() {}
    cleanup() {}

    open() {
        this.cleanup()
        this.fetchs()
        this.reload()
        this.uiCrudDialog.open()
    }
    sortByQueryCriteria(propertyName: string) {
        const queryCriteriaOptions = new QueryCriteria()
        const sort = { propertyName: propertyName, descending: false } as SortCriterion
        queryCriteriaOptions.sorts.push(sort)
        return btoa(JSON.stringify(queryCriteriaOptions))
    }
    reload() {}

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

    save() {
        this.spinnerService.show(this.spinner)
        this.onSave(this.filters)
        this.spinnerService.hide(this.spinner)
        this.close()
    }

    onClose() {
        this.submitted = false
    }

    saveFilters(): void {
        this.filters = []
        this.filtersConfig.forEach((filter) => {
            // The filter will have value in the configuration when the value comes from a control with a name different than the property name
            if (this.formGroup.get(filter.propertyName)?.value === null || (filter.value && !this.formGroup.get(filter.value)?.value)) return
            this.filters.push({
                ...filter,
                value: filter.value ? this.formGroup.get(filter.value).value : this.formGroup.get(filter.propertyName).value,
            } as FilterCriterion)
        })
    }

    onSubmit() {
        Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.controls[key].markAsDirty()
        })
        this.submitted = true
        if (this.validate()) {
            this.saveFilters()
            this.save()
        }
    }

    onClearFilters() {
        this.formGroup.reset()
        this.onSave(null)
    }
}
