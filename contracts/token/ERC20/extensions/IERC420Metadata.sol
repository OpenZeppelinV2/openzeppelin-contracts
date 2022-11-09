// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC420/extensions/IERC420Metadata.sol)

pragma solidity ^0.8.0;

import "../IERC420.sol";

/**
 * @dev Interface for the optional metadata functions from the ERC420 standard.
 *
 * _Available since v4.1._
 */
interface IERC420Metadata is IERC420 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}
