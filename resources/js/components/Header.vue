<template>
    <div>
        <div class="header" :class="{active : !isHome}">
            <div class="container">
               <div class="header-wrapper">
                   <a href="/">
                       <div class="logo">
                           <img src="/images/header/logo.svg" alt="">
                       </div>
                   </a>
                   <div class="menu" :class="{active : !isHome}">
                       <div class="btn-content" v-if="isHome">
                           <a href="/join">{{ $t('join_influencer') }}</a>
                           <img src="/images/icons/accardion.png" alt="">
                       </div>
                       <select
                           v-model="lang"
                           @change="setLocaleLanguage"
                           id="languageSwitch"
                       >
                           <option value="en">ENG</option>
                           <option value="ru">RUS</option>
                           <option value="am">ARM</option>
                       </select>
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
            lang: 'en',
        }
    },
    props: ['isHome'],
    mounted() {
        const storageLang = localStorage.getItem('lang')
        storageLang ? this.lang = storageLang : this.lang = 'en'
        this.$i18n.locale = this.lang

        this.setLocaleLanguage()
    },
    methods: {
        async setLocaleLanguage() {
            this.$i18n.locale = this.lang
            localStorage.setItem('lang', this.lang)

           await axios.post('/locale/set', {
                lang: this.lang
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
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
    &.active {
        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
    }
    .menu {
        margin-top: 35px;
        display: flex;
        justify-content: flex-end;
        &.active {
            margin-top: 0;
        }
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
