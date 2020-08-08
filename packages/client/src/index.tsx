import 'ress'

import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/core'
import { xs } from 'style'

const App = () => {
  return (
    <h1
      css={css`
        ${xs} {
          color: red;
        }
      `}
    >
      Hello React!
    </h1>
  )
}

render(<App />, document.getElementById('root'))
