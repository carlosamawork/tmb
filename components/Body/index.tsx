import { HTMLReactParserOptions } from "html-react-parser"
import { Element }  from "domhandler/lib/node"
import parse from "html-react-parser"
import Image from "next/image"
import myLoader from "components/Loader"

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    // Look for an img tag and replace it with Image.
    if (domNode.name === "img") {
      const { src, alt, width, height } = domNode.attribs

      return (
        <Image
            loader={myLoader}
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
      )
    }
  },
}

export function Body({ value }: { value: string }) {
  return <>{parse(value, options)}</>
}