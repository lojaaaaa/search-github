import { observer } from "mobx-react-lite";
import { useDebounce } from "@/shared/hooks";
import { repositoryStore } from "@/entities/repository";
import { useEffect } from "react";

export const SearchInput = observer(() => {
  const debouncedQuery = useDebounce(repositoryStore.query, 500);

  useEffect(() => {
    repositoryStore.setQuery(String(debouncedQuery));
  }, [debouncedQuery]);

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    repositoryStore.query = e.target.value;
  };

  return (
    <input 
      className='p-4 rounded-xl' 
      value={repositoryStore.query} 
      onChange={handleChangeSearchValue} 
      type="text" 
      placeholder='Search' 
    />
  );
});