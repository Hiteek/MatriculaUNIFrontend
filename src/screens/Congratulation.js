import React, { useState, useEffect, Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import CursosDisponiblesVoice from "../voice_interface/CursosDisponiblesVoice";

const Congratulation = () => {
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
      let a = student ? student.code : '';
      const pedirFoto = async () => {
        const respuesta = await fetch('/api/students/'+a+'/image');
        const datos = await respuesta;
        setFoto(datos.url);
      };
      if (a) {
        // llamar a la función solo si b tiene un valor válido
        pedirFoto();
      }
    },[student]);
  
    const [courses,setCourses] = useState([])
    function handleClick1() {
        const link = `https://drive.google.com/file/d/1WMeM8_MXGmv5iaH9MIgjuMqRQTfALbGP/view`;
        
        window.open(link, '_blank');
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
          

            <PanelDeNavegacion>¡Felicidades !</PanelDeNavegacion>
            <HorarioTitulo>Has completado con éxito el proceso de matrícula.</HorarioTitulo>

        </RectStackStackStack>
        <Link to="/CursosDisponibles">
          
          <Button3>
            <ButtonOverlay>
              <CursosDisponibles3>Cursos Disponibles</CursosDisponibles3>
            </ButtonOverlay>
          </Button3>
        </Link>
          <Button4 onClick={handleClick1}>
            <ButtonOverlay>
              <Reglamento1>Reglamento</Reglamento1>
            </ButtonOverlay>
          </Button4>
        
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
const Titulo = styled.h1`
  font-size: 36px;
  color: #4caf50;
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
`;
const HoraTitulo = styled.span`
  font-family: Roboto;
  top: 326px;
  left: 920px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 133px;
  font-size: 25px;
`;
const Dia = styled.span`
  font-family: Roboto;
  top: 400px;
  left: 720px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 91px;
  font-size: 25px;
`;
const Seccion = styled.span`
  font-family: Roboto;
  top: 400px;
  left: 600px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 133px;
  font-size: 25px;
`;
const Curso= styled.span`
font-family: Roboto;
top: 400px;
left: 440px;
position: absolute;
font-style: normal;
font-weight: 400;
color: #121212;
height: 29px;
width: 133px;
font-size: 25px;
`;
const SeccionTitulo = styled.span`
  font-family: Roboto;
  top: 326px;
  left: 573px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 133px;
  font-size: 25px;
`;

const DocenteTitulo = styled.span`
  font-family: Roboto;
  top: 326px;
  left: 1144px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 177px;
  font-size: 25px;
`;

const A12 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 137px;
  font-size: 25px;
`;

const Miercoles = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 99px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 180px;
  font-size: 25px;
`;

const A12Stack = styled.div`
  top: 399px;
  left: 619px;
  width: 279px;
  height: 29px;
  position: absolute;
`;

const Hora = styled.span`
  font-family: Roboto;
  top: 399px;
  left: 920px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 180px;
  font-size: 25px;
`;

const Docente = styled.span`
  font-family: Roboto;
  top: 399px;
  left: 1144px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 180px;
  font-size: 25px;
`;
const Rect20 = styled.div`
top: 230px;
left: 820px;
  width: 35px;
  height: 35px;
  position: absolute;
  background-color: #E6E6E6;
  right: 1114px;
`;

const DiaTitulo = styled.span`
  font-family: Roboto;
  top: 325px;
  left: 746px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 91px;
  font-size: 25px;
`;

const CreditosTotales = styled.span`
  font-family: Roboto;
  top: 296px;
  left: 1432px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 29px;
  width: 193px;
  font-size: 25px;
`;

const CreditosUsados = styled.span`
  font-family: Roboto;
  top: 356px;
  left: 1432px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 29px;
  width: 193px;
  font-size: 25px;
`;

const Creditos1 = styled.span`
  font-family: Roboto;
  top: 295px;
  left: 1646px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 23px;
  width: 31px;
  font-size: 25px;
`;

const Creditos2 = styled.span`
  font-family: Roboto;
  top: 359px;
  left: 1646px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 23px;
  width: 31px;
  font-size: 25px;
`;
const Rect19 = styled.div`
  width: 203px;
  height: 58px;
  background-color: rgba(14,225,229,1);
  flex-direction: column;
  display: flex;
  margin-left: 1500px;
  margin-top: 50px;
`;

const Matricular = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 35px;
  margin-top: 8px;
  margin-left: 23px;
`;
const CursoTitulo = styled.span`
font-family: Roboto;
top: 326px;
left: 440px;
position: absolute;
font-style: normal;
font-weight: 400;
color: #121212;
height: 29px;
width: 133px;
font-size: 25px;
`;



const Creditos = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 1067px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 99px;
  font-size: 25px;
`;

const Cc3M22 = styled.span`
  font-family: Roboto;
  top: 296px;
  left: 663px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 322px;
  font-size: 25px;
`;

const Cc5 = styled.span`
  font-family: Roboto;
  top: 292px;
  left: 1100px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 34px;
  font-size: 25px;
`;

const ButtonM = styled.div`
  top: 296px;
  left: 1242px;
  width: 47px;
  height: 29px;
  position: absolute;
  background-color: rgba(80,227,194,1);
  border: none;
`;

const Cc9 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 94px;
  font-size: 25px;
`;

const Cc8Stack = styled.div`
  top: 356px;
  left: 480px;
  width: 94px;
  height: 29px;
  position: absolute;
`;

const Rect18 = styled.div`
  top: 356px;
  left: 1242px;
  width: 47px;
  height: 29px;
  position: absolute;
  background-color: rgba(227,191,80,1);
`;

const Cc6 = styled.span`
  font-family: Roboto;
  top: 352px;
  left: 1100px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 34px;
  font-size: 25px;
`;

const Cc7 = styled.span`
  font-family: Roboto;
  top: 356px;
  left: 663px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 322px;
  font-size: 25px;
`;

const Cc8 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 94px;
  font-size: 25px;
`;
const Cc4 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 94px;
  font-size: 25px;
`;

const Cc3M2Stack = styled.div`
  top: 296px;
  left: 480px;
  width: 94px;
  height: 29px;
  position: absolute;
`;
const Cc3M2 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 29px;
  width: 94px;
  font-size: 25px;
`;
const ButtonX = styled.div`
  top: 50px;
  left: 10px;
  width: 100x;
  height: 10px;
  background-color: #222d32;
  border-width: 1px;
  border-color: #000000;
  shadow-radius: 0px;
  display: flex;
  box-shadow: 3px 3px 0px  0.1px rgba(0,0,0,1) ;
`;

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
  float: left;
  font-family: Roboto;
  top: 800px;
  left: 200px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 60px;
  width: 600px;
  font-size: 20px;
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
const HorarioTitulo = styled.span`
  font-family: Roboto;
  top: 235px;
  left: 869px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 100px;
  width: 300px;
  font-size: 25px;
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

export default Congratulation;
