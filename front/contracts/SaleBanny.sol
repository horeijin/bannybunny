//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "MintBanny.sol";

contract SaleBanny{
    MintBanny public mintingAddress;
    
    constructor (address _mintingAddress) {
        mintingAddress = MintBanny(_mintingAddress);
    }

    mapping(uint256 => uint256) public bannyPrices;

    uint256[] public onSaleBannyArray;
    
    //판매 등록 함수
    function setForSaleBanny(uint256 _tokenId, uint256 _price) public{
        address bannyOwner = mintingAddress.ownerOf(_tokenId);

        require(bannyOwner == msg.sender, "Seller is not Banny's owner.");
        require(_price > 0, "Price is zero or lower.");
        require(bannyPrices[_tokenId] == 0, "This Banny is already on sale.");
        require(mintingAddress.isApprovedForAll(bannyOwner, address(this)), "Banny's owner did not approve this banny to sell.");

        bannyPrices[_tokenId] = _price;

        onSaleBannyArray.push(_tokenId);
    }

    function purchaseBanny(uint256 _tokenId) public payable {
        uint256 price = bannyPrices[_tokenId];
        address bannyOwner = mintingAddress.ownerOf(_tokenId);

        require(price > 0, "This Banny is not on sale.");
        require(price <= msg.value, "Buyer sent lower than price.");
        require(bannyOwner != msg.sender, "Buyer is already this Banny's owner.");

        payable(bannyOwner).transfer(msg.value);
        mintingAddress.safeTransferFrom(bannyOwner, msg.sender, _tokenId);

        bannyPrices[_tokenId] = 0;

        for(uint256 i = 0; i < onSaleBannyArray.length; i++) {
            if(bannyPrices[onSaleBannyArray[i]] == 0) {
                onSaleBannyArray[i] = onSaleBannyArray[onSaleBannyArray.length - 1];
                onSaleBannyArray.pop();
            }
        }
    }

    function getOnSaleBannyArrayLength() view public returns (uint256) {
        return onSaleBannyArray.length;
    }

    function getBannyPrice(uint256 _tokenId) view public returns (uint256) {
        return bannyPrices[_tokenId];
    }
}