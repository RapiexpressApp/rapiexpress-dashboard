import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Divider,
  Group,
  Indicator,
  Kbd,
  Paper,
  Text,
  TextInput,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
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
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      style={{
        height: '100%',
      }}
    >
      <Paper
        h="100%"
        px={isMobile ? 'sm' : 'lg'}
        radius={0}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        {/* IZQUIERDA */}

        <Group
          flex={1}
          gap={isMobile ? 'xs' : 'md'}
          wrap="nowrap"
          style={{
            minWidth: 0,
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />

          {!isMobile && (
            <ActionIcon radius="xl" variant="subtle" size={42} onClick={toggleCollapsed}>
              {collapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
            </ActionIcon>
          )}

          <TextInput
            flex={1}
            radius="xl"
            size={isMobile ? 'sm' : 'md'}
            placeholder={isMobile ? 'Buscar...' : 'Buscar envíos, clientes o pedidos...'}
            leftSection={<IconSearch size={18} />}
            rightSection={
              !isMobile ? (
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: 8,
                  }}
                >
                  <Kbd
                    size="xs"
                    style={{
                      height: 22,
                      minWidth: 42,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                      fontSize: 11,
                    }}
                  >
                    ⌘ K
                  </Kbd>
                </Box>
              ) : undefined
            }
            rightSectionWidth={65}
            styles={{
              input: {
                height: isMobile ? 40 : 46,
                border: `1px solid ${palette.border}`,
                fontSize: 14,
                background: '#fafafa',
              },

              section: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          />
        </Group>

        {/* DERECHA */}

        <Group gap={isMobile ? 'xs' : 'sm'} wrap="nowrap" ml={isMobile ? 8 : 20}>
          {!isMobile && (
            <ActionIcon variant="subtle" radius="xl" size={42}>
              <IconMail size={20} />
            </ActionIcon>
          )}

          <Indicator inline processing color={palette.primary} size={9} offset={7}>
            <ActionIcon variant="subtle" radius="xl" size={isMobile ? 38 : 42}>
              <IconBell size={20} />
            </ActionIcon>
          </Indicator>

          {!isMobile && <Divider orientation="vertical" h={30} />}

          <Avatar
            radius="xl"
            size={isMobile ? 38 : 44}
            color="blue"
            style={{
              border: '2px solid white',
              boxShadow: '0 2px 10px rgba(0,0,0,.08)',
            }}
          >
            TM
          </Avatar>

          {!isMobile && (
            <Box>
              <Text fw={700} size="sm">
                Totok Michael
              </Text>

              <Text size="xs" c="dimmed">
                tmichael20@mail.com
              </Text>
            </Box>
          )}
        </Group>
      </Paper>
    </MotionDiv>
  )
}
