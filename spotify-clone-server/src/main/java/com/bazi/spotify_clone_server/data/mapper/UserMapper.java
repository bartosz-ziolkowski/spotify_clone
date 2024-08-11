package com.bazi.spotify_clone_server.data.mapper;

import com.bazi.spotify_clone_server.data.dto.ReadUserDTO;
import com.bazi.spotify_clone_server.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    ReadUserDTO readUserDTOToUser(User entity);

}