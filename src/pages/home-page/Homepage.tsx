
import { useEffect} from "react";
import { fetchCardsByKeywords, fetchCardsByName } from "../../controllers/MtgApiController";

const Homepage = () => {

    const fetchData = async () => {
         try {
            const data = await fetchCardsByKeywords("Ab");
            console.log("Ispis podataka: ")
            console.log(data);
         } catch (error) {
            console.log(error);
         }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                <p>Homepage</p>
            </div>
        </>
    )
}

export default Homepage;