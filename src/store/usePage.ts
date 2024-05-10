import { create } from 'zustand'

type State = {
    pageNum: number
    pageSize: number

    pageTotal: number
}
type Action = {
    setPage: (pageNum: number, pageSize: number) => void
    setPageTotal: (pageTotal: number) => void

    resetPage: () => void
}

export const usePageStore = create<State & Action>((set, get) => ({
    pageNum: 1,
    pageSize: 20,
    pageTotal: 0,

    setPage: (pageNum: number, pageSize = get().pageSize) => {
        set({ pageNum, pageSize })
    },

    setPageTotal: (pageTotal: number) => {
        set({ pageTotal })
    },

    resetPage: () => {
        set({ pageNum: 1, pageSize: 20 })
    }
}))
