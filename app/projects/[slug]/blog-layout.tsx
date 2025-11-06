'use client'

import { oswald, poppins } from '@/app/fonts'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Sidebar,
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarToggleButton
} from '@/components/aspect-ui'
import {
  Code,
  ExternalLink,
  Github,
  Info,
  Star,
  Images
} from 'lucide-react'
import Link from 'next/link'
import { useState, useCallback } from 'react'

interface ProjectData {
  title: string
  short_description: string
  description: string[]
  project_type: string[]
  project_status: string
  date_started: string
  tech_use: string[]
  project_url: string
  project_images: string[]
  project_videos: string[]
  github_repo: string
  key_features: Array<{ title: string; desc: string }>
  tags: string[]
}


export default function BlogLayout({ data }: { data: ProjectData }) {
  const [activeSection, setActiveSection] = useState('overview')

  const getYouTubeId = useCallback((url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : '';
  }, []);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
  ]

  // Conditionally add gallery item
  if (data.project_images?.length > 1 || data.project_videos.length > 0) {
    sidebarItems.push({ id: 'gallery', label: 'Gallery', icon: Images })
  }

  return (
    <div className={`flex ${poppins.className}`}>
      {/* Sidebar */}
      <Sidebar className='border-border h-auto w-80 border-r bg-bg p-6 lg:bg-inherit'>
        <SidebarHeader className='mb-8'>
          <h1
            className={`text-text mb-2 flex items-center justify-between text-2xl font-bold ${oswald.className}`}
          >
            <span>{data.title}</span>
            <SidebarToggleButton className='lg:hidden' />
          </h1>
          <div className='mb-4 flex flex-wrap gap-2'>
            {data.project_type.map(type => (
              <Badge key={type} variant='outline' className='text-xs'>
                {type}
              </Badge>
            ))}
          </div>
          <Badge variant={'default'} className='mb-4'>
            {data.project_status}
          </Badge>
        </SidebarHeader>

        <SidebarContainer className='space-y-2'>
          {sidebarItems.map(item => {
            const Icon = item.icon
            return (
              <SidebarItem
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`${activeSection === item.id
                  ? 'bg-[var(--color-primaryColor)] text-[var(--bg-light)]text-primary'
                  : ''
                  }`}
              >
                <Icon className='h-5 w-5' />
                {item.label}
              </SidebarItem>
            )
          })}
          <div className='border-border border-t-2 px-2.5 py-3 mt-10'>
            <div className='space-y-4'>
              {data.project_url && <Button className='w-full'>
                <Link
                  href={data.project_url}
                  target='_blank'
                  className='flex items-center gap-3'
                  rel='noopener noreferrer'
                >
                  <ExternalLink className='h-4 w-4' />
                  View Live Demo
                </Link>
              </Button>}
              {data.github_repo && <Button variant='outline' className='w-full'>
                <a
                  href={data.github_repo}
                  target='_blank'
                  className='flex items-center gap-3'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' />
                  View Source
                </a>
              </Button>}
            </div>
          </div>

        </SidebarContainer>
      </Sidebar>

      {/* Main Content */}
      <div className='flex-1 p-8 text-base'>
        {activeSection === 'overview' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Project Overview' />
              <p className='text-text-muted mb-6 leading-relaxed'>
                {data.short_description}
              </p>
            </div>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className={`text-xl ${oswald.className}`}>
                  About This Project
                </CardTitle>
              </CardHeader>
              <CardContent className='prose max-w-none space-y-4'>
                <ul className='space-y-2 list-none'>
                  {data.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className='space-y-2 text-sm'>
                  <div className='flex gap-2'>
                    <span className='text-text-muted'>Started:</span>
                    <span className='font-medium'> {data.date_started}</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-text-muted'>Status:</span>
                    <Badge variant='default'>{data.project_status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>



            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className={`text-xl ${oswald.className}`}>
                  Key Features
                </CardTitle>
              </CardHeader>

              <CardContent className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {data.key_features.map((feature, index) => (
                  <Card key={index} className='transition-shadow hover:shadow-md'>
                    <CardHeader>
                      <CardTitle
                        className={`flex items-center gap-3 text-lg ${oswald.className}`}
                      >
                        <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-lg'>
                          <Star className='text-primary-foreground h-5 w-5' />
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

          </div>

        )}


        {activeSection === 'tech-stack' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Technology Stack' />
              <p className='text-text-muted'>
                Built with modern technologies for optimal performance and
                developer experience
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Technologies Used
                </CardTitle>
                <CardDescription>
                  The following technologies power this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                  {data.tech_use.map(tech => (
                    <div
                      key={tech}
                      className='bg-bg-light flex items-center gap-3 rounded-lg p-3'
                    >
                      <Code className='text-primary h-5 w-5' />
                      <span className='text-text font-medium whitespace-nowrap'>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className='mt-6'>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Tags
                </CardTitle>
                <CardDescription>
                  Keywords and categories associated with this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {data.tags.map(tag => (
                    <Badge key={tag} variant='outline' className='px-3 py-1'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className='max-w-4xl'>
            <div className='mb-8'>
              <SectionTitle title='Gallery' />
              <p className='text-text-muted'>
                See the Project in Action
              </p>
            </div>

            {data.project_videos.length > 0 ? (<Card>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Project Video Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {data.project_videos.map((videoUrl, index) => (
                    <div key={index} className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}`}
                        title={`Project video ${index + 1}`}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>) : []}

            {data.project_images.length > 1 ? (<Card className='mt-6'>
              <CardHeader>
                <CardTitle className={`text-lg ${oswald.className}`}>
                  Project Images Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.project_images.slice(1).map((imageUrl, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`Project screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>) : []}
          </div>
        )}

      </div>
    </div>
  )
}

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-4 flex items-center gap-2'>
      <SidebarToggleButton className='lg:hidden' />
      <h2 className={`text-text text-3xl font-bold ${oswald.className}`}>
        {title}
      </h2>
    </div>
  )
}
