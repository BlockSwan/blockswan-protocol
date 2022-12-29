import { lazy } from 'react'



//imports
const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User/"));
const Category = lazy(() => import("../pages/Category"));
const SubCategory = lazy(() => import("../pages/SubCategory"));
const NewGigOverview = lazy(() => import("../pages/NewGig/Step0"));
const NewGigPrice = lazy(() => import("../pages/NewGig/Step1"));
const NewGigDescription = lazy(() => import("../pages/NewGig/Step2"));
const NewGigRequirement = lazy(() => import("../pages/NewGig/Step3"));
const NewGigGallery = lazy(() => import("../pages/NewGig/Step4"));
const NewGigPublish = lazy(() => import("../pages/NewGig/Step5"));
const EditGigOverview = NewGigOverview;
const EditGigPrice = NewGigPrice;
const EditGigRequirement = NewGigRequirement;
const EditGigGallery = NewGigGallery;
const EditGigPublish = NewGigPublish;


export const pages = [
	{ path: '/*', import: Home },
	{ path: '/', import: Home },
	{ path: '/:user', import: User },
	{ path: '/:user/new-gig', import: NewGigOverview },
	{
		path: '/:user/new-gig/overview',
		import: NewGigOverview,
	},
	{
		path: '/:user/new-gig/price',
		import: NewGigPrice,
	},
	{
		path: '/:user/new-gig/description',
		import: NewGigDescription,
	},
	{
		path: '/:user/new-gig/requirement',
		import: NewGigRequirement,
	},
	{
		path: '/:user/new-gig/gallery',
		import: NewGigGallery,
	},
	{
		path: '/:user/new-gig/publish',
		import: NewGigPublish,
	},
	{ path: "/:user/edit/:gigHash", import: EditGigOverview },
	{
		path: '/:user/manage/:gig',
		import: Home,
	},
	{
		path: '/categories/:category',
		import: Category,
	},
	{
		path: '/categories/:category/:subcategory',
		import: SubCategory,
	},
	{
		path: '/categories/:category/:subcategory/:innersubcategory',
		import: Home,
	},
	{
		path: ':user/:gig',
		import: User,
	},
	{
		path: '/:user/inbox/:contact',
		import: Home,
	},
	{
		path: '/:user/dashboard',
		import: Home,
	},
	{ path: '/admin', import: Home },
]