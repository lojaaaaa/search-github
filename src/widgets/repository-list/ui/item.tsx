import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link } from "react-router-dom";

import { favoriteStore } from "@/entities/favorite-repository";
import { IRepository } from "@/entities/repository"
import { Button, BranchIcon, LikeIcon, ShareIcon, StarIcon } from "@/shared/ui";

interface RepositoryItemProps {
  item: IRepository;
};

export const RepositoryItem = observer(({ item }: RepositoryItemProps) => {

  const [isFavorite, setIsFavorite] = useState(() => favoriteStore.isFavorite(item.id));

  const handleAddFavoriteClick = () => {
    if (isFavorite) {
      favoriteStore.removeFavorite(item.id);
      setIsFavorite(false);
      console.log('delete')
    } else {
      favoriteStore.addFavorite(item);
      setIsFavorite(true);
    }
  };

  return (
    <li className='flex flex-col gap-4 bg-white rounded-2xl p-6'>
      <div className='flex justify-between'>
        <img src={item.owner.avatar_url} alt="avatar" className='w-8 h-8 rounded-full'/>
        <div className="flex gap-4">
          <div className="bg-[#F1F5F9] px-2 rounded-xl flex items-center gap-2 text-sm">
            <StarIcon className="flex items-center"/>
            <span>{item.watchers}</span>
          </div>
          <div className="bg-[#F1F5F9] px-2 rounded-xl flex items-center gap-2 text-sm">
            <BranchIcon />
            <span>{item.forks}</span>
          </div>
        </div>
      </div>
      <div className='grow'>
        <h4 className='font-semibold'>
          @{item.name}
        </h4>
        <a href={item.html_url} target='_blank' className='text-baseLink'>
          github
        </a>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <Button icon onClick={handleAddFavoriteClick}>
            <LikeIcon isLiked={isFavorite} />
          </Button>
          <Button icon>
            <ShareIcon />
          </Button>
        </div>
        <Link to={`/repo/${item.id}`}>
          <Button>
            Подробнее
          </Button>
        </Link>
      </div>
    </li>
  );
});