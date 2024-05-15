import { useRoutes } from 'react-router-dom'
import RouteList from '@/router'

const App = () => {
    const element = useRoutes(RouteList)
    return element
}

export default App
