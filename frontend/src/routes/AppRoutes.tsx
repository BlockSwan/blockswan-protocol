import {
   Routes,
   Route,
   useLocation,
} from 'react-router-dom'
import { pages } from './routes'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'

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
                  const LazyComponent = p?.import
                  return (
                     <>
                        <Route
                           key={p?.path}
                           path={p?.path}
                           element={
                              <Suspense>
                                 <LazyComponent />
                              </Suspense>
                           }
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
