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

async function getData() {
  // https://api.github.com/users/yangraim/repos
  const response = await fetch("https://api.github.com/users/yangraim/repos");
  return response.json();
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo à página Home</span>
      <br /> <hr />
      <h3>Meus repositórios</h3>
      {data.map((repos) => (
        <div key={repos.id}>
          <strong>Repositórios: </strong>
          <a href={repos.html_url} target="_blank">
            {repos.name}
          </a>
          <br />
          <br />
        </div>
      ))}
    </main>
  );
}
