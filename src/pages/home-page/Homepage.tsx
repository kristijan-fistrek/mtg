
import { useEffect} from "react";
import DropdownComponent from "../../components/dropdown-component/DropdownComponent";
import CardComponent from "../../components/card-component/CardComponent";

const Homepage = () => {

    useEffect(() => {
    }, []);

    return (
        <>
            <div>
                <p>Homepage</p>
            </div>
            <div>
                <DropdownComponent />
            </div>
            <div>
                <CardComponent/>
            </div>
        </>
    )
}

export default Homepage;