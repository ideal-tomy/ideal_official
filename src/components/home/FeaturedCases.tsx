import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Button, Flex, AspectRatio, Link, Grid, VStack, Image, Tag, Wrap, WrapItem } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight } from 'react-icons/fa'
import { client } from '../../lib/microcms'
import { Link as RouterLink } from 'react-router-dom'
import PageHeader from '../common/PageHeader'

// 主要事例データ
const featuredCases = [
  {
    id: 'ai-trading-platform',
    title: 'AIツールプラットフォーム',
    category: 'AI',
    description: '開発AIツールの活用と、自社カスタマイズ可能なローカル環境構築、大規模機械学習環境の構築まで対応可能',
    image: '/src/assets/images/case-placeholder-1.jpg',
    color: '#00b8d4',
  },
  {
    id: 'vr-training-system',
    title: 'VR空間の設計と活用',
    category: 'メタバース',
    description: 'イベント会場設営からメタバース店舗建築、独自メタバース空間でのイベント運営からアバター制作まで全て対応可能。',
    image: '/src/assets/images/case-placeholder-2.jpg',
    color: '#9c27b0',
  },
  {
    id: 'global-ecommerce',
    title: 'AI搭載webサイトも実現',
    category: 'ウェブ開発',
    description: '多言語対応可能なAIチャットボット搭載のwebサイト構築、Reactでのwebページ製作から保守管理まで',
    image: '/src/assets/images/case-placeholder-3.jpg',
    color: '#2196f3',
  },
]

const FeaturedCases: React.FC = ({ isHomePage = false }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [data, setData] = useState<any>(null)
  
  // アニメーションの設定
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  
  // パララックス効果
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const elements = parallaxRef.current.querySelectorAll('.parallax-item')
      
      elements.forEach((element, index) => {
        const speed = index % 2 === 0 ? 0.05 : -0.05 // 速度を0.1から0.05に減らして、より自然な動きに
        const yPos = window.scrollY * speed
        const htmlElement = element as HTMLElement
        const currentTransform = htmlElement.style.transform || ''
        
        // transform属性全体を上書きするのではなく、transformプロパティのみを更新
        // 既存のtransformスタイルを保持
        if (currentTransform.includes('translateY')) {
          // 既存のtranslateYを更新
          htmlElement.style.transform = currentTransform.replace(/translateY\([^)]*\)/, `translateY(${yPos}px)`) + ' translateZ(0)'
        } else {
          // translateYがなければ追加
          htmlElement.style.transform = `${currentTransform} translateY(${yPos}px) translateZ(0)`
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await client.get({ endpoint: 'cases' })
        setData(response)
      } catch (error) {
        console.error('Error fetching cases:', error)
      }
    }
    fetchCases()
  }, [])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }
  
  return (
    <Box bg="deepBlue">
      {/* 事例紹介ページの場合のみPageHeaderを表示 */}
      {!isHomePage && (
        <PageHeader 
          title="事例紹介" 
          subtitle="私たちが手がけた事例をご紹介します" 
        />
      )}

      <Container maxW="1200px" py={12}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* セクションヘッダー */}
          <Flex direction="column" align="center" textAlign="center" mb={16}>
            <motion.div variants={itemVariants}>
              <Text
                color="neonBlue"
                fontWeight="bold"
                letterSpacing="wider"
                textTransform="uppercase"
                fontSize="sm"
                mb={2}
              >
                実績紹介
              </Text>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                mb={4}
              >
                <Text as="span" color="neonBlue">革新的なソリューション</Text>
                で成功を実現
              </Heading>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Text
                color="gray.300"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                私たちは様々な業界のクライアントと協力し、革新的なテクノロジーソリューションを提供してきました。以下は、私たちが誇る主要な成功事例の一部です。
              </Text>
            </motion.div>
          </Flex>
          
          {/* 事例カード */}
          <Box ref={parallaxRef} position="relative" zIndex="10" mb="80px" mt="40px">
            <Grid 
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)"
              }}
              gap={8}
            >
              {data?.contents.map((item: any) => (
                <RouterLink 
                  to={`/cases/${item.id}`} 
                  key={item.id}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    borderRadius="lg"
                    overflow="hidden"
                    bg="rgba(255, 255, 255, 0.05)"
                    transition="all 0.3s"
                    _hover={{ transform: 'translateY(-4px)' }}
                    h="100%"
                  >
                    <Image
                      src={item.thumbnail.url}
                      alt={item.title}
                      objectFit="cover"
                      w="100%"
                      h="200px"
                    />
                    <VStack align="start" p={6} spacing={4}>
                      <Heading 
                        size="md" 
                        color="white"
                        noOfLines={2}
                      >
                        {item.title}
                      </Heading>

                      <Wrap spacing={2}>
                        {item.categories?.map((category: string) => (
                          <WrapItem key={category}>
                            <Tag 
                              size="sm" 
                              colorScheme="purple"
                              bg="rgba(159, 122, 234, 0.3)"
                              color="white"
                            >
                              {category}
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                      
                      <Wrap spacing={2}>
                        {item.technologies?.map((tech: string) => (
                          <WrapItem key={tech}>
                            <Tag 
                              size="sm" 
                              colorScheme="blue"
                              bg="rgba(66, 153, 225, 0.3)"
                              color="white"
                            >
                              {tech}
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>

                      <Text 
                        color="gray.100"
                        fontSize="md"
                        noOfLines={3}
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </Box>
                </RouterLink>
              ))}
            </Grid>
          </Box>
          
          {/* 「もっと見る」ボタン */}
          <motion.div variants={itemVariants}>
            <Flex justify="center">
              <Button
                as={RouterLink}
                to="/cases"
                variant="secondary"
                size="lg"
                rightIcon={<FaArrowRight />}
              >
                すべての事例を見る
              </Button>
            </Flex>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default FeaturedCases
