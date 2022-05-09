import './CategoriesDirectory.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesDirectory = ({categories}) => {
  return (
      <div className="categories-directory">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
        ))};
      </div>
  );

};

export default CategoriesDirectory;
