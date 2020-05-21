import React, {useState} from 'react';
import styled from 'styled-components';
import arrow from '../../images/icon-arrow.svg';
import error from '../../images/icon-error.svg';

const StyledForm = styled.form`
    position: relative;
    input {
        width: 100%;
        border: 1px solid ${props => props.error ? 'red' : 'hsl(0, 36%, 70%)'};
        border-radius: 100px;
        padding: .5em 7em .5em 1em;
        outline: none;
        font-size: 1.3rem;
        color: hsl(0, 36%, 70%);
    }
    button {
        position: absolute;
        right: 1px;
        top: 1px;
        border: 0;
        padding: .5em 2em;
        border-radius: 50px;
        height: calc(100% - 2px);
        background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
        width: 100px;
    }
    .error__icon {
        position: absolute;
        right: 110px;
        top: calc(50% - 12px);
        display: ${props => props.error ? 'inline' : 'none'};
    }
`;

export default function Form() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let invalid = false;

  function handler({target: {value}}) {
    setEmail(value);
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
    invalid = !regEx.test(email);
    if(!invalid) {
      setEmail('');
      setSubmitted(false);
      invalid = false;
    }
  }

  return (
    <React.Fragment>
      <StyledForm target="/action_page.php" error={!invalid && submitted} onSubmit={submit}>
        <input value={email} onChange={handler} />
        <img src={error} alt="error" className="error__icon" />
        <button type="submit" onClick={submit}><img src={arrow} alt="Submit" /></button>
      </StyledForm>
      {!invalid && submitted && <p style={{ color: 'red' }}>Please provide a valid email.</p>}
    </React.Fragment>
  )
}