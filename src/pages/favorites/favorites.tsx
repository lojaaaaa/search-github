import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom';

import { favoriteStore } from '@/entities/favorite-repository';
import { Empty } from '@/shared/ui/empty'
import { RepositoryList } from '@/widgets/repository-list'

export const Favorites = observer(() => (
  <div className='flex flex-col gap-8'>
    <Link to='/'>
      &larr; К репозиториям
    </Link>
    {favoriteStore.favoriteCount > 0
      ?
        <>
          <h2 className='font-semibold text-2xl'>
            Result: {favoriteStore.favoriteCount} repositories
          </h2>
          <RepositoryList items={favoriteStore.favorites} />
        </>
      : <Empty />}
  </div>
));
