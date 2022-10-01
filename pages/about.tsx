import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Goran Dragutinovic">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/gogsii">@gogsii</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/gogsii">@gogsii</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://dragutinov.com">
                <a>https://dragutinov.com</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/dragutinovic/">
                https://www.linkedin.com/in/dragutinovic
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Goran Dragutinovic, SEO Specialist @ All Star Directories</p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Goran. I'm the SEO Specialist at{' '}
            <a href="">All Star Directories</a>, where my team helps developers
            build a faster web. I'm a Next.js contributor and help lead our
            open-source communities. I'm passionate about frontend development
            and have created courses on React, Next.js, and web development. I'm
            an advisor and investor in early stage startups.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Goran. I'm the SEO Specialist at{' '}
            <a href="">All Star Directories</a>, where my team helps developers
            build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Goran Dragutinovic graduated from Cleveland State University with a
            B.A. in Finance. He also holds a Full-Stack Certificate from Nucamp
            Coding Bootcamp.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Goran Dragutinovic headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Goran Dragutinovic headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
