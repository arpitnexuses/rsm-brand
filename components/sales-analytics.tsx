"use client"

import { useState } from "react"
import {
  CloudIcon as CloudConnection,
  LineChartIcon as ChartLineUp,
  ClipboardIcon as ClipboardText,
  Target,
  Search,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { crmData } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Clock, CircleDot } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SalesAnalytics() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    setIsModalOpen(true)
    setSearchTerm("")
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const filteredData = activeSection
    ? crmData
        .filter((item) => item.section === activeSection)
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.division.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : []

  const getSectionTitle = (section: string | null) => {
    switch (section) {
      case "A":
        return "Practice Assurance"
      case "B":
        return "Practice Auto Tax"
      case "C":
        return "Practice Consulting"
      case "D":
        return "Practice Management"
      default:
        return ""
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-7xl mx-auto mt-8">
      <h2 className="text-4xl font-bold text-center mb-2 text-[#009BDD]">CRM Analytics</h2>
      <div className="flex justify-center mb-8">
        <div className="w-32 h-0.5 bg-gray-300"></div>
      </div>

      <p className="text-center text-xl mb-4">
        Organizations at the forefront of sales analytics are seeing increased revenues and customer loyalty.
      </p>

      <div className="relative mb-12">
        {/* Center image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center justify-center">
            <img 
              src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/hsbid_f361b136-f43e-49b7-add2-7c1e6060f60f.png" 
              alt="Sales Analytics"
              className="w-[400px] h-[400px] object-contain filter hue-rotate-90 brightness-95"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-x-64 py-24">
          {/* Top Left - Practice Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start cursor-pointer relative z-20"
            onClick={() => handleSectionClick("A")}
          >
            <div className="flex flex-col items-start gap-4 max-w-sm">
              <span className="text-3xl font-bold text-[#11A537]">Practice Assurance</span>
              <p className="text-lg text-left">
                Client report issuance, financial statements, audit tracking and management
              </p>
            </div>
          </motion.div>

          {/* Top Right - Practice Auto Tax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end cursor-pointer relative z-20"
            onClick={() => handleSectionClick("B")}
          >
            <div className="flex flex-col items-end gap-4 max-w-sm">
              <span className="text-3xl font-bold text-[#11A537]">Practice Auto Tax</span>
              <p className="text-lg text-right">
                Deem profit basis, actual profit automation and NLST & Zakat calculation
              </p>
            </div>
          </motion.div>

          {/* Bottom Left - Practice Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start cursor-pointer relative z-20"
            onClick={() => handleSectionClick("C")}
          >
            <div className="flex flex-col items-start gap-4 max-w-sm">
              <span className="text-3xl font-bold text-[#11A537]">Practice Consulting</span>
              <p className="text-lg text-left">
                Risk management, human resources, training and employee engagement
              </p>
            </div>
          </motion.div>

          {/* Bottom Right - Practice Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center md:items-end cursor-pointer relative z-20"
            onClick={() => handleSectionClick("D")}
          >
            <div className="flex flex-col items-end gap-4 max-w-sm">
              <span className="text-3xl font-bold text-[#11A537]">Practice Management</span>
              <p className="text-lg text-right">
                Operations, client experience, resource planning and workflow management
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="text-right text-sm text-gray-500 mt-8">Source: Forbes 2019</div> */}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold">{getSectionTitle(activeSection)}</h3>
                <Button variant="ghost" size="icon" onClick={closeModal} className="hover:bg-[#009BDD]/10 hover:text-[#009BDD]">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6 border-b">
                <div className="relative">
                  <Input
                    placeholder="Search by title or division..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 focus-visible:ring-[#009BDD]"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-[#009BDD]" />
                </div>
              </div>

              <div className="overflow-auto flex-1 p-6">
                <div className="rounded-lg border shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-[#11A537]/5 to-[#11A537]/10">
                        <TableHead className="w-12 font-semibold text-gray-700">#</TableHead>
                        <TableHead className="font-semibold text-gray-700">Division</TableHead>
                        <TableHead className="font-semibold text-gray-700">Title</TableHead>
                        <TableHead className="w-24 text-center font-semibold text-gray-700">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                          <TableRow 
                            key={`${item.section}-${item.practice}-${item.division}-${item.id}`}
                            className="hover:bg-[#11A537]/5 transition-colors duration-150"
                          >
                            <TableCell className="font-medium text-gray-900">{item.id}</TableCell>
                            <TableCell className="text-gray-700">{item.division}</TableCell>
                            <TableCell className="text-gray-700">{item.title}</TableCell>
                            <TableCell className="text-center">
                              {item.status === "completed" && (
                                <div className="flex justify-center">
                                  <div className="relative group">
                                    <Check className="h-5 w-5 text-[#11A537]" />
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                      Completed
                                    </div>
                                  </div>
                                </div>
                              )}
                              {item.status === "in-progress" && (
                                <div className="flex justify-center">
                                  <div className="relative group">
                                    <Clock className="h-5 w-5 text-amber-500" />
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                      In Progress
                                    </div>
                                  </div>
                                </div>
                              )}
                              {item.status === "to-be-developed" && (
                                <div className="flex justify-center">
                                  <div className="relative group">
                                    <CircleDot className="h-5 w-5 text-slate-400" />
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                      To Be Developed
                                    </div>
                                  </div>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                            No results found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="p-6 border-t flex justify-end">
                <Button 
                  onClick={closeModal} 
                  className="bg-[#009BDD] text-white hover:bg-[#009BDD]/90 transition-colors"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
