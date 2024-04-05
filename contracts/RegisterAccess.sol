// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract RegisterAccess {

    address public owner;
    string[] private info;
    mapping (address => bool) allowList;

    event InfoChange(string oldInfo, string newInfo) ;

    constructor() {
        owner = msg.sender;
        info.push("Chainlink Bootcamp 2024");
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only Owner!" );
        _;
    }

    modifier onlyAllowList {
        require(allowList[msg.sender], "Only Allow List!" );
        _;
        
    }

    function getInfo(uint index) view public returns (string memory) {
        return info[index];
    }

    function setInfo(uint index, string memory newInfo) public  {
        emit InfoChange(info[index], newInfo);
        info[index] = newInfo;
    }

    function addInfo(string memory newInfo) public onlyAllowList returns (uint){
        info.push(newInfo);
        return info.length;
    }

    function listInfo() view public returns(string[] memory) {
        return info;
    }

    function addMember(address member) public onlyOwner {
        allowList[member] = true;
    }

    function delMember(address member) public onlyOwner {
        allowList[member] = false;
    }

}