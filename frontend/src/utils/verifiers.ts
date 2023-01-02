import { delivery } from '../constants/delivery'
import { revisions } from '../constants/revisions'
import { PackageProps } from '../types/types'

const isNameOk = (name: string): boolean => {
   let len: number = name?.length
   if (!len || len > 30 || len <= 0) return false
   return true
}

const isDeliverableOk = (data: string): boolean => {
   let len: number = data?.length
   if (!len || len > 60 || len <= 0) return false
   return true
}

const isTimeDeliveryOk = (data: number): boolean => {
   return data && delivery?.includes(data) ? true : false
}

const isRevisionOk = (data: string): boolean => {
   return data && revisions?.includes(data) ? true : false
}

const isPriceOk = (packages: PackageProps[], index: number): boolean => {
   function isOk(p1: number, p2: number | 0): boolean {
      return p1 > p2 && p1 > 0
   }
   let prices = [] as number[]
   for (let i = 0; i < packages?.length; i++) prices.push(packages[i]?.price)

   let a = prices[index]
   let b = prices[index - 1] || 0

   return isOk(a, b)
}

const verifyPackages = (packages: PackageProps[]): boolean => {
   let isValid: boolean = true
   if (!packages) return false
   for (let i = 0; i < packages?.length; i++) {
      const { delivery, deliverable, name } = packages[i]

      if (!isNameOk(name)) isValid = false
      if (!isDeliverableOk(deliverable)) isValid = false
      if (!isTimeDeliveryOk(delivery)) isValid = false
      if (!isPriceOk(packages, i)) isValid = false
   }
   return isValid
}

export {
   isNameOk,
   isDeliverableOk,
   isTimeDeliveryOk,
   isPriceOk,
   isRevisionOk,
   verifyPackages,
}
