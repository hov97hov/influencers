<template>
    <div>
        <div class="banner">
            <div class="container">
                <div class="banner-content">
                    <div class="banner-text-content">
                        <div class="title">
                            Find Armenian influencers for your brand faster and easier
                        </div>
                        <div class="small-title">
                            Empower your Influencer Marketing
                        </div>
                        <div class="btn-content">
                            <router-link to="/search">Find your Influencer</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped lang="scss">
    .banner {
        width: 100%;
        margin-top: -110px;
        padding-top: 110px;
        padding-bottom: 110px;
        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
        .banner-content {
            .banner-text-content {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 138px;
                .title {
                    font-family: arialAumBold;
                    font-weight: 700;
                    font-size: 64px;
                    line-height: 75px;
                    text-align: center;
                    letter-spacing: 0.02em;
                    color: #FEFDFF;
                    margin-bottom: 40px;
                }
                .small-title {
                    font-family: arialAum;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    letter-spacing: 0.02em;
                    color: #FEFDFF;
                    margin-bottom: 70px;
                }
                .btn-content {
                    a {
                        display: block;
                        background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
                        box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                        border-radius: 40px;
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 28px;
                        line-height: 33px;
                        letter-spacing: 0.02em;
                        color: #686868;
                        padding: 27px 40px;
                        cursor: pointer;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
