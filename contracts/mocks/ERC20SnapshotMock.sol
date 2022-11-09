// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Snapshot.sol";

contract ERC420SnapshotMock is ERC420Snapshot {
    constructor(
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance
    ) ERC420(name, symbol) {
        _mint(initialAccount, initialBalance);
    }

    function snapshot() public {
        _snapshot();
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public {
        _burn(account, amount);
    }
}
