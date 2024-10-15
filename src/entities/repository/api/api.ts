import { BASE_URL } from "@/shared/config";

const FETCH_REPOSITORIES_URL = BASE_URL + '/search/repositories';
const FETCH_REPOSITORY_URL = BASE_URL + '/repositories';

export const fetchRepositories = async (query: string, sort: string = 'best-match') => {
  const response = await fetch(`${FETCH_REPOSITORIES_URL}?q=${query}&sort=${sort}`);
  if (!response.ok) {
    throw new Error('Ошибка при запросе к GitHub API');
  }
  return response.json();
};

export const fetchRepositoryDetails = async (id: number) => {
  const response = await fetch(`${FETCH_REPOSITORY_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка при запросе к GitHub API");
  }
  return response.json();
};
