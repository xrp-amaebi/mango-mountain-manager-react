import styled from 'styled-components'
import { Link } from "react-router-dom"

import media from "../../styles/utils/media"
// import { colors } from "../../styles/utils/colors"

export const LoginForm = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  ${
    media.mobile`
    `
  }
`

export const SignUpLink = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  color: #1a73e8;
  padding: 16px 0 16px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
`