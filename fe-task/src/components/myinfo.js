import styled from "@emotion/styled";
import {Link} from 'react-router-dom';
import Me02 from "../img/me02.jpg";
export default function Myinfo(){
    return(
        <>
            <Container>
                <Link to="/">
                    <p>🏠</p>
                </Link>
                <img
                    className={'myImg'}
                    src={Me02}/>

                <Link to="/skill">
                    <h4>노랑이랑 🍊오렌지가 조아</h4>
                </Link>
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
  
  p{
    margin-bottom: 60px;
  }
  h4{
    margin-top: 60px;
  }
  .myImg{
    width: 50%;
    border-radius: 50%;
    border:black;
    border-style: solid;
  }
`;
