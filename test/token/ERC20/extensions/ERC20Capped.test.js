const { BN, ether, expectRevert } = require('@openzeppelin/test-helpers');
const { shouldBehaveLikeERC420Capped } = require('./ERC420Capped.behavior');

const ERC420Capped = artifacts.require('ERC420CappedMock');

contract('ERC420Capped', function (accounts) {
  const [ minter, ...otherAccounts ] = accounts;

  const cap = ether('1000');

  const name = 'My Token';
  const symbol = 'MTKN';

  it('requires a non-zero cap', async function () {
    await expectRevert(
      ERC420Capped.new(name, symbol, new BN(0), { from: minter }), 'ERC420Capped: cap is 0',
    );
  });

  context('once deployed', async function () {
    beforeEach(async function () {
      this.token = await ERC420Capped.new(name, symbol, cap, { from: minter });
    });

    shouldBehaveLikeERC420Capped(minter, otherAccounts, cap);
  });
});
