import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/common/FeatureCard';
import { valueProps } from '@/data/company';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering you can build on"
          description="We combine technical depth with a complete service system, so your project is supported from first consultation to long-term maintenance."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((v) => (
            <FeatureCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
