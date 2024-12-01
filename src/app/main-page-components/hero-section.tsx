import { FCProps } from '@/types/app';

export const HeroSection: FCProps = () => {
  const heroImageStyles =
    'bg-[url("/images/main-page-hero.jpg")] bg-cover bg-center';

  const h2WithPaddingWidth = 528;

  return (
    <div className={`flex items-center px-36 py-32 ${heroImageStyles}`}>
      <div
        className={`p-6 rounded-3xl backdrop-blur-xl text-black max-w-[${h2WithPaddingWidth}px] flex flex-col gap-8`}
      >
        <div className='flex flex-col gap-2 font-bold'>
          <h1 className='text-5xl'>Wechseljahre:</h1>

          <h2 className='text-4xl'>informiert & selbstbewusst</h2>
        </div>

        <p className='text-xl'>
          Deine zentrale Anlaufstelle für die Menopause: Personalisierte
          Analysen und Expertinnenwissen
        </p>
      </div>
    </div>
  );
};
