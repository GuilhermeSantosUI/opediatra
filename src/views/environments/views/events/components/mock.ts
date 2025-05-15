export interface RoomProps {
  image: string;
  location: string;
  title: string;
  details: string;
  amenities: string[];
  rating: number;
  reviews: number;
  maxAvailabilityTime: number;
}

export const rooms: RoomProps[] = [
  {
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/365710/97ee5ff6e389109cf705db97d596f281.jpg',
    location: 'Bloco A - 1º Andar - Sala 101',
    title: 'Sala de Reuniões SergipeTec',
    details: '10 pessoas · Sala de Reuniões · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.9,
    reviews: 45,
    maxAvailabilityTime: 4,
  },
  {
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/361371/slide_1c2be5e153db308ab517252b94821d69.jpg',
    location: 'Bloco B - Térreo - Sala 002',
    title: 'Auditório SergipeTec',
    details: '50 pessoas · Auditório · Ar Condicionado',
    amenities: ['Wifi', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.8,
    reviews: 30,
    maxAvailabilityTime: 8,
  },
  {
    image:
      'https://www.se.gov.br/anexos/uploads/image/image/359971/39053b63c919befad6102580172261be.jpeg',
    location: 'Bloco C - 2º Andar - Sala 203',
    title: 'Sala de Treinamento SergipeTec',
    details:
      '20 pessoas · Sala de Treinamento · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.7,
    reviews: 25,
    maxAvailabilityTime: 6,
  },
  {
    image:
      'https://sergipetec.org.br/wp-content/uploads/2025/01/SERGIPETEC-BIO.jpg',
    location: 'Bloco D - 3º Andar - Sala 304',
    title: 'Sala de Conferências SergipeTec',
    details:
      '30 pessoas · Sala de Conferências · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.6,
    reviews: 20,
    maxAvailabilityTime: 5,
  },
  {
    image:
      'https://www.ufs.br/uploads/body_image/gist/128153/WhatsApp_Image_2021-06-08_at_14.56.07.jpeg',
    location: 'Bloco E - Térreo - Sala 005',
    title: 'Sala de Apresentações SergipeTec',
    details: '15 pessoas · Sala de Apresentações · Ar Condicionado',
    amenities: ['Wifi', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.5,
    reviews: 18,
    maxAvailabilityTime: 3,
  },
  {
    image: 'https://www.ufs.br/uploads/body_image/gist/134739/1G6A2672.JPG',
    location: 'Bloco F - 1º Andar - Sala 106',
    title: 'Sala de Estudos SergipeTec',
    details: '8 pessoas · Sala de Estudos · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Estacionamento Gratuito'],
    rating: 4.4,
    reviews: 12,
    maxAvailabilityTime: 2,
  },
  {
    image:
      'https://static.wixstatic.com/media/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg/v1/fill/w_1800,h_760,al_c,q_85,enc_avif,quality_auto/35c37d_3d29985aca904de6989546fa7c8c74b1~mv2.jpg',
    location: 'Bloco G - 2º Andar - Sala 207',
    title: 'Sala de Planejamento SergipeTec',
    details:
      '12 pessoas · Sala de Planejamento · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.3,
    reviews: 10,
    maxAvailabilityTime: 4,
  },
  {
    image:
      'https://static.wixstatic.com/media/35c37d_2a539fd6deba43d2a42f6e211afe6046~mv2.jpg/v1/fill/w_2768,h_1168,al_c,q_90,enc_avif,quality_auto/35c37d_2a539fd6deba43d2a42f6e211afe6046~mv2.jpg',
    location: 'Bloco H - Térreo - Sala 008',
    title: 'Sala de Ideias SergipeTec',
    details: '6 pessoas · Sala de Ideias · Ar Condicionado',
    amenities: ['Wifi', 'Estacionamento Gratuito'],
    rating: 4.2,
    reviews: 8,
    maxAvailabilityTime: 1,
  },
  {
    image:
      'https://d1y4va1nna2r1p.cloudfront.net/spaces/e6652651-9c5f-4a0d-82b7-c1403536f87e.jpeg',
    location: 'Bloco I - 3º Andar - Sala 309',
    title: 'Sala de Criatividade SergipeTec',
    details:
      '20 pessoas · Sala de Criatividade · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.1,
    reviews: 15,
    maxAvailabilityTime: 7,
  },
  {
    image:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp512box/6022a01f-efdc-4a66-879f-5551ac1e0356/6037c2ca-8ab4-4103-9f73-4e2dac1e0257.jpeg',
    location: 'Bloco J - 1º Andar - Sala 110',
    title: 'Sala de Inovação SergipeTec',
    details: '25 pessoas · Sala de Inovação · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.0,
    reviews: 22,
    maxAvailabilityTime: 6,
  },
  {
    image:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp512box/6022a0b0-0310-42f8-8abc-560cac1e0356/6037c2db-e14c-4345-a5f7-4cd7ac1e0257.jpeg',
    location: 'Bloco K - Térreo - Sala 011',
    title: 'Sala de Estratégia SergipeTec',
    details: '18 pessoas · Sala de Estratégia · Ar Condicionado',
    amenities: ['Wifi', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.5,
    reviews: 19,
    maxAvailabilityTime: 5,
  },
  {
    image:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp512box/6022a01f-efdc-4a66-879f-5551ac1e0356/6037c2ca-8ab4-4103-9f73-4e2dac1e0257.jpeg',
    location: 'Bloco L - 2º Andar - Sala 212',
    title: 'Sala de Projetos SergipeTec',
    details: '10 pessoas · Sala de Projetos · Ar Condicionado · Quadro Branco',
    amenities: ['Wifi', 'TV', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.7,
    reviews: 16,
    maxAvailabilityTime: 3,
  },
  {
    image:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp345box/6065dc15-39a8-4b13-8ea7-7985ac1e09bc/6065dcec-7334-4700-8b0b-7406ac1e06b7.jpeg',
    location: 'Bloco M - 3º Andar - Sala 313',
    title: 'Sala de Desenvolvimento SergipeTec',
    details: '40 pessoas · Sala de Desenvolvimento · Ar Condicionado',
    amenities: ['Wifi', 'Data Show', 'Estacionamento Gratuito'],
    rating: 4.6,
    reviews: 25,
    maxAvailabilityTime: 8,
  },
];
