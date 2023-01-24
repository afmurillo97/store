import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex items-center justify-start border-b-2 border-gray-100 py-3 tablet:justify-start tablet:space-x-10">
          <div className="flex justify-start laptop:w-0 laptop:flex-1">

          <Popover.Group as="nav" className="hidden space-x-3 tablet:flex">

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2'
                    )}
                  >
                    <img src="../img/en.png" alt="" />
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                        open ? 'rotate-180 transform' : ''
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 tablet-mini:px-0 laptop:left-60 laptop:ml-0 laptop:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 tablet-mini:gap-8 tablet-mini:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2'
                    )}
                  >
                    <span>USD</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                        open ? 'rotate-180 transform' : ''
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 tablet-mini:px-0 laptop:left-60 laptop:ml-0 laptop:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 tablet-mini:gap-8 tablet-mini:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

 
            <Link to="/products/1" className="text-base font-medium text-gray-500 hover:text-gray-900">Women</Link>
            <Link to="/products/2" className="text-base font-medium text-gray-500 hover:text-gray-900">Men</Link>
            <Link to="/products/3" className="text-base font-medium text-gray-500 hover:text-gray-900">Children</Link>

          </Popover.Group>
            
          </div>

          <div className="tablet:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red">
              <span className="sr-only">Hamburguer menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
            <Link to="/" className="fixed right-5 laptop:relative">
                <span className="text-red text-sm laptop:text-lg">AFSTORE</span>
                    <img
                        className="h-8 w-auto object-center laptop:h-14"
                        src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                        alt=""
                />
            </Link>

          <div className="hidden items-center space-x-3 justify-end tablet:flex tablet:flex-1 laptop:w-0">

            <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Homepage</Link>
            <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link>
            <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Stores</Link>

            <div className='flex'>

                <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Link>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    <UserIcon className="h-6 w-6"/>
                </Link>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    <HeartIcon className="h-6 w-6"/>
                </Link>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    <ShoppingCartIcon className="h-6 w-6"/>
                </Link>

            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition tablet:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-red" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</Link>
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</Link>

              </div>
              <div>
                <Link to="/" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-hover">
                    Sign up
                </Link>
                  
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                    <Link to="/" className="text-red hover:text-indigo-500">
                        Sign in
                    </Link>

                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar