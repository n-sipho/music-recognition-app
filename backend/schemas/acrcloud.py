from pydantic import BaseModel
from typing import List, Optional, Dict


class Genre(BaseModel):
    name: str
    id: int


class Artist(BaseModel):
    name: str
    id: Optional[str] = None


class SpotifyTrack(BaseModel):
    id: str
    name: str


class SpotifyAlbum(BaseModel):
    name: str
    id: str


class SpotifyMetadata(BaseModel):
    track: SpotifyTrack
    album: SpotifyAlbum
    artists: List[Artist]


class ExternalMetadata(BaseModel):
    spotify: SpotifyMetadata


class Album(BaseModel):
    name: str


class Music(BaseModel):
    sample_end_time_offset_ms: int
    play_offset_ms: int
    result_from: int
    score: int
    release_date: str
    genres: List[Genre]
    title: str
    label: str
    album: Album
    db_begin_time_offset_ms: int
    duration_ms: int
    external_ids: Dict
    artists: List[Artist]
    created_at: str
    updated_at: str
    external_metadata: ExternalMetadata
    acrid: str
    db_end_time_offset_ms: int
    sample_begin_time_offset_ms: int


class Metadata(BaseModel):
    music: List[Music]
    timestamp_utc: str


class Status(BaseModel):
    msg: str
    version: str
    code: int


class ACRCloudResults(BaseModel):
    result_type: int
    metadata: Metadata
    status: Status
    cost_time: float
