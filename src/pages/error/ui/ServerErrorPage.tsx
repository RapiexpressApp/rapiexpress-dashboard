import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { IconAlertTriangle, IconArrowLeft, IconRefresh } from '@tabler/icons-react'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

interface Props extends ErrorComponentProps {}

const MotionDiv = motion.div

export function ServerErrorPage({ error }: Props) {
  console.error(error)

  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <Container
      size="md"
      mih="100vh"
      px="md"
      py="xl"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <MotionDiv
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: '100%',
        }}
      >
        <Stack
          align="center"
          gap="xl"
          style={{
            textAlign: 'center',
          }}
        >
          {/* =================================
              ERROR 500
          ================================= */}
          <MotionDiv
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              type: 'spring',
              stiffness: 120,
              damping: 14,
            }}
            style={{
              position: 'relative',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Número 500 */}
            <MotionDiv
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Text
                aria-hidden
                style={{
                  fontSize: 'clamp(8rem, 28vw, 16rem)',
                  fontWeight: 900,
                  lineHeight: 0.75,
                  letterSpacing: '-0.09em',
                  color: 'var(--mantine-color-red-filled)',
                  opacity: 0.07,
                  userSelect: 'none',
                }}
              >
                500
              </Text>
            </MotionDiv>

            {/* Icono de alerta */}
            <MotionDiv
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.45,
                type: 'spring',
                stiffness: 200,
                damping: 12,
              }}
              style={{
                position: 'absolute',
                top: '5%',
                right: '2%',
                width: 'clamp(38px, 7vw, 52px)',
                height: 'clamp(38px, 7vw, 52px)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--mantine-color-red-filled)',
                color: 'white',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                zIndex: 2,
              }}
            >
              <IconAlertTriangle size="clamp(20px, 4vw, 26px)" stroke={1.8} />
            </MotionDiv>
          </MotionDiv>

          {/* =================================
              MENSAJE
          ================================= */}
          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.35,
              ease: 'easeOut',
            }}
            style={{
              width: '100%',
            }}
          >
            <Stack
              align="center"
              gap="sm"
              style={{
                maxWidth: 560,
                margin: '0 auto',
              }}
            >
              <Text size="sm" fw={700} c="red" tt="uppercase" lts={1.5}>
                Error 500
              </Text>

              <Title
                order={1}
                fw={800}
                lh={1.05}
                ta="center"
                style={{
                  fontSize: 'clamp(2rem, 7vw, 3.8rem)',
                  maxWidth: 600,
                }}
              >
                Algo salió mal
              </Title>

              <Text
                c="dimmed"
                lh={1.6}
                ta="center"
                style={{
                  maxWidth: 480,
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
                }}
              >
                Ocurrió un error inesperado mientras procesábamos tu solicitud. Intenta nuevamente o
                vuelve al inicio.
              </Text>
            </Stack>
          </MotionDiv>

          {/* =================================
              ACCIONES
          ================================= */}
          <MotionDiv
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: 'easeOut',
            }}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack
              gap="sm"
              align="center"
              style={{
                width: '100%',
                maxWidth: 420,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <MotionDiv
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  flex: '1 1 180px',
                }}
              >
                <Button
                  fullWidth
                  size="md"
                  radius="md"
                  onClick={handleRetry}
                  leftSection={<IconRefresh size={18} />}
                >
                  Intentar nuevamente
                </Button>
              </MotionDiv>

              <MotionDiv
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  flex: '1 1 180px',
                }}
              >
                <Button
                  component={Link}
                  to="/"
                  fullWidth
                  variant="default"
                  size="md"
                  radius="md"
                  leftSection={<IconArrowLeft size={18} />}
                >
                  Volver al inicio
                </Button>
              </MotionDiv>
            </Stack>
          </MotionDiv>
        </Stack>
      </MotionDiv>
    </Container>
  )
}
