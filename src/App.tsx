import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import Error from './pages/Error'

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MantineProvider>
  )
}

export default App
