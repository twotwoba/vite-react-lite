import UnexpectedError from '@/components/base/UpexpectedError'
import icon404 from '@/assets/404.svg'

const NotFound = () => {
    return (
        <>
            <UnexpectedError icon={<img src={icon404} />} errorMsg="Not Found" />
        </>
    )
}

export default NotFound
