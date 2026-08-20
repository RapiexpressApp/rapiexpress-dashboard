import { Modal, Stack } from '@mantine/core'
import type { ModalBaseProps } from '~/shared/ui/modal/types/modal-types'

export function ModalBase({ opened, onClose, title, size = 'lg', children }: ModalBaseProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      centered
      size={size}
      radius="md"
      styles={{
        content: {
          width: '100%',
          maxWidth: '100%',
        },
        body: {
          width: '100%',
          overflow: 'hidden',
        },
      }}
    >
      <Stack
        gap="md"
        w="100%"
        maw="100%"
        style={{
          minWidth: 0,
        }}
      >
        {children}
      </Stack>
    </Modal>
  )
}
