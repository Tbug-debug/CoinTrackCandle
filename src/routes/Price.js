import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  h3 {
    font-size: 11px;
    margin-bottom: 10px;
  }
  span {
    font-size: 17px;
    font-weight: 500;
  }
`;

const Alltime = styled.div`
  border-radius: 15px;
  padding: 15px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.coinsBackground};
`;

const Volume = styled.div`
  border-radius: 15px;
  padding: 15px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.coinsBackground};
`;

function Price(priceData) {
  const priceInfo = priceData.coinId.quotes.USD;
  return (
    <Wrapper>
      <Alltime>
        <h3>All-Time-High</h3>
        <span>{priceInfo.ath_price.toFixed(3)}</span>
      </Alltime>
      <Volume>
        <h3>Volume-24</h3>
        <span>{priceInfo.volume_24h.toFixed(3)}</span>
      </Volume>
    </Wrapper>
  );
}

export default Price;
