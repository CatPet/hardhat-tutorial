// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract NameGeneration {
    uint256 public name_fee;

    mapping(address => bytes32) name;
    mapping(address => uint) numBlocks;

    event Register(address _user, bytes32 _name, uint _blocks);

    function register(bytes32 registerName, uint registerNumBlocks) external {
        uint256 amount = address(this).balance;
        require(amount >= name_fee * registerNumBlocks, "Not enough tokens");

        name[msg.sender] = registerName;
        numBlocks[msg.sender] = registerNumBlocks;

        emit Register(msg.sender, registerName, registerNumBlocks);
    }

    function renew(bytes32 newName, uint newNumBlocks) external {
        emit Register(msg.sender, newName, newNumBlocks);
    }

    function cancel(bytes32 name) external {}
}
