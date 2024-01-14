import Tags from "../Tag/Tag"
import './MyCard.css'

const MyCard = ({ image, name, description, tagText, tagBg }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Tags text={tagText} bgColor={tagBg} />
            </div>
        </div>
    );
};

export default MyCard