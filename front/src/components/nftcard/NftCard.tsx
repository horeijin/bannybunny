import { Box, Text, Image, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";


export interface IMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

export interface NftCardProps{
  tokenId : string;
}

const NftCard: FC<NftCardProps> = ({ tokenId }) => {
  const [metadata, setMetadata] = useState<IMetadata>();

  //메타데이터 가져오는 함수
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
    getMetadata();
  }, []);

  return (
    <Box w={300} bgColor="gray.50" shadow="md" rounded="2xl" p={4}>
      <Box
      as='video'
      autoPlay
      loop
      muted
      playsInline
      src={metadata?.image}
      objectFit='contain'
      rounded="2xl"
      />
      <Text mt={2} fontSize="2xl" fontWeight="bold">
        {metadata?.name}
      </Text>
      <Text>{metadata?.description}</Text>
      <Link to={`/membership/nftdetail/${tokenId}`} key={tokenId}>
        <Button my={4}>Detail</Button>
      </Link>
    </Box>
  );
};

export default NftCard;