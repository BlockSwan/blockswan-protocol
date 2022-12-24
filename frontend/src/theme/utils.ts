function transform(value: any) {
	return value <= 1 && value !== 0 ? `${ 100 * value }%` : value;
}

export {
	transform
}