import { FC, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { default as NextLink } from 'next/link'

interface IButtonBaseProps {
  transparent?: boolean
  color?: string

  square?: boolean | number
  round?: boolean
}

interface IButtonProps {
  accent?: string
  onClick?: () => void
}

interface IButtonLinkProps {
  href?: string
	as?: string
}

export type ButtonProps = IButtonBaseProps & (IButtonProps | IButtonLinkProps)
export type IconButtonProps = IButtonBaseProps & (IButtonProps | IButtonLinkProps)

export const Button: FC<ButtonProps> = (_props) => {
  const props: PropsWithChildren<
    IButtonBaseProps & IButtonProps & IButtonLinkProps
  > = _props
  const { transparent, accent, color, round, square } = props

	console.log({ accent })

  const componentProps = {
    link: transparent ?? !!props.href,
    color: color,
    accent,
    round,
    square: square === true ? 48 : +square
  }

  if (props.href)
    return (
      <NextLink href={props.href} as={props.as} passHref>
        <StyledButton as="a" {...componentProps}>{props.children}</StyledButton>
      </NextLink>
    )
  else
    return (
      <StyledButton as="button" {...componentProps} onClick={props.onClick}>
        {props.children}
      </StyledButton>
    )
}

interface StyledButtonProps {
  link: boolean
  color: string
  accent: string

  round?: boolean
  square?: number
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  flex: 0;
	justify-content: center;
	align-items: center;

	white-space: nowrap;

  padding: ${(props) => (props.link ? '7px 20px' : '7px 17px')};
  text-decoration: none;
  border-radius: ${props => props.round ? 17 : 5}px;

  font: inherit;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.color || 'inherit'};

  background-color: ${(props) =>
    props.link ? 'transparent' : props.accent ?? 'black'};

  transition: background-color 0.2s ease;
  border: none;
  cursor: pointer;

  ${(props) => props.square ? css`
    padding: 7px;

    height: ${props.square}px;
    width: ${props.square}px;
  ` : ``}

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
