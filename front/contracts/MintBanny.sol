//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "SaleBanny.sol";

contract MintBanny is ERC721Enumerable {

    //mapping(uint => string) public metadataURIs; //이미지 하나 경로
    string public metadataURI; //폴더 경로
    uint constant public TOTAL_BANNY = 10;

    //constructor() ERC721("myEx", "EX") {} 
    //폴더 안에 든 대량의 이미지의 메타데이터(json) 베이스 경로를 생성자 단계에서 등록
    constructor(string memory _metadataURI) ERC721("Banny", "bn") {
	    metadataURI = _metadataURI;
    }

    SaleBanny public saleBanny;

    function mintBanny() public {
        require(TOTAL_BANNY > totalSupply(), "No more mint.");
        uint256 tokenId = totalSupply() + 1; 
        _mint(msg.sender, tokenId);
    }

    // 민팅 할 때마다 하나 하나에 토큰아이디(몇번째 NFT인지) 부여할 경우
    // function setTokenURI(uint _tokenId, string memory _metadataURI) public{
    //     metadataURIs[_tokenId] = _metadataURI;
    // }

    //토큰아이디(몇 번째인지...)로 이미지를 확인하기 위한 함수
    //그런데 tokenURI 함수는 erc721에 정의되어 있음
    //자신의 내용대로 tokenURI 함수를 작성하려면 override 추가해야 함
    // function tokenURI(uint _tokenId) public override view returns(string memory){
    //     return metadataURIs[_tokenId];
    // }

    function batchMintBanny(uint _amount) public {
	for(uint i = 0; i < _amount; i++) {
		    mintBanny();
	    }
    }

    function tokenURI(uint _tokenId) public override view returns (string memory) {
	    return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
        //encodePacked는 string만 받으므로 숫자로 되어있는 tokenId를 string으로 바꾸려면 Strings.sol 임포트해야 함
    }

    function getBanny(address _owner) view public returns (uint[] memory) {
        require(balanceOf(_owner) > 0, "Owner does not have NFT.");
        uint[] memory bannyData = new uint[](balanceOf(_owner));

        for(uint i = 0; i < balanceOf(_owner); i++) {
            bannyData[i] = tokenOfOwnerByIndex(_owner, i); 
        }

        return bannyData;
    }

    function setSaleBanny(address _saleBanny) public {
        saleBanny = SaleBanny(_saleBanny);
    }

}