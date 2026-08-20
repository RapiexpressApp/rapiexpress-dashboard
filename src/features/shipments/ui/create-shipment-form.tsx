import { Button, Divider, Group, Paper, Radio, Select, Stack, Text, TextInput } from '@mantine/core'
import { IconLock, IconPackage, IconPrinter, IconSearch } from '@tabler/icons-react'

interface CreateShipmentFormProps {
  onSuccess: () => void
}

export function CreateShipmentForm({ onSuccess }: CreateShipmentFormProps) {
  const handleSubmit = () => {
    // TODO: Guardar envío mediante API

    onSuccess()
  }

  return (
    <Stack gap="lg">
      <Group gap="sm">
        <IconPackage size={20} />

        <div>
          <Text fw={700} size="lg">
            Registrar paquete
          </Text>

          <Text size="sm" c="dimmed">
            Ingresa la información del paquete que llegará al almacén.
          </Text>
        </div>
      </Group>

      <Stack gap="xs">
        <Text size="xs" fw={600} c="dimmed">
          Cliente
        </Text>

        <TextInput
          placeholder="Buscar cliente..."
          defaultValue="Alejandro Rodriguez (ID: RX-4921)"
          leftSection={<IconSearch size={18} />}
        />

        <Text size="xs" c="dimmed">
          Cliente verificado en Miami Gateway
        </Text>
      </Stack>

      <Group align="flex-start" grow>
        <Stack gap="xs">
          <Text size="xs" fw={600} c="dimmed">
            Tracking del proveedor
          </Text>

          <TextInput placeholder="Ej. 1Z999AA1012345678" />
        </Stack>

        <Stack gap="xs">
          <Text size="xs" fw={600} c="dimmed">
            Número de almacén
          </Text>

          <TextInput value="WH-MIA-2023-8829" readOnly rightSection={<IconLock size={16} />} />
        </Stack>
      </Group>

      <Group align="flex-start" grow>
        <Stack gap="xs">
          <Text size="xs" fw={600} c="dimmed">
            Peso
          </Text>

          <TextInput defaultValue="4.5" />
        </Stack>

        <Stack gap="xs">
          <Text size="xs" fw={600} c="dimmed">
            Unidad
          </Text>

          <Select
            data={[
              { value: 'lbs', label: 'Lbs' },
              { value: 'kg', label: 'Kg' },
            ]}
            defaultValue="lbs"
          />
        </Stack>
      </Group>

      <Stack gap="xs">
        <Text size="xs" fw={600} c="dimmed">
          Categoría del paquete
        </Text>

        <Select
          data={[
            { value: 'electronics', label: 'Electrónica' },
            { value: 'clothing', label: 'Ropa' },
            { value: 'documents', label: 'Documentos' },
            { value: 'other', label: 'Otro' },
          ]}
          defaultValue="electronics"
        />
      </Stack>

      <Paper p="md" radius="md" bg="var(--mantine-color-blue-light)">
        <Stack gap="sm">
          <Text fw={700} size="sm">
            Tipo de paquete
          </Text>

          <Radio.Group defaultValue="normal">
            <Group>
              <Radio label="Normal" value="normal" />

              <Radio
                label="Frágil"
                value="fragile"
                styles={{
                  label: {
                    color: 'var(--mantine-color-red-6)',
                  },
                }}
              />
            </Group>
          </Radio.Group>
        </Stack>
      </Paper>

      <Divider />

      <Button size="md" leftSection={<IconPrinter size={18} />} fullWidth onClick={handleSubmit}>
        Registrar paquete
      </Button>
    </Stack>
  )
}
