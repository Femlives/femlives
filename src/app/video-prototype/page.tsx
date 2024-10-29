'use client';
import { useState } from 'react';
import FormWrapper from '@/components/FormWrapper';
import ConditionWrapper from '@/components/ConditionWrapper';
import VideoPlayer from '@/components/VideoPlayer';
import { ServerActionResponse } from '@/types/app';
import { ValidatorName } from '@/validators/app';
import { HttpStatusCode } from '@/enums';
import { videoUrlSchema } from '@/validators/app/video-url';
import { readToken } from '@/actions/token';
import { assertIsString } from '@/util/asserts';

const VideoPrototype = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleFormSubmit = async (
    data: unknown
  ): Promise<ServerActionResponse> => {
    assertIsString(data);
    const decrypted = await readToken<{ videoUrl: string }>(data);

    const parsedData = videoUrlSchema.safeParse(decrypted);
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
