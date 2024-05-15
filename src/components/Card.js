const Card = ({ prop }) => {
  const { name, desc, img } = prop
  return (
    <div className='card'>
      <img
        className='card__img'
        src={
          img !== undefined
            ? require(`../assets/images/${img}1000x500.png`)
            : require(`../assets/images/overlay6-small.png`)
        }
        alt=''
      />
      <h1 className='card__name'>{name}</h1>
      <h2 className='card__desc'>Description :</h2>
      <p className='card__desc-text'>{desc}</p>
      <button className='card__btn'>See More!</button>
    </div>
  )
}

export default Card
