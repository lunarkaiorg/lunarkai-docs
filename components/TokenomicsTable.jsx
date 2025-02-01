import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useMemo, useEffect } from 'react'

// Move data outside component to prevent recreation on each render
const tableData = [
  { 
    category: 'Pre Seed',
    allocation: '6%',
    price: '$0.02',
    tokens: '6,000,000',
    value: '$100,000',
    tge: '0%',
    unlockAmount: '-',
    lockPeriod: '6',
    vesting: '24',
    details: '6-month cliff, 18-month linear'
  },
  { 
    category: 'Seed',
    allocation: '10%',
    price: '$0.03',
    tokens: '10,000,000',
    value: '$250,000',
    tge: '0%',
    unlockAmount: '-',
    lockPeriod: '6',
    vesting: '24',
    details: '6-month cliff, 18-month linear'
  },
  { 
    category: 'Private',
    allocation: '15%',
    price: '$0.05',
    tokens: '15,000,000',
    value: '$750,000',
    tge: '0%',
    unlockAmount: '-',
    lockPeriod: '3',
    vesting: '21',
    details: '3-month cliff, 18-month linear'
  },
  { 
    category: 'Public Sale',
    allocation: '20%',
    price: '$0.1',
    tokens: '20,000,000',
    value: '$1,500,000',
    tge: '20%',
    unlockAmount: '4,000,000',
    lockPeriod: '0',
    vesting: '12',
    details: 'No cliff, 12-month linear'
  },
  { 
    category: 'Team',
    allocation: '15%',
    price: '-',
    tokens: '15,000,000',
    value: '-',
    tge: '0%',
    unlockAmount: '-',
    lockPeriod: '18',
    vesting: '66',
    details: '18-month cliff, 48-month linear'
  },
  { 
    category: 'Marketing',
    allocation: '20%',
    price: '-',
    tokens: '20,000,000',
    value: '-',
    tge: '1%',
    unlockAmount: '200,000',
    lockPeriod: '6',
    vesting: '54',
    details: '6-month cliff, 48-month linear'
  },
  { 
    category: 'Liquidity',
    allocation: '10%',
    price: '-',
    tokens: '10,000,000',
    value: '-',
    tge: '40%',
    unlockAmount: '4,000,000',
    lockPeriod: '0',
    vesting: '6',
    details: 'No cliff, 6-month linear'
  },
  { 
    category: 'Advisory',
    allocation: '4%',
    price: '-',
    tokens: '4,000,000',
    value: '-',
    tge: '0%',
    unlockAmount: '-',
    lockPeriod: '12',
    vesting: '36',
    details: '12-month cliff, 24-month linear'
  }
]

const tableColumns = [
  { header: 'Category', accessorKey: 'category' },
  { header: 'Allocation', accessorKey: 'allocation' },
  { header: 'Price', accessorKey: 'price' },
  { header: 'Token Amount', accessorKey: 'tokens' },
  { header: 'Value', accessorKey: 'value' },
  { header: 'TGE Unlock %', accessorKey: 'tge' },
  { header: 'Unlock at TGE', accessorKey: 'unlockAmount' },
  { header: 'Lock Period', accessorKey: 'lockPeriod' },
  { header: 'Vesting', accessorKey: 'vesting' },
  { header: 'Details', accessorKey: 'details' }
]

export const TokenomicsTable = () => {
  // Memoize data and columns
  const data = useMemo(() => tableData, [])
  const columns = useMemo(() => tableColumns, [])

  // Memoize table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup table instance
      table.reset()
    }
  }, [])

  return (
    <div className="relative overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm mt-10">
      <div className="overflow-x-auto overflow-y-auto max-h-[480px]">
        <table className="min-w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-100 dark:bg-gray-800">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-3 py-2 text-left border-b border-r border-gray-300 dark:border-gray-700 font-semibold whitespace-nowrap bg-gray-100 dark:bg-gray-800">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-3 py-1.5 border-b border-r border-gray-300 dark:border-gray-700 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 