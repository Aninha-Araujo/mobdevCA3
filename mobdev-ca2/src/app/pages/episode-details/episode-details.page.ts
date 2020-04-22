import { ApiService } from './../../services/api.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular/directives/navigation/nav-params';
import { IonicStorageModule } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';

import { FavoriteProvider } from '../../services/favorite.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeId = null;
  isFavourite = false;
  
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
    })
    }
}
/*
export class  FavoriteServicePage implements OnInit {

    public get activatedRoute(): ActivatedRoute {
        return this._activatedRoute;
    }
    public set activatedRoute(value: ActivatedRoute) {
        this._activatedRoute = value;
    }

 constructor(private _activatedRoute: ActivatedRoute, private api: ApiService, private favoriteService: FavoriteProvider) {}
  episode: any;
  episodeId = null;
  isFavourite = false;

  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res;
    });
 
    this.favoriteService.isFavorite(this.episodeId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favoriteEpisode() {
    this.favoriteService.favoriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavoriteEpisode() {
    this.favoriteService.unfavoriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
  }
 
}

*/
    

