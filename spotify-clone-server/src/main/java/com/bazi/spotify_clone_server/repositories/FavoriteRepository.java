package com.bazi.spotify_clone_server.repositories;

import com.bazi.spotify_clone_server.models.Favorite;
import com.bazi.spotify_clone_server.data.FavoriteId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FavoriteRepository extends JpaRepository<Favorite, FavoriteId> {
    List<Favorite> findAllByUserEmailAndSongPublicIdIn(String email, List<UUID> songPublicIds);
}