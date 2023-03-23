/* eslint-disable multiline-ternary */
/* eslint-disable jsx-quotes */
import aboutimg from '../../../assets/DT_img.png';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export const Display3 = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick = (num) => {
    num === 1 ? setOpen(!open) : num === 2 ? setOpen2(!open2) : setOpen3(!open3);
  };

  const text = {
    fontWeight: 'bold'
  };

  return (
    <section className="grid grid-cols-2 gap-32 items-center py-[120px] px-[14%]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-4xl leading-[48px]">
            Bienvenido a nuestra <br /> familia
          </h2>
          <h1 className="font-normal text-sm leading-5 text-[#1C103B]">
            Fundación ALMANIMAL Mendiolaza es una organización sin fines de
            lucro, cuyo objetivo es la protección
          </h1>
        </div>
        <div>
          <ListItemButton onClick={() => handleClick(1)}>
            <ListItemText
              primaryTypographyProps={{ style: text }} primary="Cómo comenzó Fund. alma animal mendiolaza"
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText sx={{ color: 'red', fontSize: '20px' }} primary="Un grupo de amigos preocupados por el bienestar de los animales sin hogar decidieron crear su propio refugio de animales. Con donaciones y trabajo voluntario, construyeron un refugio que proporcionaba hogares temporales y atención médica a los animales. Con el tiempo, se expandieron y muchos animales encontraron hogares amorosos gracias a su trabajo." />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(2)}>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Nuestro objetivo" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText sx={{ fontWeight: 'bold' }} primary="El objetivo principal de un refugio de animales es proporcionar un hogar temporal seguro para animales abandonados y sin hogar, cuidar de ellos y ayudarlos a encontrar hogares permanentes amorosos. Además, también pueden educar al público y colaborar con otros grupos para mejorar la calidad de vida de los animales." />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(3)}>
            <ListItemText primaryTypographyProps={{ style: text }} primary="Responsabilidad Social" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText sx={{ fontWeight: 'bold' }} primary="Este lugare proporcionan un hogar temporal para animales abandonados, maltratados o perdidos, y se esfuerzan por encontrarles un hogar permanente. Además, los refugios de animales también tienen la responsabilidad de educar al público sobre la importancia del cuidado y la adopción responsable de mascotas. Al hacerlo, estos refugios contribuyen significativamente a la reducción del número de animales abandonados en las calles y a mejorar la calidad de vida de los animales necesitados. La labor de los refugios de animales es de gran importancia y debe ser apoyada por la comunidad." />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
      </div>
      <div className="w-[600px]">
        <img src={aboutimg} alt="" className=" max-w-full h-auto" />
      </div>
    </section>
  );
};
