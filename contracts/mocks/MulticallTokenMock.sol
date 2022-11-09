// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../utils/Multicall.sol";
import "./ERC420Mock.sol";

contract MulticallTokenMock is ERC420Mock, Multicall {
    constructor(uint256 initialBalance) ERC420Mock("MulticallToken", "BCT", msg.sender, initialBalance) {}
}
