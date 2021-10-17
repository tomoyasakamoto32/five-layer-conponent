// import { useEffect } from "react"
import Button from '@mui/material/Button'

/**
 * @private
 */
export const PlainSample = (): JSX.Element => <Button variant="contained">Hello World!!!</Button>

const Sample = (): JSX.Element => {
  return <PlainSample />
}

export default Sample
