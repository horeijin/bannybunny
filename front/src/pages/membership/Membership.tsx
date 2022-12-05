import React, { FC, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Main, ListNSell, BuyNFT, CarrotShop, NFTDetail } from "./routes";
import { AiOutlineWallet } from "react-icons/ai";

import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";



const Membership: FC = () => {

  const [account, setAccount] = useState<string>("");


  const onClickWallet = () => {
    getAccount();
  };

  const getAccount = async ()=> {
    try{
      if(window.ethereum){
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      }else{
        alert("Please, Install Metamask...");
      }
    }catch(err){
      console.error(err);
    }
  }

  //페이지 들어오자마자 지갑 연결할 때 사용
  // useEffect(() => {
  //   getAccount();
  // }, []);

  return (
    <>
      <Flex
      w="full"
      top={0}
      justifyContent="right"
      alignItems="center"
      px={8}
      py={2}
      shadow="md"
      zIndex={1}
      bgColor="gray.50"
    > 
      <Flex justifyContent="center" alignItems="center">
        {account ? (
          <Popover>
            <PopoverTrigger>
              <Button>
                <AiOutlineWallet size={28} />
                <Text ml={2} fontSize="xs">
                  {account.substring(0, 4)}...
                  {account.substring(account.length - 4)}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold">BannyBunny</PopoverHeader>
              <PopoverBody cursor="pointer" fontSize="xl">
                <Link to={`/membership/listnsell`}>My Bannies</Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Button onClick={onClickWallet}>
            <AiOutlineWallet size={28} />
            <Text ml={2} fontSize="xs">
              MetaMask
              <br /> LogIn
            </Text>
          </Button>
        )}
      </Flex>
    </Flex>

      <Routes>
        <Route path="/" element={<Main account={account}/>} />
        <Route path="/listnsell" element={<ListNSell account={account}/>} />
        <Route path="/buynft" element={<BuyNFT />} />
        <Route path="/carrotshop" element={<CarrotShop />} />
        <Route path="/nftdetail/:tokenId" element={<NFTDetail account={account}/>} />
      </Routes>
    </>
  );
};

export default Membership;
