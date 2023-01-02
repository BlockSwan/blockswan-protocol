import moment from 'moment'

function formatString(str: string, maxCharacters: number): string {
   // Split the string into an array of words
   const words = str.split(' ')

   // Initialize a result string and a character count
   let result = ''
   let count = 0

   // Iterate through the array of words
   for (const word of words) {
      // Add the word to the result string
      result += word

      // Increment the character count by the length of the word
      count += word.length

      // If the character count is greater than or equal to the max number of characters,
      // return the result string with an ellipsis appended to the end
      if (count >= maxCharacters) {
         return result + '...'
      }

      // If the character count is less than the max number of characters,
      // add a space to the result string and increment the character count by 1
      result += ' '
      count += 1
   }

   // If the loop completes, return the result string
   return result
}

function convertToBase64(file: File | string) {
   if (typeof file === 'string') return
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
         resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
         reject(error)
      }
      fileReader.readAsDataURL(file)
   })
}

function formatDate(date: any) {
   const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   })
   return formatter.format(date)
}

function getTimeSince(date: Date): string {
   // Calculate the time elapsed since the given date
   var elapsedTime = moment().diff(date)

   // If the elapsed time is less than one minute, return "just now"
   if (elapsedTime < 60000) {
      return 'just now'
   }
   // If the elapsed time is less than one hour, return the number of minutes elapsed followed by "minutes ago"
   else if (elapsedTime < 3600000) {
      return Math.floor(elapsedTime / 60000) + ' minute(s) ago'
   }
   // If the elapsed time is less than one day, return the number of hours elapsed followed by "hours ago"
   else if (elapsedTime < 86400000) {
      return Math.floor(elapsedTime / 3600000) + ' hour(s) ago'
   }
   // If the elapsed time is less than one week, return the number of days elapsed followed by "days ago"
   else if (elapsedTime < 604800000) {
      return Math.floor(elapsedTime / 86400000) + ' day(s) ago'
   }
   // If the elapsed time is more than one week, return the full date in the format "Month Day, Year"
   else {
      return moment(date).format('MMMM DD, YYYY')
   }
}

const n6 = new Intl.NumberFormat('en-us', {
   style: 'decimal',
   minimumFractionDigits: 0,
   maximumFractionDigits: 6,
})
const n4 = new Intl.NumberFormat('en-us', {
   style: 'decimal',
   minimumFractionDigits: 0,
   maximumFractionDigits: 4,
})

const c2 = new Intl.NumberFormat('en-us', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
})

const tokenValue = (value: number, decimals: number) =>
   decimals ? value / Math.pow(10, decimals) : value

const tokenValueTxt = (value: number, decimals: number, symbol: string) =>
   `${n4.format(tokenValue(value, decimals))} ${symbol}`

export {
   formatString,
   convertToBase64,
   formatDate,
   c2,
   getTimeSince,
   tokenValueTxt,
}
