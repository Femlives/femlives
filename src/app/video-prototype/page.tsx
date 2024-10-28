'use client';
import { useState } from 'react';
import FormWrapper from '@/components/FormWrapper';
import ConditionWrapper from '@/components/ConditionWrapper';
import VideoPlayer from '@/components/VideoPlayer';
import { FormSubmitResponse } from '@/types/app';
import { ValidatorName } from '@/api/db/validators/util';
import { HttpStatusCode } from '@/enums';
import { videoUrlSchema } from '@/api/db/validators/video-url';

const VideoPrototype = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleFormSubmit = async (
    data: unknown
  ): Promise<FormSubmitResponse> => {
    const parsedData = videoUrlSchema.safeParse(data);
    if (!parsedData.success) {
      return {
        status: HttpStatusCode.BAD_REQUEST,
        error: { videoUrl: parsedData.error.message },
      };
    }

    setVideoUrl(parsedData.data.videoUrl);
    return { status: HttpStatusCode.OK };
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
