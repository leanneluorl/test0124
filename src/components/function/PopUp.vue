<template>
<div class="pop-wrap">
    <div class="pop">
        <div class="close" @click="clickCloseEdit()"></div>
        <form>
        <table class="input-table">
            <tbody>
            <tr>
                <td>Title:</td>
                <td>
                {{ title }}
                </td>
            </tr>
            <tr>
                <td>Content:</td>
                <td>
                {{ content }}
                </td>
            </tr>
            <tr>
                <td>Enter title:</td>
                <td>
                <input v-model="title" />
                </td>
            </tr>
            <tr>
                <td>Enter content:</td>
                <td>
                <input type="textArea" v-model="content" />
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                <input type="button" value="Reset" @click="resetInput" />
                </td>
            </tr>
            <tr>
                <td>Click to count +1 </td>
                <td>
                <input type="button" value="Click" @click="count(1)" />
                </td>
            </tr>
            </tbody>
        </table>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'pop',
    data:() => {
		return {
			title: "",
            content: ""
		}
	},
    computed: {
        
    },
    methods: {
        clickCloseEdit() {
            this.$emit('close-edit',false)
        },
        count(num) {
            this.$emit('count', num)
        },
        resetInput() {
            this.title = ''
            this.content = ''
        }
    }
};
</script>

<style lang="scss">
    .pop {
        &-wrap {
            width: 100vw;
            height: 100vw;
            background-color: #00000090;
            position: fixed;
            top: 0;
            left: 0;
        }
        width: 300px;
        height: 300px;
        background: $primary-g-dark;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);
        text-align: left;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        padding: 10px 20px;
    }
    .close {
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 10px;
            right: 10px;
            &:after{
                display: inline-block;
                font-weight: 900;
                font-size: 2rem;
                content: "\00d7"; /* This will render the 'X' */
            }
        }

    .input-table {
        margin: auto;
        width: 250px;
        word-wrap: break-word;
        overflow: hidden;
        tr {
            height: 2rem;
            td:nth-of-child(1){
                width: 50px;
                padding-right: 10px;
            }
            td:nth-of-child(2){
                width: 200px;
                padding-right: 10px;
            }
        }
        input {
            width: 150px;
            height: auto;
        }
        input[type="button"] {
            min-width: 80px;
            margin-right: 16px;
        }
    }
    
</style>