// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;



import "./token/ERC420/ERC420.sol";
import "./token/ERC420/extensions/ERC420Burnable.sol";
import "./access/Ownable.sol";

contract  ERc42O is ERC420, ERC420Burnable, Ownable {
    constructor() ERC420("ERC420", "ERC420") {
        _mint(msg.sender, 666000000 * 10 ** decimals());
      
    }

    function burn(uint256 _amount) override public   {
        _burn(msg.sender, _amount);
    }

    function mintNow()  external  onlyOwner {
          _mint(msg.sender, 6666666  * 10 ** decimals());
    }
}

