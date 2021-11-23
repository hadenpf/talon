import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

export interface TalentCardProps {
  id: number
  name: string
  title: string
}

export const TalentCard: FC<TalentCardProps> = (props) => {
  const { name, title } = props

  return (
		<Link
			href={`/talent/[id]`}
			as={`/talent/${props.id}`}
		>
			<TalentCardContainer>
				<TalentCardThumbnail />
				<TalentCardOverlay>
				<h1>
					<Link
						href={`/talent/[id]`}
						as={`/talent/${props.id}`}
						passHref
					>
						<a>{name}</a>
					</Link>
				</h1>
				<h2>{title}</h2>

				</TalentCardOverlay>
			</TalentCardContainer>
		</Link>
  )
}

const TalentCardContainer = styled.div`
  display: flex;

	position: relative;
  border-radius: 10px;
	overflow: hidden;
  box-shadow: 0 2px 4px rgba(127, 127, 127, 0.2);
	
	height: 180px;

  background-color: #111;
`

const TalentCardThumbnail = styled.img`
	width: 100%;
	height: 100%;
	/* background: red; */

`

const TalentCardOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5), rgba(0, 0, 0, 1));
`
