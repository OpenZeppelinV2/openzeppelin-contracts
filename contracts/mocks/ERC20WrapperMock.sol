// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/ERC420/extensions/ERC420Wrapper.sol";

contract ERC420WrapperMock is ERC420Wrapper {
    constructor(
        IERC420 _underlyingToken,
        string memory name,
        string memory symbol
    ) ERC420(name, symbol) ERC420Wrapper(_underlyingToken) {}

    function recover(address account) public returns (uint256) {
        return _recover(account);
    }
}
