import React, { useState, useEffect, Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import InicioVoice from "../voice_interface/InicioVoice";
import Speaker from "../voice_interface/Speaker";

const Configuracion = () => {

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
  function handleClick() {
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
          <Rect9>
            <Image5 src={require("../assets/images/image_YefR..png")}></Image5>
            <JuanCamarena2>
              Turno actual{"\n"}{turn}{"\n"}{lapse}
            </JuanCamarena2>
            <JuanCamarena1>
              Tú turno{"\n"}{student.turn}{"\n"}{melapse}
            </JuanCamarena1>
          </Rect9>
          <PanelDeNavegacion>Configuración</PanelDeNavegacion>
            <Button7>
              <ButtonOverlay>
                <Matricula12>Idioma</Matricula12>
              </ButtonOverlay>
            </Button7>
            <Button14>
            <ButtonOverlay>
              <Ingles>Ingles</Ingles>
            </ButtonOverlay>
          </Button14>

          <Button13>
            <ButtonOverlay>
              <Espanol>Español</Espanol>
            </ButtonOverlay>
          </Button13>
          
            <Button8>
              <ButtonOverlay>
                <CursosDisponibles>Cambiar Voz</CursosDisponibles>
              </ButtonOverlay>
            </Button8>

            <Button12>
              <ButtonOverlay>
                <Mujer>Mujer</Mujer>
              </ButtonOverlay>
            </Button12>
            <Button21>
              <ButtonOverlay>
                <Hombre>Hombre</Hombre>
              </ButtonOverlay>
            </Button21>


            <Button9 >
            <ButtonOverlay>
              <Reglamento2>Velocidad</Reglamento2>
            </ButtonOverlay>
          </Button9>
            <EllipseStack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum>1</LoremIpsum>
          </EllipseStack>
          
          <Ellipse1Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum2>2</LoremIpsum2>
          </Ellipse1Stack>
          <Ellipse2Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum3>3</LoremIpsum3>
          </Ellipse2Stack>
          <Ellipse3Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum4>4</LoremIpsum4>
          </Ellipse3Stack>
          <Ellipse4Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum5>5</LoremIpsum5>
          </Ellipse4Stack>
          <Ellipse5Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum10>10</LoremIpsum10>
          </Ellipse5Stack>
          <Ellipse6Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum9>9</LoremIpsum9>
          </Ellipse6Stack>
          <Ellipse7Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum8>8</LoremIpsum8>
          </Ellipse7Stack>
          <Ellipse8Stack>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum7>7</LoremIpsum7>
          </Ellipse8Stack>
          <LoremIpsum1Stack>
            <LoremIpsum1>1</LoremIpsum1>
            <svg
              viewBox="0 0 50.31 53.2"
              style={{
                top: 0,
                left: 0,
                width: 50,
                height: 53,
                position: "absolute"
              }}
            >
              <ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(212,149,149,1)"
                cx={25}
                cy={27}
                rx={25}
                ry={27}
              ></ellipse>
            </svg>
            <LoremIpsum6>6</LoremIpsum6>
          </LoremIpsum1Stack>

          <Button10>
            <ButtonOverlay>
              <Volumen>Volumen</Volumen>
            </ButtonOverlay>
          </Button10>

          <LoremIpsum11Stack>
          <LoremIpsum11>10</LoremIpsum11>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum22>10</LoremIpsum22>
        </LoremIpsum11Stack>
        <LoremIpsum12Stack>
          <LoremIpsum12>9</LoremIpsum12>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum23>9</LoremIpsum23>
        </LoremIpsum12Stack>
        <LoremIpsum13Stack>
          <LoremIpsum13>8</LoremIpsum13>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum24>8</LoremIpsum24>
        </LoremIpsum13Stack>
        <LoremIpsum14Stack>
          <LoremIpsum14>7</LoremIpsum14>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum25>7</LoremIpsum25>
        </LoremIpsum14Stack>
        <LoremIpsum15Stack>
          <LoremIpsum15>6</LoremIpsum15>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum26>6</LoremIpsum26>
        </LoremIpsum15Stack>
        <LoremIpsum16Stack>
          <LoremIpsum16>5</LoremIpsum16>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum27>5</LoremIpsum27>
        </LoremIpsum16Stack>
        <LoremIpsum17Stack>
          <LoremIpsum17>4</LoremIpsum17>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum28>4</LoremIpsum28>
        </LoremIpsum17Stack>
        <LoremIpsum18Stack>
          <LoremIpsum18>3</LoremIpsum18>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum29>3</LoremIpsum29>
        </LoremIpsum18Stack>
        <LoremIpsum19Stack>
          <LoremIpsum19>2</LoremIpsum19>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum30>2</LoremIpsum30>
        </LoremIpsum19Stack>
        <LoremIpsum21Stack>
          <LoremIpsum21>1</LoremIpsum21>
          <svg
            viewBox="0 0 50.31 53.2"
            style={{
              top: 0,
              left: 0,
              width: 50,
              height: 53,
              position: "absolute"
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(212,149,149,1)"
              cx={25}
              cy={27}
              rx={25}
              ry={27}
            ></ellipse>
          </svg>
          <LoremIpsum32>1</LoremIpsum32>
        </LoremIpsum21Stack>
          
        </RectStackStackStack>

          


        <Link to="/CursosDisponibles">
          <Button3>
            <ButtonOverlay>
              <CursosDisponibles3>Cursos Disponibles</CursosDisponibles3>
            </ButtonOverlay>
          </Button3>
        </Link>
          <Button4 onClick={handleClick}>
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
const LoremIpsum11 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 10px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 30px;
  font-size: 25px;
`;

const LoremIpsum22 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 10px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 30px;
  font-size: 25px;
`;

const LoremIpsum11Stack = styled.div`
  top: 682px;
  left: 1456px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum12 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum23 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum12Stack = styled.div`
  top: 682px;
  left: 1396px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum13 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum24 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum13Stack = styled.div`
  top: 682px;
  left: 1328px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum14 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum25 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum14Stack = styled.div`
  top: 682px;
  left: 1263px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum15 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum26 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum15Stack = styled.div`
  top: 682px;
  left: 1201px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum16 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum27 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum16Stack = styled.div`
  top: 682px;
  left: 1139px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum17 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum28 = styled.span`
  font-family: Roboto;
  top: 4px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum17Stack = styled.div`
  top: 682px;
  left: 1080px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum18 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum29 = styled.span`
  font-family: Roboto;
  top: 4px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum18Stack = styled.div`
  top: 682px;
  left: 1011px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum19 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum30 = styled.span`
  font-family: Roboto;
  top: 4px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum19Stack = styled.div`
  top: 682px;
  left: 946px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum21 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum32 = styled.span`
  font-family: Roboto;
  top: 7px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum21Stack = styled.div`
  top: 682px;
  left: 885px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const EllipseStack = styled.div`
  top: 535px;
  left: 860px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse1Stack = styled.div`
  top: 535px;
  left: 930px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse2Stack = styled.div`
  top: 535px;
  left: 1000px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse3Stack = styled.div`
  top: 535px;
  left: 1070px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum5 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse4Stack = styled.div`
  top: 535px;
  left: 1140px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum10 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 10px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 30px;
  font-size: 25px;
`;

const Ellipse5Stack = styled.div`
  top: 535px;
  left: 1456px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum9 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse6Stack = styled.div`
  top: 535px;
  left: 1396px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum8 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse7Stack = styled.div`
  top: 535px;
  left: 1328px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum7 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const Ellipse8Stack = styled.div`
  top: 535px;
  left: 1263px;
  width: 50px;
  height: 53px;
  position: absolute;
`;

const LoremIpsum1 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum6 = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 13px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 18px;
  font-size: 25px;
`;
const LoremIpsum1Stack = styled.div`
  top: 535px;
  left: 1201px;
  width: 50px;
  height: 53px;
  position: absolute;
`;
const Hombre = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 39px;
  width: 123px;
  font-size: 35px;
  margin-top: 18px;
  margin-left: 70px;
`;
const Button21 = styled.div`
  top: 397px;
  left: 880px;
  width: 232px;
  height: 74px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Mujer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 39px;
  width: 123px;
  font-size: 35px;
  margin-top: 18px;
  margin-left: 70px;
`;

const Button12 = styled.div`
  top: 397px;
  left: 1200px;
  width: 232px;
  height: 74px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  border: none;
`;
const Button14 = styled.div`
  top: 250px;
  left: 880px;
  width: 232px;
  height: 74px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Ingles = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 39px;
  width: 123px;
  font-size: 35px;
  margin-top: 18px;
  margin-left: 73px;
`;

const Button13 = styled.div`
  top: 250px;
  left: 1200px;
  width: 232px;
  height: 74px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Espanol = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(49,47,47,1);
  height: 39px;
  width: 129px;
  font-size: 35px;
  margin-top: 18px;
  margin-left: 51px;
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
top: 241px;
left: 409px;
width: 418px;
height: 108px;
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
height: 86px;
width: 237px;
font-size: 50px;
text-align: center;
margin-top: 12px;
margin-left: 57px;
`;




const Button8 = styled.div`
top: 378px;
left: 409px;
width: 436px;
height: 101px;
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
top: 507px;
left: 409px;
width: 418px;
height: 108px;
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
top: 655px;
left: 409px;
width: 418px;
height: 107px;
  position: absolute;
  background-color: #dd4b39;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Volumen = styled.span`
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

export default Configuracion;
