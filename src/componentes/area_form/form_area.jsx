import React from 'react';
import './area_form.css';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );
  
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };

 
export default function CardArea (props)  {
  const { title, subtitle, description, buttonLabel, img_item, subtitle2 } = props;

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="card-form">
    <Container  className="card-form">
      <div className="card-form-Control">
        <h1 className='title_result'>Quer saber como participar e dar um upgrade na sua vida profissional?</h1>
        <p className='description_result'>Faça a Formação em Tecnologia e seja um especialista, executando um projeto prático dentro de uma empresa real.
        </p >
        <p className='description_result'>Preencha o formulário e entraremos em contato com você para tirar todas as suas dúvidas e mostrar os valores para cada modalidade do treinamento e formas de pagamento que melhor cabem no seu bolso.
      </p> 
      </div>
      <div className="form_area">
            <form action="">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '29ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-controlled"
        label="Nome"
      />
      <TextField
        required
        id="outlined-uncontrolled"
        label="Sobrenome"
      /><TextField
      required
      id="outlined-uncontrolled"
      label="Email"
    /><TextField
        required
        id="outlined-uncontrolled"
        label="Número"
    
      />
    <div className="form_area_WID">
      <p>Está desempregado?</p>
        <RadioGroup name="use-radio-group" defaultValue="first">
        <MyFormControlLabel value="Sim" label="Sim" control={<Radio />} />
        <MyFormControlLabel value="Não" label="Não" control={<Radio />} />
        </RadioGroup>
    </div>
    <div className="termos form_area_WID">
        <Checkbox
            checked={checked}
            onChange={handleChange}
            
            inputProps={{ 'aria-label': 'controlled' }}
    />
    <p>Eu concordo em receber outras comunicações da escoladnc.com.br.</p>
    </div>
    </Box>
    <Stack className='form_area_WID' >
      <Button className='button-enviar' variant="contained" sx={{bgcolor: '#004eeb', borderRadius:'15px'}}>Quero participar</Button>
    </Stack>
    </form>
      </div>
      </Container>
    </div>
  );
};


