import video from './video.twig';

import videoRemoteData from './video-remote.yml';
import videoHostedData from './video-hosted.yml';

import './video-remote';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Videos' };

export const remote = () => video(videoRemoteData);
export const hosted = () => video(videoHostedData);
