import { useParams } from "react-router-dom";
import { fetcHSuperHeroeDetails, fetcHSuperHeroFriendDetails } from "../api";
import useQueryHook from "../hook/query/useQueryHook";
const HeroDetails = () => {
  const { id } = useParams();
  const queryProps = {
    enable: !!id,
  };
  const { data: superheroDetails } = useQueryHook(["super-hero", id], () =>
    fetcHSuperHeroeDetails(id)
  );

  const {
    data: friends,
    isLoading,
    error,
  } = useQueryHook(
    ["superHero-friends"],
    () => fetcHSuperHeroFriendDetails(id),
    queryProps
  );

  console.log(friends);

  // dependent Query based on superHero Id fetch the frined of him

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Somehing went wrong</h1>;
  }
  return (
    <>
      {superheroDetails?.data?.map((details, index) => (
        <h1 key={index}>
          {details.name}- {details.alterego}
        </h1>
      ))}
      {friends?.data?.map((friendsDetail, index) => (
        <h1 key={index}>Frineds are - {friendsDetail.name}</h1>
      ))}
    </>
  );
};
export default HeroDetails;
