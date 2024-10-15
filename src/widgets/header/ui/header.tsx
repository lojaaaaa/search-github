import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

import { favoriteStore } from '@/entities/favorite-repository/model/store'
import { LikeIcon } from '@/shared/ui/icons'

export const Header = observer(() => (
  <header className='bg-baseHeader text-baseTextHeader'>
    <div className='mx-auto max-w-screen-xl px-2 flex justify-between items-center h-20'>
      <NavLink to='/'>
        GitHubSearch
      </NavLink>
      <ul className='flex gap-4'>
        <li className='relative'>
          <NavLink to='/favorites'>
            <LikeIcon isLiked={false} />
          </NavLink>
          {
            favoriteStore.favoriteCount > 0 &&
            <span className='absolute bg-baseButton text-xs px-1 rounded-lg right-0 top-0'>
              {favoriteStore.favoriteCount}
            </span>
          }
        </li>
      </ul>
    </div>
  </header>
));
