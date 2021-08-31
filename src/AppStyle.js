import styled from "styled-components";

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  @media (min-width:992px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .red {
    border-color: red;
    color: red;
  }
  .green {
    border-color: green;
    color: green;
  }
`;
const Search = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border: 3px solid black;
    border-radius: 1rem;
    outline: none;
  }
`;

const CoinContainer = styled.div`
  min-width: 85%;
  min-height: 300px;
  margin: 0 auto;
  margin: .75rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: 5px solid;
  border-radius: 1rem;
  padding: 0.5em 0;
  transition: background 2s;
  :hover {
    background: black;
  }
  img {
    width: 50%;
    max-width: 300px;
    height: auto;
  }
  .coin-direction{
    height: 100%;
  }
  .coin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  @media (min-width: 992px) {
    width: 90vw;
    max-width: 1200px;
    min-height: auto;
    border-bottom: none;
    .coin {
      display: grid;
      grid-template-rows: none;
      grid-template-columns: 0.5fr 1.5fr 1fr 0.75fr;
    }

    img {
      max-width: 75px;
      justify-self:center;
    }
  }
`;

export {List, Search, CoinContainer}