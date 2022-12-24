import 'react-quill/dist/quill.snow.css'
import React from 'react'
import ReactQuill from 'react-quill'
import styled from 'styled-components'
import { Box, FormHelperText, Stack } from '@mui/material'

interface QuillProps {
   maxLength: number
   placeholder: string
   htmlText: string
   helperText?: string | null | boolean | undefined
   length?: number
   text?: string
   isError?: string | boolean | null | undefined
   onBlur?: (
      htmlData: string,
      length: number,
      text: string
   ) => void
}

interface QuillStateProps {
   htmlText: string
   length: number
   text: string
}

class Quill extends React.Component<
   QuillProps,
   QuillStateProps
> {
   public readonly maxLength: number

   constructor(props: QuillProps) {
      super(props)
      this.state = {
         htmlText: props.htmlText,
         length: props.length || 0,
         text: props.text || '',
      }
      this.maxLength = props.maxLength
      this.handleChange = this.handleChange.bind(this)
      this.handleBlur = this.handleBlur.bind(this)
   }

   handleChange = (
      html: string,
      _: any,
      __: any,
      object: any
   ) => {
      let length = object.getLength()
      let text = object.getText()
      if (text.length <= this.maxLength) {
         this.setState({
            htmlText: html,
            length: length,
            text: text,
         })
      }
   }

   handleBlur = () => {
      console.log('blur')
      if (this.props.onBlur) {
         this.props.onBlur(
            this.state.htmlText,
            this.state.length,
            this.state.text
         )
      }
   }

   modules = {
      toolbar: [
         [{ header: [2, false] }],
         [
            'bold',
            'italic',
            'underline',
            'background',
            'strike',
            'blockquote',
         ],
         [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
         ],
         //  ['link', 'image'],
         // ['clean'],
      ],
   }

   formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'background',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
   ]

   render() {
      return (
         <>
            <Box>
               <ReactQuillStyle className="text-editor">
                  <ReactQuill
                     defaultValue={this.state.htmlText}
                     style={{ minHeight: '100px' }}
                     value={this.state.htmlText}
                     onChange={this.handleChange}
                     modules={this.modules}
                     formats={this.formats}
                     placeholder={this.props.placeholder}
                     onBlur={this.handleBlur}
                  />
               </ReactQuillStyle>
               <Stack direction="row">
                  <FormHelperText
                     sx={{
                        color: this.props.isError
                           ? 'error.main'
                           : 'primary.main',
                     }}
                  >
                     {this.props.helperText}
                  </FormHelperText>
                  <Box flexGrow={1} />
                  <FormHelperText>
                     {this.state.length}/
                     {this.props.maxLength} characters
                  </FormHelperText>
               </Stack>
            </Box>
         </>
      )
   }
}

export default Quill

const ReactQuillStyle = styled.div`
   * {
      border-radius: '0.5rem';
      font-family: 'Saira';
   }

   border-radius: 8px;
   box-shadow: ${({ theme }) => theme?.shadows[1]};
   .editorbox svg {
      background-color: ${({ theme }) =>
         theme.palette.primary?.main};
      padding: 2px;
      border-radius: 5px;
   }
   .ql-snow .ql-stroke {
      stroke: ${({ theme }) => theme?.palette.primary.main};
   }
   .ql-snow .ql-picker-options {
      background-color: ${({ theme }) =>
         theme.palette.secondary?.main};
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme?.shadows[4]};
      border-radius: 8px;
      .ql-picker.ql-expanded .ql-picker-label {
         border: none;
      }
   }

   .ql-toolbar.ql-snow {
      background-color: ${({ theme }) =>
         theme.palette.secondary?.light};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border: 1px solid
         ${({ theme }) => theme.palette.divider};
   }

   .ql-container.ql-snow {
      border-bottom-left-radius: 8px;
      min-height: 170px;
      border-bottom-right-radius: 8px;
      border: 1px solid
         ${({ theme }) => theme.palette.divider};
      background: ${({ theme }) =>
         theme.palette.secondary.main};
      span {
         background: ${({ theme }) =>
            theme.blockswan.yellowSubmarine};
         color: ${({ theme }) =>
            theme.palette.primary.main};
      }

      .ql-blank {
         min-height: 170px;
      }
   }
`
