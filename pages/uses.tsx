import Container from 'components/Container'
import Image from 'next/future/image'

export default function Uses() {
  return (
    <Container
      title="Uses – Goran Dragutinovic"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years.
        </p>
        <Image
          className="rounded-lg"
          alt={`I will upload a picture soon...`}
          src={``}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>15.6&quot; HP Envy (2021)</li>
            <li>Logitech Mouse</li>
            <li>Logitech Keyboard</li>
            <li>Regular Computer Desk</li>
            <li>Regular Computer Chair</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode (
              <a href="https://github.com/gogsii/">Extensions</a>)
            </li>
            <li>Theme: Atom One Dark</li>
            <li>Terminals: Powershell, Git Bash, Ubuntu (WSL)</li>
          </ul>
          <h3 id="audio-video">Audio / Video</h3>
          <ul>
            <li>Sony Headphones</li>
            <li>Elgato Camlink</li>
            <li>Logitech C920</li>
            <li>Elgato Key Light (x2)</li>
            <li>Elgato Master Mount</li>
            <li>Aputure Mark 2 120D II</li>
            <li>Aputure Light Dome II</li>
          </ul>
          <h3 id="software">Software</h3>
          <ul>
            <li>Bitdefender</li>
            <li>Spotify</li>
            <li>Lightshot X</li>
            <li>Bandicam</li>
            <li>Grammarly</li>
            <li>Notepad++</li>
            <li>Brave</li>
          </ul>
          <h3 id="music">Music</h3>
          <ul>
            <li>Serbian Music</li>
            <li>English Music</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>Samsung 22 Phone</li>
            <li>Alexa</li>
            <li>USB-C External HDD</li>
          </ul>
        </div>
      </article>
    </Container>
  )
}
