"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import type { CrmItem } from "@/lib/data"
import { Check, Clock, CircleDot } from "lucide-react"

interface DataTableProps {
  data: CrmItem[]
}

export default function DataTable({ data }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.division.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Search by title or division..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader className="bg-blue-100">
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Division</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="w-24 text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={`${item.section}-${item.id}`}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.division}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="text-center">
                    {item.status === "completed" && (
                      <div className="flex justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    )}
                    {item.status === "in-progress" && (
                      <div className="flex justify-center">
                        <Clock className="h-5 w-5 text-amber-500" />
                      </div>
                    )}
                    {item.status === "to-be-developed" && (
                      <div className="flex justify-center">
                        <CircleDot className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
