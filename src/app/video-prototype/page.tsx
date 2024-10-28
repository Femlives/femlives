'use client';
import { z } from 'zod';
import { useState } from 'react';
import FormWrapper from '@/components/FormWrapper';
import ConditionWrapper from '@/components/ConditionWrapper';
import VideoPlayer from '@/components/VideoPlayer';
import { FormSubmitResponse } from '@/types/app';
import { ValidatorName } from '@/api/db/validators/util';

const videoUrlSchema = z.object({
  videoUrl: z.string().url('Please enter a valid URL'),
});

const VideoPrototype = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleFormSubmit = async (
    data: unknown
  ): Promise<FormSubmitResponse> => {
    const parsedData = videoUrlSchema.safeParse(data);
    if (!parsedData.success) {
      return {
        success: false,
        status: 400,
        error: { videoUrl: parsedData.error.message },
      };
    }

    setVideoUrl(parsedData.data.videoUrl);
    return { success: true, status: 200 };
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Video Player Prototype</h1>

      <FormWrapper
        onSubmit={handleFormSubmit}
        validatorName={ValidatorName.VIDEO_URL}
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

      <ConditionWrapper condition={!!videoUrl}>
        <VideoPlayer srcUrl={videoUrl} />
      </ConditionWrapper>
    </div>
  );
};

export default VideoPrototype;
