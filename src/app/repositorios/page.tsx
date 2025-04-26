"use client";
import { useState, useEffect } from "react";

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

export default function Repositorios() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    async function getData() {
      const response = fetch("https://api.github.com/users/yangraim/repos")
        .then((response) => response.json())
        .then((data: DataProps[]) => {
          setTimeout(() => {
            setRepos(data);
          }, 2000);
        });
    }
    getData();
  }, []);
  return (
    <main>
      <h1>Pagina de repositorios</h1>
      {repos.map((repos) => (
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
