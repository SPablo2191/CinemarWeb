import { FilterCriterion } from './filter-criterion.class'
import { SortCriterion } from './sort-criterion.class'

export class QueryCriteria {
    sorts: SortCriterion[] = []
    filters: FilterCriterion[] = []
    search?: string
}
