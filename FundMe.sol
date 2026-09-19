// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import{PriceCoverter} from './PriceConverter.sol';


contract fundMe {

   using PriceCoverter for uint256;

   uint256 public minimumUsd = 5e18;

   address[] public funders;
   mapping(address funder => uint256 amountFunded) public addressToAmountFunded;

   function fund() public payable {
    require(msg.value.getConversionRate() >= minimumUsd, "didn't send enought ETH"); //1e18 = 1ETH = 1000000000000000000 = 1 * 10 ** 18
    funders.push(msg.sender);
    addressToAmountFunded[msg.sender] + addressToAmountFunded[msg.sender] + msg.value;
   }

   //function withdraw () public{}

}