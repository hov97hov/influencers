<template>
    <div>
        <Header :is-home="false"/>
        <div class="search-page-content">
            <div class="container">
                <div class="search-content">
                    <input type="text" placeholder="Keywords: fashion, design, marketing">
                    <button>Search</button>
                </div>
                <div class="filter-vars">
                    <div v-if="defaultData.accountType">
                        {{ defaultData.accountType }}
                        <img
                            @click="defaultData.accountType = '' "
                            src="/images/icons/close-icon.png"
                        >
                    </div>
                    <div v-if="defaultData.location">
                        {{ defaultData.location }}
                        <img
                            @click="defaultData.location = '' "
                             src="/images/icons/close-icon.png"
                        >
                    </div>
                    <div v-if="defaultData.gender">
                        {{ defaultData.gender }}
                        <img
                             @click="defaultData.gender = '' "
                             src="/images/icons/close-icon.png"
                        >
                    </div>
                    <div v-if="defaultData.Age">
                        {{ defaultData.Age }}
                        <img
                            @click="defaultData.Age = '' "
                            src="/images/icons/close-icon.png"
                        >
                    </div>
                    <div v-if="defaultData.numberFollowers">{{ defaultData.numberFollowers }}
                        <img
                            @click="defaultData.numberFollowers = '' "
                            src="/images/icons/close-icon.png" alt=""
                        >
                    </div>
                    <div v-if="defaultData.numberPosts">
                        {{ defaultData.numberPosts }}
                        <img
                            @click="defaultData.numberPosts = '' "
                            src="/images/icons/close-icon.png" alt=""
                        >
                    </div>
                    <div v-if="defaultData.lastPost">
                        {{ defaultData.lastPost }}
                        <img
                            @click="defaultData.lastPost = '' "
                             src="/images/icons/close-icon.png" alt=""
                        >
                    </div>
                </div>
                <div class="input-filter-content">
                    <div class="title">Search filters</div>
                    <div class="items">
                        <div class="fields">
                            <div>
                                <p>Platform</p>
                                <button class="select-btn" @click.stop="transitionPlatform = true">
                                    {{ selectedCategories[0] }}
                                    {{ selectedCategories[1] ? `,` : `` }}
                                    {{ selectedCategories[1] }}
                                    {{ selectedCategories.length > 2 ? `...` : `` }}
                                    <img :class="{active : transitionPlatform}" src="/images/icons/dropdown.svg" alt="">
                                </button>
                                <transition name="slide">
                                    <div class="transition-select" v-click-outside="hideTransitionPlatform"
                                         v-if="transitionPlatform">
                                        <div class="search-category-content">
                                            <input v-model="searchNotSelectedCategories" class="search-input"
                                                   type="text" placeholder="Choose category">
                                        </div>
                                        <div class="selected-category-content">
                                            <p>Selected:</p>
                                            <div v-for="item in selectedCategories">
                                                <label class="checkbox-container">
                                                    <span>{{ item }}</span>
                                                    <input type="checkbox" @change="notSelectedCategory(item)" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="category-list">
                                            <div v-for="item in filterNotSelectedCategories" :key="item">
                                                <label class="checkbox-container">
                                                    <span>{{ item }}</span>
                                                    <input type="checkbox" @change="selectedCategory(item)">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="cancel">
                                            <span @click="transitionPlatform = false">Cancel</span>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div>
                                <p>Category</p>
                                <button class="select-btn" @click.stop="transitionCategory = true">
                                    {{ selectedCategories[0] }}
                                    {{ selectedCategories[1] ? `,` : `` }}
                                    {{ selectedCategories[1] }}
                                    {{ selectedCategories.length > 2 ? `...` : `` }}
                                    <img :class="{active : transitionCategory}" src="/images/icons/dropdown.svg" alt="">
                                </button>
                                <transition name="slide">
                                    <div class="transition-select" v-click-outside="hideTransitionCategory"
                                         v-if="transitionCategory">
                                        <div class="search-category-content">
                                            <input v-model="searchNotSelectedCategories" class="search-input"
                                                   type="text" placeholder="Choose category">
                                        </div>
                                        <div class="selected-category-content">
                                            <p>Selected:</p>
                                            <div v-for="item in selectedCategories">
                                                <label class="checkbox-container">
                                                    <span>{{ item }}</span>
                                                    <input type="checkbox" @change="notSelectedCategory(item)" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="category-list">
                                            <div v-for="item in filterNotSelectedCategories" :key="item">
                                                <label class="checkbox-container">
                                                    <span>{{ item }}</span>
                                                    <input type="checkbox" @change="selectedCategory(item)">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="cancel">
                                            <span @click="transitionCategory = false">Cancel</span>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div>
                                <p>Account type</p>
                                <v-select v-model="defaultData.accountType" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Location</p>
                                <v-select v-model="defaultData.location" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Gender</p>
                                <v-select v-model="defaultData.gender" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Age</p>
                                <v-select v-model="defaultData.age" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Number of followers</p>
                                <button class="select-btn" @click.stop="numberFollowers = true">
                                    {{ defaultData.searchFollowerCountLeft }}
                                    {{ defaultData.searchFollowerCountLeft ? `>` : `` }}
                                    {{ defaultData.searchFollowerCountRight }}
                                    <img :class="{active : numberFollowers}" src="/images/icons/dropdown.svg" alt="">
                                </button>
                                <transition name="slide">
                                    <div class="transition-select" v-click-outside="hideNmberFollowers"
                                         v-if="numberFollowers">
                                        <div class="transition-search-content">
                                            <input v-model="defaultData.searchFollowerCountLeft" class="search-input"
                                                   type="text">
                                            <span>-</span>
                                            <input v-model="defaultData.searchFollowerCountRight" class="search-input"
                                                   type="text">
                                        </div>
                                        <div class="followers-count">
                                            <div
                                                :class="{active : activeBtnCountLeft === '1k'}"
                                                @click="followerCountLeft('1k')"
                                            >1k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '1k'}"
                                                @click="followerCountRight('1k')"
                                            >1k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '5k'}"
                                                @click="followerCountLeft('5k')"
                                            >5k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '5k'}"
                                                @click="followerCountRight('5k')"
                                            >5k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '10k'}"
                                                @click="followerCountLeft('10k')"
                                            >10k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '10k'}"
                                                @click="followerCountRight('10k')"
                                            >10k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '20k'}"
                                                @click="followerCountLeft('20k')"
                                            >20k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '20k'}"
                                                @click="followerCountRight('20k')"
                                            >20k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '100k'}"
                                                @click="followerCountLeft('100k')"
                                            >100k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '100k'}"
                                                @click="followerCountRight('100k')"
                                            >100k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '500k'}"
                                                @click="followerCountLeft('500k')"
                                            >500k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '500k'}"
                                                @click="followerCountRight('500k')"
                                            >500k
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountLeft === '1M'}"
                                                @click="followerCountLeft('1M')"
                                            >1M
                                            </div>
                                            <div
                                                :class="{active : activeBtnCountRight === '1M'}"
                                                @click="followerCountRight('1M')"
                                            >1M
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div>
                                <p>Number of posts</p>
                                <v-select v-model="defaultData.numberFollowers" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Last post</p>
                                <v-select v-model="defaultData.numberPosts" :options="options"></v-select>
                            </div>
                            <div>
                                <p>Required keywords</p>
                                <input type="text">
                            </div>
                            <div>
                                <p>Negative keywords</p>
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-result">
                    <div class="title">
                        <div>Search result</div>
                        <div>Found 125 accounts</div>
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
                        <div>
                            <span>Influencer</span>
                            <span>posts</span>
                        </div>
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
                            v-for="(user, index) in users"
                        >
                            <div class="left-section">
                                <img src="/images/user.png" alt="">
                                <div>
                                    <div class="name">{{user.user_detail.first_name}} {{user.user_detail.last_name}} <img src="/images/icons/done.png" alt=""></div>
                                    <div class="sub-name">iveta.mukuchyan</div>
                                </div>
                            </div>
                            <div class="center-section">
                                <div>Beauty</div>
                                <div>281.4K</div>
                                <div>19</div>
                                <div>Armenia</div>
                            </div>
                            <div class="right-section">
                                <div><img src="/images/icons/small/facebook.png" alt=""></div>
                                <div><img src="/images/icons/small/Subtract.png" alt=""></div>
                                <div><img src="/images/icons/small/Vector.png" alt=""></div>
                                <div><img src="/images/icons/small/twitter.png" alt=""></div>
                                <div><img src="/images/icons/small/TikTok.png" alt=""></div>
                                <div><img src="/images/icons/small/telegram.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                    <div class="items-mobile">
                        <div class="item">
                            <div class="left-section">
                                <img src="/images/user.png" alt="">
                                <div>
                                    <div class="name">Iveta Mukuchyan <img src="/images/icons/done.png" alt=""></div>
                                    <div class="sub-name">iveta.mukuchyan</div>
                                </div>
                            </div>
                            <div class="right-section">
                                <div><img src="/images/icons/small/facebook.png" alt=""></div>
                                <div><img src="/images/icons/small/Subtract.png" alt=""></div>
                                <div><img src="/images/icons/small/Vector.png" alt=""></div>
                                <div><img src="/images/icons/small/twitter.png" alt=""></div>
                                <div><img src="/images/icons/small/TikTok.png" alt=""></div>
                                <div><img src="/images/icons/small/telegram.png" alt=""></div>
                            </div>
                            <div class="center-section">
                                <div><img src="/images/icons/Icon-color.png" alt=""><span>Beauty</span></div>
                                <div><img src="/images/icons/Icon-color2.png" alt=""><span>Armenia</span></div>
                                <div><img src="/images/icons/Icon-color3.png" alt=""><span>281.4K</span></div>
                                <div><img src="/images/icons/Icon-color5.png" alt=""><span>19</span></div>
                            </div>
                            <div class="icon-section">
                                <div><img src="/images/icons/small/fb-small.png" alt=""></div>
                                <div><img src="/images/icons/small/Subtract-small.png" alt=""></div>
                                <div><img src="/images/icons/small/Vector-small.png" alt=""></div>
                                <div><img src="/images/icons/small/twitter-small.png" alt=""></div>
                                <div><img src="/images/icons/small/tiktok-small.png" alt=""></div>
                                <div><img src="/images/icons/small/telegram-small.png" alt=""></div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="left-section">
                                <img src="/images/user.png" alt="">
                                <div>
                                    <div class="name">Iveta Mukuchyan <img src="/images/icons/done.png" alt=""></div>
                                    <div class="sub-name">iveta.mukuchyan</div>
                                </div>
                            </div>
                            <div class="right-section">
                                <div><img src="/images/icons/small/facebook.png" alt=""></div>
                                <div><img src="/images/icons/small/Subtract.png" alt=""></div>
                                <div><img src="/images/icons/small/Vector.png" alt=""></div>
                                <div><img src="/images/icons/small/twitter.png" alt=""></div>
                                <div><img src="/images/icons/small/TikTok.png" alt=""></div>
                                <div><img src="/images/icons/small/telegram.png" alt=""></div>
                            </div>
                            <div class="center-section">
                                <div><img src="/images/icons/Icon-color.png" alt=""><span>Beauty</span></div>
                                <div><img src="/images/icons/Icon-color2.png" alt=""><span>Armenia</span></div>
                                <div><img src="/images/icons/Icon-color3.png" alt=""><span>281.4K</span></div>
                                <div><img src="/images/icons/Icon-color5.png" alt=""><span>19</span></div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="left-section">
                                <img src="/images/user.png" alt="">
                                <div>
                                    <div class="name">Iveta Mukuchyan <img src="/images/icons/done.png" alt=""></div>
                                    <div class="sub-name">iveta.mukuchyan</div>
                                </div>
                            </div>
                            <div class="right-section">
                                <div><img src="/images/icons/small/facebook.png" alt=""></div>
                                <div><img src="/images/icons/small/Subtract.png" alt=""></div>
                                <div><img src="/images/icons/small/Vector.png" alt=""></div>
                                <div><img src="/images/icons/small/twitter.png" alt=""></div>
                                <div><img src="/images/icons/small/TikTok.png" alt=""></div>
                                <div><img src="/images/icons/small/telegram.png" alt=""></div>
                            </div>
                            <div class="center-section">
                                <div><img src="/images/icons/Icon-color.png" alt=""><span>Beauty</span></div>
                                <div><img src="/images/icons/Icon-color2.png" alt=""><span>Armenia</span></div>
                                <div><img src="/images/icons/Icon-color3.png" alt=""><span>281.4K</span></div>
                                <div><img src="/images/icons/Icon-color5.png" alt=""><span>19</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <paginate
                    :page-count="lastPage"
                    :click-handler="getUsers"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :container-class="'search-paginator'">
                </paginate>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import "vue-select/dist/vue-select.css";
import ClickOutside from 'vue-click-outside'
import Header from "../components/Header.vue";

export default {
    name: "SearchPage",
    components: {Header, Footer},
    data() {
        return {
            users: [],
            paginate: [],
            currentPage: 1,
            lastPage: 0,
            activeBtnCountLeft: null,
            activeBtnCountRight: null,
            searchNotSelectedCategories: '',
            defaultData: {
                accountType: '',
                location: '',
                gender: '',
                age: '',
                numberFollowers: '',
                numberPosts: '',
                lastPost: '',
                searchFollowerCountLeft: '',
                searchFollowerCountRight: '',
            },
            notSelectedCategories: ['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'fff'],
            selectedCategories: [],
            numberFollowers: false,
            transitionPlatform: false,
            transitionCategory: false,
            options: ["foo", "bar", "baz", "test test"],
        }
    },
    computed: {
        filterNotSelectedCategories: function () {
            var self = this;
            return self.notSelectedCategories.filter(function (val) {
                return val.indexOf(self.searchNotSelectedCategories) !== -1;
            })
        },
    },
    created() {
        this.getUsers()
    },
    methods: {

        hideTransitionPlatform() {
            this.transitionPlatform = false
        },

        hideTransitionCategory() {
            this.transitionCategory = false
        },

        hideNmberFollowers() {
            this.numberFollowers = false
        },

        followerCountLeft(count) {
            this.activeBtnCountLeft = count
            this.defaultData.searchFollowerCountLeft = ''
            if (count === "1k") {
                this.defaultData.searchFollowerCountLeft = 1000
            }
            if (count === "5k") {
                this.defaultData.searchFollowerCountLeft = 5000
            }
            if (count === "10k") {
                this.defaultData.searchFollowerCountLeft = 10000
            }
            if (count === "20k") {
                this.defaultData.searchFollowerCountLeft = 20000
            }
            if (count === "100k") {
                this.defaultData.searchFollowerCountLeft = 100000
            }
            if (count === "500k") {
                this.defaultData.searchFollowerCountLeft = 500000
            }
            if (count === "1M") {
                this.defaultData.searchFollowerCountLeft = 1000000
            }
        },

        followerCountRight(count) {
            this.defaultData.searchFollowerCountRight = ''
            this.activeBtnCountRight = count

            if (count === "1k") {
                this.defaultData.searchFollowerCountRight = 1000
            }
            if (count === "5k") {
                this.defaultData.searchFollowerCountRight = 5000
            }
            if (count === "10k") {
                this.defaultData.searchFollowerCountRight = 10000
            }
            if (count === "20k") {
                this.defaultData.searchFollowerCountRight = 20000
            }
            if (count === "100k") {
                this.defaultData.searchFollowerCountRight = 100000
            }
            if (count === "500k") {
                this.defaultData.searchFollowerCountRight = 500000
            }
            if (count === "1M") {
                this.defaultData.searchFollowerCountRight = 1000000
            }
        },

        selectedCategory(value) {
            let index = this.notSelectedCategories.indexOf(value);
            if (index !== -1) {
                this.notSelectedCategories.splice(index, 1);
                this.selectedCategories.push(value);
                this.selectedCategories.sort()
            }
        },

        notSelectedCategory(value) {
            let index = this.selectedCategories.indexOf(value);
            if (index !== -1) {
                this.selectedCategories.splice(index, 1);
                this.notSelectedCategories.push(value);
                this.notSelectedCategories.sort()
            }
        },

        getUsers(page = 1) {
            axios.get(`/users?page=${page}`).then(response => {
                this.users = response.data.data;
                this.currentPage = response.data.pagination.current_page;
                this.lastPage = response.data.pagination.last_page;
            });
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style scoped lang="scss">

.vs__dropdown-toggle {
    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%) !important;
    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7) !important;
    border-radius: 20px !important;
    padding: 0 12px !important;
    height: 56px !important;
}

.vs__dropdown-toggle .vs__selected {
    font-family: 'Rubik', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 24px !important;
    line-height: 28px !important;
    letter-spacing: 0.02em !important;
    color: #595656 !important;
}

.vs--single.vs--loading .vs__selected, .vs--single.vs--open .vs__selected {
    opacity: 1 !important;
    position: relative !important;
}

.vs__clear {
    display: none !important;
}

.vs__dropdown-menu {
    top: 87px !important;
    padding: 32px 22px !important;
    border-radius: 25px !important;
}

.vs__dropdown-option--highlight {
    background: #FEFDFF !important;
}

.vs__dropdown-menu li {
    padding: 12px 0 !important;
    text-align: center !important;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;
}

.vs--open .vs__dropdown-toggle {
    border: 0 !important;
}

.vs__dropdown-toggle {
    border: 0 !important;
}

.vs__dropdown-menu li:hover {
    background: #E9EDF0 !important;
    border-radius: 10px !important;
    color: #000000 !important;

}

.vs__dropdown-menu li.active {
    background: red !important;
}

.search-page-content {
    background: #E9EDF0;

    .search-content {
        margin-top: 48px;
        display: flex;
        justify-content: space-between;

        button {
            border: 2px solid #FCFCFD;
            background: #EAEEF1;
            filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));
            border-radius: 20px;
            height: 60px;
            padding: 0 40px;
            font-family: arialAum;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.02em;
            color: #595656;
            cursor: pointer;
        }

        input {
            width: 100%;
            margin-right: 100px;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
            box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
            border-radius: 40px;
            border: 0;
            height: 60px;
            padding: 0 50px;
            outline: 0;
            font-family: arialAum;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.02em;

            &::placeholder {
                color: #8B8989;
            }
        }
    }

    .filter-vars {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 15px -10px;

        > div {
            display: flex;
            align-items: center;
            background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
            border-radius: 40px;
            font-family: arialAum;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #686868;
            padding: 15px 30px;
            margin: 10px;

            img {
                margin-left: 30px;
                cursor: pointer;
            }
        }
    }

    .input-filter-content {
        margin-bottom: 136px;

        > .title {
            font-family: 'Rubik', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #595656;
            margin-bottom: 25px;
            margin-top: 90px;
        }

        .items {
            .fields {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin: -15px;

                > div {
                    margin: 30px 12px;
                    width: calc(100% / 4 - 25px);
                    position: relative;

                    p {
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 21px;
                        letter-spacing: 0.02em;
                        color: #686868;
                        margin-bottom: 10px;
                    }

                    > input {
                        width: 100%;
                        background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                        box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                        border-radius: 20px;
                        border: 0;
                        height: 56px;
                        padding: 0 29px;
                        outline: 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 28px;
                        letter-spacing: 0.02em;
                        color: #595656;
                    }

                    .select-btn {
                        width: 100%;
                        height: 56px;
                        position: relative;
                        background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                        box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                        border-radius: 20px;
                        border: 0;
                        font-family: 'Rubik', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 24px;
                        letter-spacing: 0.02em;
                        color: #595656;

                        img {
                            position: absolute;
                            right: 20px;
                            transition: 0.25s ease;
                            top: 25px;

                            &.active {

                                transform: rotate(180deg);
                            }
                        }
                    }

                    .transition-select {
                        width: 100%;
                        position: absolute;
                        top: 119px;
                        background: #FEFDFF;
                        box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                        border-radius: 25px;
                        padding: 20px 10px;
                        z-index: 99;

                        .transition-search-content {
                            display: flex;
                            align-items: center;
                            margin-bottom: 10px;
                            box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;

                            span {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                margin: 0 4px;
                            }

                            > .search-input {
                                width: 100%;
                                height: 52px;
                                padding: 0 35px;
                                border: 2px solid #E9ECF2;
                                border-radius: 10px;
                                font-family: 'Rubik', sans-serif;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                                background: #ffffff;
                                outline: 0;
                            }
                        }

                        .followers-count {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;

                            > div {
                                width: calc(100% / 2 - 10px);
                                padding: 12px 0;
                                cursor: pointer;
                                text-align: center;
                                border-radius: 10px;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 22px;
                                letter-spacing: 0.02em;
                                color: #000000;

                                &.active {
                                    background: #E9EDF0;

                                }
                            }
                        }

                        .search-category-content {
                            margin-bottom: 22px;

                            input {
                                width: 100%;
                                height: 48px;
                                border: 2px solid #E9ECF2;
                                border-radius: 10px;
                                outline: 0;
                                background: #FFFFFF;
                                padding: 0 22px;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 21px;
                                letter-spacing: 0.02em;
                                color: #595656;
                            }
                        }

                        .selected-category-content {
                            padding-bottom: 20px;
                            margin-bottom: 10px;
                            border-bottom: 0.5px solid #5F5C5C;

                            p {
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 17px;
                                letter-spacing: 0.02em;
                                color: #9C99EF;
                                padding-left: 22px;
                            }

                            > div {
                                margin-bottom: 5px;
                            }

                            .checkbox-container {
                                background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);
                                box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);
                                border-radius: 10px;

                                span {
                                    color: #ffffff;
                                }
                            }
                        }

                        .category-list {
                            height: 325px;
                            overflow-y: auto;
                            padding-bottom: 30px;
                            border-bottom: 0.5px solid #5F5C5C;
                        }

                        .cancel {
                            display: flex;
                            justify-content: center;
                            margin-top: 10px;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #595656;

                            span {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
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
                    width: 33%;
                }

                &:nth-child(2) {
                    width: 15%;
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
                        width: 55%;
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
                    }
                }

                .right-section {
                    display: flex;
                    justify-content: space-between;
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
}


@media screen and (max-width: 1280px) {
    .container {
        padding-left: 60px;
        padding-right: 60px;
    }
}

@media screen and (max-width: 992px) {
    .search-result-header {
        display: none !important;
    }
}

@media screen and (max-width: 768px) {
    .search-page-content {
        background: #E9EDF0;

        .search-content {
            margin-top: 48px;
            display: flex;
            justify-content: space-between;

            button {
                border: 2px solid #FCFCFD;
                background: #EAEEF1;
                filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));
                border-radius: 20px;
                height: 60px;
                padding: 0 40px;
                font-family: arialAum;
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 0.02em;
                color: #595656;
                cursor: pointer;
            }

            input {
                width: 100%;
                margin-right: 30px;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                border-radius: 40px;
                border: 0;
                height: 60px;
                padding: 0 50px;
                outline: 0;
                font-family: arialAum;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                letter-spacing: 0.02em;

                &::placeholder {
                    color: #8B8989;
                }
            }
        }

        .filter-vars {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 15px -10px;

            > div {
                display: flex;
                align-items: center;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                border-radius: 40px;
                font-family: arialAum;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.02em;
                color: #686868;
                padding: 15px 30px;
                margin: 10px;

                img {
                    margin-left: 30px;
                    cursor: pointer;
                }
            }
        }

        .input-filter-content {
            margin-bottom: 136px;

            > .title {
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.02em;
                color: #595656;
                margin-bottom: 25px;
                margin-top: 90px;
            }

            .items {
                .fields {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: -15px;

                    > div {
                        margin: 30px 12px;
                        width: calc(100% / 3 - 25px);
                        position: relative;

                        p {
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 21px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            margin-bottom: 10px;
                        }

                        > input {
                            width: 100%;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            height: 56px;
                            padding: 0 29px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 28px;
                            letter-spacing: 0.02em;
                            color: #595656;
                        }

                        .select-btn {
                            width: 100%;
                            height: 56px;
                            position: relative;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #595656;

                            img {
                                position: absolute;
                                right: 20px;
                                transition: 0.25s ease;

                                &.active {

                                    transform: rotate(180deg);
                                }
                            }
                        }

                        .transition-select {
                            width: 100%;
                            position: absolute;
                            top: 119px;
                            background: #FEFDFF;
                            box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;
                            padding: 20px 10px;
                            z-index: 99;

                            .transition-search-content {
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;

                                span {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    margin: 0 4px;
                                }

                                > .search-input {
                                    width: 100%;
                                    height: 52px;
                                    padding: 0 35px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    background: #ffffff;
                                    outline: 0;
                                }
                            }

                            .followers-count {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;

                                > div {
                                    width: calc(100% / 2 - 10px);
                                    padding: 12px 0;
                                    cursor: pointer;
                                    text-align: center;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 22px;
                                    letter-spacing: 0.02em;
                                    color: #000000;

                                    &.active {
                                        background: #E9EDF0;

                                    }
                                }
                            }

                            .search-category-content {
                                margin-bottom: 22px;

                                input {
                                    width: 100%;
                                    height: 48px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    outline: 0;
                                    background: #FFFFFF;
                                    padding: 0 22px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                }
                            }

                            .selected-category-content {
                                padding-bottom: 20px;
                                margin-bottom: 10px;
                                border-bottom: 0.5px solid #5F5C5C;

                                p {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 14px;
                                    line-height: 17px;
                                    letter-spacing: 0.02em;
                                    color: #9C99EF;
                                    padding-left: 22px;
                                }

                                > div {
                                    margin-bottom: 5px;
                                }

                                .checkbox-container {
                                    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);
                                    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);
                                    border-radius: 10px;

                                    span {
                                        color: #ffffff;
                                    }
                                }
                            }

                            .category-list {
                                height: 325px;
                                overflow-y: auto;
                                padding-bottom: 30px;
                                border-bottom: 0.5px solid #5F5C5C;
                            }

                            .cancel {
                                display: flex;
                                justify-content: center;
                                margin-top: 10px;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #595656;

                                span {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
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
}

@media screen and (max-width: 580px) {
    .search-page-content {
        background: #E9EDF0;

        .search-content {
            margin-top: 48px;
            display: flex;
            justify-content: space-between;

            button {
                border: 2px solid #FCFCFD;
                background: #EAEEF1;
                filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));
                border-radius: 20px;
                height: 60px;
                padding: 0 25px;
                font-family: arialAum;
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 0.02em;
                color: #595656;
                cursor: pointer;
            }

            input {
                width: 100%;
                margin-right: 10px;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                border-radius: 40px;
                border: 0;
                height: 60px;
                padding: 0 20px;
                outline: 0;
                font-family: arialAum;
                font-style: normal;
                font-weight: 400;
                font-size: 16.5804px;
                line-height: 20px;
                letter-spacing: 0.02em;
                color: #8B8989;

                &::placeholder {
                    color: #8B8989;
                }
            }
        }

        .filter-vars {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 15px -10px;

            > div {
                display: flex;
                align-items: center;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                border-radius: 32px;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14.7382px;
                line-height: 17px;
                letter-spacing: 0.02em;
                color: #686868;
                padding: 15px 13px;
                margin: 10px;

                img {
                    margin-left: 30px;
                    cursor: pointer;
                }
            }
        }

        .input-filter-content {
            margin-bottom: 136px;

            > .title {
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 12.8899px;
                line-height: 15px;
                letter-spacing: 0.02em;
                color: #595656;
                margin-bottom: 25px;
                margin-top: 90px;
            }

            .items {
                .fields {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: -15px;

                    > div {
                        margin: 20px 12px;
                        width: calc(100% / 2 - 25px);
                        position: relative;

                        p {
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 17px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            margin-bottom: 10px;
                        }

                        > input {
                            width: 100%;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            height: 56px;
                            padding: 0 16px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 19px;
                            letter-spacing: 0.02em;
                            color: #595656;
                        }

                        .select-btn {
                            width: 100%;
                            height: 56px;
                            position: relative;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #595656;

                            img {
                                position: absolute;
                                right: 20px;
                                transition: 0.25s ease;

                                &.active {

                                    transform: rotate(180deg);
                                }
                            }
                        }

                        .transition-select {
                            width: 100%;
                            position: absolute;
                            top: 119px;
                            background: #FEFDFF;
                            box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;
                            padding: 20px 10px;
                            z-index: 99;

                            .transition-search-content {
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;

                                span {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    margin: 0 4px;
                                }

                                > .search-input {
                                    width: 100%;
                                    height: 52px;
                                    padding: 0 35px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    background: #ffffff;
                                    outline: 0;
                                }
                            }

                            .followers-count {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;

                                > div {
                                    width: calc(100% / 2 - 10px);
                                    padding: 12px 0;
                                    cursor: pointer;
                                    text-align: center;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 22px;
                                    letter-spacing: 0.02em;
                                    color: #000000;

                                    &.active {
                                        background: #E9EDF0;

                                    }
                                }
                            }

                            .search-category-content {
                                margin-bottom: 22px;

                                input {
                                    width: 100%;
                                    height: 48px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    outline: 0;
                                    background: #FFFFFF;
                                    padding: 0 22px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                }
                            }

                            .selected-category-content {
                                padding-bottom: 20px;
                                margin-bottom: 10px;
                                border-bottom: 0.5px solid #5F5C5C;

                                p {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 14px;
                                    line-height: 17px;
                                    letter-spacing: 0.02em;
                                    color: #9C99EF;
                                    padding-left: 22px;
                                }

                                > div {
                                    margin-bottom: 5px;
                                }

                                .checkbox-container {
                                    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);
                                    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);
                                    border-radius: 10px;

                                    span {
                                        color: #ffffff;
                                    }
                                }
                            }

                            .category-list {
                                height: 325px;
                                overflow-y: auto;
                                padding-bottom: 30px;
                                border-bottom: 0.5px solid #5F5C5C;
                            }

                            .cancel {
                                display: flex;
                                justify-content: center;
                                margin-top: 10px;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #595656;

                                span {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

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
                            align-items: center;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top: 10px;
                            padding-left: 100px;

                            div {
                                &:nth-child(2) {
                                    padding-left: 30px;
                                }

                                &:nth-child(4) {
                                    padding-left: 30px;
                                }

                                width: 50%;
                                display: flex;
                                flex-wrap: wrap;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #686868;
                                align-items: center;
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
}

@media screen and (max-width: 500px) {
    .container {
        padding-left: 45px;
        padding-right: 45px;
    }
    .search-page-content {
        background: #E9EDF0;

        .search-content {
            margin-top: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;

            button {
                width: 100px;
                border: 2px solid #FCFCFD;
                background: #EAEEF1;
                filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));
                border-radius: 20px;
                height: 43px;
                padding: 0;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.02em;
                color: #595656;
                cursor: pointer;
            }

            input {
                width: 100%;
                margin-bottom: 10px;
                margin-right: 10px;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);
                border-radius: 40px;
                border: 0;
                height: 53px;
                padding: 0 20px;
                outline: 0;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.02em;
                color: #8B8989;

                &::placeholder {
                    color: #8B8989;
                }
            }
        }

        .filter-vars {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 15px -10px;

            > div {
                display: flex;
                align-items: center;
                background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);
                border-radius: 32px;
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12.549px;
                line-height: 15px;
                letter-spacing: 0.02em;
                color: #686868;
                padding: 10px 10px;
                margin: 10px;

                img {
                    margin-left: 30px;
                    cursor: pointer;
                }
            }
        }

        .input-filter-content {
            margin-bottom: 136px;

            > .title {
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 12.8899px;
                line-height: 15px;
                letter-spacing: 0.02em;
                color: #595656;
                margin-bottom: 25px;
                margin-top: 90px;
            }

            .items {
                .fields {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: -15px;

                    > div {
                        margin: 15px 12px;
                        width: 100%;
                        position: relative;

                        p {
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 21px;
                            letter-spacing: 0.02em;
                            color: #686868;
                            margin-bottom: 10px;
                        }

                        > input {
                            width: 100%;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            height: 56px;
                            padding: 0 16px;
                            outline: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #595656;
                        }

                        .select-btn {
                            width: 100%;
                            height: 56px;
                            position: relative;
                            background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
                            box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
                            border-radius: 20px;
                            border: 0;
                            font-family: 'Rubik', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            letter-spacing: 0.02em;
                            color: #595656;

                            img {
                                position: absolute;
                                right: 20px;
                                transition: 0.25s ease;

                                &.active {

                                    transform: rotate(180deg);
                                }
                            }
                        }

                        .transition-select {
                            width: 100%;
                            position: absolute;
                            top: 119px;
                            background: #FEFDFF;
                            box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                            border-radius: 25px;
                            padding: 20px 10px;
                            z-index: 99;

                            .transition-search-content {
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);
                                border-radius: 25px;

                                span {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    margin: 0 4px;
                                }

                                > .search-input {
                                    width: 100%;
                                    height: 52px;
                                    padding: 0 35px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                    background: #ffffff;
                                    outline: 0;
                                }
                            }

                            .followers-count {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;

                                > div {
                                    width: calc(100% / 2 - 10px);
                                    padding: 12px 0;
                                    cursor: pointer;
                                    text-align: center;
                                    border-radius: 10px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 22px;
                                    letter-spacing: 0.02em;
                                    color: #000000;

                                    &.active {
                                        background: #E9EDF0;

                                    }
                                }
                            }

                            .search-category-content {
                                margin-bottom: 22px;

                                input {
                                    width: 100%;
                                    height: 48px;
                                    border: 2px solid #E9ECF2;
                                    border-radius: 10px;
                                    outline: 0;
                                    background: #FFFFFF;
                                    padding: 0 22px;
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 18px;
                                    line-height: 21px;
                                    letter-spacing: 0.02em;
                                    color: #595656;
                                }
                            }

                            .selected-category-content {
                                padding-bottom: 20px;
                                margin-bottom: 10px;
                                border-bottom: 0.5px solid #5F5C5C;

                                p {
                                    font-family: 'Rubik', sans-serif;
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 14px;
                                    line-height: 17px;
                                    letter-spacing: 0.02em;
                                    color: #9C99EF;
                                    padding-left: 22px;
                                }

                                > div {
                                    margin-bottom: 5px;
                                }

                                .checkbox-container {
                                    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);
                                    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);
                                    border-radius: 10px;

                                    span {
                                        color: #ffffff;
                                    }
                                }
                            }

                            .category-list {
                                height: 325px;
                                overflow-y: auto;
                                padding-bottom: 30px;
                                border-bottom: 0.5px solid #5F5C5C;
                            }

                            .cancel {
                                display: flex;
                                justify-content: center;
                                margin-top: 10px;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                letter-spacing: 0.02em;
                                color: #595656;

                                span {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

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
                            align-items: center;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top: 10px;
                            padding-left: 75px;

                            div {
                                &:nth-child(2) {
                                    padding-left: 0;
                                }

                                &:nth-child(4) {
                                    padding-left: 0;
                                }

                                width: 50%;
                                display: flex;
                                flex-wrap: wrap;
                                font-family: 'Rubik', sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16.7923px;
                                line-height: 20px;
                                letter-spacing: 0.02em;
                                color: #686868;
                                align-items: center;
                                margin-bottom: 20px;

                                img {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &:nth-child(4) {
                            display: flex;
                            padding-left: 75px;

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
}
</style>
