import api from "../api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./types";
async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  //nombre de los datos y la funcion que se va a ejecutar
  return useQuery(["repos", githubUser], fetchRepos);
}
