<template>
<section id="IngredientSearch_box">
    <h3 class="Head2">Find Ur Recipes</h3>
    <p id="wordings">
    Drag and Drop the ingredien to selection box.
    <br />Search Recipes by Ingredients:
    <span class="selection1"></span>
    <span class="selection2"></span>
    <span class="selection3"></span>
    </p>
    <div
    id="recipe-selection"
    :style="bgImg('cuttingboard.png')"
    class="recipe-selection"
    >
        <div v-for="dropbox in 3"
            :id="`selection-`+dropbox"
            :key="`drop-box`+dropbox"
            @dragover.prevent
            @drop.prevent="drop"
            class="igd-dropbox"
        />
        <div class="igd-drop-button-box" ondrop="drop(event)" >
            <button class="igd-Drop-button" type="button" onclick="searchRecipebyIGD();">Find!</button>
            <button class="igd-Drop-button" type="button" onclick="ResetsearchRecipebyIGD();">Reset</button>
        </div>
    </div>

    <div v-for="(foodType, key) in ingredientData"
        :key="`foodType-`+key"
        class="drag-ingredient drag-ingredient-wrap" 
        >
        <div class="drag-ingredient-type">
            <h6 class="Head2-foodtype">{{ foodTypeName(key) }}</h6>
        </div>
        <div class="drag-ingredient-item" >
            <div class="igd-dragbox" 
                v-for="ingredient in foodType"
                :key="`ingredient-`+ingredient.itemID" 
                >
                <div
                    class="igd-icon"
                    draggable="true"
                    @dragstart="dragStart"
                    @dragover.stop
                    :item="ingredient.item"
                    :id="`IGD`+ingredient.itemID"
                    :style="bgImg(FTimageName(ingredient.FTimage))"
                >
                    <p class="igd-icon_font">{{ingredient.item}}</p>
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
            count: 0,
            selection: []
        };
    },
    props: {
        ingredientData: {
            type: Object,
            default: () => ({}),
        }
    },
    methods: {
        foodTypeName(key) {
            return this.foodType[key].item
        },
        FTimageName(FTimage) {
            return FTimage.replace("'image/",'').replace("'",'')
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        dragStart(ev) {
            console.log("ev.target.id",ev.target.id)
            ev.dataTransfer.setData("igdID", ev.target.id);
        },
        drop(ev) {
            /**/
            ev.preventDefault();
            const igdID = ev.dataTransfer.getData("igdID")
            console.log(igdID);
            const igd = document.getElementById(igdID)
            ev.target.appendChild(igd);
             this.selection.push(igd.getAttribute('item'))
            console.log("this.selection",this.selection );
        }
    },
    created: function() {
        console.log(this.ingredientData)
    },
};
</script>

<style lang="scss">
    .igd-icon {
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 40px 40px;
        @extend .flex-align-center;
        p{
            color: white;
            font-size: 0.75rem;
            line-height: 0.8rem;
            word-break: break-all;
        }
    }
    .recipe-selection {
        margin: auto;
        width: calc(100% - 200px ); 
        height: 100px;
        min-width: 600px;
        margin-left: 100px ;
        background-size: 100% 200%;
        @extend .flex-align-center;
        & > div {
            width: 7vw;
            height: 7vw;
            @extend .flex-align-center;
            &.igd-drop-button-box {
                flex-direction: column;
            }
        }
        .igd-dropbox {
            border-radius: 1.5vw;
            border: 0.4vw dotted $primary-g-dark;
            outline: 0.4vw dotted $primary-g-light;
            margin: 2vw;
            outline-offset: 1vw;

        }
    }
    .drag-ingredient {
        @extend .flex;
        &-type {
            margin-left: 100px;
            width: 150px;
            @extend .flex;
            align-items: center;
            text-align: left;
        }
        &-item{
            @extend .flex;
        }
        .igd-dragbox {
                background-color: $primary-g-dark;
                width: 50px;
                height: 50px;
                margin: 5px;
                padding: 5px;
                border-radius: 5px;
            }
    }
</style>