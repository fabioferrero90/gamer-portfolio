import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="page-container">
      <main><Outlet /></main>      
    </div>
  )
}

export default DefaultLayout