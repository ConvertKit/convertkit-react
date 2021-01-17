import React from 'react'

function useScript(url, async = true) {

  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = url
    script.async = async
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export default useScript
