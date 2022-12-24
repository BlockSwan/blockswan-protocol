import multer from 'multer'
import { FILE_FOLDER_NAME } from '../constants/constants'
declare const __basedir: string

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, FILE_FOLDER_NAME)
    },
})
