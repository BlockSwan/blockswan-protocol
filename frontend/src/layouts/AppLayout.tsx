import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { ResponsiveDrawer } from '../components/ResponsiveDrawer'
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import { CategoryProps } from '../types/types'
import ScrollToTop from './ScrollToTop'

interface AppLayoutProps {
   children?: ReactNode
   categories?: CategoryProps[]
}

const AppLayout = ({ children }: AppLayoutProps) => {
   const { categories } = useCategoriesContext()
   return (
      <ResponsiveDrawer categories={categories?.message}>
         <ScrollToTop />
         {children}
         <Footer />
      </ResponsiveDrawer>
   )
}

export default AppLayout
