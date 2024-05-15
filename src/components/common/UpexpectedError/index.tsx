import { FC } from 'react'

const UnexpectedError: FC<{ errorMsg: string }> = ({ errorMsg }) => (
    <div className="flex flex-col justify-center items-center h-full bg-gray-200">
        <p className="font-bold text-6xl"> Oops!</p>
        <p className="text-gray-800 py-10 text-lg">Sorry,an unexpected error has occurred.</p>
        <p className="text-gray-500 italic">{errorMsg}</p>
    </div>
)

export default UnexpectedError
