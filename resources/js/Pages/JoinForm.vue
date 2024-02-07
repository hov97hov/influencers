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
                                <input
                                    v-model="defaultData.first_name"
                                    type="text"
                                    placeholder="Only you can see this name"
                                    @input="checkErrors('defaultErrorData', 'first_name')"
                                >
                                <span class="field-error-message">{{errors.defaultErrorData.first_name ? errors.defaultErrorData.first_name[0] : ''}}</span>
                            </div>
                            <div>
                                <p>First name *</p>
                                <input
                                    v-model="defaultData.last_name"
                                    type="text"
                                    placeholder="Only you can see this name"
                                    @input="checkErrors('defaultErrorData', 'last_name')"
                                >
                                <span class="field-error-message">{{errors.defaultErrorData.last_name ? errors.defaultErrorData.last_name[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>Email address *</p>
                                <input
                                    v-model="defaultData.email"
                                    type="text"
                                    placeholder="myname@example.com"
                                    @input="checkErrors('defaultErrorData', 'email')"
                                >
                                <span class="field-error-message">{{errors.defaultErrorData.email ? errors.defaultErrorData.email[0] : ''}}</span>
                            </div>
                            <div>
                                <p>Phone number *</p>
                                <input
                                    v-model="defaultData.phone"
                                    type="text"
                                    placeholder="0XX XX-XX-XX"
                                    @input="checkErrors('defaultErrorData', 'phone')"
                                >
                                <span class="field-error-message">{{errors.defaultErrorData.phone ? errors.defaultErrorData.phone[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Influencer name *</p>
                                <input
                                    v-model="defaultData.influencer_name"
                                    type="text"
                                    placeholder="This will be shown on your profile"
                                    @input="checkErrors('defaultErrorData', 'influencer_name')"
                                >
                                <span class="field-error-message">{{errors.defaultErrorData.influencer_name ? errors.defaultErrorData.influencer_name[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="form-title">Choose your social medias profiles (at least one)</div>
                        <div class="fields">
                            <div>
                                <p>Facebook</p>
                                <input
                                    v-model="defaultData.facebook"
                                    type="text"
                                    placeholder="Your Facebook URL"
                                >
                            </div>
                            <div>
                                <p>YouTube</p>
                                <input
                                    v-model="defaultData.youtube"
                                    type="text"
                                    placeholder="Your YouTube URL"
                                >
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>Instagram</p>
                                <input
                                    v-model="defaultData.instagram"
                                    type="text"
                                    placeholder="Your Instagram URL"
                                >
                            </div>
                            <div>
                                <p>Twitter</p>
                                <input
                                    v-model="defaultData.twitter"
                                    type="text"
                                    placeholder="Your Twitter URL"
                                >
                            </div>
                        </div>
                        <div class="fields">
                            <div>
                                <p>TikTok</p>
                                <input
                                    v-model="defaultData.tiktok"
                                    type="text"
                                    placeholder="Your TikTok URL"
                                >
                            </div>
                            <div>
                                <p>Telegram</p>
                                <input
                                    v-model="defaultData.telegram"
                                    type="text"
                                    placeholder="Your Telegram URL"
                                >
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
                                <v-select
                                    v-model="defaultData.account_type"
                                    :options="options"
                                    @input="checkErrors('defaultErrorData', 'account_type')"
                                ></v-select>
                                <span class="field-error-message">{{errors.defaultErrorData.account_type ? errors.defaultErrorData.account_type[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Gender *</p>
                                <v-select
                                    v-model="defaultData.gender"
                                    :options="options"
                                    @input="checkErrors('defaultErrorData', 'gender')"
                                ></v-select>
                                <span class="field-error-message">{{errors.defaultErrorData.gender ? errors.defaultErrorData.gender[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Birthday *</p>
                                <date-picker
                                    v-model="defaultData.birthday"
                                    @input="checkErrors('defaultErrorData', 'birthday')"
                                ></date-picker>
                                <span class="field-error-message">{{errors.defaultErrorData.birthday ? errors.defaultErrorData.birthday[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Language *</p>
                                <v-select
                                    v-model="defaultData.language"
                                    :options="options"
                                    @input="checkErrors('defaultErrorData', 'language')"
                                ></v-select>
                                <span class="field-error-message">
                                    {{errors.defaultErrorData.language ? errors.defaultErrorData.language[0] : ''}}
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div>
                                <p>Additional information *</p>
                                <textarea
                                    v-model="defaultData.additional_information"
                                    placeholder="Provide additional information about your activity and contact information"
                                    @input="checkErrors('defaultErrorData', 'additional_information')"
                                ></textarea>
                                <span class="field-error-message">{{errors.defaultErrorData.additional_information != '' ? errors.defaultErrorData.additional_information[0] : ''}}</span>
                            </div>
                        </div>
                        <div class="btn-content">
                            <button @click="registerUser">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoader" class="loader-overly">
            <div class="lds-dual-ring"></div>
        </div>
        <notifications group="foo"/>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import "vue-select/dist/vue-select.css";
import ClickOutside from "vue-click-outside";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name: "JoinForm",
    components: {
        Footer,
        DatePicker
    },
    data() {
        return {
            isLoader: false,
            selectCategory: false,
            options: ["foo", "bar", "baz"],
            defaultData: {
                first_name: 'Valod',
                last_name: 'Valodyan',
                phone: '37455969696',
                influencer_name: 'es shat gidem inch',
                facebook: '',
                instagram: 'hov97mkrtchyan',
                tiktok: 'therock',
                youtube: 'UCmqqdbEjzhryi3R-_qHPExg',
                twitter: 'Hovo1543569',
                telegram: 'kalalaallala',
                account_type: 'esim',
                gender: '',
                birthday: '',
                language: '',
                additional_information: 'text',
                email: 'example@emample.com',
            },
            errors: {
                defaultErrorData: {
                    first_name: '',
                    last_name: '',
                    phone: '',
                    influencer_name: '',
                    facebook: '',
                    instagram: '',
                    tiktok: '',
                    youtube: '',
                    twitter: '',
                    telegram: '',
                    account_type: '',
                    gender: '',
                    birthday: '',
                    language: '',
                    additional_information: '',
                    email: '',
                },
            }
        }
    },
    methods: {

        hideSelectCategory() {
            this.selectCategory = false
        },

        checkErrors(obj, field) {
            console.log(55)
            if (obj) {
                this.errors[obj][field] = ''
            } else {
                this.errors[field] = ''
            }
        },

        async registerUser() {
            this.isLoader = true

            await axios.post('/register/user', this.defaultData).then(response => {
                console.log(response)
                this.isLoader = false
            }).catch(error => {
                this.isLoader = false
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'An error has occurred',
                    type: 'error',
                    duration: 1000,
                    speed: 1000,
                })
                this.errors.defaultErrorData = Object.assign(this.errors.defaultErrorData, error.response.data.errors)
            })
        },

    },
    directives: {
        ClickOutside
    }
}
</script>

<style lang="scss">
    .loader-overly {
        position: fixed;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        top: 0;
        left: 0;
        background: #00000069;
        display: flex;
        justify-content: center;
        align-items: center;
        .lds-dual-ring {
            display: inline-block;
            width: 80px;
            height: 80px;
        }
        .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            border: 6px solid #fff;
            border-color: #fff transparent #fff transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }

    .field-error-message {
        color: red;
        margin-top: 10px;
        display: block;
    }
    // select
    .vs__dropdown-toggle .vs__selected {
        font-family: 'Rubik', sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 22px !important;
        line-height: 26px !important;
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
                            font-size: 26px;
                            line-height: 31px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            margin-bottom: 10px;
                        }
                        input {
                            width: 100%;
                            height: 60px;
                            padding: 0 40px;
                            border: 0;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 26px;
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
                            font-size: 26px;
                            line-height: 31px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            margin-bottom: 10px;
                        }
                        input {
                            width: 100%;
                            border: 0;
                            height: 60px;
                            padding: 0 40px;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 26px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                        }
                        button {
                            width: 100%;
                            border: 0;
                            height: 60px;
                            padding: 0 40px;
                            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                            border-radius: 40px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 26px;
                            letter-spacing: 0.02em;
                            color: #8B8989;
                            text-align: left;
                            position: relative;
                            img {
                                position: absolute;
                                right: 47px;
                                top: 30px;
                                transition: 0.25s ease;
                                &.active {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                        .transition-select {
                            background: #FEFDFF;
                            box-shadow: inset 0 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;
                            position: absolute;
                            top: 125px;
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
                            font-size: 22px;
                            line-height: 26px;
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
                    margin-top: 60px;
                    margin-bottom: 42px;
                    font-family: 'Rubik', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 26px;
                    line-height: 31px;
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
            padding-right: 60px;
            padding-left: 60px;
            background: linear-gradient(134.17deg, #FFFFFF 4.98%, #F1ECF1 94.88%);
        }
    }

    @media screen and (max-width: 1024px) {
        .vs__dropdown-toggle .vs__selected {
            font-family: 'Rubik', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 21px !important;
            line-height: 25px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 55px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 35px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 100px;
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
                    padding: 62px 60px 45px;
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
                                font-size: 23px;
                                line-height: 27px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                height: 55px;
                                padding: 0 40px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
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
                                font-size: 23px;
                                line-height: 27px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                margin-bottom: 10px;
                            }
                            input {
                                width: 100%;
                                border: 0;
                                height: 55px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                padding: 0 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                height: 55px;
                                padding: 0 40px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 47px;
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
                                height: 140px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
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
                        margin-bottom: 40px;
                        margin-top: 50px;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 23px;
                        line-height: 27px;
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
            font-size: 21px !important;
            line-height: 25px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 55px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 35px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 100px;
            padding-left: 25px;
            padding-right: 25px;
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
                    text-align: center;
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
                                font-size: 23px;
                                line-height: 27px;
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
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
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
                                font-size: 23px;
                                line-height: 27px;
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
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 41px;
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
                                padding: 20px 35px;
                                height: 140px;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 40px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 21px;
                                line-height: 25px;
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
                        text-align: center;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
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
            font-size: 18px !important;
            line-height: 21px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 55px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 35px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 100px;
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
                    padding: 40px 22px;
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
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
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
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 42px;
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
                                border-radius: 35px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
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
                        font-size: 18px;
                        line-height: 21px;
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
            font-size: 18px !important;
            line-height: 21px !important;
            letter-spacing: 0.02em !important;
            color: #8B8989 !important;
            padding: 0 !important;
        }
        .vs__dropdown-toggle {
            height: 55px !important;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%) !important;
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75) !important;
            border-radius: 40px !important;
            padding: 0 35px !important;
            .vs__search {
                visibility: hidden;
            }
            .join-form-content .content > .form .field > div button {
                display: none !important;
            }
        }
        //
        .join-form-content {
            padding-bottom: 100px;
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
                    padding: 40px 22px;
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
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
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
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                            }
                            button {
                                width: 100%;
                                border: 0;
                                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                                border-radius: 35px;
                                height: 55px;
                                padding: 0 35px;
                                outline: 0;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #8B8989;
                                text-align: left;
                                position: relative;
                                img {
                                    position: absolute;
                                    right: 42px;
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
                                border-radius: 35px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
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
                        font-size: 18px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        text-align: left;
                        color: #8B8989;
                    }
                }
            }
        }
    }
</style>
