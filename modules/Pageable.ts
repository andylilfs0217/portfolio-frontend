export class Page<T> {
  content?: Array<T>
  pageable?: Pageable
  last?: boolean
  totalElements?: number
  totalPages?: number
  sort?: Sort
  first?: boolean
  numberOfElements?: number
  size?: number
  empty?: boolean
}

export type Sort = {
  sorted?: boolean
  unsorted?: boolean
  empty?: boolean
}

export type Pageable = {
  sort?: Sort
  offset?: number
  pageNumber?: number
  pageSize?: number
  paged?: boolean
  unpaged?: boolean
}
