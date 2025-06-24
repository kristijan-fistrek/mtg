
import { useEffect} from "react";
import DropdownComponent from "../../components/dropdown-component/DropdownComponent";

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
        </>
    )
}

export default Homepage;