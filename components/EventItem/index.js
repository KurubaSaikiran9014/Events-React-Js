import './index.css'
const EventItem = props => {
  const {item, onClickEvent} = props
  const {imageUrl, name, registrationStatus, location} = item

  const onclickImg = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="item">
      <button type="button" className="item-img" onClick={onclickImg}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="item-head">{name}</p>
      <p className="item-location">{location}</p>
    </li>
  )
}
export default EventItem
