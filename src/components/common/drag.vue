<template>
<section id="IngredientSearch_box">
    <h2 class="Head2">Find Ur Recipes</h2>
    <p id="wordings">
    Drag and Drop the ingredien to selection box.
    <br />Search Recipes by Ingredients:
    <span class="selection1"></span>
    <span class="selection2"></span>
    <span class="selection3"></span>
    </p>
    <div
    id="RCP-selection"
    style="background-image: url('image/Cuttingboard-01.png');"
    class="cat_box"
    >
    <div class="IGD-drop-button-box" ondrop="drop(event)" ondragover="allowDrop(event)">
        <button class="IGD-Drop-button" type="button" onclick="searchRecipebyIGD();">Find!</button>
        <button class="IGD-Drop-button" type="button" onclick="ResetsearchRecipebyIGD();">Reset</button>
    </div>
    <div class="IGD-dropbox" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <div class="IGD-dropbox" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <div class="IGD-dropbox" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    </div>

    <div id="drag-ingredient drag-ingredient-wrap">
    <div class="drag-ingredient-type">
        <p class="Head2-foodtype">Meat and Poultry</p>
    </div>
    <div id="FT1" class="drag-ingredient-item">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD1"
            style="background-image: url('image/foodtype_Meat.png');"
        >
            <p class="IGD-Icon_font">Pork Loin</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD2"
            style="background-image: url('image/foodtype_Meat.png');"
        >
            <p class="IGD-Icon_font">Beef Steak</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD4"
            style="background-image: url('image/foodtype_Meat.png');"
        >
            <p class="IGD-Icon_font">Pork Minced</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD5"
            style="background-image: url('image/foodtype_Meat.png');"
        >
            <p class="IGD-Icon_font">Beef Minced</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD16"
            style="background-image: url('image/foodtype_Meat.png');"
        >
            <p class="IGD-Icon_font">Pork belly</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Vegetable</p>
    </div>
    <div id="FT2" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD3"
            style="background-image: url('image/foodtype_Vege.png');"
        >
            <p class="IGD-Icon_font">Carrot</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD6"
            style="background-image: url('image/foodtype_Vege.png');"
        >
            <p class="IGD-Icon_font">Tomato</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD9"
            style="background-image: url('image/foodtype_Vege.png');"
        >
            <p class="IGD-Icon_font">Onion</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD14"
            style="background-image: url('image/foodtype_Vege.png');"
        >
            <p class="IGD-Icon_font">Spring Onion</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD18"
            style="background-image: url('image/foodtype_Vege.png');"
        >
            <p class="IGD-Icon_font">Garlic minced</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Seafood</p>
    </div>
    <div id="FT3" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD10"
            style="background-image: url('image/foodtype_Seafood.png');"
        >
            <p class="IGD-Icon_font">Raw Salmon</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD12"
            style="background-image: url('image/foodtype_Seafood.png');"
        >
            <p class="IGD-Icon_font">Raw Oyster</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Condiment</p>
    </div>
    <div id="FT4" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD7"
            style="background-image: url('image/foodtype_Condiment.png');"
        >
            <p class="IGD-Icon_font">Tomato Paste</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD11"
            style="background-image: url('image/foodtype_Condiment.png');"
        >
            <p class="IGD-Icon_font">Soy Sauce</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD19"
            style="background-image: url('image/foodtype_Condiment.png');"
        >
            <p class="IGD-Icon_font">Rock sugar</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD20"
            style="background-image: url('image/foodtype_Condiment.png');"
        >
            <p class="IGD-Icon_font">Five spice powder</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD23"
            style="background-image: url('image/foodtype_Condiment.png');"
        >
            <p class="IGD-Icon_font">Dark soy sauce</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Fruit</p>
    </div>
    <div id="FT5" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD8"
            style="background-image: url('image/foodtype_Apple.png');"
        >
            <p class="IGD-Icon_font">Italian Seasoning</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD13"
            style="background-image: url('image/foodtype_Apple.png');"
        >
            <p class="IGD-Icon_font">Apple</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Grains, Beans and Nuts</p>
    </div>
    <div id="FT6" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD29"
            style="background-image: url('image/foodtype_Grain.png');"
        >
            <p class="IGD-Icon_font">Spaghetti</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD30"
            style="background-image: url('image/foodtype_Grain.png');"
        >
            <p class="IGD-Icon_font">Rice</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Eggs</p>
    </div>
    <div id="FT8" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD15"
            style="background-image: url('image/foodtype_Egg.png');"
        >
            <p class="IGD-Icon_font">Egg</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Liquid</p>
    </div>
    <div id="FT9" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD21"
            style="background-image: url('image/foodtype_Liquid.png');"
        >
            <p class="IGD-Icon_font">Water</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD22"
            style="background-image: url('image/foodtype_Liquid.png');"
        >
            <p class="IGD-Icon_font">Rice wine</p>
        </div>
        </div>
    </div>
    <div class="drag-L-type">
        <p class="Head2-foodtype">Powder</p>
    </div>
    <div id="FT11" class="drag-R-type">
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD24"
            style="background-image: url('image/foodtype_Powder.png');"
        >
            <p class="IGD-Icon_font">Potato Starch</p>
        </div>
        </div>
        <div class="IGD-dragbox">
        <div
            class="IGD-Icon"
            draggable="true"
            ondragstart="drag(event)"
            id="IGD25"
            style="background-image: url('image/foodtype_Powder.png');"
        >
            <p class="IGD-Icon_font">Tapioca Flour</p>
        </div>
        </div>
    </div>
    </div>
</section>

</template>

<script>
export default {
    data() {
        return {
        items: [
            {
            id: 0,
            title: "Item A",
            list: 1
            },
            {
            id: 1,
            title: "Item B",
            list: 1
            },
            {
            id: 2,
            title: "Item C",
            list: 2
            }
        ]
        };
    },
    props: {
        ingredient: {
            tyrp: Object,
            default: {}
        }
    }
};
</script>

<style>
</style>