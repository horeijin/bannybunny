import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { NftCard } from "../../../../components";
import {
  mintContract
} from "../../../../contracts";

interface ListNSellProps {
  account: string;
}

const ListNSell: FC<ListNSellProps> = ({account}) => {
  const [tokenIds, setTokenIds] = useState<string[]>();
  

  const getHoldBannies = async () => {
    try {
      const response = await mintContract.methods.getBanny(account).call();
      setTokenIds(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account || !mintContract) return;

    getHoldBannies();
  }, [account, mintContract]);
  
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pt={24}
      flexDir="column"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        My Bannies
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {tokenIds?.map((v, i) => {
            return <NftCard key={i} tokenId={v} />;
        })}
      </Grid>
    </Flex>
  );
};

export default ListNSell;
