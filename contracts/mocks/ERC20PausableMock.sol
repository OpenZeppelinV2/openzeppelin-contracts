// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Pausable.sol";

// mock class using ERC420Pausable
contract ERC420PausableMock is ERC420Pausable {
    constructor(
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance
    ) ERC420(name, symbol) {
        _mint(initialAccount, initialBalance);
    }

    function pause() external {
        _pause();
    }

    function unpause() external {
        _unpause();
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public {
        _burn(from, amount);
    }
}
