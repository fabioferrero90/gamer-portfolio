import { Outlet } from 'react-router-dom'
import LangSelector from '../Components/LangSelector'

const DefaultLayout = () => {
  return (
    <div>
      <LangSelector />
      <main><Outlet /></main>      
    </div>
  )
}

export default DefaultLayout