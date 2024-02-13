<template>
    <div>
        <Header :is-show="true"/>
        <Banner/>
        <div class="home-page-content">
            <div class="container">
                <div class="home-page-items">
                    <div class="item">
                        <div class="text-content">
                            <div class="type">INFLUENCER DISCOVERY</div>
                            <div class="title">Work with the right influencers</div>
                            <div class="description">
                                Welcome to our platform, where you can find the perfect social media influencers for your brand. Our advanced filtering system allows you to narrow down your search to influencers who fit your specific needs and criteria. From demographics to engagement rates, we've got you covered.
                            </div>
                        </div>
                        <div class="img-content">

                        </div>
                    </div>
                    <div class="item reverse">
                        <div class="text-content">
                            <div class="type">Relationship management</div>
                            <div class="title">Manage your influencers in one place</div>
                            <div class="description">
                                Say goodbye to the hassle of searching for influencers manually. Our platform is designed to make the process as easy and efficient as possible. With just a few clicks, you can discover the most relevant influencers in your niche and reach out to them directly.
                            </div>
                        </div>
                        <div class="img-content">

                        </div>
                    </div>
                    <div class="item">
                        <div class="text-content">
                            <div class="type">Automated campaigns</div>
                            <div class="title">Streamline your campaigns</div>
                            <div class="description">
                                Join the thousands of businesses who have already found success with our platform. Whether you're a small startup or a large corporation, our influencer marketing solutions can help you reach your target audience and achieve your marketing goals. Sign up now and start connecting with the right influencers for your brand!
                            </div>
                        </div>
                        <div class="img-content">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Welcome",
    components: {
        Banner,
        Header,
        Footer,
    }
}
</script>

<style scoped lang="scss">
    .home-page-content {
        margin: 150px 0;
        .home-page-items {
            > div {
                &:not(:last-child) {
                    margin-bottom: 150px;
                }
            }
            .item {
                display: flex;
                justify-content: space-between;
                &.reverse {
                    flex-direction: row-reverse;
                    > div {
                        width: calc(100% / 2 - 25px);
                    }
                }
                > div {
                    width: calc(100% / 2 - 70px);
                    &.text-content {
                        .type {
                            font-family: arialAum;
                            font-weight: 700;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #9C99EF;
                            margin-bottom: 20px;
                        }
                        .title {
                            font-family: arialAum;
                            font-weight: 700;
                            font-size: 48px;
                            line-height: 57px;
                            letter-spacing: 0.02em;
                            color: #595656;
                            margin-bottom: 20px;
                        }
                        .description {
                            font-family: arialAum;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 21px;
                            letter-spacing: 0.02em;
                            color: #595656;
                        }
                    }
                    &.img-content {
                        background: #dddddd;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .container {
            width: 100%;
            padding: 0;
        }
        .home-page-content {
            margin: 130px 0;
            .home-page-items {
                > div {
                    &:not(:last-child) {
                        margin-bottom: 130px;
                    }
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    &.reverse {
                        flex-direction: row-reverse;
                        > div {
                            width: calc(100% / 2 - 25px);
                        }
                    }
                    > div {
                        width: calc(100% / 2 - 80px);
                        &.text-content {
                            padding: 0 40px;
                            .type {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                margin-bottom: 25px;
                            }
                            .title {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 40px;
                                line-height: 47px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin-bottom: 20px;
                            }
                            .description {
                                font-family: arialAum;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }
                        &.img-content {
                            background: #dddddd;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
        .container {
            width: 100%;
            padding: 0;
        }
        .home-page-content {
            margin: 130px 0;
            .home-page-items {
                > div {
                    &:not(:last-child) {
                        margin-bottom: 130px;
                    }
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    &.reverse {
                        flex-direction: row-reverse;
                        > div {
                            width: calc(100% / 2 - 25px);
                        }
                    }
                    > div {
                        width: calc(100% / 2 - 70px);
                        &.text-content {
                            padding: 0 20px;
                            .type {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                margin-bottom: 25px;
                            }
                            .title {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 40px;
                                line-height: 47px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin-bottom: 20px;
                            }
                            .description {
                                font-family: arialAum;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }
                        &.img-content {
                            background: #dddddd;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .container {
            width: 100%;
            padding: 0;
        }
        .home-page-content {
            margin: 130px 0;
            .home-page-items {
                > div {
                    &:not(:last-child) {
                        margin-bottom: 60px;
                    }
                }
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &.reverse {
                        flex-direction: column;
                        > div {
                            width: 100%;
                        }
                    }
                    > div {
                        width: 100%;
                        &.text-content {
                            padding: 0 40px;
                            .type {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                margin-bottom: 25px;
                            }
                            .title {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 40px;
                                line-height: 47px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin-bottom: 25px;
                            }
                            .description {
                                font-family: arialAum;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }
                        &.img-content {
                            width: 326px;
                            height: 173px;
                            background: #dddddd;
                            margin-top: 25px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 580px) {
        .container {
            width: 100%;
            padding: 0;
        }
        .home-page-content {
            margin: 130px 0;
            .home-page-items {
                > div {
                    &:not(:last-child) {
                        margin-bottom: 50px;
                    }
                }
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &.reverse {
                        flex-direction: column;
                        > div {
                            width: 100%;
                        }
                    }
                    > div {
                        width: 100%;
                        &.text-content {
                            padding: 0 60px;
                            .type {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                margin-bottom: 25px;
                            }
                            .title {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 40px;
                                line-height: 47px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin-bottom: 25px;
                            }
                            .description {
                                font-family: arialAum;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }
                        &.img-content {
                            width: 326px;
                            height: 173px;
                            background: #dddddd;
                            margin-top: 25px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 390px) {
        .container {
            width: 100%;
            padding: 0;
        }
        .home-page-content {
            margin: 130px 0;
            .home-page-items {
                > div {
                    &:not(:last-child) {
                        margin-bottom: 50px;
                    }
                }
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &.reverse {
                        flex-direction: column;
                        > div {
                            width: 100%;
                        }
                    }
                    > div {
                        width: 100%;
                        &.text-content {
                            padding: 0 15px;
                            .type {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 17.5763px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                margin-bottom: 15px;
                            }
                            .title {
                                font-family: arialAum;
                                font-weight: 700;
                                font-size: 30.1308px;
                                line-height: 35px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin-bottom: 15px;
                            }
                            .description {
                                font-family: arialAum;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }
                        &.img-content {
                            width: 100%;
                            height: 215px;
                            background: #dddddd;
                            margin-top: 25px;
                        }
                    }
                }
            }
        }
    }
</style>
