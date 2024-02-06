<template>
    <div>
        <div class="header">
            <div class="container">
               <div class="header-wrapper">
                   <div class="logo">
                       <img src="/images/header/logo.svg" alt="">
                   </div>
                   <div class="menu">
                       <div class="btn-content">
                           <a href="/join">Join as an Influencer</a>
                           <img src="/images/icons/accardion.png" alt="">
                       </div>
                       <select id="languageSwitch">
                           <option value="">ENG</option>
                           <option value="">RUS</option>
                           <option value="">ARM</option>
                       </select>
<!--                       <div>-->
<!--                           <button @click="loginWithFacebook">Login with Facebook</button>-->
<!--                           <button @click="loginWithTikTok">Login with TikTok</button>-->
<!--                           <button @click="loginWithInstagram">Login with Instagram</button>-->
<!--                           <button @click="loginWithTwitter">Login with Twitter</button>-->
<!--                           <button @click="loginWithYoutube">Login with Youtube</button>-->
<!--                       </div>-->
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {

        }
    },
    created() {
        console.log(this.$page.props.data, '1111')
    },
    methods: {
        loginWithFacebook() {
            window.location.href = '/login/facebook';
        },
        loginWithTikTok() {
            window.location.href = '/login/tiktok';
        },
        loginWithInstagram() {
            window.location.href = '/login/instagram';
        },
        loginWithTwitter() {
            window.location.href = '/login/twitter';
        },
        loginWithYoutube() {
            window.location.href = '/login/google';
        }
    }
}
</script>

<style scoped lang="scss">
.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    background: transparent;
    width: 100%;
    .menu {
        margin-top: 35px;
        display: flex;
        justify-content: flex-end;
        .btn-content {
            a {
                display: block;
                background: #FFFFFF;
                border-radius: 40px;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                text-align: center;
                letter-spacing: 0.02em;
                color: #151515;
                padding: 12px 38px;
                cursor: pointer;
                text-decoration: none;
            }
            img {
                display: none;
            }
        }
        #languageSwitch {
            background: transparent;
            color: #ffffff;
            font-family: arialAum;
            border: none;
            outline: 0;
            margin-left: 13px;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.02em;
            text-align: center;
            appearance: none;
            padding-left: 5px;
            padding-right: 5px;
            cursor: pointer;
            option {
                background: #E9EDF0;
                color: #000000;
            }

        }
    }
}

@media screen and (max-width: 580px) {
    .header {
        background: transparent;
        width: 100%;
        .menu {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
            #languageSwitch {
                display: none;
            }
            .btn-content {
                a {
                    display: none;
                    background: #FFFFFF;
                    border-radius: 40px;
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    letter-spacing: 0.02em;
                    color: #151515;
                    padding: 12px 38px;
                    cursor: pointer;
                    text-decoration: none;
                }
                img {
                    display: block;
                }
            }
        }
    }
}
</style>
