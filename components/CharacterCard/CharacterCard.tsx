import Image from "next/image";
import { CharacterType } from "../../assets/hooks/useCharacters";

import s from "./CharacterCard.module.css";

type PropsType = {
  character: CharacterType;
};

export const CharacterCard = ({ character }: PropsType) => {
  return (
    <div className={s.card}>
      <div>{character.name}</div>
      <Image
        src={character.image}
        alt={`Picture of ${character.name}`}
        width={300}
        height={300}
      />
    </div>
  );
};
