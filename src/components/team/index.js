//team
import { useSelector } from "react-redux";
import Hero from "../hero";
import HeroSearch from "./HeroSearch";

const Team = () => {
  const { team } = useSelector((state) => state.hero);

  return (
    <div>
      <div className="mt-4">
        <HeroSearch />
      </div>
      {team.length === 0 ? (
        <p className="py-4 text-center text-white">
          You still haven`t a team, start searching and adding a HERO
        </p>
      ) : (
        team.map(hero=>{
            console.log(hero);  //checkear porque estoy mandando un array y no solo el interior
            <Hero hero={hero} />
        })
      )}
    </div>
  );
};

export default Team;

