import reactIcon from '@/assets/react.svg'
const App = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-sky-100">
            <img src={reactIcon} alt="icon" className="w-1/12 animate-spin" />
            <p className="px-6 text-lg text-gray-600 md:!text-2xl">{"Let's do it "}🔨</p>
        </div>
    )
}

export default App
