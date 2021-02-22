import Link from 'next/link'
import { FC } from 'react'

export interface TalentCardProps {
  id: number
  name: string
  title: string
}

export const TalentCard: FC<TalentCardProps> = (props) => {
  const { name, title } = props

  return (
    <div>
      <h1>
        <Link
          href={`/app/talent/[username]`}
          as={`/app/talent/${props.id}`}
          passHref
        >
          <a>{name}</a>
        </Link>
      </h1>
      <h2>{title}</h2>
    </div>
  )
}
