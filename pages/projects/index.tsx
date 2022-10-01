import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { InferGetStaticPropsType } from 'next';
import { allSnippetsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Snippet } from 'lib/types';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Goran Dragutinovic"
      description="A collection of some of my projects — I still have a lot to learn."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This is a collection of some of the projects I've built. They're
          mostly built with React, MongoDB, HTML, and CSS. I'm presently working
          on a Solidity project to add to the mix.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets: Snippet[] = await getClient(preview).fetch(allSnippetsQuery);

  return { props: { snippets } };
}
