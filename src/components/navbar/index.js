/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    AcademicCapIcon,
    CodeIcon,
    BriefcaseIcon,
    BeakerIcon
} from '@heroicons/react/outline';
import "../styles/index.css";

const solutions = [
    {
        name: 'Experiences',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#experiences',
        icon: BriefcaseIcon,
    },
    {
        name: 'Formation',
        description: "Connect with third-party tools that you're already using.",
        href: '#formation',
        icon: AcademicCapIcon,
    },
    {
        name: 'Technologies',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#technologies',
        icon: BeakerIcon,
    },
    {
        name: 'Projects',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#projects',
        icon: CodeIcon,
    },
]

export default function Example() {
    return (
        <header>
            <Popover className="relative bg-white">
                <section>
                    <div>
                        <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    </div>
                    <div className="flex justify-end">
                        <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    </div>
                </section>
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <span className="sr-only">Mactavish</span>
                            <img className="h-8 w-auto sm:h-20" src="/img/logo.png" alt="Identidade digital como uma espécie de logo marca adjunto das outras opções do menu." />
                        </div>

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>

                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <a href="#experiences" className="text-base font-medium text-gray-500 hover:text-gray-900 font-mono ...">
                                Experiences
                            </a>
                            <a href="#formation" className="text-base font-medium text-gray-500 hover:text-gray-900 font-mono ...">
                                Formation
                            </a>
                            <a href="#technologies" className="text-base font-medium text-gray-500 hover:text-gray-900 font-mono ...">
                                Technologies
                            </a>
                            <a href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900 font-mono ...">
                                Projects
                            </a>
                        </Popover.Group>
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
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto sm:h-20" src="/img/logo.png" alt="Identidade digital como uma espécie de logo marca adjunto das outras opções do menu" />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}
