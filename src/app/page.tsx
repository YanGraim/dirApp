import { OwnerRepo } from "@/components/OwnerRepo";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
  html_url: string;
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  // faz a requisição de 60 em 60 segundos
  const response = await fetch(url, { next: { revalidate: 60 } });
  return response.json();
}

// async function getData() {
//   https://api.github.com/users/yangraim/repos
//   const response = await fetch("https://api.github.com/users/yangraim/repos");
//   return response.json();
// }

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/yangraim/repos",
    3500
  );
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo à página Home</span>
      <h3>Meus repositórios</h3>
      {data.map((repos) => (
        <div key={repos.id}>
          <strong>Repositórios: </strong>
          <a href={repos.html_url} target="_blank">
            {repos.name}
          </a>
          <br />
          <OwnerRepo
            avatar_url={repos.owner.avatar_url}
            name={repos.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  );
}
