import UnexpectedError from '@/components/base/UpexpectedError'
import icon403 from '@/assets/403.svg'

const NoPermission = () => {
    return (
        <>
            <UnexpectedError icon={<img src={icon403} />} errorMsg="Do not have permission" />
        </>
    )
}

export default NoPermission
