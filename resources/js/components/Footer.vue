<template>
    <div>
        <div class="footer">
            <div class="container">
                <div class="footer-content">
                   <div class="text">
                       <div>© Copyright 2023 influencerner.am</div>
                       <div>barev@influencerner.am</div>
                   </div>
                    <div class="icon">
                        <ul>
                            <li>
                                <a href="#" class="fb">
                                    <img src="/images/footer/fb.png" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/footer/instagram.png" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/footer/tiktok.png" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/footer/twitter.png" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
    .footer {
        background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 0;
            .text {
                display: flex;
                align-items: center;
                width: 65%;
                justify-content: space-between;
                &:nth-child(1) {
                    font-family: arialAum;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 21px;
                    letter-spacing: 0.02em;
                    color: #434343;
                }
                &:nth-child(2) {
                    font-family: arialAum;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 21px;
                    letter-spacing: 0.02em;
                    color: #434343;
                }
            }
            .icon {
                ul {
                    display: flex;
                    align-items: center;
                    list-style: none;
                    li {
                        &:not(:last-child) {
                            margin-right: 15px;
                        }
                        a {
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            width: 45px;
                            height: 45px;
                            border-radius: 15px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            &.fb {
                                padding-top: 9px;
                                padding-right: 13px;
                                padding-left: 13px;
                                border-radius: 15px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .footer {
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .footer-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 40px 0;
                .text {
                    width: 60%;
                    &:nth-child(1) {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        color: #434343;
                    }
                    &:nth-child(2) {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        color: #434343;
                    }
                }
                .icon {
                    ul {
                        display: flex;
                        align-items: center;
                        list-style: none;
                        li {
                            &:not(:last-child) {
                                margin-right: 15px;
                            }
                            a {
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                width: 37px;
                                height: 37px;
                                border-radius: 15px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                img {
                                    width: 20px;
                                }
                                &.fb {
                                    padding-top: 9px;
                                    padding-right: 13px;
                                    padding-left: 13px;
                                    border-radius: 15px;
                                    img {
                                        width: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .footer {
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .footer-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 40px 0;
                .text {
                    width: 100%;
                    flex-direction: column;
                    align-items: flex-start;
                   > div {
                       font-family: arialAum;
                       font-weight: 400;
                       font-size: 16px;
                       line-height: 21px;
                       letter-spacing: 0.02em;
                       color: #434343;
                       &:first-child {
                           margin-bottom: 5px;
                       }
                   }
                }
                .icon {
                    ul {
                        display: flex;
                        align-items: center;
                        list-style: none;
                        li {
                            &:not(:last-child) {
                                margin-right: 15px;
                            }
                            a {
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                width: 37px;
                                height: 37px;
                                border-radius: 15px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                img {
                                    width: 20px;
                                }
                                &.fb {
                                    padding-top: 9px;
                                    padding-right: 13px;
                                    padding-left: 13px;
                                    border-radius: 15px;
                                    img {
                                        width: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        .footer {
            background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
            .footer-content {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                padding: 40px 0;
                .text {
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    div {
                        font-family: arialAum;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        color: #434343;
                        margin-bottom: 24px;
                    }
                }
                .icon {
                    ul {
                        display: flex;
                        align-items: center;
                        list-style: none;
                        li {
                            &:not(:last-child) {
                                margin-right: 15px;
                            }
                            a {
                                background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                                width: 37px;
                                height: 37px;
                                border-radius: 15px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                img {
                                    width: 20px;
                                }
                                &.fb {
                                    padding-top: 9px;
                                    padding-right: 13px;
                                    padding-left: 13px;
                                    border-radius: 15px;
                                    img {
                                        width: 15px;
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
