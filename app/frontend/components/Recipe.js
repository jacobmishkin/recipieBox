import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import RecipeStyles from './styles/RecipeSyles';
import Title from './styles/Title';
import Underline from './styles/Underline';
import Recipes from './Recipes';

class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  };

  render() {
    const { recipe } = this.props;
    return (
      <RecipeStyles>
        {recipe.image && <img src={recipe.image} alt={recipe.title} />}
        <Title>
          <Link
            href={{
              pathname: '/recipe',
              query: { id: recipe.id },
            }}
          >
            <a>{recipe.title}</a>
          </Link>
        </Title>
        <Underline />
        <p>{recipe.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: { id: recipe.id },
            }}
          >
            <a>Edit</a>
          </Link>
          <button type="button">Add to Menu</button>
          <button type="button">Delete</button>
        </div>
      </RecipeStyles>
    );
  }
}
export default Recipe;
