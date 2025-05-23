import React from 'react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "Contexts/GlobalContext";
import MainMenu from "Pages/MainMenu"
import NotFound from "Pages/NotFound"
import WorldMap from "Pages/WorldMap"

const App = () => {
  return (
    <GlobalProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route>
            <Route path="/" element={<MainMenu />} />
            <Route path="/play" element={<WorldMap />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </GlobalProvider>
  )
}

export default App