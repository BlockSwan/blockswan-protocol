function getAlphabetCharacter(index: number): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet[index % alphabet.length].toUpperCase();
}



export { getAlphabetCharacter }