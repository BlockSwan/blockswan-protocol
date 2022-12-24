import {
   Routes,
   Route,
   useLocation,
} from 'react-router-dom'
import { pages } from './routes'
import { AnimatePresence } from 'framer-motion'

const AppRoutes = () => {
   const location = useLocation()
   return (
      <>
         <AnimatePresence mode="wait">
            <Routes
               location={location}
               key={location.pathname}
            >
               {pages.map((p) => {
                  const Component = p?.import
                  return (
                     <>
                        <Route
                           key={p?.path}
                           path={p?.path}
                           element={<Component />}
                        />
                     </>
                  )
               })}
            </Routes>
         </AnimatePresence>
      </>
   )
}
export default AppRoutes
