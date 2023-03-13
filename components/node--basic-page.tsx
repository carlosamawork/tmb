import { DrupalNode } from "next-drupal"

interface NodeBasicPageProps {
  node: DrupalNode
}

export function NodeBasicPage({ node, ...props }: NodeBasicPageProps) {
  return (
    <article {...props}>
      
      
    </article>
  )
}
