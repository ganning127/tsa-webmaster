import * as React from 'react'
import { AiOutlineTeam } from "react-icons/ai";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaHammer, FaRobot } from "react-icons/fa";
import { BsQuestion, BsFillInfoCircleFill } from "react-icons/bs";
import { BiCodeAlt } from 'react-icons/bi'

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
  {
    label: 'About',
    children: [
      {
        label: "About RoboReach's Website",
        description: "How we coded this website and it's functionality!",
        href: '/about-roboreach-website',
        icon: <BiCodeAlt />
      },
      {
        label: 'About RoboReach',
        description: 'Learn about our mission, our vision, and our team.',
        href: '/about',
        icon: <BsFillInfoCircleFill />
      }
    ]
  },
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
        description: 'Join one of our 3 builds!',
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
