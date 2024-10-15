import { observer } from 'mobx-react-lite';
import { repositoryStore } from '@/entities/repository';

const sortOptions = [
  { value: 'best-match', label: 'Best Match' },
  { value: 'stars', label: 'Most Stars' },
  { value: 'forks', label: 'Most Forks' },
  { value: 'updated', label: 'Recently Updated' },
];

export const SortSelect = observer(() => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    repositoryStore.setSort(e.target.value);
  };

  return (
    <select
      className="bg-white p-4 rounded-2xl"
      value={repositoryStore.sort}
      onChange={handleSortChange}
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
