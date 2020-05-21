import styled from 'styled-components';

const Heading = styled.h1`
    font-weight: ${props => props.weight};
    color: ${props => props.color};
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: center;
    font-size: 3rem;
    @media (min-width: 600px) {
      text-align: left;
      margin-top: 1.5em;
    }

    @media (min-width: 1200px) {
        font-size: 4rem;
    }

    span {
        color: black;
        font-weight: 600;
    }
`;

export default Heading;