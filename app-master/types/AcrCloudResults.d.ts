interface RecognitionResult {
    status: {
        code: number;
        version: string;
        msg: string;
    };
    metadata: {
        timestamp_utc: string;
        music: Music[];
    };
    cost_time: number;
    result_type: number;
}

interface Music {
    result_from: number;
    release_date: string;
    artists: Artist[];
    external_ids: Record<string, unknown>;
    score: number;
    genres: Genre[];
    title: string;
    album: {
        name: string;
    };
    label: string;
    duration_ms: number;
    acrid: string;
    sample_end_time_offset_ms: number;
    db_begin_time_offset_ms: number;
    db_end_time_offset_ms: number;
    sample_begin_time_offset_ms: number;
    external_metadata: ExternalMetadata;
    play_offset_ms: number;
}

interface Artist {
    name: string;
}

interface Genre {
    name: string;
}

interface ExternalMetadata {
    spotify?: SpotifyMetadata;
}

interface SpotifyMetadata {
    track: {
        id: string;
        name: string;
    };
    album: {
        id: string;
        name: string;
    };
    artists: SpotifyArtist[];
}

interface SpotifyArtist {
    id: string;
    name: string;
}