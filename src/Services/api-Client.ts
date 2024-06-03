import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e681c4cd1a681c039e97030918d42a2b",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiJlNjgxYzRjZDFhNjgxYzAzOWU5NzAzMDkxOGQ0MmEyYiIsInN1YiI6IjY2NWNkZmZkYzYwY2VmMGNiNzFlYTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O3I57vUQ4TslCzUBFLLUhfEBy7-mgaB-bjc-eF7JEIY",
  },
});
