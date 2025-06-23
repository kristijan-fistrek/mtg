import { useEffect, useRef, useState } from "react";
import { fetchCardsByKeywords } from "../../controllers/MtgApiController";
import { useCardSearchContext } from "../../helpers/MTGContext";

const DropdownComponent = () => {

    const {
        setSelectedCard
    } = useCardSearchContext();

    const [showDropdown, setShowDropdown] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const fetchDataByKeyword = async () => {
        try {
            const response = await fetchCardsByKeywords(query);
            setSuggestions(response.data.data);
            setShowDropdown(true);
        } catch (err) {
            console.error("Autocomplete error", err);
        }
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(fetchDataByKeyword, 300);
        return () => clearTimeout(delayDebounce);
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="container">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                placeholder="Search Magic card..."
                style={{ width: "100%", padding: "8px" }}
            />
            {showDropdown && suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        border: "1px solid #ccc",
                        backgroundColor: "white",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        zIndex: 1000,
                        maxHeight: "200px",
                        overflowY: "auto"
                    }}
                >
                    {suggestions.map((name) => (
                        <li
                            key={name}
                            onClick={() => setSelectedCard(name)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropdownComponent;