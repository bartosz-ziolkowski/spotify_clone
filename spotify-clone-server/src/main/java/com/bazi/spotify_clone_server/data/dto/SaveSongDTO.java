package com.bazi.spotify_clone_server.data.dto;

import com.bazi.spotify_clone_server.data.vo.SongAuthorVO;
import com.bazi.spotify_clone_server.data.vo.SongTitleVO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public record SaveSongDTO(@Valid SongTitleVO title,
                          @Valid SongAuthorVO author,
                          @NotNull byte[] cover,
                          @NotNull String coverContentType,
                          @NotNull byte[] file,
                          @NotNull String fileContentType) {
}