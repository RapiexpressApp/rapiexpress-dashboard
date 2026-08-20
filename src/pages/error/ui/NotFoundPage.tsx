import { Button, Container, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

import image from '/image/404.svg'

const MotionDiv = motion.div

export function NotFoundPage() {
  return (
    <Container
      size="xl"
      mih="100vh"
      px="md"
      py="xl"
      style={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <SimpleGrid
        w="100%"
        cols={{ base: 1, sm: 2 }}
        spacing="xl"
        verticalSpacing="xl"
        style={{
          alignItems: 'center',
        }}
      >
        {/* Ilustración */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* 404 decorativo */}
          <Text
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(7rem, 18vw, 16rem)',
              fontWeight: 900,
              lineHeight: 1,
              opacity: 0.035,
              userSelect: 'none',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            404
          </Text>

          {/* Imagen flotante */}
          <MotionDiv
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: 420,
            }}
          >
            <Image src={image} alt="Página no encontrada" fit="contain" w="100%" />
          </MotionDiv>
        </MotionDiv>

        {/* Contenido */}
        <MotionDiv
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: 'easeOut',
          }}
          style={{
            width: '100%',
          }}
        >
          <Stack
            gap="md"
            align="center"
            style={{
              textAlign: 'center',
            }}
          >
            {/* Error */}
            <Text size="sm" fw={700} c="blue" tt="uppercase" lts={1.5}>
              Error 404
            </Text>

            {/* Título */}
            <Title
              order={1}
              fw={800}
              lh={1.05}
              ta="center"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                maxWidth: 560,
              }}
            >
              Parece que te has perdido.
            </Title>

            {/* Descripción */}
            <Text
              c="dimmed"
              size="lg"
              lh={1.6}
              ta="center"
              style={{
                maxWidth: 500,
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
              }}
            >
              La página que estás buscando no existe o fue movida. Pero tranquilo, podemos llevarte
              de vuelta.
            </Text>

            {/* Botón */}
            <MotionDiv
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                component={Link}
                to="/"
                size="md"
                radius="md"
                mt="sm"
                leftSection={<IconArrowLeft size={18} />}
              >
                Volver al inicio
              </Button>
            </MotionDiv>
          </Stack>
        </MotionDiv>
      </SimpleGrid>
    </Container>
  )
}
