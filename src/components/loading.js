/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import loader from '../images/loader.gif'

const Loading = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <img src={loader} alt="loading" />
    </div>
  )
}

export default Loading
