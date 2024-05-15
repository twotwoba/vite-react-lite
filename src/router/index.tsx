import LoadPage from '@/components/common/LoadPage'
import type { RouteObject } from '@/types'

import UnexpectedError from '@/components/common/UpexpectedError'

const RouteList: RouteObject[] = [
    {
        path: '/',
        errorElement: <UnexpectedError errorMsg="o(╥﹏╥)o" />,
        children: [
            {
                index: true,
                element: LoadPage(() => import('@/pages/root'))
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
    }
]

export default RouteList
