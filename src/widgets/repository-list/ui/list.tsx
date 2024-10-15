import { IRepository } from "@/entities/repository";
import { RepositoryItem } from "./item";

interface RepositoryListProps {
  items: IRepository[];
};

export const RepositoryList = ({ items }: RepositoryListProps) => (
  <div className='grid grid-cols-auto-fill-minmax gap-4'>
    {items.map((item) => (
        <RepositoryItem key={item.id} item={item} />
    ))}
  </div>
);