import Link from "next/link";

type TechnologyProps = {
    name: string;
    url: string;
}

export default function Technology({ name, url}: TechnologyProps) {
    return (
      <article className="card">
          <h3>{name}</h3>
          <p>
              <Link href={url} target="_blank">
                  {url}
              </Link>
          </p>
      </article>
    );
}