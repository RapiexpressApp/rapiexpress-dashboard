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
        height: '100%',
        width: '100%',
      }}
    >
      <Paper
        h="100%"
        radius={0}
        px={{
          base: 8,
          xs: 12,
          sm: 16,
          md: 20,
          lg: 24,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',
          background: '#fff',
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        {/* LEFT */}

        <Flex
          align="center"
          gap={{
            base: 6,
            sm: 8,
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
            w="100%"
            miw={0}
            maw={720}
            radius="xl"
            placeholder="Buscar..."
            leftSection={<IconSearch size={18} />}
            rightSection={
              <Box visibleFrom="lg">
                <Kbd size="xs">⌘ K</Kbd>
              </Box>
            }
            rightSectionWidth={55}
            styles={{
              input: {
                height: 44,
                background: '#fafafa',
                border: `1px solid ${palette.border}`,
              },
            }}
          />
        </Flex>

        {/* RIGHT */}

        <Flex
          align="center"
          gap={{
            base: 4,
            sm: 6,
            md: 10,
          }}
          ml={{
            base: 8,
            md: 16,
          }}
          style={{
            flexShrink: 0,
          }}
        >
          <ActionIcon visibleFrom="lg" radius="xl" variant="subtle" size={42}>
            <IconMail size={20} />
          </ActionIcon>

          <Indicator inline processing color={palette.primary} size={9} offset={7}>
            <ActionIcon radius="xl" variant="subtle" size={42}>
              <IconBell size={20} />
            </ActionIcon>
          </Indicator>

          <Divider visibleFrom="lg" orientation="vertical" h={28} />

          <Avatar radius="xl" size={44} style={{ flexShrink: 0 }}>
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
