import { useState, useEffect } from "react";
import { getCategories } from "../service/api";

function CategoryFilter({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        <select
            className="border rounded-md px-4 py-2 bg-white"
            onChange={(e) => onSelectCategory(e.target.value)}
        >
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat.idCategory} value={cat.strCategory}>
                    {cat.strCategory}
                </option>
            ))}
        </select>
    )
}

export default CategoryFilter;
