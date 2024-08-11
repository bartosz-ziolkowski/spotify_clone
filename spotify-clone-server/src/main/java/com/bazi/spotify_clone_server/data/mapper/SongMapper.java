package com.bazi.spotify_clone_server.data.mapper;

import com.bazi.spotify_clone_server.data.dto.ReadSongInfoDTO;
import com.bazi.spotify_clone_server.data.dto.SaveSongDTO;
import com.bazi.spotify_clone_server.data.vo.SongAuthorVO;
import com.bazi.spotify_clone_server.data.vo.SongTitleVO;
import com.bazi.spotify_clone_server.models.Song;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SongMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "publicId", ignore = true)
    Song saveSongDTOToSong(SaveSongDTO saveSongDTO);

    @Mapping(target = "favorite", ignore = true)
    ReadSongInfoDTO songToReadSongInfoDTO(Song song);

    default SongTitleVO stringToSongTitleVO(String title){
        return new SongTitleVO(title);
    }

    default SongAuthorVO stringToSongAuthorVO(String author){
        return new SongAuthorVO(author);
    }

    default String songTitleVOToString(SongTitleVO title) {
        return title.value();
    }

    default String songAuthorVOToString(SongAuthorVO author) {
        return author.value();
    }


}