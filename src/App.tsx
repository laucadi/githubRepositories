import { Box, List, Skeleton } from "@mui/material";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";
import Card from "./components/Card";
const App = () => {
  const { data, isLoading } = useFetchRepositories("laucadi");
  const { favoriteReposIds } = useFavoriteReposStore();
  if (isLoading)
    return <Skeleton variant="rectangular" width={310} height={118} />;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <List
        sx={{
          borderRadius: 5,
          width: "100%",
          maxWidth: 560,
          //bgcolor: "background.paper",
        }}
      >
        {data?.map((repo) => {
          return (
            <Card
              key={repo.id}
              repository={repo}
              isFavorite={favoriteReposIds.includes(repo.id)}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default App;
