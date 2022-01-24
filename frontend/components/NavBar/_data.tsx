import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdComputer } from 'react-icons/md'
import { AiOutlineTeam } from "react-icons/ai";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaHammer, FaRobot } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' }, // TODO: add a page about this website
  {
    label: 'Programs',
    children: [
      {
        label: 'Impact',
        description: 'Those who join our program have their life changed.',
        href: '/impact',
        icon: <IoFootstepsSharp />,
      },
      {
        label: 'Builds',
        description: 'Learn about our program offerings!',
        href: '/builds',
        icon: <FaHammer />,
      },
    ],
  },
  {
    label: 'Application',
    children: [
      {
        label: 'Apply Now',
        description: 'Join a team of talented developers, designers, and project managers.',
        href: '/apply',
        icon: <FaRobot />,
      },
      {
        label: 'FAQ',
        description: 'Have your questions answered!',
        href: '/faq',
        icon: <BsQuestion />,
      },
    ],
  },
]
