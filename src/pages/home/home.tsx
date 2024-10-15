import { observer } from 'mobx-react-lite'

import { repositoryStore } from '@/entities/repository'
import { RepositoryList } from '@/widgets/repository-list';
import { Empty } from '@/shared/ui/empty';
import { SearchInput } from '@/features/search-repositories';
import { SortSelect } from '@/features/sort-repositories';

export const Home = observer(() => (
  <div className='flex flex-col gap-8 w-full'>
    <SearchInput />
    {repositoryStore.repositoryCount > 0
      ? 
        <>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-2xl'>
              Result: {repositoryStore.repositoryCount} repositories
            </h2>
            <SortSelect />
          </div>
          <RepositoryList items={repositoryStore.repositories} />
        </>
      : <Empty />
    }
  </div>
));
