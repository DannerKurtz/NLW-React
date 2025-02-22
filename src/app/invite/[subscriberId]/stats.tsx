import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api';
import { MousePointerClick, BadgeCheck, Medal } from 'lucide-react';

interface IStatusProps {
  subscriberId: string;
}

export default async function Stats(props: IStatusProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(
    props.subscriberId
  );
  const { count: inviteCount } = await getSubscriberInviteCount(
    props.subscriberId
  );
  const { position: rankingPosition } = await getSubscriberRankingPosition(
    props.subscriberId
  );

  return (
    <>
      <div className='grid gap-3 md:grid-cols-3'>
        <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
          <span className='font-heading text-xl2 font-semibold text-gray-200 leading-none'>
            {accessCount}
          </span>
          <span className='text-sm text-gray-300 leading-none text-center'>
            Acesso aos links
          </span>

          <MousePointerClick className='size-5 text-purple absolute top-3 left-3' />
        </div>
        <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
          <span className='font-heading text-xl2 font-semibold text-gray-200 leading-none'>
            {inviteCount}
          </span>
          <span className='text-sm text-gray-300 leading-none text-center'>
            Inscrições feitas
          </span>
          <BadgeCheck className='size-5 text-purple absolute top-3 left-3' />
        </div>
        <div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
          <span className='font-heading text-xl2 font-semibold text-gray-200 leading-none'>
            {rankingPosition ? `${rankingPosition}º` : '-'}
          </span>
          <span className='text-sm text-gray-300 leading-none text-center'>
            Posição no ranking
          </span>
          <Medal className='size-5 text-purple absolute top-3 left-3' />
        </div>
      </div>
    </>
  );
}
