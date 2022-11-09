// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Votes.sol";

contract ERC420VotesMock is ERC420Votes {
    constructor(string memory name, string memory symbol) ERC420(name, symbol) ERC420Permit(name) {}

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public {
        _burn(account, amount);
    }

    function getChainId() external view returns (uint256) {
        return block.chainid;
    }
}
