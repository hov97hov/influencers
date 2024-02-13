<template>
    <div>
        <div class="header" :class="{active : !isShow}">
            <div class="container">
               <div class="header-wrapper">
                   <a href="/">
                       <div class="logo">
                           <img src="/images/header/logo.svg" alt="">
                       </div>
                   </a>
                   <div class="menu" :class="{active : !isShow}">
                       <div class="btn-content">
                           <a v-if="isShow" href="/join">{{ $t('join_influencer') }}</a>
                           <img @click="openMobileMenu" src="/images/icons/accardion.png" alt="">
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
        <div class="mobile-menu" v-if="isMobileMenu">
            <div class="close-menu" @click="closeMobileMenu">
                <img data-v-30b3a980="" src="/images/icons/close-icon.png">
            </div>
            <div class="menu">
                <div class="btn-content">
                    <a class="mb-3" href="/">{{ $t('home') }}</a>
                    <a class="mb-3" href="/search">{{ $t('find_your_influencer') }}</a>
                    <a class="mb-3" href="/join">{{ $t('join_influencer') }}</a>
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
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            lang: 'en',
            isMobileMenu: false,
        }
    },
    props: ['isShow'],
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
        },

        openMobileMenu() {
            this.isMobileMenu = true
            document.querySelector('body').style.overflow = 'hidden'
        },
        closeMobileMenu() {
            this.isMobileMenu = false
            document.querySelector('body').style.overflow = 'inherit'
        },
    }
}
</script>

<style scoped lang="scss">
.mobile-menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #E9EDF0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    .close-menu {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        img {
            width: 16px;
        }
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #languageSwitch {
        width: 70px;
        margin-top: 20px;
        border: 1px solid #000000;
        background: transparent;
        color: #000000;
        font-family: arialAum;
        outline: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
        appearance: none;
        padding-left: 5px;
        padding-right: 5px;
        cursor: pointer;
        padding-bottom: 5px;
        padding-top: 5px;
        option {
            background: #E9EDF0;
            color: #000000;
        }
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
}
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
