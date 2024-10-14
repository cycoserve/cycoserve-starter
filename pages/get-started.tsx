import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-gray-100 flex flex-col">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <header className="relative z-10 p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors duration-200 flex items-center">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
          Get Started with CycoServe Starter
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Using Pre-built Components</h2>
            <p className="mb-4">CycoServe Starter comes with a variety of pre-built components to help you quickly create your Next.js application. Here's how to use them:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Import the component from the components directory</li>
              <li>Use the component in your page or layout file</li>
              <li>Customize the component props as needed</li>
            </ol>
            <p className="mt-4">Example:</p>
            <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
{`import { Header } from '../components/Header'

export default function HomePage() {
  return (
    <div>
      <Header title="Welcome to My App" />
      {/* Other page content */}
    </div>
  )
}`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Editing the .env.local File</h2>
            <p className="mb-4">To configure your WordPress URL, you need to edit the <code>.env.local</code> file in the root of your project:</p>
            <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
{`# .env.local
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql`}
              </code>
            </pre>
            <p className="mt-4">Replace <code>https://your-wordpress-site.com/graphql</code> with the URL of your WordPress GraphQL endpoint.</p>
            <div className="mt-4 p-4 bg-purple-900 bg-opacity-50 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Important Note:</h3>
              <p>CycoServe Starter requires a headless WordPress installation to function as a blog. You'll need to set up WordPress with the WPGraphQL plugin enabled to use this framework effectively.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Adding Firebase Variables</h2>
            <p className="mb-4">To integrate Firebase, add the following variables to your <code>.env.local</code> file:</p>
            <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
{`# Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`}
              </code>
            </pre>
            <p className="mt-4">Replace the placeholder values with your actual Firebase configuration details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Arranging Pre-built Components</h2>
            <p className="mb-4">To create full pages, you can arrange pre-built components in your page files. Here's an example of how to structure a basic page:</p>
            <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
{`import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { FeatureList } from '../components/FeatureList'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero 
        title="Welcome to My App" 
        description="A powerful solution built with CycoServe Starter" 
      />
      <FeatureList features={[
        { title: 'Fast', description: 'Built for speed' },
        { title: 'Flexible', description: 'Customizable components' },
        { title: 'Secure', description: 'Enterprise-grade security' },
      ]} />
      <Footer />
    </div>
  )
}`}
              </code>
            </pre>
            <p className="mt-4">This example shows how to compose a page using the Header, Hero, FeatureList, and Footer components. Adjust the props and add or remove components as needed for your specific page layout.</p>
          </section>
        </div>
      </main>

      <footer className="relative z-10 p-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 CycoServe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}