<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="menu">
                    <div class="btn-content">
                        <a href="/join">Join as an Influencer</a>
                        <img src="/images/icons/accardion.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped lang="scss">
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
