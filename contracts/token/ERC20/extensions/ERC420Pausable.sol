// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC420/extensions/ERC420Pausable.sol)

pragma solidity ^0.8.0;

import "../ERC420.sol";
import "../../../security/Pausable.sol";

/**
 * @dev ERC420 token with pausable token transfers, minting and burning.
 *
 * Useful for scenarios such as preventing trades until the end of an evaluation
 * period, or having an emergency switch for freezing all token transfers in the
 * event of a large bug.
 */
abstract contract ERC420Pausable is ERC420, Pausable {
    /**
     * @dev See {ERC420-_beforeTokenTransfer}.
     *
     * Requirements:
     *
     * - the contract must not be paused.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);

        require(!paused(), "ERC420Pausable: token transfer while paused");
    }
}
