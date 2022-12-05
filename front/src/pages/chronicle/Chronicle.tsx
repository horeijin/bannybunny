import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";

const width = 512;
const height = 512;

const StoryContents = [
  {
    image: story1,
    contents: "지금까지의 지구 침략기",
    text1: "전 세계가 검게 물든 2022년 X월 X일,",
    text2: "나는 달에 살고 있는 바니족을 위해 함선 <버니호>에서 내려 지구로 왔다.",
    text3: "나의 목표는 지구 정복!",
    text4: "인간들을 모두 우리 바니족의 노예로 만들 것이다!",
  },
  {
    image: story2,
    contents: "함장의 결심 : 새로운 작전",
    text1: "원래 계획대로라면 지금쯤 인류의 절반은 사라져야 했다.",
    text2: "<버니호>의 함장은 지구로 내려간 깜깜무소식인 대원의 신변에 걱정이 들었다.",
    text3: "그런데 뭐? 게임에 빠져서 임무는 뒷전이라고?",
    text4: "이렇게 두 손 놓고 있을 수만은 없지. 새로운 작전 실행이다...",
  },
  {
    image: story3,
    contents: "또 다른 이야기의 시작 : BannyBunny",
    text1: "게임에 빠져 임무는 뒷전인 대원은 필요없다.",
    text2: "우리에겐 스펙이 향상된 <각성 바니>들이 있다.",
    text3: "지구인들아 절망에 눈물겨워해라!",
    text4: "우리 <각성 바니> 대원들이 지구를 점령하는 날이 머지 않았으니...",
  },
];

const Chronicle: FC = () => {
  const [page, setPage] = useState<number>(0);

  const onClickPage = (_page: number) => () => {
    setPage(_page);
  };
  const onClickPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(StoryContents.length - 1);
    }
  };
  const onClickNext = () => {
    if (page < StoryContents.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <Flex
      id="story"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl" color="black">
        Chronicle
      </Text>

      <Flex mb={4}>
        {StoryContents.map((_, i) => {
          return (
            <Box
              key={i}
              mx={1}
              w={4}
              h={4}
              rounded="full"
              bgColor={i === page ? "gray.300" : "gray.100"}
              onClick={onClickPage(i)}
              cursor="pointer"
            ></Box>
          );
        })}
      </Flex>
      <Flex alignItems="center">
        <Text
          onClick={onClickPrev}
          mr={12}
          fontSize="6xl"
          cursor="pointer"
          color="black"
        >
          ←
        </Text>
        <Flex width={width} minH={height} overflow="hidden">
          {StoryContents.map((v, i) => {
            return (
              <Box
                key={i}
                width={width}
                flex="none"
                ml={i === 0 ? `-${page}00%` : ""}
                style={{ transition: "all 0.3s ease-out" }}
              >
                <Image src={v.image} alt="Story" />
                {i === page && (
                  <>
                    <Text fontSize="2xl" w={width}>
                      {v.contents}
                    </Text>
                    <Text fontSize="xl" w={width}>
                      {v.text1}
                    </Text>
                    <Text fontSize="xl" w={width}>
                      {v.text2}
                    </Text>
                    <Text fontSize="xl" w={width}>
                      {v.text3}
                    </Text>
                    <Text fontSize="xl" w={width}>
                      {v.text4}
                    </Text>
                  </>
                )}
              </Box>
            );
          })}
        </Flex>
        <Text
          onClick={onClickNext}
          ml={12}
          fontSize="6xl"
          cursor="pointer"
          color="black"
        >
          →
        </Text>
      </Flex>
    </Flex>
  );
};

export default Chronicle;
