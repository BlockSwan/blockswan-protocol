import { useContext } from 'react'
import { GigsContext } from '../contexts/gigContext'

export const useGigsContext = () => {
    const context = useContext(GigsContext)

    if (!context) {
        throw Error(
            'useGigsContext must be used inside an GigsContextProvider'
        )
    }

    return context
}
