import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Inicio(props) {
  return (
    <Container>
      <RectStackStackStack>
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
          <Rect9>
            <JuanCamarena2>
              Turno actual{"\n"}Grupo 1{"\n"}1:00 pm - 2:00 pm
            </JuanCamarena2>
            <JuanCamarena1>
              Tú turno{"\n"}Grupo 5{"\n"}5:00 pm - 6:00 pm
            </JuanCamarena1>
          </Rect9>
        </RectStackStack>
        <Link to="/Matricula">
          <Button7>
            <ButtonOverlay>
              <Matricula10>Matrícula</Matricula10>
            </ButtonOverlay>
          </Button7>
        </Link>
        <Link to="/CursosDisponibles">
          <Button8>
            <ButtonOverlay>
              <CursosDisponibles>Cursos Disponibles</CursosDisponibles>
            </ButtonOverlay>
          </Button8>
        </Link>
        <Link to="/Reglamento">
          <Button9>
            <ButtonOverlay>
              <Reglamento2>Reglamento</Reglamento2>
            </ButtonOverlay>
          </Button9>
        </Link>
        <Link to="/Configuracion">
          <Button10>
            <ButtonOverlay>
              <Configuracion2>Configuración</Configuracion2>
            </ButtonOverlay>
          </Button10>
        </Link>
        <PanelDeNavegacion>Panel de navegación</PanelDeNavegacion>
        <Button3Stack>
          <Link to="/CursosDisponibles">
            <Button3>
              <ButtonOverlay>
                <CursosDisponibles2>Cursos Disponibles</CursosDisponibles2>
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
          <Link to="/Inicio">
            <Button6>
              <ButtonOverlay>
                <CerrarSesion3>Cerrar sesión</CerrarSesion3>
              </ButtonOverlay>
            </Button6>
          </Link>
        </Button5Stack>
        <Link to="/Inicio">
          <Button>
            <ButtonOverlay>
              <Text>Inicio</Text>
            </ButtonOverlay>
          </Button>
        </Link>
      </RectStackStackStack>
      <Rect16>
        <Version100>Version 1.0.0</Version100>
      </Rect16>
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

const Rect9 = styled.div`
  top: 71px;
  left: 1106px;
  width: 260px;
  height: 638px;
  position: absolute;
  background-color: rgba(158,161,163,1);
  flex-direction: column;
  display: flex;
`;

const JuanCamarena2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,74,74,1);
  height: 93px;
  width: 219px;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  margin-left: 21px;
`;

const JuanCamarena1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(74,74,74,1);
  height: 93px;
  width: 219px;
  font-size: 25px;
  text-align: center;
  margin-top: 18px;
  margin-left: 21px;
`;

const RectStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 709px;
  position: absolute;
`;

const Button7 = styled.div`
  top: 170px;
  left: 322px;
  width: 316px;
  height: 154px;
  position: absolute;
  background-color: #ff851b;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Matricula10 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(249,246,246,1);
  height: 61px;
  width: 129px;
  font-size: 25px;
  margin-top: 51px;
  margin-left: 94px;
`;

const Button8 = styled.div`
  top: 170px;
  left: 728px;
  width: 316px;
  height: 154px;
  position: absolute;
  background-color: #00a65a;
  flex-direction: column;
  display: flex;
  border: none;
`;

const CursosDisponibles = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(249,246,246,1);
  height: 61px;
  width: 184px;
  font-size: 25px;
  text-align: center;
  margin-top: 46px;
  margin-left: 66px;
`;

const Button9 = styled.div`
  top: 405px;
  left: 322px;
  width: 316px;
  height: 154px;
  position: absolute;
  background-color: #f39c12;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Reglamento2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(249,246,246,1);
  height: 61px;
  width: 184px;
  font-size: 25px;
  text-align: center;
  margin-top: 51px;
  margin-left: 66px;
`;

const Button10 = styled.div`
  top: 405px;
  left: 728px;
  width: 316px;
  height: 154px;
  position: absolute;
  background-color: #dd4b39;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Configuracion2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(249,246,246,1);
  height: 61px;
  width: 184px;
  font-size: 25px;
  text-align: center;
  margin-top: 61px;
  margin-left: 66px;
`;

const PanelDeNavegacion = styled.span`
  font-family: Roboto;
  top: 85px;
  left: 284px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 61px;
  width: 264px;
  font-size: 25px;
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

const CursosDisponibles2 = styled.span`
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
  top: 325px;
  left: 0px;
  width: 235px;
  height: 142px;
  position: absolute;
`;

const Button4 = styled.div`
  top: 468px;
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

const Button6 = styled.div`
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
  top: 541px;
  left: 0px;
  width: 235px;
  height: 168px;
  position: absolute;
`;

const Button = styled.div`
  top: 252px;
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

const Text = styled.span`
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

const RectStackStackStack = styled.div`
  width: 1366px;
  height: 709px;
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
  margin-top: 2px;
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

export default Inicio;
