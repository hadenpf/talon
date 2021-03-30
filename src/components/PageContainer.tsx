import Head from 'next/head'
import * as React from 'react'
import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
// import { PageFooter } from './Footer'
import { HEADER_AVOID, HeaderProps, Header } from './Header'

interface PageContainerProps {
  title?: string
  titleOverride?: string

  component?: React.ComponentType

  noHeader?: boolean
  headerOptions?: HeaderProps

  noFooter?: boolean
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const {
    title,
    titleOverride,
    children,
    component: Component = DefaultPage,
    noHeader,
    headerOptions,
    noFooter,
  } = props

  return (
    <>
      <Head>
        <title>{titleOverride ?? `${title ? `${title} — ` : ''}Talon`}</title>
      </Head>

      <Component>
        {!noHeader && <Header {...headerOptions} />}

        {children}

        {/* {!noFooter && <PageFooter />} */}
      </Component>
    </>
  )
}

const DefaultPage = styled.div`
  flex: 1;
  flex-direction: column;
`

export const AvoidHeader = styled.div`
  margin-top: ${HEADER_AVOID}px;
`

export const PageSection = styled.section`
  background-color: #1a1a1a;
  padding: 20px 0;
`
