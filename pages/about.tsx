import Link from 'next/link'
import React from 'react'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'

// import { DarkLayout } from '@/components/Layouts/DarkLayout'

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}



AboutPage.getLayout = function getLayout ( page: React.ReactNode  ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}