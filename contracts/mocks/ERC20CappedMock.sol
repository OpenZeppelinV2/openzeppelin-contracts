// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Capped.sol";

contract ERC420CappedMock is ERC420Capped {
    constructor(
        string memory name,
        string memory symbol,
        uint256 cap
    ) ERC420(name, symbol) ERC420Capped(cap) {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}
