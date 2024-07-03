export type DataTypes<T> = {
data: T[];
links: object;
meta: object;
}

export type AnimeCardTypes = {
id: string;
type: string;
links: object;
attributes: AnimeAttributesTypes;
relationships: object;
}

export type AnimeAttributesTypes = {
  canonicalTitle: string;
  averageRating: string;
  status: string;
  posterImage: AnimePosterImageTypes;
}

export type AnimePosterImageTypes = {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
}

export const getAnimeCard = async() => {
  const responce = await fetch ('https://kitsu.io/api/edge/anime')
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    return data.data;
  } else throw new Error('some error')
}



