import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <main><Outlet /></main>      
    </div>
  )
}

export default DefaultLayout