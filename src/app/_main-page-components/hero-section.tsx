import { Section, H1, H2 } from '@/components';
import { FCProps } from '@/types/app';

export const HeroSection: FCProps = () => {
  const heroImageStyles =
    'bg-[url("/images/main-page-hero.jpg")] bg-cover bg-center';

  const h2WithPaddingWidth = 'max-w-[528px]';

  return (
    <Section className={`flex items-center !py-32 ${heroImageStyles}`}>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
        }}
        className={`p-6 rounded-3xl backdrop-blur-xl text-black ${h2WithPaddingWidth} flex flex-col gap-8`}
      >
        <div className='flex flex-col gap-2'>
          <H1 text='Wechseljahre' />
          <H2 text='informiert & selbstbewusst' />
        </div>

        <p className='text-xl'>
          Deine zentrale Anlaufstelle für die Menopause: Personalisierte
          Analysen und Expertinnenwissen
        </p>
      </div>
    </Section>
  );
};
