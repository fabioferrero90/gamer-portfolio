import React from 'react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "Contexts/GlobalContext";
import DefaultLayout from "./Layouts/DefaultLayout"
import MainMenu from "Pages/MainMenu"
import NotFound from "Pages/NotFound"
import WorldMap from "Pages/WorldMap"
import Hometown from "Pages/Hometown"
import Intro from "Pages/Startup"

const App = () => {
  return (
    <GlobalProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* <Route path="/" element={<Intro />} /> */}
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/play" element={<WorldMap />} />
            <Route path="/" element={<Hometown />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </GlobalProvider>
  )
}

export default App