import { BaseModel } from './base.model'

export class MultipleRecordsResponse {
    count: number
    start: number
    length: number

    data: BaseModel[]
}
