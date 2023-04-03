import { Card } from "../components/Card";
import { data } from "../data";

function Home() {
  return (
    <>
    <div className="home">
        {
            data.map(data => (
               <Card key={data.id} data = {data}/>
            ))
        }
    </div>
    </>
  )
}

export default Home