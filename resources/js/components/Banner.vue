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
                            <a href="/search">Find your Influencer</a>
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
                        width: 325px;
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
                        padding: 27px 0;
                        text-align: center;
                        cursor: pointer;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1280px) {
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
                        font-size: 60px;
                        line-height: 71px;
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
                            width: 282px;
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
                            padding: 27px 0;
                            text-align: center;
                            cursor: pointer;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .banner {
            width: 100%;
            margin-top: -110px;
            padding-top: 110px;
            padding-bottom: 110px;
            padding-left: 40px;
            padding-right: 40px;
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
                        font-size: 50px;
                        line-height: 59px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 37px;
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
                            width: 282px;
                            text-align: center;
                            display: block;
                            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
                            box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 40px;
                            font-family: arialAum;
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 28px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            padding: 20px 0;
                            cursor: pointer;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .banner {
            width: 100%;
            margin-top: -110px;
            padding-top: 110px;
            padding-bottom: 110px;
            padding-left: 70px;
            padding-right: 70px;
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .banner-content {
                .banner-text-content {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin-top: 120px;
                    .title {
                        font-family: arialAumBold;
                        font-weight: 700;
                        font-size: 40px;
                        line-height: 47px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 30px;
                    }
                    .small-title {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 60px;
                    }
                    .btn-content {
                        a {
                            width: 282px;
                            display: block;
                            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
                            box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 40px;
                            font-family: arialAum;
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 28px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            padding: 20px 0;
                            cursor: pointer;
                            text-decoration: none;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 580px) {
        .banner {
            width: 100%;
            margin-top: -110px;
            padding-top: 110px;
            padding-bottom: 110px;
            padding-left: 15px;
            padding-right: 15px;
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .banner-content {
                .banner-text-content {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin-top: 120px;
                    .title {
                        font-family: arialAumBold;
                        font-weight: 700;
                        font-size: 36px;
                        line-height: 42px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 25px;
                    }
                    .small-title {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 50px;
                    }
                    .btn-content {
                        a {
                            width: 282px;
                            display: block;
                            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
                            box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 40px;
                            font-family: arialAum;
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 28px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            padding: 20px 0;
                            text-align: center;
                            cursor: pointer;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 390px) {
        .banner {
            width: 100%;
            margin-top: -110px;
            padding-top: 110px;
            padding-bottom: 110px;
            padding-left: 15px;
            padding-right: 15px;
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .banner-content {
                .banner-text-content {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin-top: 120px;
                    .title {
                        font-family: arialAumBold;
                        font-weight: 700;
                        font-size: 29px;
                        line-height: 34px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 20px;
                    }
                    .small-title {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        color: #FEFDFF;
                        margin-bottom: 25px;
                    }
                    .btn-content {
                        a {
                            width: 232px;
                            display: block;
                            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
                            box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 40px;
                            font-family: arialAum;
                            font-weight: 400;
                            font-size: 17.6615px;
                            line-height: 21px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            padding: 15px 0;
                            text-align: center;
                            cursor: pointer;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
</style>
