import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

// custom route type
interface CustomRouteFields {
    meta?: {
        [key: string]: string
    }
}
type AppIndexRouteObject = IndexRouteObject & CustomRouteFields
type AppNonIndexRouteObject = Omit<NonIndexRouteObject, 'children'> &
    CustomRouteFields & {
        children?: (AppIndexRouteObject | AppNonIndexRouteObject)[]
    }

export type RouteObject = AppIndexRouteObject | AppNonIndexRouteObject
