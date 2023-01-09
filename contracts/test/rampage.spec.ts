
import { WITH_RAMPAGE } from '../helpers/envs';
import makeRampage from './fixtures/makeRampage';



describe('rampage', () => {

	if (WITH_RAMPAGE === false) {
		it.skip('WITH_RAMPAGE = false, should skip rampage', () => {
		});
	} else {
		it("should go rampage", async () => {
			try {
				await makeRampage();
				// Test code here
			} catch (error) {
				console.error(error)
			}

		})
	}
});