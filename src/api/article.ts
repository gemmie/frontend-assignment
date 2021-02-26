import { ArticleData } from "../components/Article";

const API_PATH = "http://localhost:6010";
const ARTICLES_PATH = "/articles/";

export function getArticles(category: string): Promise<ArticleData[]> {
  return fetch(`${API_PATH}${ARTICLES_PATH}${category}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("error");
      }
    })
    .then((res) => {
      return res.articles as ArticleData[];
    });
}
