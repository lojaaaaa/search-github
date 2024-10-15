import { IRepository } from "@/entities/repository/model/types";
import { makeAutoObservable } from "mobx";

class FavoriteStore {
  favorites: IRepository[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFavorites();
  };

  addFavorite(repo: IRepository) {
    if (!this.isFavorite(repo.id)) {
      this.favorites.push(repo);
      this.saveFavorites();
    }
  };

  removeFavorite(repoId: number) {
    this.favorites = this.favorites.filter(fav => fav.id !== repoId);
    this.saveFavorites();
  };

  isFavorite(repoId: number): boolean {
    return this.favorites.some(fav => fav.id === repoId);
  };

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  };

  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  };

  get favoriteCount() {
    return this.favorites.length;
  };
};

export const favoriteStore = new FavoriteStore();
