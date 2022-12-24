import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import { AppLoader } from './components/organismes/AppLoader'
import ErrorBoundary from './classes/ErrorBoundary'
import { Error } from './pages/Error'
import theme from './theme/theme'
import { ThemeProvider } from './theme/ThemeProvider'
import { PageLoader } from './components/organismes/PageLoader'

const AppProviders = lazy(() => import('./AppProviders'))
const AppLayout = lazy(() => import('./layouts/AppLayout'))
const AppRoutes = lazy(() => import('./routes/AppRoutes'))
const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<AppLoader />}>
               <AppProviders>
                  <AppLayout>
                     <Suspense fallback={<PageLoader />}>
                        <AppRoutes />
                     </Suspense>
                  </AppLayout>
               </AppProviders>
            </Suspense>
         </ErrorBoundary>
      </ThemeProvider>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
