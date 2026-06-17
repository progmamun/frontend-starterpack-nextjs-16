export interface IMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface IApiResponse {
  success: boolean
  message: string
  data?: any
  meta?: IMeta
}

export interface IApiError {
  success: boolean
  message: string
  error?: any
}
