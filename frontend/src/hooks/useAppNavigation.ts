import { useNavigate } from 'react-router-dom'

export const useAppNavigation = () => {
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	const goToCategory = (catUrl: string) => {
		navigate(`/categories/${ catUrl }`)
	}

	const goToUser = (evmAddress: string) => {
		navigate(`/${ evmAddress }`)
	}

	const goToNewGig = (evmAddress: string) => {
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

	return {
		goBack,
		goToCategory,
		goToUser,
		goToNewGig,
		goToNewGigPrice,
		goToNewGigDescription,
		goToNewGigRequirement,
		goToNewGigGallery,
		goToNewGigPublish
	}
}
