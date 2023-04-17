<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="menu">
                    <div class="btn-content">
                        <router-link to="/join">Join as an Influencer</router-link>
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
        }
    }
}
</style>
