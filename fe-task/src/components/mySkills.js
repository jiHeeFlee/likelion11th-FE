import styled from "@emotion/styled";
import Me4 from "../img/me4.png";
import Me3 from "../img/sibal.jpg";
import {Link} from 'react-router-dom';
export default function MySkills(){
    return(
        <>
            <Container>
                <Link to="/">
                    <p>🏠</p>
                </Link>
                <img
                    className={'myImg'}
                    src={Me3}/>
                <h4>업보 청산 중입니다...</h4>
            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 750px;
  height: 750px;
  margin: 100px auto auto auto;

  border: black;
  border-radius: 5%;
  border-style: solid;
  .myImg{
    width: 50%;
    border-radius: 50%;
    border:black;
    border-style: solid;
  }
  p{
    margin-bottom: 60px;
  }
  h4{
    margin-top: 60px;
  }
`;
