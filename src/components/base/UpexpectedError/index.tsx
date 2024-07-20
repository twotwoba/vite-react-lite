import { FC, ReactNode } from 'react'

const UnexpectedError: FC<{ icon?: ReactNode; errorMsg: string }> = ({ errorMsg, icon }) => (
    <div className="flex flex-col justify-center items-center h-full bg-gray-200">
        <p className="font-bold text-6xl"> Oops!</p>
        <div className="py-6">
            {icon ? (
                <>{icon}</>
            ) : (
                <p className="text-gray-800 py-10 text-4xl">Sorry, an unexpected error has occurred.</p>
            )}
        </div>
        <p className="text-gray-500 italic text-2xl">{errorMsg}</p>
    </div>
)

export default UnexpectedError
