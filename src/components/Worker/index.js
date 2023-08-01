import "./Worker.css";

const Worker = ({ name, image, position, primaryColor }) => {
    return (
        <div className="worker">
            <div className="header" style={{ backgroundColor: primaryColor }}>
                <img src={image} alt={name} />
            </div>

            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
};

export default Worker;
