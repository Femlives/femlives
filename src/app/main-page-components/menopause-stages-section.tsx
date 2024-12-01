'use client';

import { FCProps, SetAction } from '@/types/app';
import { useState } from 'react';

type MenopauseStage = {
  title: string;
  description: string;
  symptoms: string[];
};

const menopauseStages: MenopauseStage[] = [
  {
    title: 'Prämenopause',
    description: 'Eine Beschreibung zur Prämenopause.',
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

export const MenopauseStagesSection: FCProps = () => {
  const [activeStage, setActiveStage] = useState<MenopauseStage | null>(null);

  const getMenuItems = () => {
    return menopauseStages.map((stage, index) => (
      <>
        <MenuItem
          key={stage.title}
          stage={stage}
          setAction={setActiveStage}
          isActive={activeStage?.title === stage.title}
        />
        {index !== menopauseStages.length - 1 && (
          <div className='text-gray-light' aria-hidden>
            |
          </div>
        )}
      </>
    ));
  };

  return (
    <div className='bg-white py-10 flex-center flex-col'>
      <div className='bg-quaternary-lighter p-6 rounded-3xl w-fit '>
        <menu className='flex items-center bg-white border border-gray-light rounded-lg p-1'>
          {getMenuItems()}
        </menu>
      </div>
    </div>
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
