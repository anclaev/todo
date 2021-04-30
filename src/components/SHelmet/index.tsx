import Helmet from 'react-helmet'

enum ERels {
  css = 'stylesheet',
  icon = 'shortcut icon',
}

type THelmet = {
  title?: string
  description?: string
  link?: {
    rel: ERels
    href: string
    type?: string
  }
}

const LinkBuilder = (link: THelmet['link']) => {
  return !!link!.type ? (
    <link rel={link!.rel} href={link!.href} type={link!.type} />
  ) : (
    <link rel={link!.rel} href={link!.href} />
  )
}

export const SHelmet: React.FC<THelmet> = (props) => (
  <Helmet>
    {props.title ? <title>{props.title}</title> : ''}
    {props.description ? (
      <meta name="description" content={props.description} />
    ) : (
      ''
    )}
    {props.link ? LinkBuilder(props.link) : ''}
  </Helmet>
)
