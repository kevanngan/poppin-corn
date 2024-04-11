import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const AddToListBtn = ({ size, movieCardObj, isInMyList, handleClick }) => {

    const handleAddToList = () => {
        handleClick(true, movieCardObj);
    }

    const handleRemoveFromList = () => {
        handleClick(false, movieCardObj);
    }

    return (
        <>
            {isInMyList 
                ? (
                    <button className="addToListBtn" onClick={handleRemoveFromList}>
                        <FontAwesomeIcon icon={faSquareMinus} size={size}/>
                    </button>
                    ) 
                : (
                    <button className="addToListBtn" onClick={handleAddToList}>
                        <FontAwesomeIcon icon={faSquarePlus} size={size}/>
                    </button>
                )
            }
        </>
    )
}

export default AddToListBtn;