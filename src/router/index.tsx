import type { RouteObject } from '@/types'

import { Navigate } from 'react-router-dom'
import UnexpectedError from '@/components/base/UpexpectedError'
import loadPage from '@/components/base/LoadPage'

const RouteList: RouteObject[] = [
    {
        path: '/',
        errorElement: <UnexpectedError errorMsg="o(╥﹏╥)o" />,
        children: [
            {
                index: true,
                element: loadPage(() => import('@/App'))
            }
        ]
    },
    {
        path: '/401',
        element: <UnexpectedError errorMsg="Please login first" />
    },
    {
        path: '/403',
        element: <UnexpectedError errorMsg="Do not have permission" />
    },
    {
        path: '/404',
        element: <UnexpectedError errorMsg="Not Found" />
    },
    {
        path: '*',
        element: <Navigate to="/404" />
    }
]

export default RouteList
