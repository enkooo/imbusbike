import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export async function useIFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  const defaults: UseFetchOptions<T> = {
    baseURL,
    key: url,
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
