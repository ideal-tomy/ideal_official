import React, { useState } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, FormControl, FormLabel, Input, Textarea, Button, Select, useToast, FormErrorMessage, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'

// 
const ContactPage: React.FC = () => {
  const toast = useToast()

  // 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  // 
  const serviceOptions = [
    { value: '', label: '' },
    { value: 'ai-blockchain', label: 'AI' },
    { value: 'metaverse', label: '' },
    { value: 'web-development', label: '' },
    { value: 'app-development', label: '' },
    { value: 'game-development', label: '' },
    { value: 'english-consulting', label: '' },
    { value: 'study-abroad', label: '' },
    { value: 'career-consulting', label: '' },
    { value: 'other', label: '' }
  ]

  // 
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: '',
      content: ''
    },
    {
      icon: FaPhone,
      title: '',
      content: '03-XXXX-XXXX'
    },
    {
      icon: FaEnvelope,
      title: '',
      content: 'info@ideal-company.com'
    },
    {
      icon: FaBuilding,
      title: '',
      content: ' 9:00 - 18:00'
    }
  ]

  // 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // 
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = ''
    }
    
    if (!formData.email.trim()) {
      newErrors.email = ''
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = ''
    }
    
    if (!formData.message.trim()) {
      newErrors.message = ''
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // 
    setIsSubmitting(true)
    
    // 
    setTimeout(() => {
      toast({
        title: '',
        description: '',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
      
      // 
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
      
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
      {/* */}
      <PageHeader 
        title="" 
        subtitle=""
      />
      
      <Box as="section" py={20} position="relative" overflow="hidden">
        {/* SpaceBackground - Layout */}
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack spacing={16} as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            {/* */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} width="100%" as={motion.div} variants={itemVariants}>
              {/* */}
              <Box 
                p={8} 
                borderRadius="lg" 
                bg="rgba(10, 10, 26, 0.6)" 
                backdropFilter="blur(10px)"
                borderWidth="1px"
                borderColor="neonBlue"
                boxShadow="0 0 20px rgba(0, 184, 212, 0.2)"
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6} align="stretch">
                    <FormControl isRequired isInvalid={!!errors.name}>
                      <FormLabel color="whiteAlpha.900">お名前</FormLabel>
                      <Input 
                        name="name"
                        id="contact-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田 太郎"
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                      />
                      {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.email}>
                      <FormLabel color="whiteAlpha.900">メールアドレス</FormLabel>
                      <Input 
                        name="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="example@domain.com"
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                      />
                      {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                    </FormControl>

                    <FormControl>
                      <FormLabel color="whiteAlpha.900">会社名</FormLabel>
                      <Input 
                        name="company"
                        id="contact-company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="株式会社例"
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="whiteAlpha.900">電話番号</FormLabel>
                      <Input 
                        name="phone"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="000-0000-0000"
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="whiteAlpha.900">ご用件</FormLabel>
                      <Select 
                        name="service"
                        id="contact-service"
                        value={formData.service}
                        onChange={handleChange}
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                      >
                        {serviceOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.message}>
                      <FormLabel color="whiteAlpha.900">お問い合わせ内容</FormLabel>
                      <Textarea 
                        name="message"
                        id="contact-message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="ご用件の詳細をご記入ください"
                        bg="rgba(10, 10, 26, 0.5)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _hover={{ borderColor: 'neonBlue' }}
                        _focus={{ borderColor: 'neonBlue', boxShadow: '0 0 0 1px #00b8d4' }}
                        minH="120px"
                      />
                      {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
                    </FormControl>

                    <Button 
                      type="submit"
                      colorScheme="cyan"
                      size="lg"
                      isLoading={isSubmitting}
                      loadingText="送信中..."
                      _hover={{ bg: 'neonBlue' }}
                      _active={{ bg: 'neonBlue' }}
                    >
                      送信する
                    </Button>
                  </VStack>
                </form>
              </Box>

              {/* */}
              <VStack spacing={8} align="stretch">
                {contactInfo.map((info, index) => (
                  <Box 
                    key={index} 
                    p={6} 
                    borderRadius="lg" 
                    bg="rgba(10, 10, 26, 0.6)" 
                    backdropFilter="blur(10px)"
                    borderWidth="1px"
                    borderColor="neonBlue"
                    boxShadow="0 0 20px rgba(0, 184, 212, 0.2)"
                  >
                    <Flex align="center">
                      <Icon as={info.icon} w={8} h={8} color="neonBlue" mr={4} />
                      <Box>
                        <Text fontWeight="bold" color="white" mb={1}>
                          {info.title}
                        </Text>
                        <Text color="whiteAlpha.800">
                          {info.content}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}

                {/* */}
                <Box 
                  borderRadius="lg" 
                  overflow="hidden" 
                  borderWidth="1px"
                  borderColor="neonBlue"
                  boxShadow="0 0 20px rgba(0, 184, 212, 0.2)"
                  height="300px"
                  position="relative"
                >
                  {/* */}
                  <Box 
                    bg="rgba(10, 10, 26, 0.6)" 
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="whiteAlpha.800" fontSize="lg">表示</Text>
                  </Box>
                </Box>
              </VStack>
            </SimpleGrid>

            {/* FAQ */}
            <Box 
              width="100%" 
              as={motion.div} 
              variants={itemVariants}
              p={10}
              borderRadius="xl"
              bg="rgba(26, 43, 94, 0.5)"
              backdropFilter="blur(8px)"
              boxShadow="0 0 30px rgba(0, 184, 212, 0.3)"
              borderWidth="1px"
              borderColor="neonBlue"
              textAlign="center"
            >
              <Heading as="h2" size="xl" mb={4} color="white">
                よくある質問
              </Heading>
              <Text fontSize="lg" mb={6} color="whiteAlpha.900">
                お問い合わせフォームに記載のない質問やお問い合わせ内容については、FAQをご覧ください。
              </Text>
              <Button
                variant="outline"
                colorScheme="blue"
                size="lg"
                px={8}
                py={6}
                fontSize="md"
              >
                FAQを見る
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default ContactPage
