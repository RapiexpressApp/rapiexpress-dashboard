import { Flex } from '@mantine/core'
import { LoginForm } from '~/features/auth/ui/login-form'
import { LoginHero } from '~/features/auth/ui/login-hero'

export function LoginPage() {
  return (
    <Flex mih="100vh">
      <LoginHero />
      <LoginForm />
    </Flex>
  )
}
