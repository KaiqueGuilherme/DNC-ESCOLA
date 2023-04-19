import React from "react";
import Navbar from "../componentes/Navbar/Navbar";
import ItemCard from "../componentes/item/item";
import { Container } from "@mui/material";
import './home.css'
import Imgcard from "../componentes/item_img/itemImg";
import Result from "../componentes/resultado/resultado";
import CardArea from "../componentes/area_form/form_area";


function Home() {
    return (
      <div className="home">
        <Navbar />
        <div className="cards" >
          <div className="card-wrapper">
          <Container maxWidth="xl" className='Container2' sx={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'center', gap: '9rem',}}  >
          <ItemCard
          title="./assets/Logo_tecnologia.svg"
          subtitle="Torne-se um(a) DEV de alto nível e seja referência no mercado!"
          description="Impulsione sua carreira sabendo as tecnologias mais requisitadas do mercado em ambas as pontas do desenvolvimento: front-end e back-end, aprendendo a desenvolver sites e aplicativos web, além de criar e manipular estruturas de banco de dados."
          subtitle2="Desenvolva projetos prático em empresas reais!"
          img_item="./assets/empresas_reais2.webp"
          buttonLabel="Quero Participar"/>
          
          <Imgcard
          img_const="./assets/Captura de tela 2023-04-18 114716.png" />
          </Container>
          </div>
          </div>
          <div className="resultado">
            <Container maxWidth="xl" className='Container2' sx={{display: 'flex', alignItems:'center'}}>
            <Result
            title_result="Somos obcecados por resultados e por isso mostramos nossos números."/>
             <Result
            Number_result="99,57%"
            Description_result="dos nossos alunos estão empregados
            em 3 meses após sua formatura"/>
             <Result
            Number_result2="+12mil"
            Description_result2="alunos impactados
            por todo o Brasil"/>
            </Container>
          </div>
          <div className="area_card">
          <CardArea />
          </div>
      </div>
    );
  }
  
  export default Home;