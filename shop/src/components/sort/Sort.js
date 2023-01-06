import "./Sort.css";

const Sort = (props) => {
  return (
    <div className="sort-box">
      <span>Sort by</span>
      <select
        className="sort-select"
        onChange={(e) => props.sortProducts(e.target.value)}
      >
        <option value="latest">Latest</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </div>
  );
};

export default Sort;
