import { expect } from 'chai';
import { ProtocolErrors, TestEnv } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';



describe('Account: getUser', () => {
	let testEnv = {} as TestEnv;
	let { users, User } = testEnv;

	beforeEach(async () => {
		testEnv = await makeSuite();
		User = testEnv.User;
		users = testEnv.users;
		await User.connect(users[0].signer).createUser("hello", 0);
		await User.connect(users[1].signer).createUser("hello", 0);

	})


	it("Check that 2 accounts are added", async () => {
		let totalUser = await User.getUsersCount();
		expect(totalUser).to.be.equal(2);
	})
	it("Tries to create a new account with an address already used (revert expected)", async () => {
		await expect(
			User.connect(users[1].signer).createUser("hello", 0)
		).to.be.revertedWith(ProtocolErrors.ADDRESS_ALREADY_USED);

	})
	it("Should get user address by id", async () => {
		const user0Address = await User.getAddressById(0);
		const user1Address = await User.getAddressById(1);
		expect(user0Address).to.be.equal(users[0].address);
		expect(user1Address).to.be.equal(users[1].address);
	})

	it('should get user data by id', async () => {
		// await account.create_account();

		const user0 = await User.getUserById(0);
		const user1 = await User.getUserById(1);
		expect(user0[0]).to.be.equal("hello");
		expect(user0[1]).to.be.equal(0);
		expect(user1[0]).to.be.equal("hello");
		expect(user1[1]).to.be.equal(0);
	});

	it('should get user data by address', async () => {
		// await account.create_account();

		const user0 = await User.getUserByAddress(users[0].address);
		const user1 = await User.getUserByAddress(users[1].address);
		expect(user0[0]).to.be.equal("hello");
		expect(user0[1]).to.be.equal(0);
		expect(user1[0]).to.be.equal("hello");
		expect(user1[1]).to.be.equal(0);
	});

	it('User calls `getUserList`', async () => {
		const totalUsers = await User.getUsersCount();
		let list = await User.getUserList();
		expect(totalUsers.toNumber()).to.be.eq(list?.length);
	});
});