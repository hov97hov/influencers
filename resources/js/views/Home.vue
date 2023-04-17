<template>
    <div>
        <Header/>
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
</style>
