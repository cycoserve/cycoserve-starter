import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, FileText, Newspaper, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-gray-100 flex flex-col">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <header className="relative z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-10 h-10">
            <Image
              src="/logo.svg"
              alt="CycoServe Icon"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            CycoServe<span className='text-white font-extralight'> Starter</span>
          </h1>
        </div>
      </header>

      <main className="relative z-10 flex-grow container mx-auto p-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Rapidly Build Next.js Apps</h2>
          <div className="relative text-xl text-gray-300 mb-4">
            Jumpstart your development with CycoServe Starter - the ultimate Next js & WordPress framework for building lightning-fast applications.
          </div>
          <Link href={'/get-started'} >
            <Button className='bg-gradient-to-r from-orange-500 to-purple-500  px-12 py-1 rounded-full font-bold text-lg text-white hover:bg-orange-400 hover:animate-pulse hover:transition-all hover:duration-300'>
              Get Started</Button>
          </Link>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "GitHub Repo", icon: Github, link: "https://github.com/cycoserve/cycoserve-starter", description: "Explore the source code and contribute to CycoServe Starter." },
            { title: "Documentation", icon: FileText, link: "https://docs.cycoserve.com", description: "Read the comprehensive documentation for CycoServe Starter." },
            { title: "Blog", icon: Newspaper, link: "https://cycoserve.com/blog", description: "Stay updated with the latest news and tutorials." },
            { title: "Twitter", icon: Twitter, link: "https://twitter.com/cycoserve", description: "Follow us on Twitter for the latest updates and announcements." },
          ].map((item, index) => (
            <Card key={index} className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-500">
                  <item.icon className="mr-2" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={item.link} target='_blank' className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="relative z-10 p-4">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <p className="text-gray-400">© 2024 CycoServe Labs</p>
          <div className="w-24 h-32 relative  top-0.5">
            <Image
              src="/logo-light.svg"
              alt="CycoServe Logo"
              layout='fill'
              objectFit="contain"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}