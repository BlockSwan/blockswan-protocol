import {
   createContext,
   ReactNode,
   useReducer,
   useState,
} from 'react'
import { defaultGig } from '../constants/default'
import { GigProps } from '../types/types'

export const GigsContext = createContext<any>(null!)

export const gigsReducer = (state: any, action: any) => {
   switch (action.type) {
      case 'SET_GIGS':
         return {
            categories: action.payload,
         }
      default:
         return state
   }
}

interface GigsContextProviderProps {
   children?: ReactNode
}

export const GigsContextProvider = ({
   children,
}: GigsContextProviderProps) => {
   const [state, dispatch] = useReducer(gigsReducer, {
      categories: null,
   })
   const [gig, setGig] = useState<GigProps>(defaultGig)
   const [isEditing, setIsEditing] =
      useState<boolean>(false)

   const handleEditing = (value?: boolean) => {
      if (value !== undefined) {
         setIsEditing(value)
      } else {
         setIsEditing((val) => !val)
      }
   }

   const fetchGigs = async () => {
      const response = await fetch(
         'http://172.20.10.3:4000/api/gigs'
      )
      const json = await response.json()

      if (response.ok) {
         dispatch({ type: 'SET_GIGS', payload: json })
      }
   }

   const editTitle = (title: string) => {
      setGig({ ...gig, title: title })
   }

   const resetGig = () => {
      setGig(defaultGig)
   }

   return (
      <GigsContext.Provider
         value={{
            ...state,
            dispatch,
            gig,
            setGig,
            fetchGigs,
            editTitle,
            resetGig,
            isEditing,
            handleEditing,
            setIsEditing,
         }}
      >
         {children}
      </GigsContext.Provider>
   )
}
