export interface TailedB {
    tailedBeasts:      TailedBeast[];
    currentPage:       number;
    pageSize:          number;
    totalTailedBeasts: number;
}

export interface TailedBeast {
    id:            number;
    name:          string;
    images:        string[];
    debut:         Debut;
    family:        Family;
    jutsu:         string[];
    natureType?:   string[];
    personal:      Personal;
    uniqueTraits?: string[];
    voiceActors?:  VoiceActors;
    tools?:        string[];
}

export interface Debut {
    manga:     string;
    anime:     string;
    novel:     Novel;
    movie:     Movie;
    game:      string;
    ova?:      string;
    appearsIn: AppearsIn;
}

export enum AppearsIn {
    AnimeMangaNovelGameMovie = "Anime, Manga, Novel, Game, Movie",
}

export enum Movie {
    NarutoTheMovieBloodPrison = "Naruto the Movie: Blood Prison",
    NarutoTheMovieNinjaClashInTheLandOfSnow = "Naruto the Movie: Ninja Clash in the Land of Snow",
    TheLastNarutoTheMovie = "The Last: Naruto the Movie",
}

export enum Novel {
    NarutoInnocentHeartDemonicBlood = "Naruto: Innocent Heart, Demonic Blood",
    TheLastNarutoTheMovie = "The Last: Naruto the Movie",
}

export interface Family {
    "incarnation with the god tree"?: string;
    "depowered form"?:                string;
    creator?:                         string;
    sibling?:                         string;
}

export interface Personal {
    status?:        string;
    kekkeiGenkai?:  string;
    classification: string[] | string;
    jinchūriki:     string[];
    titles?:        string[];
    species?:       string;
    affiliation?:   string[] | string;
}

export interface VoiceActors {
    japanese: string;
    english:  string[] | string;
}
