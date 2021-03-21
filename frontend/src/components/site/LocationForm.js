// Insert ZIP or city. Geolocation.
// Location, Image, Temp

import styled from 'styled-components';

const LocationForm = () => {
  const onSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Title>Weather App</Title>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Type zip code or city here.."
          />
        </form>
      </Form>
      <Btn type="submit">Submit</Btn>
    </Container>
  );
};

export default LocationForm;

//===================
// Styled-Components
//===================

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  @media (max-height: 400px) {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.div`
  margin-top: 5rem;
  text-align: center;
  font-weight: bold;
  width: 100%;
`;

const Btn = styled.button`
  background-color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #000;
  border-radius: 0.5rem;
  &:hover {
    opacity: 0.7;
  }
`;
