import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Goran Dragutinović
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                SEO at{' '}
                <span className="font-semibold">All Star Directories</span>
                {' | '}
                Co-Founder at{' '}
                <span className="font-semibold">Golden Ape Media</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Helping companies build better websites for their users and
                Google. Programming blockchain smart contracts with Solidity (+
                NextJS/React).
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Goran Dragutinovic"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="My Journey to Mastering Solidity & Smart Contracts"
              slug="solidity"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="What I Learned from React & Redux (Thus Far)"
              slug="react"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="SEO Tips Every Developer Should Know"
              slug="seo"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link href="/blog">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Watch My Journey to Solidity
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Watch a wanna be programmer dummy try to navigate his way through the world of
            blockchain smart contracts, by attempting to learn the Solidity language. 
          </p>
          <VideoCard
            index="01"
            href=""
            length="0:00:00"
            title="Introduction to Me (coming soon)"
          />
          <VideoCard
            index="02"
            href=""
            length="0:00:00"
            title="Introduction to Blockchain (coming soon)"
          />
          <VideoCard
            index="03"
            href=""
            length="0:00:00"
            title="Introduction to Solidity (coming soon)"
          />
          <VideoCard
            index="04"
            href=""
            length="0:00:00"
            title="The Only SEO Video You Need (coming soon)"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
          <span className="h-16" />
          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}
