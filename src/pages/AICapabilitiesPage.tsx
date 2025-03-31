import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getCapabilities } from '../lib/api/capabilities';
import { AICapability } from '../types/capability';
import AICapabilitySection from '../components/ai-capabilities/AICapabilitySection';

interface AICapabilityContent extends Omit<AICapability, 'contents'> {
  technologies: string[];
  thumbnail: {
    url: string;
  };
  detail: string;
  gallery?: {
    url: string;
  }[];
  relatedCases?: {
    id: string;
    title: string;
    thumbnail: {
      url: string;
    };
  }[];
}

export default function AICapabilitiesPage() {
  const [capabilities, setCapabilities] = useState<AICapabilityContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCapabilities = async () => {
      try {
        // デバッグ用のログ追加
        console.log('API Key:', import.meta.env.VITE_MICROCMS_API_KEY);
        console.log('Service Domain:', import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN);
        
        const data = await getCapabilities();
        console.log('Fetched capabilities:', data);
        if (Array.isArray(data)) {
          setCapabilities(data as AICapabilityContent[]);
        } else {
          console.error('Invalid data format:', data);
          setError('データの形式が不正です');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchCapabilities();
  }, []);

  if (loading) return <Box p={8}>Loading...</Box>;
  if (error) return <Box p={8} color="red.500">{error}</Box>;

  const filterByCategory = (category: string) => {
    console.log(`Filtering for category: ${category}`);
    console.log('Available capabilities:', capabilities);
    const filtered = capabilities.filter(cap => {
      console.log(`Checking capability:`, cap);
      if (!cap.category || !Array.isArray(cap.category)) return false;
      return cap.category.some(cat => cat.startsWith(category));
    });
    console.log(`Filtered results for ${category}:`, filtered);
    return filtered;
  };

  return (
    <Container maxW="1200px" py={12}>
      {/* ヘッダー */}
      <Box mb={16} textAlign="center">
        <Heading 
          size="2xl" 
          mb={6}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          AIでできること
        </Heading>
        <Text 
          fontSize="xl" 
          color="gray.300"
          maxW="800px"
          mx="auto"
        >
          AIの可能性を最大限に活かし、ビジネスの効率化と革新を実現します
        </Text>
      </Box>

      {/* すべてのカテゴリを表示 */}
      {['text_creation（文章作成）', 'image_generation（画像生成）', 'video_creation（動画作成）', 'shift_management（シフト管理）'].map(category => (
        <AICapabilitySection
          key={category}
          title={category}
          challenge={category.includes('text_creation') ? '文章の作成が効率的に行える' : category.includes('image_generation') ? 'プロ品質の画像を簡単に作成できる' : category.includes('video_creation') ? '動画作成が自分でできる' : '自社に適したシフト管理システムを作れる'}
          contents={filterByCategory(category)}
        />
      ))}
    </Container>
  );
}