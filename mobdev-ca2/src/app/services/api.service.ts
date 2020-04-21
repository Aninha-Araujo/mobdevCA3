import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    getEpisodes() {
        return this.http.get('https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/episodes.json')
    }
    getEpisode(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/episodes.json/${id}');
    }
    getCharacters() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/characters.json')
    }
    getCharacter(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/characters/.json/${id}');
    }
    getQuotes() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/quotes.json')
    }
    getQuote(id) {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/quotes/.json/${id}');
    }
    getDeaths() {
        return this.http.get('https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/deaths.json')
    }
}

