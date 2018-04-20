import styled, { css } from 'styled-components/native'
import PropTypes from 'prop-types'

export const Row = styled.View`
  flex-direction: row;
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};
`

Row.propTypes = {
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'stretch',
    'baseline'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between'
  ])
}

export const RowItem = styled.View`
  flex: ${props => props.flex};
`

RowItem.propTypes = {
  flex: PropTypes.number
}

RowItem.defaultProps = {
  flex: 1
}

export const HorizontalSpacer = styled.View`
  width: ${props => props.size};
`

HorizontalSpacer.propTypes = {
  size: PropTypes.number
}

HorizontalSpacer.defaultProps = {
  size: 10
}

export const VerticalSpacer = styled.View`
  height: ${props => props.size};
`

VerticalSpacer.propTypes = {
  size: PropTypes.number
}

VerticalSpacer.defaultProps = {
  size: 10
}
