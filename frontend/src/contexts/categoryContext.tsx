import React, {
   createContext,
   ReactNode,
   useReducer,
} from 'react'
import {
   CategoryProps,
   SubCategoryProps,
} from '../types/types'

export const CategoriesContext = createContext<any>(null!)

export const categoriesReducer = (
   state: any,
   action: any
) => {
   switch (action.type) {
      case 'SET_CATEGORIES':
         return {
            categories: action.payload,
         }
      default:
         return state
   }
}

interface CategoriesContextProviderProps {
   children?: ReactNode
}

export const CategoriesContextProvider = ({
   children,
}: CategoriesContextProviderProps) => {
   const [state, dispatch] = useReducer(categoriesReducer, {
      categories: null,
   })

   const fetchCategories = async () => {
      const response = await fetch(
         'http://172.20.10.3:4000/api/categories'
      )
      const json = await response.json()

      if (response.ok) {
         dispatch({
            type: 'SET_CATEGORIES',
            payload: json,
         })
      }
   }

   const getCategoryFromURL = (
      url: string,
      categories: any
   ): CategoryProps => {
      let cat = categories?.message?.find(
         (c: any) => c?.url === url
      )
      return cat
   }

   const getCategoryFromName = (
      name: string
   ): CategoryProps | undefined => {
      let cat = state?.categories?.message?.find(
         (c: any) => c?.name === name
      )
      return cat
   }

   const getSubCategoryFromNames = (
      categoryName: string,
      subCategoryName: string
   ): SubCategoryProps | undefined => {
      let cat = getCategoryFromName(categoryName)
      let subCat = cat?.subCategories?.find(
         (c: SubCategoryProps) =>
            c?.name === subCategoryName
      )
      return subCat
   }

   React.useEffect(() => {
      fetchCategories()

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch])

   return (
      <CategoriesContext.Provider
         value={{
            ...state,
            dispatch,
            fetchCategories,
            getCategoryFromURL,
            getCategoryFromName,
            getSubCategoryFromNames,
         }}
      >
         {children}
      </CategoriesContext.Provider>
   )
}
