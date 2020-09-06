import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

export default ({node = {}}) => {
  const { code, language } = node
  if (!code) return null;
  return <SyntaxHighlighter language={language || 'text' }>{code}</SyntaxHighlighter>
}
