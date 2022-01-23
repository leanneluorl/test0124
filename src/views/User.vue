<template>
    <div class="user-box">
        <div class="user-data">
            <p v-for="(data, key) in userData" :key="key">
                {{key}} : {{data}}
            </p>
        </div>
        <button class="logout" @click="clickLogout()"><h3>Log out</h3></button>
    </div>
</template>

<script>
import cookie from 'vue-cookies'
export default {
    data: () => {
        return {

        }
    },
    created: () => {
        // console.log('this.user',this.userData)
        console.log("cookie.get('user-data')",cookie.get('user-data'))
    }
}
</script>

<style lang="scss">
    .user-box {
        .user-data{
            text-align: left;
            margin: 1vw 0;
            
            p {
                height: 2rem;
                padding: 0 25%;
                background: $primary-g;
                &:nth-last-of-type(odd){
                    background-color: rgb(196, 238, 206);
                }
            }
        }
        button.logout {
            cursor: pointer;
            width: 200px;
            height: 50px;
            background-color: $primary-g-dark;
            border-radius: 1vw;
            color: white;
            font-weight: 900;
        }
    }
</style>