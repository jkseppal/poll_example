import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [q1Points, setQ1Points] = useState(0)
  const [q2Points, setQ2Points] = useState(0)

  let sum = q1Points + q2Points

  const q1 = {
    question: '1. Kuinka toiveikkaana näet tulevaisuutesi?',
    answer1: {
      text: 'Tulevaisuuteni on täysin toivoton.',
      points: 1
    },
    answer2: {
      text: 'En osaa sanoa. Aika näyttää, mitä kohdalleni on tulossa.',
      points: 2
    },
    answer3: {
      text: 'Erittäin toiveikkaana, minulla on suuret tulevaisuudensuunnitelmat valmiina.',
      points: 3
    },
  }

  const q2 = {
    question: '2. Mikä on suhteesi muihin ihmisiin?',
    answer1: {
      text: 'Vihaan ihmisiä, haluan pysyä omissa oloissani.',
      points: 1
    },
    answer2: {
      text: 'Viihdyn muiden seurassa, mutta välillä on myös tärkeää viettää aikaa yksin.',
      points: 2
    },
    answer3: {
      text: 'Parasta elämässä on viettää aikaa muiden seurassa.',
      points: 3
    },
  }

  const Result = () => {
    if (submitted === false) {
      return null
    }
    if (sum < 3) {
      return (
        <div>
          <h2>pisteesi: {sum}/6</h2>
          Voi sentään! olet vakavassa vaarassa syrjäytyä!<br />
          Tässä linkkejä, joihin ehkä kannattaa tutustua:<br />
          <a href="http://is.fi">iltasanomat</a><br />
          <a href="http://yle.fi">yle</a><br />
          <Button onClick={() => setSubmitted(false)}>Vastaa uudestaan</Button>
        </div>
      )
    }
    if (sum < 5) {
      return (
        <div>
          <h2>pisteesi: {sum}/6</h2>
          Olet keskivakavassa vaarassa syrjäytyä. Tässä sinulle sopivia linkkejä:<br />
          <a href="http://mtv3.fi">mtv3</a><br />
          <Button onClick={() => setSubmitted(false)}>Vastaa uudestaan</Button>
        </div>
      )
    }
    return (
      <div>
        <h2>pisteesi: {sum}/6</h2>
        Ei huolta, sulla menee lujaa!!!<br />
        <Button onClick={() => setSubmitted(false)}>Vastaa uudestaan</Button>
      </div>
    )
  }
  
  return (
    <div className="container">
      {(submitted === false) ? <div><h2>Syrjäytyneisyyskysely</h2>
      <p>
        <i>Vastauksiasi tähän kyselyyn ei tallenneta mihinkään eikä lähetetä eteenpäin. Vastaa kyselyyn rehellisesti, kysely on vain ja ainoastaan itseäsi varten.</i>
      </p>
      <p>
        <i>Vastaa jokaiseen kysymykseen.</i>
      </p>
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
      {(q1Points === 0|| q2Points === 0)
        ? <Button disabled variant="success" onClick={() => setSubmitted(true)}>vastaa</Button>
        : <Button variant="success" onClick={() => setSubmitted(true)}>vastaa</Button>
      }
      </div> : null}
      <Result />
    </div>
  );
}

export default App;
