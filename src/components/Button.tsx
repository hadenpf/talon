import { FC, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { default as NextLink } from 'next/link'

interface IButtonBaseProps {
  transparent?: boolean
  textColor?: string
}

interface IButtonProps {
  accent?: string
  onClick?: () => void
}

interface IButtonLinkProps {
  href?: string
}

export type ButtonProps = IButtonBaseProps & (IButtonProps | IButtonLinkProps)

export const Button: FC<ButtonProps> = (_props) => {
  const props: PropsWithChildren<
    IButtonBaseProps & IButtonProps & IButtonLinkProps
  > = _props
  const { transparent, accent, textColor } = props

  const componentProps = {
    link: transparent ?? !!props.href,
    color: textColor,
    accent,
  }

  if (props.href)
    return (
      <NextLink href={props.href} passHref>
        <StyledLink {...componentProps}>{props.children}</StyledLink>
      </NextLink>
    )
  else
    return (
      <StyledButton {...componentProps} onClick={props.onClick}>
        {props.children}
      </StyledButton>
    )
}

interface StyledButtonProps {
  link: boolean
  color: string
  accent: string
}

const ButtonStyle = css<StyledButtonProps>`
  display: inline-flex;
  flex: 0;

  padding: 7px 17px;
  text-decoration: none;
  border-radius: 5px;

  font: inherit;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.color || 'inherit'};

  background-color: ${(props) =>
    props.link ? 'transparent' : props.accent ?? 'black'};

  transition: background-color 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    ${(props) =>
      props.link
        ? css`
            text-decoration: underline;
          `
        : ''}
  }
`

const StyledLink = styled.a<StyledButtonProps>`
  ${ButtonStyle}
`

const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonStyle}
`
