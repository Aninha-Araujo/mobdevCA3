import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
//import { FavoriteProvider } from './../../providers/favorite/favorite';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
    // templateUrl: 'film-details.html',  ???

})
export class EpisodeDetailsPage implements OnInit {

    episode: Observable<any>;
    episodeId = null;
    router: any;
    //isFavorite = false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    /*  constructor(public navCtrl: NavController, public favoriteProvider: FavoriteProvider, public navParams: NavParams, private emailComposer: EmailComposer) {
        this.film = this.navParams.get('film');
        this.favoriteProvider.isFavorite(this.film.episode_id).then(isFav => {
          this.isFavorite = isFav;
        })
      }
     
      favoriteFilm() {
        this.favoriteProvider.favoriteFilm(this.film.episode_id).then(() => {
          this.isFavorite = true;
        });
      }
     
      unfavoriteFilm() {
        this.favoriteProvider.unfavoriteFilm(this.film.episode_id).then(() => {
          this.isFavorite = false;
        });
      }
    */
    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episodeId.episode_id));
        });
    }

    openDetails(episode) {
        
        this.router.navigateByUrl('/tabs/episodes');
    }
}


