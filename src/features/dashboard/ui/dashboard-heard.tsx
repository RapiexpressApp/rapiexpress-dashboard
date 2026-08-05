import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Divider,
  Flex,
  Indicator,
  Kbd,
  Paper,
  Text,
  TextInput,
} from '@mantine/core'
import {
  IconBell,
  IconChevronLeft,
  IconChevronRight,
  IconMail,
  IconSearch,
} from '@tabler/icons-react'
import { motion } from 'motion/react'

import { palette } from '~/shared/config/palette'

interface DashboardHeaderProps {
  opened: boolean
  toggle: () => void
  collapsed: boolean
  toggleCollapsed: () => void
}

const MotionDiv = motion.div

export function DashboardHeader({
  opened,
  toggle,
  collapsed,
  toggleCollapsed,
}: DashboardHeaderProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Paper
        radius={0}
        h="100%"
        px={{
          base: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          background: '#fff',
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <Flex
          align="center"
          gap={{
            base: 8,
            sm: 10,
            md: 12,
          }}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Burger hiddenFrom="md" opened={opened} onClick={toggle} size="sm" />

          <ActionIcon
            visibleFrom="md"
            radius="xl"
            variant="subtle"
            size={42}
            onClick={toggleCollapsed}
          >
            {collapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
          </ActionIcon>

          <TextInput
            flex={1}
            miw={0}
            maw={700}
            radius="xl"
            placeholder="Buscar..."
            leftSection={<IconSearch size={18} />}
            rightSection={
              <Box visibleFrom="xl">
                <Kbd size="xs">⌘ K</Kbd>
              </Box>
            }
            rightSectionWidth={50}
            styles={{
              input: {
                height: 42,
                background: '#fafafa',
                border: `1px solid ${palette.border}`,
              },
            }}
          />
        </Flex>

        <Flex
          align="center"
          gap={{
            base: 4,
            sm: 8,
            md: 10,
          }}
          style={{
            flexShrink: 0,
          }}
        >
          <ActionIcon visibleFrom="lg" radius="xl" variant="subtle" size={40}>
            <IconMail size={19} />
          </ActionIcon>

          <Indicator inline processing color={palette.primary} size={8} offset={6}>
            <ActionIcon radius="xl" variant="subtle" size={40}>
              <IconBell size={19} />
            </ActionIcon>
          </Indicator>

          <Divider visibleFrom="lg" orientation="vertical" h={26} />

          <Avatar radius="xl" size={44}>
            TM
          </Avatar>

          <Box visibleFrom="xl" maw={180}>
            <Text fw={700} size="sm" truncate>
              Totok Michael
            </Text>

            <Text size="xs" c="dimmed" truncate>
              tmichael20@mail.com
            </Text>
          </Box>
        </Flex>
      </Paper>
    </MotionDiv>
  )
}
