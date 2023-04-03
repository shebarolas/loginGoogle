import { useLocation } from "react-router-dom"
import { data } from "../data"

export default function ReadMore() {
  
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  
  const info = data.find((p) => p.id.toString() === path);

  return (

    <div className="readMore">
        <img src={info.img} alt="" className="readMoreImg" />
        <h1 className="readMoreTitle">{info.title}</h1>
        <p className="readMoreDesc">{info.desc}</p>
    </div>
  )
}
