import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const Survey = () => {
  const [q1Points, setQ1Points] = useState(0)
  const [q2Points, setQ2Points] = useState(0)

  let sum = q1Points + q2Points

  const q1 = {
    question: 'kysymys1',
    answer1: {
      text: 'vastaus11',
      points: 1
    },
    answer2: {
      text: 'vastaus12',
      points: 2
    },
    answer3: {
      text: 'vastaus13',
      points: 3
    },
  }

  const q2 = {
    question: 'kysymys2',
    answer1: {
      text: 'vastaus21',
      points: 1
    },
    answer2: {
      text: 'vastaus22',
      points: 2
    },
    answer3: {
      text: 'vastaus23',
      points: 3
    },
  }

  return (
    <div>
      <h2>Esimerkkikysely</h2>
      <Form>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>{q1.question}</Form.Label>
          <Col sm={10}>
          <Form.Check
            type="radio"
            name={q1.question}
            label={q1.answer1.text}
            onChange={() => setQ1Points(q1.answer1.points)}
          />
          <Form.Check
            type="radio"
            name={q1.question}
            label={q1.answer2.text}
            onChange={() => setQ1Points(q1.answer2.points)}
          />
          <Form.Check
            type="radio"
            name={q1.question}
            label={q1.answer3.text}
            onChange={() => setQ1Points(q1.answer3.points)}
          />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>{q2.question}</Form.Label>
          <Col sm={10}>
          <Form.Check
            type="radio"
            name={q2.question}
            label={q2.answer1.text}
            onChange={() => setQ2Points(q2.answer1.points)}
          />
          <Form.Check
            type="radio"
            name={q2.question}
            label={q2.answer2.text}
            onChange={() => setQ2Points(q2.answer2.points)}
          />
          <Form.Check
            type="radio"
            name={q2.question}
            label={q2.answer3.text}
            onChange={() => setQ2Points(q2.answer3.points)}
          />
          </Col>
        </Form.Group>
      </Form>
      <h3>Pisteet: {sum}</h3>
    </div>
  )
}

export default Survey