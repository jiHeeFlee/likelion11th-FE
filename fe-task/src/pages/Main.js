import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import Me from "../img/me.jpg";
export default function Main(){
    return(
        <>
            <HeaderDiv>
                <h1>● introduce_myself ●</h1>
                <img
                    className={'myImg'}
                    src={Me}/>
                <TextDiv>
                    <h2>my name is Ryu jihee...👻</h2>
                    <h2>ㆍ 🍏 fronted part</h2>
                    <h2>ㆍ 🦁 likelion 11th</h2>
                </TextDiv>
                <Link to="/aboutme">🐹</Link>
            </HeaderDiv>
        </>
    )
}
const HeaderDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 750px;
  height: 750px;
  margin: 100px auto auto auto;
  padding: 20px;
  background-color: white;

  border: black;
  border-radius: 5%;
  border-style: solid;

  h1{
    margin: 50px auto;
  }

  .myImg{
    width: 50%;
    border-radius: 50%;
    border:black;
    border-style: solid;
  }
  button {
    margin: 20px 20px;
    background-color: transparent;
    border: none;
    border-radius: 100%;

    outline: none;
    justify-content: center;
    &:hover {
      background-color: #e5e5e5;
    }
    
  }
`;
const TextDiv=styled.div`
  display: flex;
  flex-direction: column;
`;
