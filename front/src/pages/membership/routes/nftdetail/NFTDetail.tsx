import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import { IMetadata } from "../../../../components/nftcard/NftCard";
import axios from "axios";

interface NFTDetailProps {
  account: string;
}

const NFTDetail: FC<NFTDetailProps> = ({account}) => {
  const {tokenId} = useParams();
  const [metadata, setMetadata] = useState<IMetadata>();

  const getMetadata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${tokenId}.json` // json파일(메타데이터) 업로드한 피나타 주소를 여기에 넣어주세요
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!tokenId) return;

    getMetadata();
  }, [tokenId]);

  return (
    <>
      <Flex justifyContent="center" alignItems="center" minH="100vh">
        <Box
        w={500}
        as='video'
        autoPlay
        loop
        muted
        playsInline
        src={metadata?.image}
        objectFit='contain'
        rounded="2xl"
        />
        <Box w={400} ml={8}>
          <Text mt={2} fontSize="4xl" fontWeight="bold">
            {metadata?.name}
          </Text>
          <Text mt={2} mb={8} fontSize="2xl">
            {metadata?.description}
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {metadata?.attributes.map((v, i) => {
              return (
                <Box
                  key={i}
                  bgColor="gray.50"
                  p={4}
                  rounded="2xl"
                  textAlign="center"
                >
                  <Text fontWeight="bold">{v.trait_type}</Text>
                  <Text mt={1}>{v.value}</Text>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Flex>
      <Link to={`/membership/listnsell`}>
        <Button position="absolute" top={300} left={24}>
          ← Back
        </Button>
      </Link>
    </>
  );
};
export default NFTDetail;
