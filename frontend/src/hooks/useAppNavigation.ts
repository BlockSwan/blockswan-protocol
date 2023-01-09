import { useNavigate } from 'react-router-dom'
import { defaultGig } from '../constants/default'
import { GigProps } from '../types/types'
import { useGigsContext } from './useGigsContext'

export const useAppNavigation = () => {
	const navigate = useNavigate()
	const { handleEditing, setGig } = useGigsContext()

	const goToHome = () => {
		navigate('/')
	}

	const goBack = () => {
		navigate(-1)
	}

	const goToCategory = (catUrl: string) => {
		navigate(`/categories/${ catUrl }`)
	}

	const goToSubCategory = (catUrl: string, subCatUrl: string) => {
		navigate(`/categories/${ catUrl }/${ subCatUrl }`)
	}

	const goToUser = (evmAddress: string) => {
		navigate(`/${ evmAddress }`)
	}

	const goToUserReviews = (evmAddress: string) => {
		navigate(`/${ evmAddress }/reviews`)
	}

	const goToNewGig = (evmAddress: string) => {
		handleEditing(false)
		setGig(defaultGig)
		navigate(`/${ evmAddress }/new-gig`)
	}

	const goToNewGigPrice = (evmAddress: string) => {
		navigate(`/${ evmAddress }/new-gig/price`)
	}

	const goToNewGigDescription = (evmAddress: string) => {
		navigate(`/${ evmAddress }/new-gig/description`)
	}

	const goToNewGigRequirement = (evmAddress: string) => {
		navigate(`/${ evmAddress }/new-gig/requirement`)
	}

	const goToNewGigGallery = (evmAddress: string) => {
		navigate(`/${ evmAddress }/new-gig/gallery`)
	}

	const goToNewGigPublish = (evmAddress: string) => {
		navigate(`/${ evmAddress }/new-gig/publish`)
	}

	const goToEditGig = (evmAddress: string, gig: GigProps | any) => {
		handleEditing(true)
		setGig({
			...gig,
			category: gig?.subcategory?.category?.name,
			subcategory: gig?.subcategory?.name,
		})
		navigate(`/${ evmAddress }/edit/${ gig?.metadataHash }`)
	}

	const goToGig = (evmAddress: string, gigHash: GigProps["metadataHash"]) => {
		navigate(`/${ evmAddress }/${ gigHash }`)
	}

	const goToGigCheckout = (evmAddress: string, gigHash: GigProps["metadataHash"]) => {
		navigate(`/${ evmAddress }/${ gigHash }/checkout`)
	}

	return {
		goToHome,
		goBack,
		goToCategory,
		goToSubCategory,
		goToUser,
		goToNewGig,
		goToNewGigPrice,
		goToNewGigDescription,
		goToNewGigRequirement,
		goToNewGigGallery,
		goToNewGigPublish,
		goToUserReviews,
		goToEditGig,
		goToGig,
		goToGigCheckout
	}
}
