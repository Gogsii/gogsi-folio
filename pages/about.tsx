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
              GitHub: <a href="https://github.com/gogsii">@gogsi</a>
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
          <p>
            Goran Dragutinovic, Co-Founder at Golden Ape Media | SEO @ All Star
            Directories
          </p>
          <h3>Long, 3rd Person</h3>
          <p>
            Goran Dragutinovic is the Co-Founder at Golden Ape Media, where he
            helps companies build and manage Google friendly websites. He is
            also the SEO Specialist for All Star Directories. An entrepreneur by
            nature, Goran has created websites that generated close to one
            million monthly visits. A graduate of Finance, he fell in love with
            the blockchain and Web3 and is currently self-learning the Solidity
            language.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Goran. I'm the Co-Founder at Golden Ape Media, where we
            help companies build and manage Google friendly websites. I have
            built websites that generated close to one million monthly visitors.
            I'm passionate about programming and am continously learning to
            program blockchain smart contracts with Solidity, as well as
            practicing front-end with React, and Next.js.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Goran Dragutinovic is the Co-Founder at Golden Ape Media, where he
            helps companies build and manage Google friendly websites. Also, SEO
            specialist at All Star Directories.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Goran. I'm SEO Specialist at All Star Directories, where I
            help build better, more user and Google friendly sites.
          </p>
          <h3>Education</h3>
          <p>
            Goran Dragutinovic graduated from Cleveland State University with a
            B.A. in Finance. Also completed the Full-Stack Web Development
            bootcamp from Nucamp Coding.
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
