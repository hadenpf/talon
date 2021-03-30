import { FC } from 'react'
import styled, { css } from 'styled-components'
import { INSET_MARGIN } from '../helpers/layout';
import { Button } from './Button'

/**
 * The breakpoint at which the layout switches to a vertical one.
 */
const VERTICAL_BREAKPOINT = 900;

export interface TalentHeaderProps {
  accent?: string
  background?: string
	id: number
  name: string
  title: string
  quote: string
  trailer: {
    thumbnail: string
    video: string
  }
  pricing: {
    type: 'fixed' | 'base'
    amount: string
  }
}

export const TalentHeader: FC<TalentHeaderProps> = (props) => {
  const { accent, background, id, name, title, quote, trailer, pricing } = props

console.log({accent})	

  return (
    <TalentHeaderContainer background={background} accent={accent}>
      <TrailerContainer>
        <TrailerInner>
          <TrailerThumbnail image={trailer.thumbnail}>
            <TrailerThumbnailOverlay>
              <Button square round>
								&raquo;
							</Button>
            </TrailerThumbnailOverlay>
          </TrailerThumbnail>
        </TrailerInner>
      </TrailerContainer>
      <ContentContainer>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <blockquote>{quote}</blockquote>
        <BottomContentContainer>
          <div
            style={{
              flexGrow: 1,
            }}
          >
            <h3>{pricing.type === 'base' ? 'Starting from' : 'Pricing'}</h3>
            <span>{pricing.amount}</span>
          </div>
          <BottomButtonsContainer>
            <Button
              transparent
							href="/talent/[id]/contact"
							as={`/talent/${id}/contact`}
            >
              Contact
            </Button>
            <Button
              accent={accent}
							transparent={false}
              href="/talent/[id]/pricing"
							as={`/talent/${id}/pricing`}
            >
              {pricing.type === 'fixed' ? 'Hire' : 'View Pricing'}
            </Button>
          </BottomButtonsContainer>
        </BottomContentContainer>
      </ContentContainer>
    </TalentHeaderContainer>
  )
}

type TalentHeaderContainerProps = Pick<TalentHeaderProps, 'background' | 'accent'>

const TalentHeaderContainer = styled.div<TalentHeaderContainerProps>`
  display: flex;
  flex-direction: row;
  padding: 100px ${INSET_MARGIN}px;
  padding-bottom: 15px;
  background: linear-gradient(to bottom, #1a1a1aaa, #1a1a1a),
    url('${(props) => props.background}') no-repeat fixed top center;
  background-size: cover;

	@media screen and (max-width: ${VERTICAL_BREAKPOINT}px) {
		flex-direction: column;
	}
`

const TrailerContainer = styled.aside`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  margin-right: 50px;

	@media screen and (max-width: ${VERTICAL_BREAKPOINT}px) {
		margin-right: 0;
		margin-bottom: 30px;
	}
`

const TrailerThumbnailOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  box-sizing: border-box;

  transition: background-color 0.1s ease;
`
const TrailerThumbnail = styled.div<{ image: string }>`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;

  background: url('${(props) => props.image}') center center;
  background-size: cover;

	cursor: pointer;

  &:hover {
    ${TrailerThumbnailOverlay} {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`

const TrailerInner = styled.div`
  box-sizing: border-box;
  position: relative;

  height: 0;
  padding-bottom: 56.25%;
  width: 25vw;
  min-width: 320px;
  flex-grow: 0;

  border-radius: 5px;

  border: 1px solid white;

	@media screen and (max-width: ${VERTICAL_BREAKPOINT}px) {
		width: 100%;
	}
`

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: flex-end;

  h1 {
    font-size: 28px;
    font-weight: 700;

    margin: 0;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;

    margin: 0;
    margin-top: -2px;
    margin-bottom: 20px;
  }

  blockquote {
    font-size: 14px;
    line-height: 20px;
    /* font-weight: 600; */

    margin: 0;
    padding-left: 12px;

    border-left: 3px solid white;
  }
`

const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: row;
	align-items: center;

  margin-top: auto;
  padding-top: 20px;

	@media screen and (max-width: ${VERTICAL_BREAKPOINT}px) {
		flex-direction: column;
		align-items: stretch;

		> * {
			margin-bottom: 8px;
		}
	}

  h3 {
    font-weight: 400;
    font-size: 16px;

    margin: 0;
    margin-bottom: -2px;
  }

  span {
    font-size: 24px;
    font-weight: 600;
  }
`
const BottomButtonsContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;

	@media screen and (max-width: ${VERTICAL_BREAKPOINT}px) {
		margin-top: 20px;
		flex-direction: column-reverse;

		> * {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
`
