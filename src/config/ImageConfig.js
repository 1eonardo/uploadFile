import fileDefault from '../assets/file-blank-solid-240.png';
import fileCSS from '../assets/file-css-solid-240.png';
import filePdf from '../assets/file-pdf-solid-240.png';
import filePng from '../assets/file-png-solid-240.png';
import fileJPG from '../assets/file-jpeg-solid-240.png';
import fileTxt from '../assets/file-txt-solid-240.png';
import fileDocx from '../assets/file-docx-solid-240.png';
import fileXlsx from '../assets/file-xlsx-solid-240.png';
import filepptx from '../assets/file-pptx-solid-240.png';


export const ImageConfig = {
    default: fileDefault,
    pdf: filePdf,
    plain: fileTxt,
    'vnd.openxmlformats-officedocument.wordprocessingml.document': fileDocx,
    'vnd.openxmlformats-officedocument.spreadsheetml.sheet': fileXlsx,
    'vnd.openxmlformats-officedocument.presentationml.presentation': filepptx,
    png: filePng,
    jpeg: fileJPG,
    css: fileCSS
}