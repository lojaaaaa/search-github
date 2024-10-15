import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { favoriteStore } from '@/entities/favorite-repository';
import { repositoryStore } from '@/entities/repository';
import { CopyToClipboardButton } from '@/features/copy-to-clipboard';
import { formatDate } from '@/shared/lib';
import { 
  Button, 
  Loader, 
  ArchiveIcon, 
  BranchIcon, 
  ConsoleIcon, 
  EditIcon, 
  FolderIcon, 
  LikeIcon, 
  StarIcon
} from '@/shared/ui';

export const RepositoryDetails = observer(() => {
  const { id } = useParams();
  const { repository } = repositoryStore;

  useEffect(() => {
    if (id) {
      repositoryStore.getRepositoryDetails(Number(id));
    }

    return () => {
      repositoryStore.clearRepository();
    };
  }, [id]);
  
  if (!repository) {
    return <Loader />;
  }

  const details = [
    { icon: <StarIcon />, value: repository.stargazers_count, label: 'Количество звезд' },
    { icon: <BranchIcon />, value: repository.forks_count, label: 'Количество форков' },
    { icon: <ArchiveIcon />, value: repository.archived ? 'Да' : 'Нет', label: 'В архиве' },
    { icon: <ConsoleIcon />, value: repository.language, label: 'Язык' },
    { icon: <FolderIcon />, value: formatDate(repository.created_at), label: 'Создано' },
    { icon: <EditIcon />, value: formatDate(repository.updated_at), label: 'Изменено' },
  ];

  const handleAddFavoriteClick = () => {
    if (favoriteStore.isFavorite(Number(repository.id))) {
      favoriteStore.removeFavorite(Number(repository.id));
    } else {
      favoriteStore.addFavorite(repository);
    }
  };

  return (
    <div className='flex flex-col gap-8 bg-white p-8 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-semibold'>Профиль</h1> 
        <Link to='/'>
          &larr; К репозиториям
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <img className='w-[120px] h-[120px] rounded-full object-cover' src={repository.owner.avatar_url} alt="" />
        <div>
          <h2 className='text-3xl mb-2'>{repository?.name}</h2>
          <p>{repository?.description}</p>
        </div>
      </div>

      <ul className='grid grid-cols-auto-fill-minmax gap-4 border-b pb-8'>
        {details.map((detail, index) => (
          <li key={index} className='flex items-center gap-4 bg-gray-100 rounded-xl py-8 px-4'>
            <div className='bg-gray-300 p-2 rounded-full'>
              {detail.icon}
            </div>
            <div>
              <h3 className='text-xl'>{detail.value}</h3>
              <p className='text-md text-gray-500'>{detail.label}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <CopyToClipboardButton textToCopy={repository.html_url} /> 
          <Button icon onClick={handleAddFavoriteClick}>
            <LikeIcon isLiked={favoriteStore.isFavorite(Number(repository.id))} />
          </Button>
        </div>
        <a href={repository?.html_url} target='_blank'>
          <Button>
            Открыть репозиторий
          </Button>
        </a>
      </div>
    </div>
  );
});
