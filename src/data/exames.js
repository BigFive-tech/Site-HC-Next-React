import consultandoImg from '@/assets/consultando (1).png'
import estetoscopio from '@/assets/estetoscopio.png'
import protecaoImg from '@/assets/protecao (1).png'
import medicoImg from '@/assets/medico.png'
import examesDeSangueImg from '@/assets/exame-de-saude.png'
import farmaciaImg from '@/assets/farmacia.png'

export const exames = [
  {
    path: consultandoImg,
    titulo: 'Tomografia',
    texto: 'A tomografia é uma técnica de imagem médica que utiliza raios X para criar imagens detalhadas de estruturas internas do corpo. Ao capturar múltiplas imagens de diferentes ângulos, um computador reconstrói uma representação tridimensional das regiões analisadas, Além de ser indolor, é um exame não invasivo, simples e rápido.',
    videoUrl: 'https://www.youtube.com/embed/1g3UjPxAZ80?si=Un5G6YRWK353NYEu',
    index: 0
  },
  {
    path: estetoscopio,
    titulo: 'Ressonância magnética',
    texto: 'A ressonância magnética é uma técnica avançada de imagem médica que utiliza campos magnéticos e ondas de rádio para criar imagens detalhadas das estruturas internas do corpo. Ao distinguir características dos tecidos, proporciona diagnósticos precisos, indolores e não invasivos, sem o uso de radiação ionizante.',
    videoUrl: 'https://www.youtube.com/embed/h_4ORtpIhPQ?si=-J3LxGKVbjs95iCn',
    index: 1
  },
  {
    path: protecaoImg,
    titulo: 'Exame de sangue',
    texto: 'O hemograma é um tipo de exame de sangue que avalia as células que compõe o tecido sanguíneo. Método em que faz-se necessário a perfuração do indivíduo para o colhimento do material de estudo.',
    videoUrl: 'https://www.youtube.com/embed/YhFSc-Xysps?si=kwI3ldp7a_ZGzkXk',
    index: 2
  },
  {
    path: medicoImg,
    titulo: 'Ultrassom',
    texto: 'O ultrassom é uma técnica de imagem médica que utiliza ondas sonoras de alta frequência para criar imagens em tempo real das estruturas internas do corpo. Essas ondas sonoras são emitidas por um transdutor e refletidas pelos tecidos, gerando imagens que ajudam no diagnóstico de condições médicas. É um método seguro, não invasivo e indolor.',
    videoUrl: 'https://www.youtube.com/embed/Ph9Maz50HLc?si=ObJBioUoxuAAjtyw',
    index: 3
  },
  {
    path: examesDeSangueImg,
    titulo: 'Hemodiálise',
    texto: 'A hemodiálise é um procedimento médico utilizado para filtrar o sangue em pacientes com insuficiência renal. Durante a hemodiálise, o sangue é retirado do corpo, passa por um filtro (dialisador) que remove resíduos e excesso de fluidos, e é então devolvido ao organismo.',
    videoUrl: 'https://www.youtube.com/embed/JAyr5jsa3yI?si=kS7miJzO-YPKkXaj',
    index: 4
  },
  {
    path: farmaciaImg,
    titulo: 'Transplantes',
    texto: 'Os transplantes são procedimentos médicos que envolvem a substituição de um órgão ou tecido danificado por um saudável, proveniente de um doador vivo ou falecido. Este é um tratamento viável para várias condições médicas que resultam em falha de órgãos. Alguns dos transplantes mais comuns incluem os de rim, fígado, coração, pulmão e pâncreas. O ICR faz trasplantes de Células Tronco-Hrmatopoiéticas, renal e heático.',
    videoUrl: 'https://www.youtube.com/embed/efgxbmmFoP0?si=NOe-T-0xI6QyXrmX',
    index: 5
  },
]
