import React from 'react';
import { Box, Heading, Text, HStack, VStack, Icon, Image, Tag, useBreakpointValue, WrapItem } from '@chakra-ui/react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface AICapabilityContent {
  id: string;
  title: string;
  description: string;
  category: string[];
  technologies: string[];
  thumbnail: {
    url: string;
  };
}

interface AICapabilitySectionProps {
  title: string;
  challenge: string;
  contents: AICapabilityContent[];
}

// カテゴリの内部値と表示名のマッピング
const categoryMapping = {
  '文章作成': 'text_creation',
  '画像生成': 'image_generation',
  '動画作成': 'video_creation',
  'シフト管理': 'shift_management'
};

// フィルタリング時に使用
const filterByCategory = (capabilities: any[], category: string) => {
  const internalCategory = Object.entries(categoryMapping).find(
    ([display]) => display === category
  )?.[1];
  
  return capabilities.filter(cap => 
    cap.category.includes(category) || (internalCategory && cap.category.includes(internalCategory))
  );
};

// カテゴリの表示名マッピング
const categoryDisplayNames: { [key: string]: string } = {
  'text_creation': '文章作成',
  'image_generation': '画像生成',
  'video_creation': '動画作成',
  'shift_management': 'シフト管理'
};

// カテゴリ名を変換する関数
const getCategoryDisplayName = (category: string) => {
  return categoryDisplayNames[category] || category;
};

// カルーセルのカスタムスタイル
const customStyles = `
  .slick-slide {
    padding: 0 10px;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .capability-slider {
    margin: 0 auto;
  }
  .slick-prev, .slick-next {
    display: none !important;
  }
`;

const AICapabilitySection: React.FC<AICapabilitySectionProps> = ({
  title,
  challenge,
  contents
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // 関連コンテンツと同じスライダー設定を使用
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,  // PCでは4枚表示
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  
  return (
    <Box
      py={isMobile ? 4 : 12}
      px={isMobile ? 4 : 12}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,184,212,0.05) 0%, rgba(10,10,30,0) 100%)',
        borderRadius: 'xl',
        zIndex: -1,
      }}
    >
      {/* ヘッダー部分 */}
      <Box mb={isMobile ? 4 : 8}>
        <HStack justify="space-between" align="center" mb={2}>
          <Heading 
            as="h2" 
            size={isMobile ? "md" : "lg"}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            {title}
          </Heading>
          {isMobile && (
            <Link to={`/category/${title}`}>
              <HStack spacing={1} color="cyan.400">
                <Text fontSize="sm">もっと見る</Text>
                <Icon as={FaChevronRight} w={3} h={3} />
              </HStack>
            </Link>
          )}
        </HStack>
        <Text 
          fontSize={isMobile ? "sm" : "lg"}
          color="gray.300"
          maxW="800px"
        >
          {challenge}
        </Text>
      </Box>

      {/* カルーセル表示 */}
      <Box maxW="1200px" mx="auto">
        <style>{customStyles}</style>
        <Box className="capability-slider">
          <Slider {...sliderSettings}>
            {contents.map((content) => (
              <Box key={content.id} px={2}>
                <Link to={`/tools/${content.id}`}>
                  <Box
                    bg="rgba(0, 184, 212, 0.05)"
                    borderRadius="lg"
                    overflow="hidden"
                    h="280px"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(0, 184, 212, 0.2)',
                    }}
                  >
                    <Box 
                      position="relative"
                      w="100%"
                      h="160px"
                      overflow="hidden"
                    >
                      <Image
                        src={content.thumbnail?.url}
                        alt={content.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <VStack 
                      align="start" 
                      p={4} 
                      spacing={2}
                      h="120px"
                    >
                      <Heading 
                        size="sm"
                        color="white"
                        noOfLines={2}
                      >
                        {content.title}
                      </Heading>
                      <Text 
                        fontSize="sm"
                        color="gray.300"
                        noOfLines={2}
                        lineHeight="1.5"
                      >
                        {content.description}
                      </Text>
                      <HStack 
                        spacing={2}
                        color="cyan.300"
                        _hover={{ color: "cyan.400" }}
                        mt="auto"
                      >
                        <Text fontSize="sm">詳しく見る</Text>
                        <Icon as={FaArrowRight} />
                      </HStack>
                    </VStack>
                  </Box>
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default AICapabilitySection; 