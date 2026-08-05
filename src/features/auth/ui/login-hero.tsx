import { Flex, Image, Stack, Text, Title } from '@mantine/core'
import { LoginStats } from '~/features/auth/ui/login-stats'

export function LoginHero() {
  return (
    <Flex
      flex={1}
      visibleFrom="md"
      direction="column"
      justify="center"
      p={80}
      className="auth-panel"
    >
      <Stack
        gap={64}
        maw={620}
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Image src="/image/logo.webp" alt="Rapiexpress" w={200} fit="contain" />

        <Stack gap={24}>
          <Text
            c="rgba(255,255,255,.65)"
            fw={700}
            size="sm"
            tt="uppercase"
            style={{
              letterSpacing: 2,
            }}
          >
            Plataforma logística inteligente
          </Text>

          <Title
            c="white"
            fw={900}
            style={{
              fontSize: '4rem',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            Gestión logística
            <br />
            moderna,
            <br />
            rápida y segura.
          </Title>

          <Text
            c="rgba(255,255,255,.75)"
            size="xl"
            maw={520}
            style={{
              lineHeight: 1.7,
            }}
          >
            Administra envíos, controla operaciones y gestiona toda tu logística desde una
            plataforma centralizada.
          </Text>
        </Stack>

        <LoginStats />
      </Stack>
    </Flex>
  )
}
