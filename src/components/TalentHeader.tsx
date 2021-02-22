import { FC } from 'react'
import styled, { css } from 'styled-components'

export interface TalentHeaderProps {
  accent?: string
  background?: string
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
  const { accent, background, name, title, quote, trailer, pricing } = props

  return (
    <TalentHeaderContainer background={background} accent={accent}>
      <TrailerContainer>
        <TrailerInner>
          <TrailerThumbnail image={trailer.thumbnail}>
            <TrailerThumbnailOverlay>
              <button>Play Trailer</button>
            </TrailerThumbnailOverlay>
          </TrailerThumbnail>
        </TrailerInner>
      </TrailerContainer>
      <ContentContainer>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <blockquote>{quote}</blockquote>
        <BottomContentContainer>
          <div>
            <h3>{pricing.type === 'base' ? 'Starting from' : 'Pricing'}</h3>
            <span>{pricing.amount}</span>
          </div>
          <div>
            <button>aasdf</button>
            <button>aadsf</button>
          </div>
        </BottomContentContainer>
      </ContentContainer>
    </TalentHeaderContainer>
  )
}

const TalentHeaderContainer = styled.div<
  Pick<TalentHeaderProps, 'background' | 'accent'>
>`
  display: flex;
  flex-direction: row;
  padding: 150px 50px;
  padding-bottom: 15px;
  background: linear-gradient(to bottom, #1a1a1aaa, #1a1a1a),
    url('${(props) => props.background}') no-repeat fixed top center;
  background-size: cover;
`

const TrailerContainer = styled.aside`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  margin-right: 50px;
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

  border: 3px solid white;
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
  margin-top: auto;
  padding-top: 20px;

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
