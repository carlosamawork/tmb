import { HTMLReactParserOptions, Element } from "html-react-parser"

import parse from "html-react-parser"
import Image from "next/image"
import myLoader from "components/Loader"

const options: HTMLReactParserOptions = { replace: (domNode) => {
    
    // Look for an img tag and replace it with Image.
    if (domNode.type === "tag"){
        
        if(domNode instanceof Element && domNode.name === "img") {
            const { src, alt, width, height } = domNode.attribs
            return (
                <Image
                    loader={myLoader}
                    src={src}
                    width={parseInt(width)}
                    height={parseInt(height)}
                    alt={alt}
                />
            )
        }
    }
    },
}

export function Body({ value }: { value: string }) {
  return <>{parse(value, options)}</>
}