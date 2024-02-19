<template>
    <div class="search-result">
        <div class="title">
            <div>{{ $t('search_result') }}</div>
            <div>{{ $t('found') }} {{users.length}} {{ $t('account') }} </div>
        </div>
        <div class="search-result-header">
            <div>
                <span>Influencer</span>
                <span>account</span>
            </div>
            <div>
                <span>Influencer</span>
                <span>category</span>
            </div>
            <div>
                <span>Influencer</span>
                <span>followers</span>
            </div>
<!--            <div>-->
<!--                <span>Influencer</span>-->
<!--                <span>posts</span>-->
<!--            </div>-->
            <div>
                <span>Influencer</span>
                <span>location</span>
            </div>
            <div>
                <span>Influencer</span>
                <span>platform</span>
            </div>
        </div>
        <div class="items">
            <div
                class="item"
                v-for="(user, index) in sortedUsers"
            >
                <div class="left-section">
                    <img :src="user.telegram.image" :alt="user.telegram.full_name">
                    <div>
                        <div class="name">
                            {{user.telegram.full_name}}
                            <img v-if="user.user_detail.account_type" src="/images/icons/done.png" alt="">
                        </div>
                        <div class="sub-name">{{user.telegram.username}}</div>
                    </div>
                </div>
                <div class="center-section">
                    <div class="categories">
                        <span v-for="item in user.categories">{{item.name}}</span> <br>
                    </div>
                    <div>{{ user.telegram.follow }}</div>
<!--                    <div>{{ user.telegram.post_count }}</div>-->
                    <div>{{user.user_detail.language}}</div>
                </div>
                <div class="right-section">
                    <div v-if="user.facebook">
                        <a href="#">
                            <img src="/images/icons/small/facebook.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.youtube">
                        <a :href="user.youtube.profile_url" target="__block">
                            <img src="/images/icons/small/Subtract.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.instagram">
                        <a :href="user.instagram.profile_url" target="__block">
                            <img src="/images/icons/small/Vector.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.twitter">
                        <a :href="user.twitter.profile_url" target="__block">
                            <img src="/images/icons/small/twitter.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.tiktok">
                        <a :href="user.tiktok.profile_url" target="__block">
                            <img src="/images/icons/small/TikTok.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.telegram">
                        <a :href="user.telegram.profile_url" target="__block">
                            <img src="/images/icons/small/telegram.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-mobile">
            <div
                class="item"
                v-for="(user, index) in sortedUsers"
            >
                <div class="left-section">
                    <img :src="user.telegram.image" :alt="user.telegram.full_name">
                    <div>
                        <div class="name">{{user.telegram.full_name}}
                            <img v-if="user.user_detail.account_type" src="/images/icons/done.png" alt="">
                        </div>
                        <div class="sub-name">{{user.telegram.username}}</div>
                    </div>
                </div>
                <div class="right-section">
                    <div v-if="user.facebook">
                        <a href="#">
                            <img src="/images/icons/small/facebook.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.youtube">
                        <a :href="user.youtube.profile_url" target="__block">
                            <img src="/images/icons/small/Subtract.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.instagram">
                        <a :href="user.instagram.profile_url" target="__block">
                            <img src="/images/icons/small/Vector.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.twitter">
                        <a :href="user.twitter.profile_url" target="__block">
                            <img src="/images/icons/small/twitter.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.tiktok">
                        <a :href="user.tiktok.profile_url" target="__block">
                            <img src="/images/icons/small/TikTok.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.telegram">
                        <a :href="user.telegram.profile_url" target="__block">
                            <img src="/images/icons/small/telegram.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="center-section">
                    <div>
                        <img src="/images/icons/Icon-color.png" alt="">
                       <div class="category-list">
                           <span v-for="item in user.categories">{{item.name}}</span>
                       </div>
                    </div>
                    <div><img src="/images/icons/Icon-color2.png" alt=""><span>{{ user.user_detail.language }}</span></div>
                    <div><img src="/images/icons/Icon-color3.png" alt=""><span>{{ user.telegram.follow }}</span></div>
                    <div><img src="/images/icons/Icon-color5.png" alt=""><span>{{ user.telegram.post_count }}</span></div>
                </div>
                <div class="icon-section">
                    <div v-if="user.facebook">
                        <a href="#">
                            <img src="/images/icons/small/facebook.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.youtube">
                        <a :href="user.youtube.profile_url" target="__block">
                            <img src="/images/icons/small/fb-small.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.instagram">
                        <a :href="user.instagram.profile_url" target="__block">
                            <img src="/images/icons/small/Vector-small.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.twitter">
                        <a :href="user.twitter.profile_url" target="__block">
                            <img src="/images/icons/small/twitter-small.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.tiktok">
                        <a :href="user.tiktok.profile_url" target="__block">
                            <img src="/images/icons/small/tiktok-small.png" alt="">
                        </a>
                    </div>
                    <div v-if="user.telegram">
                        <a :href="user.telegram.profile_url" target="__block">
                            <div><img src="/images/icons/small/telegram-small.png" alt=""></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchResultTelegramComponent",
    props: ['users', 'platform'],
    computed: {
        sortedUsers() {
            return this.users.slice().sort((a, b) => b.telegram.follow - a.telegram.follow);
        }
    }
}

</script>

<style scoped lang="scss">
    .category-list {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .search-result {
        > .title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                &:first-child {
                    font-family: 'Rubik', sans-serif;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 43px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }

                &:last-child {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 21px;
                    letter-spacing: 0.02em;
                    color: #686868;
                }
            }
        }

        > .search-result-header {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;

            > div {
                text-align: center;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 19px;
                line-height: 23px;
                letter-spacing: 0.02em;
                color: #000000;

                &:nth-child(1) {
                    width: 40%;
                }

                &:nth-child(2) {
                    width: 20%;
                    text-align: left;
                }

                &:nth-child(3) {
                    width: 15%;
                }

                &:nth-child(4) {
                    width: 15%;
                }

                &:nth-child(5) {
                    width: 15%;
                }

                &:nth-child(6) {
                    width: 20%;
                }

                display: flex;
                flex-direction: column;
            }
        }

        > .items-mobile {
            display: none
        }

        > .items {
            margin-top: 85px;

            .item {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &:not(:last-child) {
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                    border-bottom: 1.05182px solid #88898A;
                }

                > div {
                    &:nth-child(1) {
                        width: 30%;
                    }

                    &:nth-child(2) {
                        width: 43%;
                        margin: 0 80px;
                    }

                    &:nth-child(3) {
                        width: 15%;
                    }
                }

                .left-section {
                    display: flex;
                    align-items: center;

                    > img {
                        width: 120px;
                        height: 120px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin-right: 15px;

                    }

                    .name {
                        display: flex;
                        align-items: center;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 19px;
                        line-height: 23px;
                        letter-spacing: 0.02em;
                        color: #595656;
                        margin-bottom: 10px;

                        img {
                            margin-left: 10px;
                        }
                    }

                    .sub-name {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 17px;
                        line-height: 20px;
                        letter-spacing: 0.02em;
                        color: #686868;
                        word-break: break-word;
                    }
                }

                .center-section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    > div {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 19px;
                        line-height: 23px;
                        letter-spacing: 0.02em;
                        color: #686868;
                        &.categories {
                            display: flex;
                            flex-direction: column;
                            span {
                                display: block;
                                margin: 0 0 10px;
                            }
                        }
                    }
                }

                .right-section {
                    display: flex;
                    align-items: center;

                    > div {
                        width: 22px;
                        height: 21px;
                        background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                        box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        &:not(:last-child) {
                            margin-right: 5px;
                        }

                        &:nth-child(1) {
                            img {
                                margin-top: 2px;
                            }
                        }
                    }
                }
            }
        }
    }


    @media screen and (max-width: 768px) {
        .search-result {
            > .title {
                display: flex;
                justify-content: space-between;
                align-items: center;

                div {
                    &:first-child {
                        font-family: 'Rubik', sans-serif;
                        font-weight: 700;
                        font-size: 36px;
                        line-height: 43px;
                        letter-spacing: 0.02em;
                        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                    }

                    &:last-child {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        color: #686868;
                    }
                }
            }

            > .search-result-header {
                display: none;
            }

            > .items {
                display: none;
            }

            > .items-mobile {
                display: block;
                margin-top: 35px;

                .item {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-bottom: 50px;
                    padding-bottom: 50px;

                    &:not(:last-child) {
                        border-bottom: 0.912564px solid #88898A;
                    }

                    > div {
                        &:nth-child(1) {
                            width: 60%;
                            display: flex;
                            align-items: center;

                            > img {
                                margin-right: 32px;
                                width: 120px;
                                height: 120px;
                                border-radius: 50%;
                                object-fit: cover;
                            }

                            .name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;

                                > img {
                                    margin-left: 15px;
                                }
                            }

                            .sub-name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14.9265px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #686868;
                            }
                        }

                        &:nth-child(2) {
                            width: 40%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                            > div {
                                width: 22px;
                                height: 21px;
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);
                                border-radius: 8px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;

                                &:not(:last-child) {
                                    margin-right: 5px;
                                }

                                &:nth-child(1) {
                                    img {
                                        margin-top: 2px;
                                    }
                                }
                            }
                        }

                        &:nth-child(3) {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-top: 10px;
                            padding-left: 113px;

                            div {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #686868;
                                display: flex;
                                align-items: center;

                                img {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &:nth-child(4) {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 580px) {
        .search-result {
            > .title {
                display: flex;
                justify-content: space-between;
                align-items: center;

                div {
                    &:first-child {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
                        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                    }

                    &:last-child {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 17px;
                        letter-spacing: 0.02em;
                        color: #686868;
                    }
                }
            }

            > .search-result-header {
                display: none;
            }

            > .items {
                display: none;
            }

            > .items-mobile {
                display: block;
                margin-top: 35px;

                .item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 50px;
                    padding-bottom: 50px;

                    &:not(:last-child) {
                        border-bottom: 0.912564px solid #88898A;
                    }

                    > div {
                        &:nth-child(1) {
                            display: flex;
                            align-items: center;
                            width: 55%;

                            > img {
                                margin-right: 20px;
                            }

                            .name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;

                                > img {
                                    margin-left: 15px;
                                }
                            }

                            .sub-name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14.9265px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #686868;
                            }
                        }

                        &:nth-child(2) {
                            width: 40%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                            > div {
                                width: 22px;
                                height: 21px;
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);
                                border-radius: 8px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;

                                &:not(:last-child) {
                                    margin-right: 5px;
                                }

                                &:nth-child(1) {
                                    img {
                                        margin-top: 2px;
                                    }
                                }
                            }
                        }

                        &:nth-child(3) {
                            display: flex;
                            align-items: flex-start;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top: 10px;
                            padding-left: 75px;
                            .category-list {
                                width: 100% !important;
                                align-items: flex-start !important;
                            }
                            div {
                                &:nth-child(1) {
                                    width: 60%;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }
                                &:nth-child(2) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }
                                &:nth-child(3) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }

                                &:nth-child(4) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }

                                width: auto;
                                display: flex;
                                flex-wrap: wrap;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #686868;
                                align-items: flex-start;
                                margin-bottom: 20px;

                                img {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &:nth-child(4) {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        .search-result {
            > .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;

                div {
                    &:first-child {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
                        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                        margin-bottom: 10px;
                    }

                    &:last-child {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 17px;
                        letter-spacing: 0.02em;
                        color: #686868;
                    }
                }
            }

            > .search-result-header {
                display: none;
            }

            > .items {
                display: none;
            }

            > .items-mobile {
                display: block;
                margin-top: 35px;

                .item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 50px;
                    padding-bottom: 50px;

                    &:not(:last-child) {
                        border-bottom: 0.912564px solid #88898A;
                    }

                    > div {
                        &:nth-child(1) {
                            display: flex;
                            align-items: center;
                            width: 100%;

                            > img {
                                margin-right: 20px;
                            }

                            .name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;

                                > img {
                                    margin-left: 15px;
                                }
                            }

                            .sub-name {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14.9265px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #686868;
                            }
                        }

                        &:nth-child(2) {
                            display: none;
                        }

                        &:nth-child(3) {
                            display: flex;
                            align-items: flex-start;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top: 10px;
                            padding-left: 75px;
                            .category-list {
                                width: 100% !important;
                                align-items: flex-start !important;
                            }
                            div {
                                &:nth-child(1) {
                                    width: 60%;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }
                                &:nth-child(2) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }
                                &:nth-child(3) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }

                                &:nth-child(4) {
                                    width: 30%;
                                    padding-left: 0;
                                    display: flex;
                                    align-items: center;
                                    flex-wrap: nowrap;
                                }

                                width: auto;
                                display: flex;
                                flex-wrap: wrap;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #686868;
                                align-items: flex-start;
                                margin-bottom: 20px;

                                img {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &:nth-child(4) {
                            display: flex;
                            padding-left: 30px;

                            > div {
                                width: 34px;
                                height: 33px;
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);
                                border-radius: 8px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;

                                &:not(:last-child) {
                                    margin-right: 8px;
                                }

                                &:first-child {
                                    img {
                                        margin-top: 2px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
