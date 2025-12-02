interface PageDetailProps {
  params: Promise<{
    id: string;
  }>;
}

async function getData(id: string) {
  // https://api.github.com/users/alessandropedroso/repos
  console.log(id);
  const response = await fetch(
    "https://api.github.com/users/alessandropedroso/repos"
  );
  return response.json();
}

export default async function RepositorioId({ params }: PageDetailProps) {
  const { id } = await params;

  const data = await getData(id);

  return (
    <div>
      <h1>Página de Repositório {id}</h1>
    </div>
  );
}
