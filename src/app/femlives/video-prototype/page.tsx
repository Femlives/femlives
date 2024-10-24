import { z } from 'zod';
import { FormSubmitResponse } from '@/types/app';
import FormWrapper from '@/components/FormWrapper';
//import ConditionWrapper from '@/components/ConditionWrapper';
//import VideoPlayer from '@/components/VideoPlayer';
//import { useState } from 'react';

const videoUrlSchema = z.object({
  videoUrl: z.string().url('Please enter a valid URL'),
});

const VideoPrototype = () => {
  //  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleFormSubmit = async (_data: {
    videoUrl: string;
  }): Promise<FormSubmitResponse> => {
    'use server';
    const returnValue = { success: true, status: 200 };
    //setVideoUrl(data.videoUrl);
    return new Promise(() => returnValue);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Video Player Prototype</h1>

      <FormWrapper
        onSubmit={handleFormSubmit}
        validator={videoUrlSchema}
        submitButtonLabel='Submit'
      >
        <input
          type='text'
          id='videoUrl'
          name='videoUrl'
          placeholder='Enter video URL...'
          style={{ padding: '10px', width: '300px' }}
        />
      </FormWrapper>

      {/* <ConditionWrapper condition={!!videoUrl}>
        <VideoPlayer srcUrl={videoUrl} />
      </ConditionWrapper> */}
    </div>
  );
};

export default VideoPrototype;
