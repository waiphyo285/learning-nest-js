import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipes.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
    private readonly recipes: [Recipe] = [
        {
            id: "1",
            title: "#001",
            description: "HI 001",
            creationDate: new Date(),
            ingredient: []
        },
    ];

    async create(data: NewRecipeInput): Promise<Recipe> {
        const id = this.recipes.length + 1;
        const createObj = {
            id: "" + id,
            title: data.title,
            description: data.description,
            ingredient: data.ingredient,
            creationDate: new Date(),
        }

        this.recipes.push(createObj);

        return createObj;
    }

    async findOneById(id: string): Promise<Recipe> {
        return this.recipes.find(recipe => recipe.id === id);
    }

    async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
        return this.recipes;
    }

    async delete(id: string): Promise<boolean> {
        return true;
    }
}
