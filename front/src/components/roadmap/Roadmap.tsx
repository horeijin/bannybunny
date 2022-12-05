import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import RoadmapCard, { RoadmapCardProps } from "../roadmapcard/RoadmapCard";

// PLN justifyContent "" - 카드 왼쪽 위치, "end" - 카드 오른쪽 위치
// PLN 로드맵 카드 name, description 변경
// PLN bgGradientColor 색상 변경 참조 https://chakra-ui.com/docs/styled-system/theme
const roadmapContents: RoadmapCardProps[] = [
  {
    justifyContent: "center",
    animation: "slideInLeft",
    name: "Membership Launching",
    description: "모든 월렛 유저에게 Bannybunny NFT 에어드랍 및 보상 개시",
    bgGradientColor: "gray",
  },
  {
    justifyContent: "center",
    animation: "slideInLeft",
    name: "Event Launching",
    description:
      "개발사와 함께 멤버십 등급 회원(각성 Bunny) 별로 참여 가능한 이벤트 진행",
    bgGradientColor: "blue",
  },
  {
    justifyContent: "center",
    animation: "slideInLeft",
    name: "CARROT Farm Launching",
    description:
      "이벤트에 참여하여 얻은 포인트(CARROT)으로 농장에 예치하거나 각성 Banny 업그레이드",
    bgGradientColor: "gray",
  },
  {
    justifyContent: "center",
    animation: "slideInLeft",
    name: "P2E GAME Open",
    description: "각성 Banny를 활용한 멤버십 전용 P2E 게임으로 확장",
    bgGradientColor: "gray",
  },
];

const Roadmap: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      pb={24}
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        RoadMap
      </Text>
      {roadmapContents.map((v, i) => {
        return (
          <RoadmapCard
            key={i}
            justifyContent={v.justifyContent}
            animation={v.animation}
            name={v.name}
            description={v.description}
            bgGradientColor={v.bgGradientColor}
          />
        );
      })}
    </Flex>
  );
};
export default Roadmap;
