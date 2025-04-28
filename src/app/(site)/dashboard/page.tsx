import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Pagina painel</h1>
      <span>Bem vindo ao painel do site</span>
      <br />
      <br />
      <Link href={"/dashboard/settings"}>Configurações</Link>
      <br />
      <Link href={"/dashboard/cadastro"}>Cadastro</Link>
    </div>
  );
}
