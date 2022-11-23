import 'reflect-metadata'

export const MODEL_IDENTITY_META_KEY = 'IDENTITY_META_KEY'
export const MODEL_LABEL_META_KEY = 'LABEL_META_KEY'
export const MODEL_SEARCH_META_KEY = 'SEARCH_META_KEY'

export class BaseModel {
    getIdentity() {
        const key = Reflect.getMetadata(MODEL_IDENTITY_META_KEY, this.constructor, MODEL_IDENTITY_META_KEY)
        return key ? (this as any)[key] : 0
    }

    setIdentity(value: any) {
        const key: string = Reflect.getMetadata(MODEL_IDENTITY_META_KEY, this.constructor, MODEL_IDENTITY_META_KEY)
        ;(this as any)[key] = value
    }

    getLabel() {
        const key = Reflect.getMetadata(MODEL_LABEL_META_KEY, this.constructor, MODEL_LABEL_META_KEY)
        return key ? (this as any)[key] : 0
    }

    setLabel(value: any) {
        const key: string = Reflect.getMetadata(MODEL_LABEL_META_KEY, this.constructor, MODEL_LABEL_META_KEY)
        ;(this as any)[key] = value
    }
}
