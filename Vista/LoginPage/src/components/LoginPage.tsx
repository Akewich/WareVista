import React from 'react'
import { Container, Form ,Button } from 'react-bootstrap'
function LoginPage() {
  return (
    <>
        <Container >
            <Form >
            {/* Password Form */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
            </Form.Group>
            {/* Password Form */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* Password Form */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Your Password" />
            </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form>
        </Container>
    </>
  )
}

export default LoginPage