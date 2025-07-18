import { useEffect, useRef, useState } from "react";
import { fetchCardsByKeywords } from "../../controllers/MtgApiController";
import { useCardSearchContext } from "../../helpers/MTGContext";
import { useDebounce } from "../../hooks/useDebounce";
import "./DropdownComponent.css";

const DropdownComponent = () => {
  const { setSelectedCard } = useCardSearchContext();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);

  const debouncedQuery = useDebounce(query, 300);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = "autocomplete-listbox";

  useEffect(() => {
    if (!isTyping || debouncedQuery.trim().length < 1) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetchCardsByKeywords(debouncedQuery);
        const data = res.data?.data || res.data || [];
        setSuggestions(data);
        setShowDropdown(true);
        setHighlightedIndex(-1);
      } catch (err) {
        console.error(err);
        setSuggestions([]);
        setShowDropdown(false);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery, isTyping]);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  const handleSelect = (name: string) => {
    setSelectedCard(name);
    setQuery(name);
    setIsTyping(false); // sprečava ponovno otvaranje dropdowna nakon odabira
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(suggestions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div ref={containerRef} className="select-wrapper">
      <input
        ref={inputRef}
        type="text"
        className="select-input"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setIsTyping(true); // označava da korisnik aktivno pretražuje
        }}
        placeholder="Search Magic card..."
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={showDropdown}
        aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
        onKeyDown={handleKeyDown}
      />

      {showDropdown && (
        <ul id={listboxId} role="listbox" className="select-dropdown">
          {loading && <li className="select-option loading">Loading...</li>}
          {!loading && suggestions.length === 0 && <li className="select-option empty">No results</li>}
          {!loading &&
            suggestions.map((name, i) => (
              <li
                key={`${name}-${i}`}
                id={`option-${i}`}
                role="option"
                aria-selected={highlightedIndex === i}
                className={`select-option ${highlightedIndex === i ? "highlighted" : ""}`}
                onMouseDown={() => handleSelect(name)}
              >
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
