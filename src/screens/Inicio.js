import React, { useState, useEffect, Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

import InicioVoice from "../voice_interface/InicioVoice";

const Inicio = () => {
  InicioVoice();
  const [student,setStudent] = useState([])

  useEffect(()=>{
    const loadName = async () => {
      const respuesta = await fetch('/api/students/20171342H');
      const datos = await respuesta.json();
      setStudent(datos);
    };
    loadName();
    
  }, []);
  

  const [foto,setFoto] = useState([])
  
  useEffect(()=>{
    const pedirFoto = async () => {
      let a = (student && student.code)
      const respuesta = await fetch('/api/students/'+a+'/image');
      const datos = await respuesta;
      setFoto(datos.url);
    };
    pedirFoto();
  },[student]);
  
  const hora = new Date().getHours();
  const horas = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const turns = [  1, 2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14];
  let melapse = ''
  let temp = 0;
  for(let i=0; i < turns.length;i++){
    if (student.turn == turns[i]){
      temp = horas[i+1];
      melapse = horas[i]+':00 - '+temp+':00';
    }
  } 
  let turn = 0;
  let lapse = '';
  for (let i=0; i < horas.length; i++){
    if (hora ==horas[i]){
      turn = turns[i];
      temp = horas[i]+1;
      lapse = horas[i]+':00 - '+temp+':00';
      break;
    }
  }


  return (
    <Container>
      <RectStackStackStackStack>
        <RectStackStackStack>
          <RectStackStack>
            <RectStack>
              <Rect></Rect>
              <Image2
                src={require("../assets/images/image_VR2V..png")}
              ></Image2>
              <Image4
                src={require("../assets/images/image_bMeI..png")}
              ></Image4>
            </RectStack>
            <Rect4Stack>
              <Rect4>
                
                <Image3 src={foto}></Image3>

                <JuanCamarena>{student.name}</JuanCamarena>
              </Rect4>
              <Link to="/Inicio">
                <Button>
                  <ButtonOverlay>
                    <Text>Inicio</Text>
                  </ButtonOverlay>
                </Button>
              </Link>
              <Link to="/Matricula">
                <Button2>
                  <ButtonOverlay>
                    <Matricula11>Matrícula</Matricula11>
                  </ButtonOverlay>
                </Button2>
              </Link>
            </Rect4Stack>
          </RectStackStack>
          <Rect9>
            <Image5 src={require("../assets/images/image_YefR..png")}></Image5>
            <JuanCamarena2>
              Turno actual{"\n"}{turn}{"\n"}{lapse}
            </JuanCamarena2>
            <JuanCamarena1>
              Tú turno{"\n"}{student.turn}{"\n"}{melapse}
            </JuanCamarena1>
          </Rect9>
          <Link to="/Matricula">
            <Button7>
              <ButtonOverlay>
                <Matricula12>Matrícula</Matricula12>
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
          <PanelDeNavegacion>Panel de navegación</PanelDeNavegacion>
        </RectStackStackStack>
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
        <Link to="/CursosDisponibles">
          <Button3>
            <ButtonOverlay>
              <CursosDisponibles3>Cursos Disponibles</CursosDisponibles3>
            </ButtonOverlay>
          </Button3>
        </Link>
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
      </RectStackStackStackStack>
      <Rect16>
        <Version101>Version 1.0.1</Version101>
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
  top: 3px;
  left: 0px;
  width: 1842px;
  height: 90px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  shadow-radius: 0px;
  box-shadow: 3px 3px 0px  0.11px rgba(0,0,0,1) ;
`;

const Image2 = styled.img`
  position: absolute;
  top: 0px;
  left: 9px;
  height: 95px;
  width: 194px;
  object-fit: contain;
`;

const Image4 = styled.img`
  position: absolute;
  top: 1px;
  left: 1734px;
  height: 94px;
  width: 108px;
  object-fit: contain;
`;

const RectStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1842px;
  height: 95px;
  position: absolute;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 317px;
  height: 241px;
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
  width: 120px;
  height: 100%;
  border-width: 0px;
  border-color: #000000;
  border-radius: 200px;
  border-style: solid;
  background-color: rgba(230, 230, 230,1);
  margin-top: 14px;
  margin-left: 106px;
  object-fit: contain;
`;

const JuanCamarena = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #aec5c9;
  height: 100px;
  width: 203px;
  font-size: 25px;
  text-align: center;
  margin-top: 8px;
  margin-left: 57px;
`;

const Button = styled.div`
  top: 237px;
  left: 0px;
  width: 317px;
  height: 97px;
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
  height: 50px;
  width: 257px;
  font-size: 35px;
  text-align: center;
  margin-top: 24px;
  margin-left: 25px;
`;

const Button2 = styled.div`
  top: 332px;
  left: 0px;
  width: 317px;
  height: 97px;
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
  height: 50px;
  width: 257px;
  font-size: 35px;
  text-align: center;
  margin-top: 24px;
  margin-left: 25px;
`;

const Rect4Stack = styled.div`
  top: 93px;
  left: 0px;
  width: 317px;
  height: 429px;
  position: absolute;
`;

const RectStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1842px;
  height: 522px;
  position: absolute;
`;

const Rect9 = styled.div`
  top: 95px;
  left: 1491px;
  width: 351px;
  height: 846px;
  position: absolute;
  background-color: rgba(158,161,163,1);
  flex-direction: column;
  display: flex;
`;

const Image5 = styled.img`
  height: 100%;
  width: 192px;
  margin-top: 46px;
  margin-left: 80px;
  object-fit: contain;
`;

const JuanCamarena2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,74,74,1);
  height: 124px;
  width: 295px;
  font-size: 35px;
  text-align: center;
  margin-top: 49px;
  margin-left: 28px;
`;

const JuanCamarena1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(74,74,74,1);
  height: 124px;
  width: 295px;
  font-size: 35px;
  text-align: center;
  margin-top: 214px;
  margin-left: 28px;
`;

const Button7 = styled.div`
  top: 225px;
  left: 434px;
  width: 426px;
  height: 204px;
  position: absolute;
  background-color: #ff851b;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Matricula12 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(249,246,246,1);
  height: 81px;
  width: 228px;
  font-size: 50px;
  text-align: center;
  margin-top: 68px;
  margin-left: 99px;
`;

const Button8 = styled.div`
  top: 225px;
  left: 982px;
  width: 426px;
  height: 204px;
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
  height: 81px;
  width: 286px;
  font-size: 50px;
  text-align: center;
  margin-top: 43px;
  margin-left: 69px;
`;

const PanelDeNavegacion = styled.span`
  font-family: Roboto;
  top: 113px;
  left: 357px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 81px;
  width: 688px;
  font-size: 60px;
`;

const RectStackStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1842px;
  height: 941px;
  position: absolute;
`;

const Button9 = styled.div`
  top: 537px;
  left: 434px;
  width: 426px;
  height: 204px;
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
  height: 81px;
  width: 283px;
  font-size: 50px;
  text-align: center;
  margin-top: 66px;
  margin-left: 72px;
`;

const Button10 = styled.div`
  top: 537px;
  left: 982px;
  width: 426px;
  height: 204px;
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
  height: 81px;
  width: 298px;
  font-size: 50px;
  text-align: center;
  margin-top: 61px;
  margin-left: 64px;
`;

const Button3 = styled.div`
  top: 523px;
  left: 0px;
  width: 317px;
  height: 97px;
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

const CursosDisponibles3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(174,197,201,1);
  height: 83px;
  width: 257px;
  font-size: 35px;
  text-align: center;
  margin-top: 7px;
  margin-left: 32px;
`;

const Button4 = styled.div`
  top: 620px;
  left: 0px;
  width: 317px;
  height: 97px;
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
  height: 50px;
  width: 257px;
  font-size: 35px;
  text-align: center;
  margin-top: 34px;
  margin-left: 32px;
`;

const Button5 = styled.div`
  top: 0px;
  left: 0px;
  width: 317px;
  height: 97px;
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
  height: 50px;
  width: 256px;
  font-size: 35px;
  text-align: center;
  margin-top: 24px;
  margin-left: 33px;
`;

const Button6 = styled.div`
  top: 96px;
  left: 0px;
  width: 317px;
  height: 128px;
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
  height: 50px;
  width: 258px;
  font-size: 35px;
  text-align: center;
  margin-top: 38px;
  margin-left: 33px;
`;

const Button5Stack = styled.div`
  top: 717px;
  left: 0px;
  width: 317px;
  height: 224px;
  position: absolute;
`;

const RectStackStackStackStack = styled.div`
  width: 1842px;
  height: 941px;
  margin-top: -2px;
  position: relative;
`;

const Rect16 = styled.div`
  width: 1842px;
  height: 79px;
  background-color: rgba(255,255,255,1);
  shadow-radius: 0px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
  box-shadow: 3px 3px 0px  0.11px rgba(0,0,0,1) ;
`;

const Version101 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 39px;
  width: 135px;
  margin-top: 20px;
  margin-left: 1694px;
`;

export default Inicio;
