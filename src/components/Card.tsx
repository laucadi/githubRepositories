import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";
import { parseDate } from "../utils/parseDate";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const handleOpenUrl = () => {
    window.open(repository.url, "_blank");
  };

  const handleLike = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  return (
    <ListItem
      sx={{ m: 1, backgroundColor: "#363732", borderRadius: 2 }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          disabled={isFavorite}
          onClick={handleLike}
        >
          <FavoriteIcon color={isFavorite ? "error" : "primary"} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar src={repository.owner.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={repository.name}
        secondary={`create at: ${parseDate(repository.created_at)}`}
      />
    </ListItem>
  );
};

export default Card;
