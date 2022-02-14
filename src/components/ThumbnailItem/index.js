// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateThumbnailActiveId, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailDetails
  const onClickThumbnail = () => {
    updateThumbnailActiveId(id)
  }
  const activeButtonClassName = isActive ? 'active-btn-img' : ''

  return (
    <li>
      <button
        type="button"
        className={`btn ${activeButtonClassName}`}
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
