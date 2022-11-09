const { BN } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeERC420Burnable } = require('./ERC420Burnable.behavior');
const ERC420BurnableMock = artifacts.require('ERC420BurnableMock');

contract('ERC420Burnable', function (accounts) {
  const [ owner, ...otherAccounts ] = accounts;

  const initialBalance = new BN(1000);

  const name = 'My Token';
  const symbol = 'MTKN';

  beforeEach(async function () {
    this.token = await ERC420BurnableMock.new(name, symbol, owner, initialBalance, { from: owner });
  });

  shouldBehaveLikeERC420Burnable(owner, initialBalance, otherAccounts);
});
