import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Image, 
  Grid, 
  Tag,
  Wrap,
  WrapItem,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { getCapabilityById } from '../../lib/api/capabilities';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

interface GalleryImage {
  url: string;
}

interface RelatedCapability {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

interface Capability {
  id: string;
  title: string;
  description: string;
  category: string[];
  technologies: string[];
  thumbnail: {
    url: string;
  };
  detail: string;
  gallery?: GalleryImage[];
  relatedCapabilities?: RelatedCapability[];
  relatedCases?: any[]; // Assuming a simple structure for relatedCases
}

// カルーセルのカスタムスタイル
const customStyles = `
  .slick-slide {
    padding: 0 10px;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .gallery-slider, .related-content-slider {
    margin: 0 auto;
    max-width: 800px;
  }
  .slick-prev, .slick-next {
    display: none !important;
  }
`;

// カテゴリの表示名マッピング
const categoryDisplayNames: { [key: string]: string } = {
  'text_creation': '文章作成',
  'image_generation': '画像生成',
  'video_creation': '動画作成',
  'shift_management': 'シフト管理'
};

// カテゴリ名を変換する関数
const getCategoryDisplayName = (category: string) => {
  // カテゴリから日本語部分を抽出
  const match = category.match(/（(.+)）/);
  if (match) {
    return match[1];  // 括弧内の日本語を返す
  }
  // 既存のマッピングをフォールバックとして使用
  return categoryDisplayNames[category] || category;
};

// 共通のスライダー設定をベースとして定義
const baseSliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
};

// ギャラリー用のスライダー設定
const gallerySliderSettings = {
  ...baseSliderSettings,
  speed: 8000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

// 関連コンテンツ用のスライダー設定
const relatedContentSliderSettings = {
  ...baseSliderSettings,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // タブレット
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // スマホ（横向き）
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, // スマホ（縦向き）
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
};

export default function AICapabilityDetail() {
  const { id } = useParams();
  const [capability, setCapability] = useState<Capability | null>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const data = await getCapabilityById(id);
        console.log('Fetched capability data:', data); // データ確認用
        console.log('Related capabilities:', data.relatedCapabilities); // 関連AI機能確認用
        console.log('Related cases:', data.relatedCases); // 関連事例確認用
        setCapability(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return (
    <Container maxW="1200px" py={12}>
      <Box textAlign="center" color="white">Loading...</Box>
    </Container>
  );
  
  if (!capability) return (
    <Container maxW="1200px" py={12}>
      <Box textAlign="center" color="white">Not found</Box>
    </Container>
  );

  // 両方の関連コンテンツを結合して表示
  const allRelatedContents = [
    ...(capability.relatedCapabilities || []).map(content => ({
      ...content,
      contentType: 'capability'
    })),
    ...(capability.relatedCases || []).map(content => ({
      ...content,
      contentType: 'case'
    }))
  ];

  return (
    <Container maxW="1200px" py={12}>
      <style>{customStyles}</style>

      {/* ヘッダー */}
      <Box mb={16} textAlign="center">
        <Heading 
          size={isMobile ? "xl" : "2xl"}
          mb={6}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {capability.title}
        </Heading>

        {/* カテゴリ */}
        <Wrap spacing={2} mb={4} justify="center">
          {capability.category?.map((cat: string) => (
            <WrapItem key={cat}>
              <Tag 
                size="md"
                bg="rgba(255, 146, 3, 0.7)"  // オレンジ系の背景
                color="white"
                fontWeight="bold"
              >
                {getCategoryDisplayName(cat)}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
        
        {/* 使用AI */}
        <Wrap spacing={2} mb={6} justify="center">
          {capability.technologies?.map((tech: string) => (
            <WrapItem key={tech}>
              <Tag 
                size="md"
                bg="rgba(0, 184, 212, 0.15)"  // シアン系の背景（薄め）
                color="cyan.300"               // シアン系のテキスト
                fontWeight="medium"
              >
                {tech}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* 概要 */}
      <Box maxW="800px" mx="auto" mb={16}>
        <Text 
          fontSize={isMobile ? "lg" : "xl"}
          color="gray.100"
          lineHeight="1.8"
        >
          {capability.description}
        </Text>
      </Box>

      {/* 詳細セクション */}
      <Box mb={24} mx="-24px" px={6}>
        <Heading 
          size={isMobile ? "lg" : "xl"}
          mb={8}
          color="white"
          textAlign="center"
        >
          詳細
        </Heading>
        <Box 
          className="rich-text"
          color="gray.100"
          fontSize={isMobile ? "md" : "lg"}
          lineHeight="1.8"
          maxW="800px"
          mx="auto"
          sx={{
            'p': { mb: 6 },
            'h2': { 
              fontSize: ['xl', '2xl'], 
              fontWeight: 'bold', 
              mb: 4, 
              mt: 8,
              bgGradient: "linear(to-r, cyan.400, blue.500)",
              bgClip: "text"
            },
            'ul': { pl: 8, mb: 6 },
            'li': { mb: 3 },
          }}
          dangerouslySetInnerHTML={{ __html: capability.detail }}
        />
      </Box>

      {/* 区切り線 */}
      <Box 
        w="100%" 
        h="1px" 
        bg="linear-gradient(90deg, transparent, rgba(0,184,212,0.2), transparent)"
        mb={24}
      />

      {/* 関連コンテンツ */}
      {(capability.relatedCapabilities?.length > 0 || capability.relatedCases?.length > 0) && (
        <Box mb={24} mx="-24px">
          <Heading 
            size={isMobile ? "lg" : "xl"}
            mb={8}
            color="white"
            textAlign="center"
          >
            関連コンテンツ
          </Heading>
          <Box className="related-content-slider" px={4}>
            <Slider {...relatedContentSliderSettings}>
              {/* AI機能の関連コンテンツ */}
              {capability.relatedCapabilities?.map((content) => (
                <Link 
                  key={content.id}
                  to={`/tools/${content.id}`}
                >
                  <Box px={2}>
                    <Box
                      bg="rgba(0, 184, 212, 0.05)"
                      borderRadius="lg"
                      overflow="hidden"
                      transition="all 0.3s"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 20px rgba(0, 184, 212, 0.2)',
                      }}
                    >
                      <Box 
                        position="relative"
                        w="100%"
                        h={isMobile ? "120px" : "160px"}
                        overflow="hidden"
                      >
                        <Image
                          src={content.thumbnail?.url}
                          alt={content.title}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                        />
                      </Box>
                      <VStack 
                        align="start" 
                        p={3} 
                        spacing={2}
                        minH={isMobile ? "80px" : "100px"}
                      >
                        <Tag 
                          size="sm"
                          bg="rgba(0, 184, 212, 0.2)"
                          color="cyan.300"
                        >
                          AI機能
                        </Tag>
                        <Box 
                          h={isMobile ? "48px" : "56px"}
                          w="100%"
                        >
                          <Heading 
                            size="sm"
                            color="white"
                            noOfLines={2}
                            fontSize={isMobile ? "13px" : "sm"}
                            lineHeight="1.4"
                          >
                            {content.title}
                          </Heading>
                        </Box>
                      </VStack>
                    </Box>
                  </Box>
                </Link>
              ))}

              {/* 事例の関連コンテンツ */}
              {capability.relatedCases?.map((content) => (
                <Link 
                  key={content.id}
                  to={`/cases/${content.id}`}
                >
                  <Box px={2}>
                    <Box
                      bg="rgba(255, 146, 3, 0.05)"
                      borderRadius="lg"
                      overflow="hidden"
                      transition="all 0.3s"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 20px rgba(255, 146, 3, 0.2)',
                      }}
                    >
                      <Box 
                        position="relative"
                        w="100%"
                        h={isMobile ? "120px" : "160px"}
                        overflow="hidden"
                      >
                        <Image
                          src={content.thumbnail?.url}
                          alt={content.title}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                        />
                      </Box>
                      <VStack 
                        align="start" 
                        p={3} 
                        spacing={2}
                        minH={isMobile ? "80px" : "100px"}
                      >
                        <Tag 
                          size="sm"
                          bg="rgba(255, 146, 3, 0.2)"
                          color="orange.300"
                        >
                          事例
                        </Tag>
                        <Box 
                          h={isMobile ? "48px" : "56px"}
                          w="100%"
                        >
                          <Heading 
                            size="sm"
                            color="white"
                            noOfLines={2}
                            fontSize={isMobile ? "13px" : "sm"}
                            lineHeight="1.4"
                          >
                            {content.title}
                          </Heading>
                        </Box>
                      </VStack>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Slider>
          </Box>
        </Box>
      )}
    </Container>
  );
} 