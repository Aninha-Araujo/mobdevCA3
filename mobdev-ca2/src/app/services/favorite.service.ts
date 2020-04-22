import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

 
const STORAGE_KEY = 'favoriteEpisode';
 
@Injectable()
export class FavoriteProvider {
 
  constructor(public storage: Storage) { }
 
  isFavorite(episodeId) {
    return this.getAllFavoriteEpisode().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
 
  favoriteEpisode(episodeId) {
    return this.getAllFavoriteEpisode().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }
 
  unfavoriteEpisode(episodeId) {
    return this.getAllFavoriteEpisode().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavoriteEpisode() {
    return this.storage.get(STORAGE_KEY);
  }
 
}