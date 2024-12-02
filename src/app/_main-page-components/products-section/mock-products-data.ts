export type Video = {
  id: string;
  contentType: string;
  topic: string;
  subtopic: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  videoSrc: string;
  authorId: string;
};
export type Author = {
  id: string;
  name: string;
  imageSrc: string;
};

export const videoDataMock: Video[] = [
  {
    id: '1',
    contentType: 'Webinar',
    topic: 'Topic 1',
    subtopic: 'Subtopic 1',
    title: 'Title 1',
    description:
      'Description 1 Here is medium width description for content. Usually it would be about video, webinar or other content.',
    thumbnail: {
      src: `https://picsum.photos/364/224?random=${Math.random()}.jpg`,
      alt: 'Thumbnail 1',
    },
    videoSrc: 'Video 1',
    authorId: '1',
  },
  {
    id: '2',
    contentType: 'Video',
    topic: 'Topic 2',
    subtopic: 'Subtopic 2',
    title: 'Title 2',
    description:
      'Description 2 Here is medium width description for content. Usually it would be about video, webinar or other content.',
    thumbnail: {
      src: `https://picsum.photos/364/224?random=${Math.random()}.jpg`,
      alt: 'Thumbnail 2',
    },
    videoSrc: 'Video 2',
    authorId: '2',
  },
  {
    id: '3',
    contentType: 'Class',
    topic: 'Topic 3',
    subtopic: 'Subtopic 3',
    title: 'Title 3',
    description:
      'Description 3 Here is medium width description for content. Usually it would be about video, webinar or other content.',
    thumbnail: {
      src: `https://picsum.photos/364/224?random=${Math.random()}.jpg`,
      alt: 'Thumbnail 3',
    },
    videoSrc: 'Video 3',
    authorId: '3',
  },
];
export const authorDataMock: Author[] = [
  {
    id: '1',
    name: 'Author 1',
    imageSrc: `https://picsum.photos/40?random=${Math.random()}.jpg`,
  },
  {
    id: '2',
    name: 'Author 2',
    imageSrc: `https://picsum.photos/40?random=${Math.random()}.jpg`,
  },
  {
    id: '3',
    name: 'Author 3',
    imageSrc: `https://picsum.photos/40?random=${Math.random()}.jpg`,
  },
];
