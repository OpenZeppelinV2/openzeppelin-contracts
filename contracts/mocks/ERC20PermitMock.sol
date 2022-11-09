// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Permit.sol";

contract ERC420PermitMock is ERC420Permit {
    constructor(
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance
    ) payable ERC420(name, symbol) ERC420Permit(name) {
        _mint(initialAccount, initialBalance);
    }

    function getChainId() external view returns (uint256) {
        return block.chainid;
    }
}
