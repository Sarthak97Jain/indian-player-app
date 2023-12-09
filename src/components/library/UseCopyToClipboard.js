import React from 'react'
import copy from 'copy-to-clipboard'

const useCopyToClipboard = () => {
    const handleCopy=(text)=> {
        if (typeof text === "string" || typeof text == "number") {
          copy(text.toString());
        } else {
          console.error(
            'wrong format for copy text.'
          );
        }
      }
    return [handleCopy]

}

export default useCopyToClipboard
