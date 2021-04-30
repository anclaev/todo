import Helmet from 'react-helmet'
import { THelmet } from '../../types'

const LinkBuilder = (link: THelmet['link']) => {
  return !!link!.type ? (
    <link rel={link!.rel} href={link!.href} type={link!.type} />
  ) : (
    <link rel={link!.rel} href={link!.href} />
  )
}

const SHelmet: React.FC<THelmet> = (props) => (
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

export default SHelmet
