import { Link } from "react-router-dom"

export const Card = ({data}) => {
  return (
    <div className="card">
      <Link className="link" to={`/readMore/${data.id}`}>
        <span className="title">
            {data.title}
        </span>
        <img src={data.img} alt="" className="img" />
        <p className="desc">{data.desc}</p>
        <button className="btn">Read More</button>
        </Link>
    </div>
  )
}

