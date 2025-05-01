import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Header = () => {
  return (
    <div >
    <Card className='header bg-warning'>
      <CardBody>
      <h1>Welcome to courses Application</h1>
      </CardBody>
    </Card>
    </div>
  )
}

export default Header