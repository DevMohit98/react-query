import axios from "axios";

export const fetcHSuperHeroes = async () => {
  try {
    const response = await axios.get("http://localhost:4000/superheroes");
    return response;
  } catch (err) {
    return err.message;
  }
};

export const fetcHSuperHeroeDetails = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/superheroes?id=${id}`
    );
    return response;
  } catch (err) {
    return err.message;
  }
};

export const fetcHSuperHeroFriends = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/friends`);
    return response;
  } catch (err) {
    return err.message;
  }
};

export const fetcHSuperHeroFriendDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/friends?id=${id}`);
    return response;
  } catch (err) {
    return err.message;
  }
};

export const fetchColors = async (page, perPage) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/colors?_page=${page}&_per_page=${perPage}`
    );
    return response;
  } catch (err) {
    return err.message;
  }
};

export const AddSuperHero = async (heroDetails) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/superheroes",
      heroDetails
    );
    return response;
  } catch (err) {
    return err.message;
  }
};
