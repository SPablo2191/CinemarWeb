// /* eslint-disable @angular-eslint/no-empty-lifecycle-method */
// import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
// import { ActivatedRoute, Router } from '@angular/router'
// import { NgxSpinnerService } from 'ngx-spinner'
// import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api'
// import { Table } from 'primeng/table'
// import { Observable } from 'rxjs'
// import { BaseModel } from './base.model'
// import { BaseApi } from './base.api'
// import { FilterCriterion } from './filter-criterion.class'
// import { MultipleRecordsResponse } from './multiple-records-response.class'
// import { QueryCriteria } from './query-criteria.class'
// import { SortCriterion } from './sort-criterion.class'
// import 'reflect-metadata'
// import { tap } from 'rxjs/operators'



// @Component({
//     template: '',
// })
// export class CrudSingleTableComponent<TModel extends BaseModel> implements OnInit, OnDestroy {
//     // @ViewChild('editDialog') editDialog
//     // @ViewChild('deleteDialog') deleteDialog
//     // @ViewChild('filterDialog') filterDialog
//     // @ViewChild('searchBox') searchBox

//     records$!: Observable<MultipleRecordsResponse>
//     records: BaseModel[]
//     recordsCount!: number
//     recordsStart: number = 0
//     recordsLength: number = 15
//     rows: number = 10
//     selected: BaseModel[] = []
//     currentPageReportText = 'Showing {first} to {last} of {totalRecords} records'
//     lastRefresh!: LazyLoadEvent
//     modalFilters!: FilterCriterion[]

//     modelClass!: typeof BaseModel
//     spinner: string = 'table'

//     constructor(
//         protected router: Router,
//         protected route: ActivatedRoute,
//         protected messageService: MessageService,
//         protected confirmationService: ConfirmationService,
//         protected api: BaseApi<TModel>
//     ) {
//         this.records = Array.from<BaseModel>({ length: this.rows * 2 })
//     }

//     ngOnInit() {
//         this.init()
//         this.listenSocket()

//         this.route.paramMap.subscribe((params) => {
//             this.processQuery(params)
//             this.fetchs()
//         })
//     }

//     ngOnDestroy() {}

//     init() {}
//     fetchs() {}
//     loaded() {}
//     listenSocket() {}
//     processQuery(params: any) {}

//     refresh(event: LazyLoadEvent) {
//         if (!event) {
//             event = this.lastRefresh
//         }

//         if (event.rows === this.rows) event.rows *= 2

//         this.lastRefresh = event

//         const query = this.getQueryCriteria(event)


//         this.records$ = this.api.list(event ? event.first : this.recordsStart, event ? event.rows : this.recordsLength, btoa(JSON.stringify(query))).pipe(
//             tap(() => {
//                 this.records.length = 0
//                 if(event.first != undefined && event.rows != undefined ){
//                     this.records.length = event.first + event.rows;
//                 }
//             }),
//             untilDestroyed(this)
//         )

//         this.records$.subscribe((records) => {
//             Array.prototype.splice.apply(this.records, [...[event.first, event.rows], ...records.data])
//             this.records = [...this.records]

//             this.loaded()

//         })
//     }
//     sortByQueryCriteria(propertyName: string) {
//         const queryCriteriaOptions = new QueryCriteria()
//         const sort = { propertyName: propertyName, descending: false } as SortCriterion
//         queryCriteriaOptions.sorts.push(sort)
//         return btoa(JSON.stringify(queryCriteriaOptions))
//     }
//     edit(record?: BaseModel) {
//         this.editDialog.onSave = () => {
//             this.refresh(null)
//         }
//         this.editDialog.open(record)
//     }

//     filter() {
//         this.filterDialog.onSave = (modalFilters) => {
//             this.modalFilters = modalFilters
//             this.refresh(null)
//         }
//         this.filterDialog.open()
//     }

//     delete(record: BaseModel) {
//         this.deleteDialog.load(record)
//         this.confirmationService.confirm({
//             accept: () => {
//                 this.api
//                     .delete(record.getIdentity())
//                     .pipe(untilDestroyed(this))
//                     .subscribe(() => {
//                         this.refresh(null)
//                         const severity = 'Deleted Successfully'
//                         const detail = record?.getLabel() ? record.getLabel() + ' has been deleted succesfully' : 'Has been deleted succesfully'
//                         this.addMessageService('custom', severity, 'delete', detail)
//                     })
//             },
//         })
//     }

//     deleteMultiple() {
//         this.deleteDialog.loadMultiple(this.selected.length)
//         this.confirmationService.confirm({
//             accept: () => {
//                 const ids = this.selected.map((r) => r.getIdentity())

//                 this.api
//                     .deleteMultiple(ids)
//                     .pipe(untilDestroyed(this))
//                     .subscribe(() => {
//                         this.refresh(null)
//                         this.addMessageService('custom', 'Deleted Successfully', 'delete', 'Deleted')
//                         this.selected = []
//                     })
//             },
//         })
//     }

//     clearSearch(table: Table) {
//         table.clear()
//     }

//     protected getQueryCriteria(event: LazyLoadEvent) {
//         const queryCriteria = new QueryCriteria()

//         if (event && event.globalFilter) {
//             queryCriteria.search = event.globalFilter
//             let searchKey = this.getSearchKey()
//             if (searchKey) {
//                 const search = new FilterCriterion()
//                 search.propertyName = searchKey
//                 search.type = FilterTypesEnum.Like
//                 search.value = event.globalFilter
//                 queryCriteria.filters.push(search)
//             }
//         }

//         // Sorts the records based on the Identity property of the model
//         const sortId = new SortCriterion()
//         sortId.propertyName = this.getIdentityKey()
//         sortId.descending = false
//         queryCriteria.sorts.push(sortId)

//         if (event && event.sortField) {
//             queryCriteria.sorts.push({ propertyName: event.sortField, descending: event.sortOrder === 1 ? false : true } as SortCriterion)
//         }

//         if (event && event.filters) {
//             for (const key in event.filters) {
//                 if (key === 'global') {
//                     continue
//                 }
//                 queryCriteria.filters.push({ propertyName: key, type: event.filters[key].matchMode, value: event.filters[key].value } as FilterCriterion)
//             }
//         }

//         if (this.modalFilters) queryCriteria.filters.push(...this.modalFilters)

//         return queryCriteria
//     }

//     protected getIdentityKey() {
//         return Reflect.getMetadata('IDENTITY_META_KEY', this.modelClass, 'IDENTITY_META_KEY')
//     }

//     protected getSearchKey() {
//         return Reflect.getMetadata('SEARCH_META_KEY', this.modelClass, 'SEARCH_META_KEY')
//     }

//     rowTrackBy(index, item) {
//         return item?.getIdentity()
//     }

//     addMessageService(severity: string, summary: string, key: string, detail: string, data?: string) {
//         this.messageService.add({
//             severity: severity,
//             summary: summary,
//             key: key,
//             detail: detail,
//             data: data,
//             life: 3000,
//         })
//     }

//     counter(i: number) {
//         return new Array(i)
//     }
// }
