package com.bazi.spotify_clone_server.data.mapper;

import com.bazi.spotify_clone_server.data.dto.SaveSongDTO;
import com.bazi.spotify_clone_server.data.dto.SongContentDTO;
import com.bazi.spotify_clone_server.models.SongContent;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SongContentMapper {

    @Mapping(source = "song.publicId", target = "publicId")
    SongContentDTO songContentToSongContentDTO(SongContent songContent);

    SongContent saveSongDTOToSong(SaveSongDTO songDTO);
}