import Container from 'components/Container';
import Subscribe from 'components/Subscribe';

export default function Newsletter() {
  return (
    <Container
      title="Newsletter – Goran Dragutinovic"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Once a week, I write a newsletter about the things that took place in the
          FinTech world. There's typically a lot that happens, so
          I mainly focus on the things I'd want to personally hear about. Sign up
          to stay on top of events. I don't spam, but I do cry if you unsubscribe.
        </p>
        <Subscribe />
      </div>
    </Container>
  );
}
