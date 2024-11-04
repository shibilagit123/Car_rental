import {Link} from 'react-router-dom'

export const CarCard = ({ car }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={car?.image} alt="car" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car?.title} </h2>
                <p>{car?.price} </p>
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${car?._id}`}>
                        <button className="btn btn-primary">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const CartCards = ({ item, handleRemove }) => {


    return (
        <div className="flex w-full h-32 items-center gap-20 bg-base-300 mb-10 rounded-md ">
            <img src={item?.courseId?.image} alt="cart-item" className="w-24 h-20" />

            <div>
                <h2>{item?.courseId?.title} </h2>
                <h3>{item?.courseId?.price} </h3>
            </div>

            <button className="btn btn-secondary" onClick={()=>handleRemove(item?._id)}>Remove</button>
        </div>
    );
};