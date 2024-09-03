// import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App() {
  document.body.classList.add(['bg-success-subtle', 'py-3'])
  return (
    <form className='col-4 my-4 mx-auto' >

      <InputGroup className="mb-3">
        <InputGroup.Text id="email">Email</InputGroup.Text>
        <Form.Control
          placeholder="abc@nmp.xyz"
          aria-label="abc@nmp.xyz"
          aria-describedby="email"
        />
      </InputGroup>

      <InputGroup >
        <InputGroup.Text id="password">Password</InputGroup.Text>
        <Form.Control
          type='password'
          placeholder='********'
          aria-label='password'
          aria-describedby='password'
        />
      </InputGroup>
      
      <Button as='input' type='submit' value='Sign In' className='m-2' />
      <Button as='input' type='reset' value='Reset' className='m-2' />
    </form>
  );
}

export default App;