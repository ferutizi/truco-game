export default function Page1() {
  return (
    <article className="flex flex-col gap-4 my-8">
      <div>
        <img src="/1e.png" draggable={false} className="w-28" />
      </div>
      <div>
        <img src="/1b.png" draggable={false} className="w-28 select-none" />
      </div>
      <div>
        <img src="/7e.png" draggable={false} className="w-28 select-none" />
      </div>
      <div>
        <img src="/7o.png" draggable={false} className="w-28 select-none" />
      </div>
    </article>
  )
}