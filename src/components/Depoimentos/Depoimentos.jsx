import Card from "./DepoimentoCard/DepoimentoCard"
import styles from './Depoimentos.module.css'

const depoimentos = [
  {
    nome: 'Ana Paula da Silva Souza',
    texto: 'Sempre quando precisando levar nosso pequeno na emergência venho nesse hospital. O melhor de todos os médicos é o dr Herlander, examina a criança muito bem. Sempre vazio com poucas crianças a serem atendidas, por isso o atendimento é sempre rápido. A internação também todos muito bem prestativos. Recomendo a quem estiver precisando. Já tivemos que ir em emergência em outro lugar e não tivemos tratamento efetivo, aqui neste lugar todos os tratamentos deram certo. Graças a Deus!!',
    id: 1
  },
  {
    nome: 'Taise Cunha Souza',
    texto: 'Instituto da criança e do adolescente tá de parabéns, as pessoas que trabalham aqui são de grande competência, a equipe de cirurgia escelente Deus colocou mais que profissionais para cuidar do meu filho eu posso dizer que são anjos pessoas maravilhosas, quê Deus abençoe a todos ricamente em cada área que necessita 🙌👏👏👏👏',
    id: 2
  },
  {
    nome: 'Josy Lopes',
    texto: 'Chegando no Instituto da Criança, nunca havia presenciado profissionais tão competentes, preparados, que tocavam na bebê com carinho e respeito. Todos, começando pela segurança, nos trataram com absoluto respeito e educação. Quando iniciaram o atendimento, tocavam na bebê com tanto carinho e cuidado que desabei, o alívio de ver que ela estava em boas mãos, me fez chorar sem conseguir controlar.',
    id: 3
  }
]

export default function Depoimentos() {
  return (

    <section className={styles.depoimentos}>
      <h3>Nossos Depoimentos</h3>
      <p>Leia o que os pais que foram do ICR falam de nós para o mundo </p>
      <div className={styles.cards}>
        {depoimentos.map(card => (
          <Card key={card.id} {...card} />
          ))}
      </div>
    </section>
  )
}