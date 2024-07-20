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
        path: '/403',
        element: loadPage(() => import('@/pages/403'))
    },
    {
        path: '/404',
        element: loadPage(() => import('@/pages/404'))
    },
    {
        path: '*',
        element: <Navigate to="/404" />
    }
]

export default RouteList
