
"use client";
const ErrorBoundary = ({error, reset}: {error : Error, reset : () => void}) => {
  return (
    <div>ErrorBoundary in the review {error.message}
    <button onClick={reset}>Try Gain</button>
    </div>
  )
}

export default ErrorBoundary