import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

export default function Layout (props){
    const {children} = props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const metaData = {
        name:"KLYS.DEV"
    }
    const navigation = [
        { name: 'About me' , to: '/'},
        { name: 'Projects', to: '/projects' },
        { name: 'Resume' },
    ]
    return(
        <div className="min-h-screen bg-gray-900">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">{metaData.name}</span>
                        <img src="/klys.dev-logo-crop.png" alt="" className="h-8 w-auto" />
                    </a>
                    </div>
                    <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) =>
                        item.to ? (
                        <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-white">
                            {item.name}
                        </Link>
                        ) : (
                        <a key={item.name} href="#" className="text-sm/6 font-semibold text-white">
                            {item.name}
                        </a>
                        )
                    )}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
                      <a
                        href="https://linkedin.com/in/klys-dev"
                        className="text-white/80 hover:text-white"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.065-2.066A2.062 2.062 0 0 1 5.337 3.3a2.062 2.062 0 0 1 2.065 2.067 2.062 2.062 0 0 1-2.065 2.066zM6.765 20.452H3.909V9h2.856v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/klys"
                        className="text-white/80 hover:text-white"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.05 11.05 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.43-2.7 5.4-5.27 5.68.41.36.78 1.08.78 2.18 0 1.58-.02 2.86-.02 3.25 0 .31.21.67.8.56 4.56-1.53 7.84-5.86 7.84-10.96C23.5 5.74 18.27.5 12 .5z" />
                        </svg>
                      </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">{metaData.name}</span>
                        <img src="/klys.dev-logo-crop.png" alt="" className="h-8 w-auto" />
                        </a>
                        <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-200"
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) =>
                            item.to ? (
                                <Link
                                key={item.name}
                                to={item.to}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                {item.name}
                                </Link>
                            ) : (
                                <a
                                key={item.name}
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                {item.name}
                                </a>
                            )
                            )}
                        </div>
                        <div className="py-6">
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                            >
                            Linkedin
                            </a>
                        </div>
                        </div>
                    </div>
                    </DialogPanel>
                </Dialog>
            </header>
        {children}
        </div>
    )
}
