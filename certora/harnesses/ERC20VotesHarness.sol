import "../munged/token/ERC420/extensions/ERC420Votes.sol";

contract ERC420VotesHarness is ERC420Votes {
    constructor(string memory name, string memory symbol) ERC420Permit(name) ERC420(name, symbol) {}

    mapping(address => mapping(uint256 => uint256)) public _getPastVotes;

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._afterTokenTransfer(from, to, amount);
        _getPastVotes[from][block.number] -= amount;
        _getPastVotes[to][block.number] += amount;
    }

    /**
     * @dev Change delegation for `delegator` to `delegatee`.
     *
     * Emits events {DelegateChanged} and {DelegateVotesChanged}.
     */
    function _delegate(address delegator, address delegatee) internal virtual override{
        super._delegate(delegator, delegatee);
        _getPastVotes[delegator][block.number] -= balanceOf(delegator);
        _getPastVotes[delegatee][block.number] += balanceOf(delegator);
    }
}
