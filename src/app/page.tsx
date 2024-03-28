export default function Home() {

  const a = '2'
  return (
    <main className="flex min-h-screen flex-col items-center p-24" >
      <h1>Truco Games</h1>
      <p>Ordena las cartas según su valor</p>
      <p>Si hay dos del mismo valor, van en la misma línea</p>
      <p>Si sobran líneas deben quedar libres las de menor valor</p>
      <button>Barajar</button>
      <section className="flex flex-col gap-4 bg-neutral-950">
        <article className="flex justify-center">
          <img src="/1e.png"></img><img src="/2e.png"></img><img src="/3e.png"></img><img src="/4e.png"></img>
        </article>
        <article className="flex justify-center">
          <img src="/1o.png"></img>
        </article>
        <article className="flex justify-center">
          <img src="/7c.png"></img>
        </article>
        <article className="flex justify-center">
          <img src="/12b.png"></img>
        </article>
      </section>
    </main>
  );
}
