'use client';

import { H3, Section } from '@/components';
import { FCProps, SetAction } from '@/types/app';
import { useState } from 'react';

type MenopauseStage = {
  title: string;
  description: string;
  symptoms: string[];
};

export const MenopauseStagesSection: FCProps = () => {
  const [activeStage, setActiveStage] = useState<MenopauseStage | null>(null);

  const renderMenuItems = () => {
    return menopauseStages.map((stage, index) => (
      <>
        <MenuItem
          key={stage.title}
          stage={stage}
          setAction={setActiveStage}
          isActive={activeStage?.title === stage.title}
        />
        {index !== menopauseStages.length - 1 && (
          <div className='text-gray-light w-px h-4 bg-gray-light' aria-hidden />
        )}
      </>
    ));
  };

  return (
    <Section className='bg-white flex-center flex-col gap-8'>
      <div className='bg-quaternary-lighter p-6 rounded-3xl w-fit'>
        <menu className='flex items-center bg-white border border-gray-light rounded-lg p-1'>
          {renderMenuItems()}
        </menu>
      </div>

      {!!activeStage && <DescriptionSection stage={activeStage} />}
    </Section>
  );
};

const MenuItem = ({
  stage,
  setAction,
  isActive,
}: {
  stage: MenopauseStage;
  setAction: SetAction<MenopauseStage | null>;
  isActive: boolean;
}) => {
  return (
    <li
      className={`px-3 py-2 rounded hover:bg-quaternary-lighter ${
        isActive ? 'bg-quaternary-light' : ''
      }`}
    >
      <button onClick={() => setAction(isActive ? null : stage)}>
        {stage.title}
      </button>
    </li>
  );
};

const DescriptionSection = ({ stage }: { stage: MenopauseStage }) => {
  return (
    <div className='flex gap-20'>
      <div className='w-full max-w-96'>
        <H3 text={stage.title} className='mb-4' />
        <p>{stage.description}</p>
      </div>
      <ul className='list-disc flex-center flex-col'>
        {stage.symptoms.map((symptom) => (
          <li key={symptom}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
};

const menopauseStages: MenopauseStage[] = [
  {
    title: 'Prämenopause',
    description:
      'Eine Beschreibung zur Prämenopause. Eine Beschreibung zur Prämenopause. Eine Beschreibung zur Prämenopause. Eine Beschreibung zur Prämenopause. ',
    symptoms: ['Symptom 1', 'Symptom 2', 'Symptom 3'],
  },
  {
    title: 'Perimenopause',
    description: 'Eine Beschreibung zur Perimenopause.',
    symptoms: ['Symptom 1', 'Symptom 2', 'Symptom 3'],
  },
  {
    title: 'Menopause',
    description: 'Eine Beschreibung zur Menopause.',
    symptoms: ['Symptom 1', 'Symptom 2', 'Symptom 3'],
  },
  {
    title: 'Postmenopause',
    description: 'Eine Beschreibung zur Postmenopause.',
    symptoms: ['Symptom 1', 'Symptom 2', 'Symptom 3'],
  },
];
