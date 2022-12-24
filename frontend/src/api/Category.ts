export default class Category {
	async fetchCategories(dispatch: any): Promise<any> {
		const response = await fetch('/api/categories')
		const json = await response.json()

		if (response.ok) {
			console.log(json.metadata)
			dispatch({
				type: 'SET_CATEGORIES',
				payload: json,
			})
		}
	}
}
