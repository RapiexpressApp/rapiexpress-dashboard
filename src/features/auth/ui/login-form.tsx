import {
  Button,
  Divider,
  Flex,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'

import { IconLock, IconMail } from '@tabler/icons-react'

import { motion } from 'motion/react'
import { useState } from 'react'

export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <Flex flex={1} justify="center" align="center" px={40} py={48} className="login-surface">
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: '100%',
          maxWidth: 428,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Paper p={44} radius={28} className="login-card">
          <Stack gap={28}>
            {/* BRAND + HEADER */}

            <Stack gap={18}>
              <Image src="/image/logo.webp" alt="Rapiexpress" w={48} h={48} fit="contain" />

              <Stack gap={6}>
                <Title
                  order={2}
                  fw={800}
                  style={{
                    fontSize: '1.7rem',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Bienvenido de nuevo
                </Title>

                <Text
                  c="dimmed"
                  size="sm"
                  style={{
                    lineHeight: 1.55,
                  }}
                >
                  Ingresa tus credenciales para acceder al panel administrativo.
                </Text>
              </Stack>
            </Stack>

            {/* FORM */}

            <Stack gap={20}>
              <TextInput
                label="Correo electrónico"
                placeholder="correo@rapiexpress.com"
                leftSection={<IconMail size={18} stroke={1.6} />}
                size="md"
                radius="md"
              />

              <Stack gap={8}>
                <PasswordInput
                  label="Contraseña"
                  placeholder="••••••••"
                  leftSection={<IconLock size={18} stroke={1.6} />}
                  visible={passwordVisible}
                  onVisibilityChange={setPasswordVisible}
                  size="md"
                  radius="md"
                />
              </Stack>

              <Button
                size="md"
                radius="xl"
                color="rapiexpress"
                fullWidth
                mt={6}
                style={{
                  height: 52,
                  fontWeight: 700,
                  boxShadow: '0 12px 28px rgba(22,62,158,.28)',
                }}
              >
                Ingresar
              </Button>
            </Stack>

            <Divider color="var(--mantine-color-default-border)" />

            <Text ta="center" size="xs" c="dimmed">
              © {new Date().getFullYear()} Rapiexpress · Panel administrativo
            </Text>
          </Stack>
        </Paper>
      </motion.div>
    </Flex>
  )
}
