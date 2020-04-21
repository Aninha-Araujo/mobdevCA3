import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    getEpisodes() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/episodes.json')
    }
    getEpisode(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/episode.json');
    }
    getCharacters() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/characters.json')
    }
    getCharacter(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/characters.json');
    }
    getQuotes() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/quotes.json')
    }
    getQuote(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/quotes.json');
    }
    getDeaths() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/deaths.json')
    }
}
