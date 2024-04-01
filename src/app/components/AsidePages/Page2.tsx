export default function Page2() {
  return (
    <article className="flex flex-col gap-4 items-center my-8">
      <div className="flex gap-4">
        <img src="/3e.png" draggable={false} className="w-28" />
        <img src="/3b.png" draggable={false} className="w-28" />
        <img src="/3o.png" draggable={false} className="w-28" />
        <img src="/3c.png" draggable={false} className="w-28" />
      </div>
      <div className="flex gap-4">
        <img src="/2e.png" draggable={false} className="w-28" />
        <img src="/2b.png" draggable={false} className="w-28" />
        <img src="/2o.png" draggable={false} className="w-28" />
        <img src="/2c.png" draggable={false} className="w-28" />
      </div>
      <div className="flex gap-4">
        <img src="/1o.png" draggable={false} className="w-28" />
        <img src="/1c.png" draggable={false} className="w-28" />
      </div>
    </article>
  )
}