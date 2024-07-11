import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemtext, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemtext) {
      alert("You cannot add  empty item!");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemtext);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemtext}
        type="text"
        placeholder="Toothbrush..."
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
      />
      <Button text="Add to list" />
    </form>
  );
}
