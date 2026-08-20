import { Avatar, Badge, Group, Text } from '@mantine/core'
import { IconFileInvoice, IconEye, IconPrinter, IconTag } from '@tabler/icons-react'
import { useState } from 'react'
import { useModalStore } from '~/app/store/modal-store'
import { MODAL_IDS } from '~/features/shipments/constants/modal-ids'
import { ShipmentDetailsDrawer } from '~/features/shipments/ui/modals/shipment-details-drawer'
import { ShipmentInvoiceModal } from '~/features/shipments/ui/modals/shipment-invoice-modal'
import { ShipmentLabelModal } from '~/features/shipments/ui/modals/shipment-label-modal'

import { DataTable } from '~/shared/ui/data-table/datatable'
import type {
  DataTableAction,
  DataTableColumn,
} from '~/shared/ui/data-table/types/data-table-types'

export interface Shipment {
  id: string
  customerId: string
  customer: string
  tracking: string
  warehouseId: string
  weight: string
  category: string
  status: 'Recibido' | 'En clasificación' | 'Listo'
  date: string
}

const shipments: Shipment[] = [
  {
    id: '#ENV-1001',
    customerId: 'RX-4921',
    customer: 'Alejandro Rodriguez',
    tracking: '1Z999AA1012345678',
    warehouseId: 'WH-MIA-8829',
    weight: '4.5 lb',
    category: 'Electrónica',
    status: 'Recibido',
    date: '18/08/2026 14:32',
  },
  {
    id: '#ENV-1002',
    customerId: 'RX-4922',
    customer: 'Carlos Gómez',
    tracking: '9400111899223856921',
    warehouseId: 'WH-MIA-8830',
    weight: '2.1 lb',
    category: 'Ropa',
    status: 'En clasificación',
    date: '18/08/2026 14:18',
  },
  {
    id: '#ENV-1003',
    customerId: 'RX-4923',
    customer: 'María López',
    tracking: '1Z999AA1012345679',
    warehouseId: 'WH-MIA-8831',
    weight: '7.8 lb',
    category: 'Electrónica',
    status: 'Listo',
    date: '18/08/2026 13:45',
  },
  {
    id: '#ENV-1004',
    customerId: 'RX-4924',
    customer: 'Juan Pérez',
    tracking: '9400111899223856930',
    warehouseId: 'WH-MIA-8832',
    weight: '1.3 lb',
    category: 'Documentos',
    status: 'Recibido',
    date: '18/08/2026 13:21',
  },
  {
    id: '#ENV-1005',
    customerId: 'RX-4925',
    customer: 'Ana Torres',
    tracking: '1Z999AA1012345680',
    warehouseId: 'WH-MIA-8833',
    weight: '3.7 lb',
    category: 'Ropa',
    status: 'En clasificación',
    date: '18/08/2026 12:56',
  },
]

const columns: DataTableColumn<Shipment>[] = [
  {
    key: 'id',
    label: 'ID',
  },

  {
    key: 'customer',
    label: 'Cliente',
    render: shipment => (
      <Group gap="sm" wrap="nowrap">
        <Avatar size={34} radius="xl" color="gray">
          {shipment.customer.charAt(0)}
        </Avatar>

        <div>
          <Text fw={600} size="sm">
            {shipment.customer}
          </Text>

          <Text size="xs" c="dimmed">
            {shipment.customerId}
          </Text>
        </div>
      </Group>
    ),
  },

  {
    key: 'tracking',
    label: 'Tracking',
    render: shipment => (
      <Text size="sm" ff="monospace" truncate maw={190}>
        {shipment.tracking}
      </Text>
    ),
  },

  {
    key: 'warehouseId',
    label: 'Warehouse',
    render: shipment => (
      <Text size="sm" fw={600}>
        {shipment.warehouseId}
      </Text>
    ),
  },

  {
    key: 'weight',
    label: 'Peso',
  },

  {
    key: 'category',
    label: 'Categoría',
  },

  {
    key: 'status',
    label: 'Estado',
    render: shipment => {
      const colors: Record<Shipment['status'], string> = {
        Recibido: 'green',
        'En clasificación': 'orange',
        Listo: 'blue',
      }

      return (
        <Badge color={colors[shipment.status]} variant="light" radius="xl">
          {shipment.status}
        </Badge>
      )
    },
  },

  {
    key: 'date',
    label: 'Fecha',
  },
]

export function ShipmentsTable() {
  const [page, setPage] = useState(1)

  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null)

  const [detailsOpened, setDetailsOpened] = useState(false)
  const [invoiceOpened, setInvoiceOpened] = useState(false)

  const { openModal } = useModalStore()
  const pageSize = 5

  const handleViewShipment = (shipment: Shipment) => {
    setSelectedShipment(shipment)
    setDetailsOpened(true)
  }

  const handleViewLabel = (shipment: Shipment) => {
    setSelectedShipment(shipment)
    openModal(MODAL_IDS.SHIPMENT_LABEL)
  }

  const handleViewInvoice = (shipment: Shipment) => {
    setSelectedShipment(shipment)
    setInvoiceOpened(true)
  }

  const handlePrintLabel = (shipment: Shipment) => {
    setSelectedShipment(shipment)

    console.log('Imprimir etiqueta:', shipment)
  }

  const actions: DataTableAction<Shipment>[] = [
    {
      label: 'Ver envío',
      icon: <IconEye size={16} />,
      onClick: handleViewShipment,
    },

    {
      label: 'Ver etiqueta',
      icon: <IconTag size={16} />,
      onClick: handleViewLabel,
    },

    {
      label: 'Ver factura',
      icon: <IconFileInvoice size={16} />,
      onClick: handleViewInvoice,
    },

    {
      label: 'Imprimir etiqueta',
      icon: <IconPrinter size={16} />,
      onClick: handlePrintLabel,
    },
  ]

  return (
    <>
      <DataTable
        title="Envíos registrados"
        description="Consulta y administra los paquetes registrados en el almacén."
        data={shipments}
        columns={columns}
        actions={actions}
        pagination={{
          page,
          pageSize,
          total: shipments.length,
          onChange: setPage,
        }}
      />

      <ShipmentDetailsDrawer
        opened={detailsOpened}
        onClose={() => setDetailsOpened(false)}
        shipment={selectedShipment}
        onViewLabel={() => {
          setDetailsOpened(false)
        }}
        onViewInvoice={() => {
          setDetailsOpened(false)
          setInvoiceOpened(true)
        }}
      />

      <ShipmentLabelModal />

      <ShipmentInvoiceModal
        opened={invoiceOpened}
        onClose={() => setInvoiceOpened(false)}
        shipment={selectedShipment}
      />
    </>
  )
}
