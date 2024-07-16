import till from '@/utils/till'
import { create } from 'zustand'

type State = {
    loading: boolean
}
type Action = {
    setLoading: (loading?: boolean) => void
}
const useLoading = create<State & Action>((set, get) => ({
    loading: false,
    setLoading: loading => {
        set({ loading: typeof loading === 'boolean' ? loading : !get().loading })
    }
}))

export const withLoading = <T extends (...args: any[]) => Promise<any>>(asyncFunction: T) => {
    const setLoading = useLoading.getState().setLoading
    return async (...args: Parameters<T>): Promise<ReturnType<T> | undefined> => {
        setLoading(true)
        const [err, res] = await till(asyncFunction(...args))
        setLoading(false)
        if (err) {
            console.error(err)
            return
        }
        return res
    }
}

export default useLoading
