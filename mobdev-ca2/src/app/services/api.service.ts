import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    getEpisodes() {
        return this.http.get('https://8100-d59fc08e-80cb-4c95-b4c9-96e1d7d31aa5.ws-eu01.gitpod.io/assets/episodes.json')
    }
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }
    getCharacters() {
        return this.http.get('https://8100-d59fc08e-80cb-4c95-b4c9-96e1d7d31aa5.ws-eu01.gitpod.io/assets/characters.json')
    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }
    getQuotes() {
        return this.http.get('https://8100-d59fc08e-80cb-4c95-b4c9-96e1d7d31aa5.ws-eu01.gitpod.io/assets/quotes.json')
    }
    getQuote(id) {
        return this.http.get(`https://8100-d59fc08e-80cb-4c95-b4c9-96e1d7d31aa5.ws-eu01.gitpod.io/assets/quotes/.json/${id}`);
    }
    getDeaths() {
        return this.http.get('https://8https://8100-d59fc08e-80cb-4c95-b4c9-96e1d7d31aa5.ws-eu01.gitpod.io/assets/deaths.json')
    }
}

