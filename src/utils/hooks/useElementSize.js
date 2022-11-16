import { useCallback, useEffect, useState } from "react"

function useElementSize (elementRef) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const updateSize = useCallback(() => {
    const node = elementRef?.current
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      })
    }
  }, [elementRef])

  useEffect(() => {
    updateSize()

    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useElementSize
