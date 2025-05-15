export * from './svgs';

import imgAgape from './imgs/agape-logo.png';
import imgLogo from './imgs/logo.png';
import welcomeBackground from './imgs/welcome-background.png';
import bgVideo from './mp4/video.mp4';

import agDiario from './imgs/ag-diario.png';
import agDoc from './imgs/ag-doc.png';
import agFrota from './imgs/ag-frota.png';
import agIn from './imgs/ag-in.png';
import agSocial from './imgs/ag-social.png';
import agTributos from './imgs/ag-tributos.png';
import agUsuario from './imgs/ag-usuario.png';
import agapeSistemas from './imgs/agape-sistemas.png';
import cidadeJogo from './imgs/cidadeemjogo.png';

const sistemas = [
  { id: 1, name: 'Ágape Sistemas', image: agapeSistemas },
  { id: 2, name: 'AgDiário', image: agDiario },
  { id: 3, name: 'AgDoc', image: agDoc },
  { id: 4, name: 'AgFrota', image: agFrota },
  { id: 5, name: 'AgIn', image: agIn },
  { id: 6, name: 'AgSocial', image: agSocial },
  { id: 7, name: 'AgTributos', image: agTributos },
  { id: 8, name: 'AgUsuário', image: agUsuario },
];

export { bgVideo, cidadeJogo, imgAgape, imgLogo, sistemas, welcomeBackground };
