import { useEffect, useState } from "react"
import { Ability, Result} from "../../models";
import { getAbilities } from "../../services/public.service";

const Home = () => {
  const [loading, setloading] = useState(false);
  const [abilities, setAbilities] = useState<Ability>();

  const getDataAbilities = async () => {
    return await getAbilities()
  }

  useEffect(() => {
    getDataAbilities().then(response => {
      console.log(response);
      setAbilities(response.data)
      setloading(true)
    })

    return () => {
      console.log('componente destruido');
      setloading(false)
    }
  }, []);

  const ListAbilities = (list: any) => {
    const items = list.results.map((ability: Result)  => {
      return <li>{ ability.name }</li>
    })

    return (<ul>{ items }</ul>)
  }

  return (
    <div>
      {
        loading ? 
        <ListAbilities list={abilities}/> :
        <p>loading</p>
      }
    </div>
  )
}

export default Home