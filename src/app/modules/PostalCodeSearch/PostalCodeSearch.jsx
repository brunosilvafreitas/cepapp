import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Box from '../../../components/Box'

const Container = styled(Box)`
  background-color: #ddd;
  padding: 20px 25px 25px;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Form = styled.form`
`

const Label = styled.label`
  display: inline-block;
  margin-right: 20px;

`

const PostalCodeSearch = ({
  titleTag = 'h1',
  onSubmit,
  postalCode = '',
  ...other
}) => {
  const [term, setTerm] = useState(postalCode)
  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(term)
  }

  const isValid = (text = '') => text.trim().replace(/_|-/g, '').length === 8

  return (
    <Container {...other}>
      <Title as={titleTag}>Consultar</Title>
      <Form onSubmit={handleSubmit}>
        <Label>CEP</Label>
        <Input mask='99999-999' type='text' value={term} onChange={(e) => setTerm(e.target.value)} />
        <Button type='submit' disabled={!isValid(term)}>Buscar</Button>
      </Form>
    </Container>
  )
}

PostalCodeSearch.displayName = 'PostalCodeSearch'

export default PostalCodeSearch
