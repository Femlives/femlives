'use client';

import { Tag } from '@/components';
import { Button } from '@/components/Button';
import { FCProps } from '@/types/app';
import Image from 'next/image';
import { Author, Video, authorDataMock } from './mock-products-data';

type Props = {
  video: Video;
};

export const ProductCard: FCProps<Props> = ({ video, ...props }) => {
  const cardWidth = 'min-w-[364px] max-w-[364px]';

  return (
    <div className={`${cardWidth} rounded-lg overflow-hidden`} {...props}>
      <ProductHero
        thumbnail={video.thumbnail}
        contentType={video.contentType}
      />

      <div className='p-6 bg-white flex flex-col gap-4'>
        <div className='flex gap-2'>
          <Tag label={video.topic} iconName={'FallbackIcon'} />
          <Tag label={video.subtopic} iconName={'FallbackIcon'} />
        </div>

        <p className='text-xl font-bold'>{video.title}</p>

        <p>{video.description}</p>

        <AuthorInfo authorId={video.authorId} />

        <div className='flex justify-between items-center'>
          <div className='flex items-end gap-1'>
            <p className='text-2xl font-bold'>Free</p>
            <p>/one time</p>
          </div>

          <Button
            buttonLabel='Watch'
            className='px-8 py-4'
            onClick={() => console.log('watch clicked')}
          />
        </div>
      </div>
    </div>
  );
};
const ProductHero = ({
  thumbnail,
  contentType,
}: {
  thumbnail: Video['thumbnail'];
  contentType: Video['contentType'];
}) => {
  return (
    <div className='relative'>
      <Image
        className='bg-black'
        src={thumbnail.src}
        alt={thumbnail.alt}
        height={224}
        width={364}
      />

      <Tag
        label={contentType}
        iconName={'FallbackIcon'}
        className='absolute top-4 left-4'
      />
    </div>
  );
};

const AuthorInfo = ({ authorId }: { authorId: Author['id'] }) => {
  const author = authorDataMock.find((author) => author.id === authorId);

  return (
    !!author && (
      <div className='flex items-center gap-2'>
        <Image
          src={author.imageSrc}
          alt={`Profilbild von ${author.name}`}
          className='rounded-full bg-black'
          height={40}
          width={40}
        />
        <p>{author.name}</p>
      </div>
    )
  );
};
