import { Fragment } from 'react'

type Item = { label?: string; text: string; sub?: { label?: string; text: string }[] }
type Block =
  | { t: 'h2' | 'h3'; id: string; text: string }
  | { t: 'p' | 'callout'; text: string }
  | { t: 'ol' | 'ul'; start?: number; items: Item[] }
export type LegalData = { title: string; date: string; toc: [string, string][]; blocks: Block[] }

const EMAIL = /([a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,})/gi

function Txt({ text }: { text: string }) {
  return (
    <>
      {text.split(EMAIL).map((part, i) =>
        i % 2 ? (
          <a key={i} href={`mailto:${part}`}>
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

function Li({ it }: { it: Item }) {
  return (
    <li>
      {it.label && (
        <>
          <strong>{it.label}:</strong>{' '}
        </>
      )}
      <Txt text={it.text} />
      {it.sub && (
        <ul>
          {it.sub.map((s, i) => (
            <li key={i}>
              {s.label && (
                <>
                  <strong>{s.label}:</strong>{' '}
                </>
              )}
              <Txt text={s.text} />
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function LegalBody({ data, prefix }: { data: LegalData; prefix: string }) {
  return (
    <div className="lx-g">
      <nav className="lx-toc rv-auto" aria-label={`Daftar isi ${data.title}`}>
        <p>Daftar isi</p>
        {data.toc.map(([id, t]) => (
          <a key={id} href={`#${prefix}${id}`}>
            {t}
          </a>
        ))}
      </nav>
      <article className="lx-doc rv-auto" aria-label={data.title}>
        {data.blocks.map((b, i) => {
          if (b.t === 'h2') return <h2 key={i} id={prefix + b.id}>{b.text}</h2>
          if (b.t === 'h3') return <h3 key={i} id={prefix + b.id}>{b.text}</h3>
          if (b.t === 'p') return <p key={i}><Txt text={b.text} /></p>
          if (b.t === 'callout') return <p key={i} className="lx-co">{b.text}</p>
          if (!('items' in b)) return null
          if (b.t === 'ol')
            return (
              <ol key={i} start={b.start}>
                {b.items.map((it, j) => <Li key={j} it={it} />)}
              </ol>
            )
          return (
            <ul key={i}>
              {b.items.map((it, j) => <Li key={j} it={it} />)}
            </ul>
          )
        })}
      </article>
    </div>
  )
}
