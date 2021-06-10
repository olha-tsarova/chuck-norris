const API_URL = 'https://api.chucknorris.io/jokes';

export function getJoke(category) {
  return fetch(
    !category ? `${API_URL}/random` : `${API_URL}/random?category=${category}`,
  )
    .then((response) => response.json())
    .then((result) => result.value);
}

export function getCategories() {
  return fetch(`${API_URL}/categories`)
    .then((response) => response.json());
}
