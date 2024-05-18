import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  Cog6ToothIcon,
  GlobeAmericasIcon,
  PresentationChartLineIcon,
  ServerStackIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  UserIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  XMarkIcon,
  ReceiptPercentIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import {
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  AvatarIcon,
  CubeIcon,
  LinkBreak2Icon,
  TargetIcon,
  FileIcon,
  DividerHorizontalIcon,
  ClockIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: CubeIcon,
    current: true,
  },
  {
    name: "Orders",
    href: "#",
    icon: GlobeAmericasIcon,
    current: false,
    children: [
      { name: "New Orders", href: "#", current: false },
      {
        name: "View Orders",
        icon: CubeIcon,
        href: "#",
        current: false,
        children: [
          { name: "D2D", href: "#", current: false },
          { name: "A2A", href: "#", current: false },
        ],
      },
      {
        name: "Order Docs",
        href: "#",
        icon: ServerStackIcon,
        current: false,
        children: [
          { name: "Upload Cargo Acceptance Slip", href: "#", current: false },
        ],
      },
      { name: "Download POD", href: "#", current: false },
      { name: "AWB Epouch", href: "#", current: false },
      { name: "Maintain AWB", href: "#", current: false },
    ],
  },
  { name: "Scheduling", href: "#", icon: CalendarIcon, current: false },
  { name: "Operation", href: "#", icon: WrenchScrewdriverIcon, current: false },
  {
    name: "Accounting",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  { name: "Track/Audit", href: "#", icon: TargetIcon, current: false },
  {
    name: "Reports",
    href: "#",
    icon: PresentationChartLineIcon,
    current: false,
  },
  { name: "Manual", href: "#", icon: LinkBreak2Icon, current: false },
];

export default function SideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Create Booking");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleTabClick = (tab: any) => {
    setSelectedTab(tab);
  };
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6 pb-4 ring-1 ring-white/10">
      <div className="flex h-16 shrink-0 items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <AvatarIcon className="h-6 w-6" />
              <span className="text-white">Belli</span>
              <ChevronDownIcon
                className="h-4 w-4 text-zinc-500"
                aria-hidden="true"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/logout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-x-4">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-white"
            aria-hidden="true"
          />
          <button onClick={openModal}>
            <PencilSquareIcon
              className="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      item.current
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                      "group flex justify-between items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    <div className="flex items-center gap-x-3">
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-zinc-400"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              href="#"
              className="group -mx-2 flex justify-between items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              <div className="flex items-center gap-x-3">
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                Settings
              </div>
              <ChevronRightIcon
                className="h-5 w-5 text-zinc-400"
                aria-hidden="true"
              />
            </Link>
          </li>
        </ul>
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative z-10 bg-zinc-900 text-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeModal}
            >
              <XMarkIcon className="h-5 w-5 mr-2" />
            </button>
            <h2 className="text-xl font-bold mb-4">New Orders</h2>
            <div className="flex gap-4">
              {/* Sidebar */}
              <div className="border border-zinc-600 rounded-md p-4 h-[230px]">
                <ul className="space-y-4">
                  <li
                    className={`flex items-center cursor-pointer ${
                      selectedTab === "Create Booking"
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleTabClick("Create Booking")}
                  >
                    <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
                    <span>Create Booking</span>
                  </li>
                  <li
                    className={`flex items-center cursor-pointer ${
                      selectedTab === "Consignment Details"
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleTabClick("Consignment Details")}
                  >
                    <TruckIcon className="h-5 w-5 mr-2" />
                    <span>Consignment Details</span>
                  </li>
                  <li
                    className={`flex items-center cursor-pointer ${
                      selectedTab === "Shipper Details"
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleTabClick("Shipper Details")}
                  >
                    <UserIcon className="h-5 w-5 mr-2" />
                    <span>Shipper Details</span>
                  </li>
                  <li
                    className={`flex items-center cursor-pointer ${
                      selectedTab === "Procees Rates"
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleTabClick("Procees Rates")}
                  >
                    <CubeIcon className="h-5 w-5 mr-2" />
                    <span>Process Rates</span>
                  </li>
                  <hr />
                  <li className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>Activity Log</span>
                  </li>
                </ul>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                <div className="flex gap-4">
                  {selectedTab === "Create Booking" && (
                    <div className="flex-1 space-y-4">
                      <div className="border border-zinc-600 rounded-md p-2">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            Booking Type{" "}
                            <InformationCircleIcon className="inline h-4 w-4" />
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            Partner Prefix *{" "}
                            <InformationCircleIcon className="inline h-4 w-4" />
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            AWB#{" "}
                            <InformationCircleIcon className="inline h-4 w-4" />
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            Partner Code *{" "}
                            <InformationCircleIcon className="inline h-4 w-4" />
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center mt-4">
                          <input type="checkbox" className="mr-2" />
                          <label className="block text-sm font-medium text-gray-400">
                            Is Physical
                          </label>
                          <button className="ml-2 p-2 bg-indigo-500 rounded">
                            <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                          </button>
                          <button className="ml-2 p-2 bg-indigo-500 rounded">
                            <ArrowPathIcon className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedTab === "Consignment Details" && (
                    <div className="flex-1 space-y-4">
                      <div className="border border-zinc-600 rounded-md p-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Origin{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">Light</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Destination *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Commodity Code *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Commodity Description *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Payment Mode{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Bill To{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Bill To Name{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Shipper{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Consignee{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Customer{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Customer Name{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Pieces{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedTab === "Shipper Details" && (
                    <div className="flex-1 space-y-4">
                      <div className="border border-zinc-600 rounded-md p-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Select{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">Truck</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Origin *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Destination *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Partner Type *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Partner Code{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">Truck</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Date{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Flight Code{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Allotment Code{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            AWB Status{" "}
                          </label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Truck</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <hr />
                        <div className="flex flex-wrap gap-2 mt-3">
                          <button className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center justify-center flex-grow">
                            {" "}
                            {/* Menggunakan flex-grow untuk membuat tombol kiri memenuhi ruang tersedia */}
                            <PlusCircleIcon className="h-5 w-5 ml-2" /> New
                            Route
                          </button>
                          <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                            {" "}
                            {/* Tombol kanan tidak menggunakan flex-grow */}
                            <TrashIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedTab === "Procees Rates" && (
                    <div className="flex-1 space-y-4">
                      <div className="border border-zinc-600 rounded-md p-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Vol (KG) *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Currency *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Rate *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                S Rate *{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                S Freight{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                Spot ID{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                GS Wt.KG{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-400 mb-3">
                                CH Wt.KG{" "}
                                <InformationCircleIcon className="inline h-4 w-4" />
                              </label>
                              <Input></Input>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-400 mb-3">
                            AMT Due{" "}
                          </label>
                          <Input></Input>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex-1 space-y-4">
                    <div className="border border-zinc-600 rounded-md p-2">
                      <div className="flex justify-between mt-2 mb-2">
                        <h3 className="text-lg font-semibold">Amount Due</h3>
                        <h3 className="text-lg font-semibold">$0.00</h3>
                      </div>
                      <hr className="text-zinc-600" />
                      <div className="mt-2 mb-2 p-2">
                        <div className="flex justify-between ">
                          <span>Booking Code:</span>
                          <span>AACDFE</span>
                        </div>
                        <div className="flex justify-between mb-4">
                          <span>Booking ID:</span>
                          <span>IP-4377-150141737</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount Paid:</span>
                          <span>$20.00</span>
                        </div>
                      </div>
                      <hr className="text-zinc-600 mb-3" />
                      <div className="mt-2 mb-2 p-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>$20.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Grand Total:</span>
                          <span>$20.00</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="border border-zinc-600 rounded-md p-2">
                      <div className="flex justify-between mt-2 mb-2">
                        <h3 className="text-lg font-semibold">Balance</h3>
                        <h3 className="text-lg font-semibold">$0.00</h3>
                      </div>
                      <hr className="mb-3" />
                      <div className="flex justify-between">
                        <span>Elroy Carreen:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Individual Balance:</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        className="bg-sky-500 text-white px-4 py-2 rounded w-full"
                        onClick={closeModal}
                      >
                        View Invoice
                      </button>
                    </div>
                    <hr />
                    <div className="mt-2">
                      <button className="bg-indigo-500 text-white px-4 py-2 rounded w-full">
                        Save Reservation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
