import { makeAutoObservable } from "mobx";
import { fetchRepositories, fetchRepositoryDetails } from "../api";
import { ErrorType, IRepository } from "./types";

class RepositoryStore {
  repository: IRepository | null = null;
  repositories: IRepository[] = [];
  isLoading = false;
  error: ErrorType = null;
  query: string = '';
  sort: string = 'best-match';

  constructor() {
    makeAutoObservable(this);
  };

  setQuery(query: string) {
    this.query = query;
    this.searchRepositories();
  }

  setSort(sort: string) {
    this.sort = sort;
    this.searchRepositories();
  }

  async searchRepositories() {
    if (this.query.trim() === '') {
      this.repositories = [];
      return;
    }

    this.isLoading = true;
    this.error = null;

    try {
      const result = await fetchRepositories(this.query, this.sort);
      this.repositories = result.items;
    } catch (error) {
      this.error = "Не удалось загрузить репозитории";
    } finally {
      this.isLoading = false;
    }
  }

  async getRepositoryDetails(id: number) {
    this.isLoading = true;
    this.error = null;
    try {
      const result = await fetchRepositoryDetails(id);
      this.repository = result;
    } catch (error) {
      this.error = "Не удалось загрузить репозиторий";
    } finally {
      this.isLoading = false;
    }
  };

  clearRepository() {
    this.repository = null;
  };

  get repositoryCount() {
    return this.repositories.length;
  };
};

export const repositoryStore = new RepositoryStore();
