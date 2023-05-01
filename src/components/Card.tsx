import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageIcon from "@mui/icons-material/Image";
import { red } from "@mui/material/colors";
import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";
type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};
const colorsss = red[500];

const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

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
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={repository.name} secondary={repository.name} />
    </ListItem>
  );
};

export default Card;
