'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ReactNode } from 'react'

export interface SimpleColumn<TData> {
  header: string
  accessorKey?: keyof TData
  className?: string
  cell?: (row: TData) => ReactNode
}

interface MKTableProps<TData> {
  columns: SimpleColumn<TData>[]
  data: TData[]
  onRowClick?: (row: TData) => void
  highlightRow?: (row: TData) => boolean
}

export function MKTable<TData extends object>({
  columns,
  data,
  onRowClick,
  highlightRow,
}: MKTableProps<TData>) {
  return (
    <div className='my-5'>
      <Table>
        <TableHeader>
          <TableRow className='bg-gray-200'>
            {columns.map((col, index) => (
              <TableHead
                key={index}
                className={`font-bold text-gray-600 ${col.className || ''}`}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => {
              const isHighlighted = highlightRow?.(row)

              return (
                <TableRow
                  key={rowIndex}
                  onClick={() => onRowClick?.(row)}
                  className={`cursor-pointer transition ${isHighlighted ? 'bg-blue-50' : ''} `}
                >
                  {columns.map((col, colIndex) => (
                    <TableCell key={`${rowIndex}-${colIndex}`} className='py-4'>
                      {col.cell
                        ? col.cell(row)
                        : col.accessorKey
                          ? (row[col.accessorKey] as ReactNode)
                          : null}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
