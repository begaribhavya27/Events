// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, setActiveId, isActive} = props
  const {id, imageUrl, name, location} = eventItem
  const buttonClassName = isActive ? 'img-btn active' : 'img-btn'

  const onClickImage = () => {
    setActiveId(id)
  }
  return (
    <li className="event-bg">
      <button type="button" className={buttonClassName} onClick={onClickImage}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
