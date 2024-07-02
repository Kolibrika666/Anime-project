export type DataTypes<T> = {
data: T[];
links: object;
meta: object;
}

export type AnimeCardTypes = {
id: string;
type: string;
links: object;
attributes: object;
relationships: object;
}

export const getAnimeCard = async() => {
  const responce = await fetch ('https://kitsu.io/api/edge/anime')
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    console.log(data.data)

    for (let i of data.data) {
      console.log(i.id)
    }
    
    return data;
  } else throw new Error('some error')
}



