// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Burnable.sol";

contract ERC420BurnableMock is ERC420Burnable {
    constructor(
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance
    ) ERC420(name, symbol) {
        _mint(initialAccount, initialBalance);
    }
}
