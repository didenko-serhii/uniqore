import { ContentSection } from '@/components/content'
import { Features } from '@/components/features-1'
import { HeroSection } from '@/components/hero-section'
import { CommunitySection } from '@/components/students'
import { TeamSection } from '@/components/team'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <TeamSection />
      <CommunitySection />
    </>
  )
}
