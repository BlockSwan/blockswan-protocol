import React from 'react'
import { motion } from 'framer-motion'

import { Box } from '@mui/system'

import { CategoryProps } from '../types/types'

interface UpAndDownProps {
   children: any
   isUp?: boolean
}

const UpAndDown = ({ children, isUp }: UpAndDownProps) => {
   let height = 100
   const y = isUp ? height : -height

   return (
      <>
         <motion.div
            initial={{
               opacity: 0,
               y: y,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               duration: 0.4,
               ease: 'easeOut',
               delayChildren: 0.5,
               staggerChildren: 0.2,
            }}
            exit={{
               opacity: 0,
               y: -y,
            }}
         >
            <Box width={'100%'}>{children}</Box>
         </motion.div>
      </>
   )
}

interface LeftAndRightProps {
   children: any
   isLeft?: boolean
}

const LeftAndRight = ({
   children,
   isLeft,
}: LeftAndRightProps) => {
   let width = 100
   //const x = isLeft ? width : -width

   return (
      <>
         <motion.div
            initial={{
               opacity: 0,
               x: width,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
               duration: 0.4,
               ease: 'easeIn',
            }}
            exit={{
               opacity: 0,
               x: -width,
            }}
         >
            <Box width={'100%'}>{children}</Box>
         </motion.div>
      </>
   )
}

const isTransitionUp = (
   currentCategory: string,
   selectedCategory: string,
   categories: CategoryProps[]
): boolean => {
   let currentIndex = categories?.findIndex(
      (c) => c?.name === currentCategory
   )
   let selectedIndex = categories?.findIndex(
      (c) => c?.name === selectedCategory
   )
   return currentIndex <= selectedIndex
}

export { UpAndDown, isTransitionUp, LeftAndRight }
