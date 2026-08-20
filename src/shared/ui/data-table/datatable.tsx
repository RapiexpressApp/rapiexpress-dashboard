import { ActionIcon, Box, Center, Group, Menu, Paper, ScrollArea, Table, Text } from '@mantine/core'

import { IconDotsVertical, IconInbox } from '@tabler/icons-react'
import { DataTablePagination } from '~/shared/ui/data-table/datatable-pagination'
import type { DataTableProps } from '~/shared/ui/data-table/types/data-table-types'

export function DataTable<T>({
  data,
  columns,
  actions = [],
  pagination,
  title,
  description,
  headerAction,
  loading = false,
  emptyMessage = 'No hay registros para mostrar.',
  minWidth = 700,
  rowKey,
}: DataTableProps<T>) {
  const hasActions = actions.length > 0

  const columnCount = columns.length + (hasActions ? 1 : 0)

  return (
    <Paper
      radius="xl"
      withBorder
      shadow="xs"
      style={{
        width: '100%',
        overflow: 'hidden',
        background: 'var(--mantine-color-body)',
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      {(title || description || headerAction) && (
        <Box
          px={{
            base: 'md',
            sm: 'lg',
          }}
          pt={{
            base: 'md',
            sm: 'lg',
          }}
          pb="md"
        >
          <Group justify="space-between" align="flex-start" gap="md" wrap="wrap">
            {/* Información */}
            {(title || description) && (
              <Box
                style={{
                  minWidth: 0,
                  flex: '1 1 240px',
                }}
              >
                {title && (
                  <Text fw={700} size="lg" lh={1.3}>
                    {title}
                  </Text>
                )}

                {description && (
                  <Text size="sm" c="dimmed" mt={4} lh={1.5}>
                    {description}
                  </Text>
                )}
              </Box>
            )}

            {/* Acción del header */}
            {headerAction && (
              <Box
                style={{
                  flexShrink: 0,
                  maxWidth: '100%',
                }}
              >
                {headerAction}
              </Box>
            )}
          </Group>
        </Box>
      )}

      {/* =====================================================
          TABLE
      ====================================================== */}

      <Box
        style={{
          width: '100%',
          borderTop:
            title || description || headerAction
              ? '1px solid var(--mantine-color-default-border)'
              : undefined,
        }}
      >
        <ScrollArea
          type="auto"
          offsetScrollbars
          scrollbarSize={8}
          styles={{
            viewport: {
              maxWidth: '100%',
            },
          }}
        >
          <Table
            miw={minWidth}
            highlightOnHover
            verticalSpacing="md"
            horizontalSpacing="lg"
            withRowBorders
            styles={{
              table: {
                borderCollapse: 'separate',
                borderSpacing: 0,
              },

              thead: {
                background: 'var(--mantine-color-gray-0)',
              },

              th: {
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--mantine-color-dimmed)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              },

              td: {
                fontSize: '0.875rem',
                verticalAlign: 'middle',
              },
            }}
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <Table.Thead>
              <Table.Tr>
                {columns.map(column => (
                  <Table.Th
                    key={String(column.key)}
                    style={{
                      width: column.width,
                      textAlign: column.align,
                    }}
                  >
                    {column.label}
                  </Table.Th>
                ))}

                {hasActions && (
                  <Table.Th
                    style={{
                      width: 64,
                      textAlign: 'center',
                    }}
                  >
                    <Text component="span" size="xs" fw={700}>
                      Acciones
                    </Text>
                  </Table.Th>
                )}
              </Table.Tr>
            </Table.Thead>

            {/* =================================================
                BODY
            ================================================== */}

            <Table.Tbody>
              {/* LOADING */}

              {loading && (
                <Table.Tr>
                  <Table.Td colSpan={columnCount}>
                    <Center
                      py={{
                        base: 40,
                        sm: 60,
                      }}
                    >
                      <Text size="sm" c="dimmed">
                        Cargando información...
                      </Text>
                    </Center>
                  </Table.Td>
                </Table.Tr>
              )}

              {/* EMPTY */}

              {!loading && data.length === 0 && (
                <Table.Tr>
                  <Table.Td colSpan={columnCount}>
                    <Center
                      py={{
                        base: 40,
                        sm: 60,
                      }}
                    >
                      <Box ta="center" maw={320}>
                        <Center mb="sm">
                          <ActionIcon size={46} radius="xl" variant="light" color="gray" disabled>
                            <IconInbox size={23} />
                          </ActionIcon>
                        </Center>

                        <Text fw={600} size="sm">
                          Sin registros
                        </Text>

                        <Text size="xs" c="dimmed" mt={4} lh={1.5}>
                          {emptyMessage}
                        </Text>
                      </Box>
                    </Center>
                  </Table.Td>
                </Table.Tr>
              )}

              {/* ROWS */}

              {!loading &&
                data.length > 0 &&
                data.map((row, index) => (
                  <Table.Tr key={rowKey ? rowKey(row, index) : index}>
                    {/* COLUMNAS */}

                    {columns.map(column => (
                      <Table.Td
                        key={String(column.key)}
                        style={{
                          textAlign: column.align,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {column.render
                          ? column.render(row)
                          : String(row[column.key as keyof T] ?? '')}
                      </Table.Td>
                    ))}

                    {/* ACCIONES */}

                    {hasActions && (
                      <Table.Td>
                        <Group justify="center">
                          <Menu
                            shadow="md"
                            width={200}
                            position="bottom-end"
                            withArrow
                            withinPortal
                          >
                            <Menu.Target>
                              <ActionIcon
                                variant="subtle"
                                color="gray"
                                radius="md"
                                aria-label="Acciones"
                              >
                                <IconDotsVertical size={18} />
                              </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                              {actions
                                .filter(action => (action.visible ? action.visible(row) : true))
                                .map(action => (
                                  <Menu.Item
                                    key={action.label}
                                    leftSection={action.icon}
                                    color={action.color}
                                    disabled={action.disabled ? action.disabled(row) : false}
                                    onClick={() => action.onClick(row)}
                                  >
                                    {action.label}
                                  </Menu.Item>
                                ))}
                            </Menu.Dropdown>
                          </Menu>
                        </Group>
                      </Table.Td>
                    )}
                  </Table.Tr>
                ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>

      {/* =====================================================
          PAGINATION
      ====================================================== */}

      {pagination && (
        <Box
          px={{
            base: 'md',
            sm: 'lg',
          }}
          py={{
            base: 'md',
            sm: 'lg',
          }}
          style={{
            borderTop: '1px solid var(--mantine-color-default-border)',
          }}
        >
          <DataTablePagination
            page={pagination.page}
            pageSize={pagination.pageSize}
            total={pagination.total}
            onChange={pagination.onChange}
          />
        </Box>
      )}
    </Paper>
  )
}
