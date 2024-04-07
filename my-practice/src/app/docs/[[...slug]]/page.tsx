const Docs = ({params} :{
    params : {
        slug: string[];
    }
}) => {
  return (
    <div>Docs {params.slug}</div>
  )
}

export default Docs