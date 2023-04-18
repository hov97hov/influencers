<template>
    <div>
        <div class="join-form-content">
            <div class="container">
                <div class="content">
                    <div class="title">
                        Register as an influencer
                    </div>
                    <div class="form">
                        <div class="fields">
                            <div>
                                <p>First name *</p>
                                <input type="text" placeholder="Only you can see this name">
                            </div>
                            <div>
                                <p>First name *</p>
                                <input type="text" placeholder="Only you can see this name">
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>Email address *</p>
                                <input type="text" placeholder="myname@example.com">
                            </div>
                            <div>
                                <p>Phone number *</p>
                                <input type="text" placeholder="0XX XX-XX-XX">
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Influencer name *</p>
                                <input type="text" placeholder="This will be shown on your profile">
                            </div>
                        </div>
                        <div class="form-title">Choose your social medias profiles (at least one)</div>
                        <div class="fields">
                            <div>
                                <p>Facebook</p>
                                <input type="text" placeholder="Your Facebook URL">
                            </div>
                            <div>
                                <p>YouTube</p>
                                <input type="text" placeholder="Your YouTube URL">
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>Instagram</p>
                                <input type="text" placeholder="Your Instagram URL">
                            </div>
                            <div>
                                <p>Twitter</p>
                                <input type="text" placeholder="Your Twitter URL">
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>TikTok</p>
                                <input type="text" placeholder="Your TikTok URL">
                            </div>
                            <div>
                                <p>Telegram</p>
                                <input type="text" placeholder="Your Telegram URL">
                            </div>
                        </div>
                        <div class="field">
                          <div>
                              <p>Category *</p>
                              <button class="select-btn" @click.stop="selectCategory = true">
                                  Choose your account category
                                  <img :class="{active : selectCategory}" src="/images/icons/dropdown.svg" alt="">
                              </button>
                              <transition name="slide">
                                  <div class="transition-select" v-click-outside="hideSelectCategory"  v-if="selectCategory">
                                      <div class="item">
                                          <label class="form-checkbox-container">
                                              <span>Personal blog</span>
                                              <input type="checkbox" checked="checked">
                                              <span class="checkmark"></span>
                                          </label>
                                      </div>
                                      <div class="item">
                                          <label class="form-checkbox-container">
                                              <span>Business consultant</span>
                                              <input type="checkbox" checked="checked">
                                              <span class="checkmark"></span>
                                          </label>
                                      </div>
                                      <div class="item">
                                          <label class="form-checkbox-container">
                                              <span>Makeup artist</span>
                                              <input type="checkbox" checked="checked">
                                              <span class="checkmark"></span>
                                          </label>
                                      </div>
                                  </div>
                              </transition>
                          </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Account type *</p>
                                <v-select :options="options"></v-select>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Gender *</p>
                                <v-select :options="options"></v-select>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Birthday *</p>
                                <v-select :options="options"></v-select>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Language *</p>
                                <v-select :options="options"></v-select>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Additional information *</p>
                                <textarea placeholder="Provide additional information about your activity and contact information"></textarea>
                            </div>
                        </div>
                        <div class="btn-content">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import "vue-select/dist/vue-select.css";
import ClickOutside from "vue-click-outside";
export default {
    name: "JoinForm",
    components: {
        Footer
    },
    data() {
        return {
            selectCategory: false,
            options: ["foo", "bar", "baz"]
        }
    },
    methods: {
        hideSelectCategory() {
            this.selectCategory = false
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style lang="scss">
    // select
    .vs__dropdown-toggle .vs__selected {
        font-family: 'Rubik', sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 28px !important;
        line-height: 33px !important;
        letter-spacing: 0.02em !important;
        color: #8B8989 !important;
        padding: 0 !important;
    }
    .vs__dropdown-toggle {
        height: 70px !important;
        background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
        box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
        border-radius: 40px !important;
        padding: 0 40px !important;
        .vs__search {
            visibility: hidden;
        }
        .join-form-content .content > .form .field > div button {
            display: none !important;
        }
    }
    //
    .join-form-content {
        padding-bottom: 150px;
        background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
        .content {
            > .title {
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 64px;
                line-height: 76px;
                letter-spacing: 0.02em;
                background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                margin-bottom: 37px;
            }
            > .form {
                background: #E9EDF0;
                box-shadow: 0 4.05321px 4.05321px rgba(255, 255, 255, 0.25), -2.02661px -2.02661px 10.133px rgba(180, 175, 175, 0.25);
                border-radius: 40.5321px;
                padding: 70px 60px 40px;
                .fields {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 40px;
                    > div {
                        width: calc(100% / 2 - 50px);
                        p {
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            margin-bottom: 10px;
                        }
                        input {
                            width: 100%;
                            border: 0;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            padding: 20px 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                        }
                    }
                }
                .field {
                    margin-bottom: 40px;
                    > div {
                        position: relative;
                        width: 100%;
                        p {
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            margin-bottom: 10px;
                        }
                        input {
                            width: 100%;
                            border: 0;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            padding: 20px 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                        }
                        button {
                            width: 100%;
                            border: 0;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            padding: 20px 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            text-align: left;
                            position: relative;
                            img {
                                position: absolute;
                                right: 32px;
                                top: 32px;
                                transition: 0.25s ease;
                                &.active {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                        .transition-select {
                            background: #FEFDFF;
                            box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;
                            position: absolute;
                            top: 146px;
                            width: 100%;
                            padding: 30px 22px;
                            z-index: 9;
                            .item {
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                &:hover {
                                    background: #E9EDF0;
                                    border-radius: 10px;
                                }
                                .form-checkbox-container {
                                    display: flex;
                                    justify-content: flex-start;
                                    width: 100%;
                                    position: relative;
                                    cursor: pointer;
                                    padding: 14px 30px;
                                    span {
                                        font-family: 'Rubik', sans-serif;
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 18px;
                                        line-height: 21px;
                                        letter-spacing: 0.02em;

                                        color: #595656;
                                    }
                                }

                                /* Hide the browser's default checkbox */
                                .form-checkbox-container input {
                                    position: absolute;
                                    opacity: 0;
                                    cursor: pointer;
                                    height: 0;
                                    width: 0;
                                }

                                /* Create a custom checkbox */
                                .checkmark {
                                    border: 1px solid #595656;
                                    position: absolute;
                                    top: 15px;
                                    right: 15px;
                                    height: 22px;
                                    width: 22px;
                                    background-color: #ffffff;
                                }

                                /* On mouse-over, add a grey background color */
                                .form-checkbox-container:hover input ~ .checkmark {
                                    background-color: #ffffff;
                                }

                                /* When the checkbox is checked, add a blue background */
                                .form-checkbox-container input:checked ~ .checkmark {
                                    background-color: #ffffff;
                                }

                                /* Create the checkmark/indicator (hidden when not checked) */
                                .checkmark:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                }

                                /* Show the checkmark when checked */
                                .form-checkbox-container input:checked ~ .checkmark:after {
                                    display: block;
                                }

                                /* Style the checkmark/indicator */
                                .form-checkbox-container .checkmark:after {
                                    left: 7px;
                                    top: 3px;
                                    width: 5px;
                                    height: 10px;
                                    border: solid #595656;
                                    border-width: 0 2px 2px 0;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                        textarea {
                            width: 100%;
                            padding: 20px 40px;
                            height: 203px;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            border: 0;
                            outline: none;
                            resize: none;
                        }
                    }
                }
                .btn-content {
                    display: flex;
                    justify-content: center;
                    padding-top: 70px;
                    button {
                        width: 268px;
                        height: 66px;
                        background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                        box-shadow: -9.89538px -9.89538px 16.4923px rgba(255, 255, 255, 0.8), 8.24615px 8.24615px 16.4923px rgba(166, 180, 200, 0.7);
                        border-radius: 32.9846px;
                        border: 0;
                        font-family: 'Lato',sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 23px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
                        color: #686868;
                    }
                }
                .form-title {
                    margin: 40px 0;
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 33px;
                    letter-spacing: 0.02em;
                    text-align: center;
                    color: #8B8989;
                }
            }
        }
    }

    @media screen and (max-width: 1280px) {
        .join-form-content {
            padding-bottom: 150px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
            .content {
                > .title {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 64px;
                    line-height: 76px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                    margin-bottom: 33px;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .vs__dropdown-toggle .vs__selected {
            font-family: 'Rubik', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 24px !important;
            line-height: 28px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 65px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 150px;
            padding-left: 40px;
            padding-right: 40px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
            .content {
                > .title {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 56px;
                    line-height: 66px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                    margin-bottom: 33px;
                }
                > .form {
                    background: #E9EDF0;
                    box-shadow: 0 4.05321px 4.05321px rgba(255, 255, 255, 0.25), -2.02661px -2.02661px 10.133px rgba(180, 175, 175, 0.25);
                    border-radius: 40.5321px;
                    padding: 70px 60px 40px;
                    .fields {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 40px;
                        > div {
                            width: calc(100% / 2 - 15px);
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 20px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;

                            }
                        }
                    }
                    .field {
                        margin-bottom: 40px;
                        > div {
                            position: relative;
                            width: 100%;
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 20px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 20px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 32px;
                                    top: 32px;
                                    transition: 0.25s ease;
                                    &.active {
                                        transform: rotate(180deg);
                                    }
                                }
                            }
                            .transition-select {
                                background: #FEFDFF;
                                box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;
                                position: absolute;
                                width: 100%;
                                padding: 30px 22px;
                                .item {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    &:hover {
                                        background: #E9EDF0;
                                        border-radius: 10px;
                                    }
                                    .form-checkbox-container {
                                        display: flex;
                                        justify-content: flex-start;
                                        width: 100%;
                                        position: relative;
                                        cursor: pointer;
                                        padding: 14px 30px;
                                        span {
                                            font-family: 'Rubik', sans-serif;
                                            font-style: normal;
                                            font-weight: 400;
                                            font-size: 18px;
                                            line-height: 21px;
                                            letter-spacing: 0.02em;

                                            color: #595656;
                                        }
                                    }

                                    /* Hide the browser's default checkbox */
                                    .form-checkbox-container input {
                                        position: absolute;
                                        opacity: 0;
                                        cursor: pointer;
                                        height: 0;
                                        width: 0;
                                    }

                                    /* Create a custom checkbox */
                                    .checkmark {
                                        border: 1px solid #595656;
                                        position: absolute;
                                        top: 15px;
                                        right: 15px;
                                        height: 22px;
                                        width: 22px;
                                        background-color: #ffffff;
                                    }

                                    /* On mouse-over, add a grey background color */
                                    .form-checkbox-container:hover input ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* When the checkbox is checked, add a blue background */
                                    .form-checkbox-container input:checked ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* Create the checkmark/indicator (hidden when not checked) */
                                    .checkmark:after {
                                        content: "";
                                        position: absolute;
                                        display: none;
                                    }

                                    /* Show the checkmark when checked */
                                    .form-checkbox-container input:checked ~ .checkmark:after {
                                        display: block;
                                    }

                                    /* Style the checkmark/indicator */
                                    .form-checkbox-container .checkmark:after {
                                        left: 7px;
                                        top: 3px;
                                        width: 5px;
                                        height: 10px;
                                        border: solid #595656;
                                        border-width: 0 2px 2px 0;
                                        transform: rotate(45deg);
                                    }
                                }
                            }
                            textarea {
                                width: 100%;
                                padding: 20px 40px;
                                height: 203px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                border: 0;
                                outline: none;
                                resize: none;
                            }
                        }
                    }
                    .btn-content {
                        display: flex;
                        justify-content: center;
                        padding-top: 70px;
                        button {
                            width: 235px;
                            height: 66px;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -9.89538px -9.89538px 16.4923px rgba(255, 255, 255, 0.8), 8.24615px 8.24615px 16.4923px rgba(166, 180, 200, 0.7);
                            border-radius: 32.9846px;
                            border: 0;
                            font-family: 'Lato',sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #686868;
                        }
                    }
                    .form-title {
                        margin: 40px 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 28px;
                        line-height: 33px;
                        letter-spacing: 0.02em;
                        text-align: center;
                        color: #8B8989;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
        // select
        .vs__dropdown-toggle .vs__selected {
            font-family: 'Rubik', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 24px !important;
            line-height: 28px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 60px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 40px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 150px;
            padding-left: 40px;
            padding-right: 40px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
            .content {
                > .title {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 53px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                    margin-bottom: 46px;
                }
                > .form {
                    background: #E9EDF0;
                    box-shadow: 0 4.05321px 4.05321px rgba(255, 255, 255, 0.25), -2.02661px -2.02661px 10.133px rgba(180, 175, 175, 0.25);
                    border-radius: 40.5321px;
                    padding: 70px 60px 40px;
                    .fields {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        flex-wrap: wrap;
                        margin-bottom: 15px;
                        > div {
                            width: 100%;
                            &:first-child {
                                margin-bottom: 15px;
                            }
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;

                            }
                        }
                    }
                    .field {
                        margin-bottom: 15px;
                        > div {
                            position: relative;
                            width: 100%;
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                display: block;
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 32px;
                                    top: 26px;
                                    transition: 0.25s ease;
                                    &.active {
                                        transform: rotate(180deg);
                                    }
                                }
                            }
                            .transition-select {
                                background: #FEFDFF;
                                box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;
                                position: absolute;
                                top: 107px;
                                width: 100%;
                                padding: 30px 22px;
                                .item {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    &:hover {
                                        background: #E9EDF0;
                                        border-radius: 10px;
                                    }
                                    .form-checkbox-container {
                                        display: flex;
                                        justify-content: flex-start;
                                        width: 100%;
                                        position: relative;
                                        cursor: pointer;
                                        padding: 14px 30px;
                                        span {
                                            font-family: 'Rubik', sans-serif;
                                            font-style: normal;
                                            font-weight: 400;
                                            font-size: 18px;
                                            line-height: 21px;
                                            letter-spacing: 0.02em;

                                            color: #595656;
                                        }
                                    }

                                    /* Hide the browser's default checkbox */
                                    .form-checkbox-container input {
                                        position: absolute;
                                        opacity: 0;
                                        cursor: pointer;
                                        height: 0;
                                        width: 0;
                                    }

                                    /* Create a custom checkbox */
                                    .checkmark {
                                        border: 1px solid #595656;
                                        position: absolute;
                                        top: 15px;
                                        right: 15px;
                                        height: 22px;
                                        width: 22px;
                                        background-color: #ffffff;
                                    }

                                    /* On mouse-over, add a grey background color */
                                    .form-checkbox-container:hover input ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* When the checkbox is checked, add a blue background */
                                    .form-checkbox-container input:checked ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* Create the checkmark/indicator (hidden when not checked) */
                                    .checkmark:after {
                                        content: "";
                                        position: absolute;
                                        display: none;
                                    }

                                    /* Show the checkmark when checked */
                                    .form-checkbox-container input:checked ~ .checkmark:after {
                                        display: block;
                                    }

                                    /* Style the checkmark/indicator */
                                    .form-checkbox-container .checkmark:after {
                                        left: 7px;
                                        top: 3px;
                                        width: 5px;
                                        height: 10px;
                                        border: solid #595656;
                                        border-width: 0 2px 2px 0;
                                        transform: rotate(45deg);
                                    }
                                }
                            }
                            textarea {
                                width: 100%;
                                padding: 23px 25px;
                                height: 203px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 28px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                border: 0;
                                outline: none;
                                resize: none;
                            }
                        }
                    }
                    .btn-content {
                        display: flex;
                        justify-content: flex-start;
                        padding-top: 15px;
                        button {
                            width: 235px;
                            height: 58px;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -9.89538px -9.89538px 16.4923px rgba(255, 255, 255, 0.8), 8.24615px 8.24615px 16.4923px rgba(166, 180, 200, 0.7);
                            border-radius: 32.9846px;
                            border: 0;
                            font-family: 'Lato',sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #686868;
                        }
                    }
                    .form-title {
                        margin: 15px 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
                        text-align: left;
                        color: #8B8989;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 580px) {
        // select
        .vs__dropdown-toggle .vs__selected {
            font-family: 'Rubik', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 20px !important;
            line-height: 24px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 60px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 40px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 150px;
            padding-left: 20px;
            padding-right: 20px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
            .content {
                > .title {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 43px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-align: center;
                    text-fill-color: transparent;
                    margin-bottom: 46px;
                }
                > .form {
                    background: #E9EDF0;
                    box-shadow: 0 4.05321px 4.05321px rgba(255, 255, 255, 0.25), -2.02661px -2.02661px 10.133px rgba(180, 175, 175, 0.25);
                    border-radius: 40.5321px;
                    padding: 35px;
                    .fields {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        flex-wrap: wrap;
                        margin-bottom: 15px;
                        > div {
                            width: 100%;
                            &:first-child {
                                margin-bottom: 15px;
                            }
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                        }
                    }
                    .field {
                        margin-bottom: 15px;
                        > div {
                            position: relative;
                            width: 100%;
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                display: block;
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 46px;
                                    top: 25px;
                                    transition: 0.25s ease;
                                    &.active {
                                        transform: rotate(180deg);
                                    }
                                }
                            }
                            .transition-select {
                                background: #FEFDFF;
                                box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;
                                position: absolute;
                                top: 107px;
                                width: 100%;
                                padding: 30px 22px;
                                .item {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    &:hover {
                                        background: #E9EDF0;
                                        border-radius: 10px;
                                    }
                                    .form-checkbox-container {
                                        display: flex;
                                        justify-content: flex-start;
                                        width: 100%;
                                        position: relative;
                                        cursor: pointer;
                                        padding: 14px 30px;
                                        span {
                                            font-family: 'Rubik', sans-serif;
                                            font-style: normal;
                                            font-weight: 400;
                                            font-size: 18px;
                                            line-height: 21px;
                                            letter-spacing: 0.02em;
                                            color: #595656;
                                        }
                                    }

                                    /* Hide the browser's default checkbox */
                                    .form-checkbox-container input {
                                        position: absolute;
                                        opacity: 0;
                                        cursor: pointer;
                                        height: 0;
                                        width: 0;
                                    }

                                    /* Create a custom checkbox */
                                    .checkmark {
                                        border: 1px solid #595656;
                                        position: absolute;
                                        top: 15px;
                                        right: 15px;
                                        height: 22px;
                                        width: 22px;
                                        background-color: #ffffff;
                                    }

                                    /* On mouse-over, add a grey background color */
                                    .form-checkbox-container:hover input ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* When the checkbox is checked, add a blue background */
                                    .form-checkbox-container input:checked ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* Create the checkmark/indicator (hidden when not checked) */
                                    .checkmark:after {
                                        content: "";
                                        position: absolute;
                                        display: none;
                                    }

                                    /* Show the checkmark when checked */
                                    .form-checkbox-container input:checked ~ .checkmark:after {
                                        display: block;
                                    }

                                    /* Style the checkmark/indicator */
                                    .form-checkbox-container .checkmark:after {
                                        left: 7px;
                                        top: 3px;
                                        width: 5px;
                                        height: 10px;
                                        border: solid #595656;
                                        border-width: 0 2px 2px 0;
                                        transform: rotate(45deg);
                                    }
                                }
                            }
                            textarea {
                                width: 100%;
                                padding: 23px 25px;
                                height: 203px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                border: 0;
                                outline: none;
                                resize: none;
                            }
                        }
                    }
                    .btn-content {
                        display: flex;
                        justify-content: flex-start;
                        padding-top: 10px;
                        button {
                            width: 235px;
                            height: 58px;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -9.89538px -9.89538px 16.4923px rgba(255, 255, 255, 0.8), 8.24615px 8.24615px 16.4923px rgba(166, 180, 200, 0.7);
                            border-radius: 32.9846px;
                            border: 0;
                            font-family: 'Lato',sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #686868;
                        }
                    }
                    .form-title {
                        margin: 15px 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 24px;
                        letter-spacing: 0.02em;
                        text-align: left;
                        color: #8B8989;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        // select
        .vs__dropdown-toggle .vs__selected {
            font-family: 'Rubik', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 16px !important;
            line-height: 18px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 50px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 15px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 150px;
            padding-left: 20px;
            padding-right: 20px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
            .content {
                > .title {
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 43px;
                    letter-spacing: 0.02em;
                    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-align: center;
                    text-fill-color: transparent;
                    margin-bottom: 46px;
                }
                > .form {
                    background: #E9EDF0;
                    box-shadow: 0 4.05321px 4.05321px rgba(255, 255, 255, 0.25), -2.02661px -2.02661px 10.133px rgba(180, 175, 175, 0.25);
                    border-radius: 40.5321px;
                    padding: 35px;
                    .fields {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        flex-wrap: wrap;
                        margin-bottom: 15px;
                        > div {
                            width: 100%;
                            &:first-child {
                                margin-bottom: 15px;
                            }
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 15px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                        }
                    }
                    .field {
                        margin-bottom: 15px;
                        > div {
                            position: relative;
                            width: 100%;
                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                display: block;
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 15px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 15px 15px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 20px;
                                    top: 22px;
                                    transition: 0.25s ease;
                                    &.active {
                                        transform: rotate(180deg);
                                    }
                                }
                            }
                            .transition-select {
                                background: #FEFDFF;
                                box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;
                                position: absolute;
                                top: 107px;
                                width: 100%;
                                padding: 30px 22px;
                                .item {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    &:hover {
                                        background: #E9EDF0;
                                        border-radius: 10px;
                                    }

                                    .form-checkbox-container {
                                        display: flex;
                                        justify-content: flex-start;
                                        width: 100%;
                                        position: relative;
                                        cursor: pointer;
                                        padding: 14px 30px;
                                        span {
                                            font-family: 'Rubik', sans-serif;
                                            font-style: normal;
                                            font-weight: 400;
                                            font-size: 18px;
                                            line-height: 21px;
                                            letter-spacing: 0.02em;
                                            color: #595656;
                                        }
                                    }

                                    /* Hide the browser's default checkbox */
                                    .form-checkbox-container input {
                                        position: absolute;
                                        opacity: 0;
                                        cursor: pointer;
                                        height: 0;
                                        width: 0;
                                    }

                                    /* Create a custom checkbox */
                                    .checkmark {
                                        border: 1px solid #595656;
                                        position: absolute;
                                        top: 15px;
                                        right: 15px;
                                        height: 22px;
                                        width: 22px;
                                        background-color: #ffffff;
                                    }

                                    /* On mouse-over, add a grey background color */
                                    .form-checkbox-container:hover input ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* When the checkbox is checked, add a blue background */
                                    .form-checkbox-container input:checked ~ .checkmark {
                                        background-color: #ffffff;
                                    }

                                    /* Create the checkmark/indicator (hidden when not checked) */
                                    .checkmark:after {
                                        content: "";
                                        position: absolute;
                                        display: none;
                                    }

                                    /* Show the checkmark when checked */
                                    .form-checkbox-container input:checked ~ .checkmark:after {
                                        display: block;
                                    }

                                    /* Style the checkmark/indicator */
                                    .form-checkbox-container .checkmark:after {
                                        left: 7px;
                                        top: 3px;
                                        width: 5px;
                                        height: 10px;
                                        border: solid #595656;
                                        border-width: 0 2px 2px 0;
                                        transform: rotate(45deg);
                                    }
                                }
                            }
                            textarea {
                                width: 100%;
                                padding: 15px 15px;
                                height: 203px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                border: 0;
                                outline: none;
                                resize: none;
                            }
                        }
                    }
                    .btn-content {
                        display: flex;
                        justify-content: flex-start;
                        padding-top: 10px;
                        button {
                            width: 235px;
                            height: 58px;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -9.89538px -9.89538px 16.4923px rgba(255, 255, 255, 0.8), 8.24615px 8.24615px 16.4923px rgba(166, 180, 200, 0.7);
                            border-radius: 32.9846px;
                            border: 0;
                            font-family: 'Lato',sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 18px;
                            letter-spacing: 0.02em;
                            color: #686868;
                        }
                    }
                    .form-title {
                        margin: 15px 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 18px;
                        letter-spacing: 0.02em;
                        text-align: left;
                        color: #8B8989;
                    }
                }
            }
        }
    }
</style>
