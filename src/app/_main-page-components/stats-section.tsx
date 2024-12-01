import { H2 } from '@/components';
import { FCProps } from '@/types/app';

type Stat = {
  heading: string;
  subheading: string;
  description: string;
};

export const StatsSection: FCProps = () => {
  const renderStats = () => {
    return stats.map((stat) => <StatCard key={stat.heading} {...stat} />);
  };

  return (
    <div className='bg-white px-36 py-12 flex justify-between '>
      <div className='max-w-[460px] h-fit'>
        <H2
          text={`Menopause Symptoms:\nCommon & Manageable`}
          className='whitespace-pre-line text-quaternary mb-4'
        />

        <p>
          Many women experience noticeable changes during menopause. These can
          impact daily life, but understanding them is the first step to feeling
          better. Here are some key points from different studies:
        </p>
      </div>

      <div className='max-w-[460px] flex flex-col gap-8'>{renderStats()}</div>
    </div>
  );
};

const StatCard: FCProps<Stat> = ({ heading, subheading, description }) => {
  return (
    <div className='flex flex-col '>
      <div>
        <H2 text={heading} />
        <p>{subheading}</p>
      </div>
      <p className='text-tertiary mt-6'>{description}</p>
    </div>
  );
};

const stats: Stat[] = [
  {
    heading: '75-85%',
    subheading: 'experience hot flashes',
    description: `These sudden heat surges are a hallmark of this phase, and you're not alone in feeling them.`,
  },
  {
    heading: '40-60%',
    subheading: 'report sleep problems',
    description: `Insomnia is common, often linked to night sweats or how hormones now regulate sleep cycles..`,
  },
  {
    heading: 'up to 60%',
    subheading: 'notice difficulty concentrating',
    description: `"Brain fog" is a real thing, but lifestyle and coping strategies can make a difference.`,
  },
];
