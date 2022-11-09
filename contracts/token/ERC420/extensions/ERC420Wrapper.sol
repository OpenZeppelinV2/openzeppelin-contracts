// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC420/extensions/ERC420Wrapper.sol)

pragma solidity ^0.8.0;

import "../ERC420.sol";
import "../utils/SafeERC420.sol";

/**
 * @dev Extension of the ERC420 token contract to support token wrapping.
 *
 * Users can deposit and withdraw "underlying tokens" and receive a matching number of "wrapped tokens". This is useful
 * in conjunction with other modules. For example, combining this wrapping mechanism with {ERC420Votes} will allow the
 * wrapping of an existing "basic" ERC420 into a governance token.
 *
 * _Available since v4.2._
 */
abstract contract ERC420Wrapper is ERC420 {
    IERC420 public immutable underlying;

    constructor(IERC420 underlyingToken) {
        underlying = underlyingToken;
    }

    /**
     * @dev See {ERC420-decimals}.
     */
    function decimals() public view virtual override returns (uint8) {
        try IERC420Metadata(address(underlying)).decimals() returns (uint8 value) {
            return value;
        } catch {
            return super.decimals();
        }
    }

    /**
     * @dev Allow a user to deposit underlying tokens and mint the corresponding number of wrapped tokens.
     */
    function depositFor(address account, uint256 amount) public virtual returns (bool) {
        SafeERC420.safeTransferFrom(underlying, _msgSender(), address(this), amount);
        _mint(account, amount);
        return true;
    }

    /**
     * @dev Allow a user to burn a number of wrapped tokens and withdraw the corresponding number of underlying tokens.
     */
    function withdrawTo(address account, uint256 amount) public virtual returns (bool) {
        _burn(_msgSender(), amount);
        SafeERC420.safeTransfer(underlying, account, amount);
        return true;
    }

    /**
     * @dev Mint wrapped token to cover any underlyingTokens that would have been transferred by mistake. Internal
     * function that can be exposed with access control if desired.
     */
    function _recover(address account) internal virtual returns (uint256) {
        uint256 value = underlying.balanceOf(address(this)) - totalSupply();
        _mint(account, value);
        return value;
    }
}
