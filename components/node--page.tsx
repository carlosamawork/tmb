import { DrupalNode } from "next-drupal"

interface NodeBasicPageProps {
  node: DrupalNode
}

export function NodePage({ node, ...props }: NodeBasicPageProps) {
  return (
    <article {...props}>
      
      
    </article>
  )
}
