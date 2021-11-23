import NextLink from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import { MarginWrapper } from '../utils/WidthWrapper'

export const HEADER_HEIGHT = 60
export const HEADER_AVOID = HEADER_HEIGHT + 10

export interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<HeaderWrapper>
			<NextLink href="/">
				<a>
					<strong>Talon</strong>
				</a>
			</NextLink>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled(MarginWrapper).attrs({ as: 'nav' })`
	font-size: 16px;
	font-weight: 500;
	display: flex;
	flex-flow: row nowrap;

	align-items: center;

	width: 100%;
	height: ${HEADER_HEIGHT}px;

	position: fixed;
	top: 0;

	background: linear-gradient(
		to bottom,
		rgba(26, 26, 26, 1),
		rgba(26, 26, 26, 0)
	);

	a {
		color: inherit;
		text-decoration: none;

		&:focus,
		&:hover {
			text-decoration: underline;
		}

		strong {
			font-weight: 700;
		}
	}
`
