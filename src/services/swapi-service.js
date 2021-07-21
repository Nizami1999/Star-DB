export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`); // серверная ошибка
    }

    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results;
  };

  getPerson = async (id) => {
    return this.getResource(`/people/${id}`);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results;
  };

  getPlanet = async (id) => {
    return this.getResource(`/planets/${id}`);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results;
  };

  getStarship = async (id) => {
    return this.getResource(`/starships/${id}`);
  };
}
