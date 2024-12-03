import { H2, Section } from '@/components';
import { FCProps } from '@/types/app';
import { ProductCard } from './ProductCard';
import { videoDataMock } from './mock-products-data';

type Props = object;

export const ProductsSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props} className='bg-quinary flex flex-col gap-10'>
      <H2 text='Entdecke unsere Produkte' />
      <ul className='flex gap-6'>
        {videoDataMock.map((video) => (
          <li key={video.id}>
            <ProductCard video={video} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
