import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default ({node = {}}) => {
  const { code, language } = node
  if (!code) return null;
  return <SyntaxHighlighter customStyle={{fontSize: '.8em'}} style={a11yDark} language={language || 'text' }>{code}</SyntaxHighlighter>
}
