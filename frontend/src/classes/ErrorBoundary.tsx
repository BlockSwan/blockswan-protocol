import React from 'react'

// Error boundaries currently have to be a class component.
class ErrorBoundary extends React.Component<any> {
   state = { hasError: false, error: null }
   static getDerivedStateFromError(error: any) {
      return {
         hasError: true,
         error,
      }
   }
   render() {
      if (this.state.hasError) {
         return this.props.fallback
      }
      return this.props.children
   }
}

export default ErrorBoundary
