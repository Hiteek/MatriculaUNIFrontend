import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Matricula(props) {
  return (
    <Container>
      <RectStackStack>
        <RectStack>
          <Rect></Rect>
          <Image2 src={require("../assets/images/image_VR2V..png")}></Image2>
          <Image4 src={require("../assets/images/image_bMeI..png")}></Image4>
        </RectStack>
        <Rect4>
          <Image3 src={require("../assets/images/XD.png")}></Image3>
          <JuanCamarena>Juan Camarena</JuanCamarena>
        </Rect4>
      </RectStackStack>
      <Rect16>
        <Version100>Version 1.0.0</Version100>
      </Rect16>
      <Button3Stack>
        <Link to="/CursosDisponibles">
          <Button3>
            <ButtonOverlay>
              <CursosDisponibles>Cursos disponibles</CursosDisponibles>
            </ButtonOverlay>
          </Button3>
        </Link>
        <Link to="/Matricula">
          <Button2>
            <ButtonOverlay>
              <Matricula11>Matrícula</Matricula11>
            </ButtonOverlay>
          </Button2>
        </Link>
      </Button3Stack>
      <Link to="/Reglamento">
        <Button4>
          <ButtonOverlay>
            <Reglamento1>Reglamento</Reglamento1>
          </ButtonOverlay>
        </Button4>
      </Link>
      <Button5Stack>
        <Link to="/Configuracion">
          <Button5>
            <ButtonOverlay>
              <Configuracion3>Configuración</Configuracion3>
            </ButtonOverlay>
          </Button5>
        </Link>
        <Rect21>
          <CerrarSesion3>Cerrar sesión</CerrarSesion3>
        </Rect21>
      </Button5Stack>
      <Link to="/Inicio">
        <Button>
          <ButtonOverlay>
            <Inicio>Inicio</Inicio>
          </ButtonOverlay>
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #ecf0f5;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect = styled.div`
  top: 2px;
  left: 0px;
  width: 1366px;
  height: 68px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  shadow-radius: 0px;
  box-shadow: 3px 3px 0px  0.11px rgba(0,0,0,1) ;
`;

const Image2 = styled.img`
  position: absolute;
  top: 0px;
  left: 7px;
  height: 72px;
  width: 144px;
  object-fit: contain;
`;

const Image4 = styled.img`
  position: absolute;
  top: 0px;
  left: 1286px;
  height: 71px;
  width: 80px;
  object-fit: contain;
`;

const RectStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 72px;
  position: absolute;
`;

const Rect4 = styled.div`
  top: 70px;
  left: 0px;
  width: 235px;
  height: 182px;
  position: absolute;
  background-color: rgba(34,45,50,1);
  border-width: 0px;
  border-color: rgba(0,0,0,1);
  border-style: solid;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const Image3 = styled.img`
  width: 89px;
  height: 100%;
  border-width: 0px;
  border-color: #000000;
  border-radius: 200px;
  border-style: solid;
  background-color: rgba(230, 230, 230,1);
  margin-top: 11px;
  margin-left: 79px;
  object-fit: contain;
`;

const JuanCamarena = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #aec5c9;
  height: 61px;
  width: 150px;
  font-size: 25px;
  text-align: center;
  margin-top: 6px;
  margin-left: 42px;
`;

const RectStackStack = styled.div`
  width: 1366px;
  height: 252px;
  margin-top: -2px;
  position: relative;
`;

const Rect16 = styled.div`
  width: 1366px;
  height: 59px;
  background-color: rgba(255,255,255,1);
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-top: 459px;
  box-shadow: 3px 3px 0px  0.11px rgba(0,0,0,1) ;
`;

const Version100 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 30px;
  width: 100px;
  margin-top: 14px;
  margin-left: 1256px;
`;

const Button3 = styled.div`
  top: 69px;
  left: 0px;
  width: 235px;
  height: 73px;
  position: absolute;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const CursosDisponibles = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 63px;
  width: 141px;
  font-size: 25px;
  text-align: center;
  margin-top: 7px;
  margin-left: 47px;
`;

const Button2 = styled.div`
  top: 0px;
  left: 0px;
  width: 235px;
  height: 73px;
  position: absolute;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const Matricula11 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 38px;
  width: 141px;
  font-size: 25px;
  text-align: center;
  margin-top: 18px;
  margin-left: 52px;
`;

const Button3Stack = styled.div`
  width: 235px;
  height: 142px;
  margin-top: -445px;
  position: relative;
`;

const Button4 = styled.div`
  width: 235px;
  height: 73px;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const Reglamento1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 38px;
  width: 141px;
  font-size: 25px;
  text-align: center;
  margin-top: 17px;
  margin-left: 52px;
`;

const Button5 = styled.div`
  top: 0px;
  left: 0px;
  width: 235px;
  height: 73px;
  position: absolute;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const Configuracion3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 38px;
  width: 163px;
  font-size: 25px;
  text-align: center;
  margin-top: 18px;
  margin-left: 36px;
`;

const Rect21 = styled.div`
  top: 72px;
  left: 0px;
  width: 235px;
  height: 96px;
  position: absolute;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const CerrarSesion3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 38px;
  width: 163px;
  font-size: 25px;
  text-align: center;
  margin-top: 29px;
  margin-left: 36px;
`;

const Button5Stack = styled.div`
  width: 235px;
  height: 168px;
  position: relative;
`;

const Button = styled.div`
  width: 235px;
  height: 73px;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-top: -457px;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

const Inicio = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 38px;
  width: 141px;
  font-size: 25px;
  text-align: center;
  margin-top: 17px;
  margin-left: 47px;
`;

export default Matricula;
