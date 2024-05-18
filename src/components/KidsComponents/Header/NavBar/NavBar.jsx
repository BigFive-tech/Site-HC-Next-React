import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/kids'>Home</Link>
        </li>
        <li>
          <Link href='/kids/jogos'>Jogos</Link>
        </li>
        <li>
          <Link href='/kids/desenhos'>Desenhos</Link>
        </li>
        <li>
          <Link href='/kids/videos'>Videos</Link>
        </li>
        <li>
          <Link href='/kids/educacao'>Área Educacional</Link>
        </li>
        <li>
          <Link href='/'>Área Informativa</Link>
        </li>
      </ul>
    </nav>
  )
}
