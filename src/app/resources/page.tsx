import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourcesInteractive from './components/ResourcesInteractive';

export const metadata: Metadata = {
  title: 'Resources - TechFlow Solutions',
  description: 'Explore our comprehensive resource center featuring technical blogs, whitepapers, case studies, and industry insights to accelerate your digital transformation journey.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <ResourcesInteractive />
      </div>
    </>
  );
}