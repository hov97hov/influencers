<template>
    <div>
        <Header :is-show="true" :isHome="false" :isFindPage="false"/>
        <div
            class="search-page-content"
            :style="!isShowElement ? `height: 100vh` : `height: auto`"
        >
            <div class="container">
                <div class="search-content" v-if="isShowElement">
                    <input v-model="defaultData.search" type="text" placeholder="Keywords: fashion, design, marketing">
                    <button @click="search">{{ $t('search') }}</button>
                </div>

                <div class="filter-vars">
                    <div v-if="defaultData.platform">
                        <div>
                            {{ defaultData.platform }}
                            <img @click="resetField('platform')" src="/images/icons/close-icon.png">
                        </div>
                    </div>
                    <div v-if="defaultData.accountType">
                        <div>
                            {{ defaultData.accountType.name }}
                            <img @click="resetField('accountType')" src="/images/icons/close-icon.png">
                        </div>
                    </div>
                    <div v-if="defaultData.location">
                        <div>
                            {{ defaultData.location }}
                            <img @click="resetField('location')" src="/images/icons/close-icon.png">
                        </div>
                    </div>
                    <div v-if="defaultData.gender">
                        <div>
                            {{ defaultData.gender }}
                            <img @click="resetField('gender')" src="/images/icons/close-icon.png">
                        </div>
                    </div>
                    <div v-if="defaultData.age">
                        <div>
                            {{ defaultData.age }}
                            <img @click="resetField('age')" src="/images/icons/close-icon.png">
                        </div>
                    </div>
                    <div v-if="defaultData.searchFollowerCountLeft || defaultData.searchFollowerCountRight">
                        <div>
                            <span style="margin-right: 5px">Followers count</span>
                            <span v-if="defaultData.searchFollowerCountLeft">{{ defaultData.searchFollowerCountLeft }}</span>
                            <span style="margin: 0 5px" v-if="defaultData.searchFollowerCountLeft && defaultData.searchFollowerCountRight">></span>
                            <span v-if="defaultData.searchFollowerCountRight">{{ defaultData.searchFollowerCountRight }}</span>
                            <img @click="resetFiledDate(defaultData)" src="/images/icons/close-icon.png" alt="">
                        </div>
                    </div>
                    <div v-if="defaultData.numberPosts">
                        <div>
                            {{ defaultData.numberPosts }}
                            <img @click="resetField('numberPosts')" src="/images/icons/close-icon.png" alt="">
                        </div>
                    </div>
                    <div v-if="defaultData.lastPost">
                        <div>
                            {{ defaultData.lastPost }}
                            <img @click="resetField('lastPost')" src="/images/icons/close-icon.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="input-filter-content">
                    <div class="title">{{ $t('search_filters') }}</div>
                    <div class="items">
                        <div class="fields">
                            <div :class="{active : !isShowElement}">
                                <p>{{ $t('platform') }}</p>
                                <v-select
                                    v-model="defaultData.platform"
                                    :options="platforms"
                                    @input="filter(page)"
                                ></v-select>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('category') }}</p>
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
                                                    <span>{{ item }} </span>
                                                    <input type="checkbox" @change="notSelectedCategory(item)" :checked="item">
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
                            <div v-if="isShowElement">
                                <p>{{ $t('account_type') }}</p>
                                <v-select
                                    v-model="defaultData.accountType"
                                    :options="accountTypes"
                                    label="name"
                                    @input="filter(page)"
                                ></v-select>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('location') }}</p>
                                <v-select
                                    v-model="defaultData.location"
                                    :options="locations"
                                    @input="filter(page)"
                                ></v-select>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('gender') }}</p>
                                <v-select
                                    v-model="defaultData.gender"
                                    :options="gender"
                                    @input="filter(page)"
                                ></v-select>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('age') }}</p>
                                <button class="select-btn" @click.stop="isSelectedAge = true">
                                    {{ selectedAges[0] }}
                                    {{ selectedAges[1] ? `,` : `` }}
                                    {{ selectedAges[1] }}
                                    {{ selectedAges.length > 2 ? `...` : `` }}
                                    <img :class="{active : isSelectedAge}" src="/images/icons/dropdown.svg" alt="">
                                </button>
                                <transition name="slide">
                                    <div
                                        class="transition-select"
                                         v-click-outside="hideTransitionAge"
                                         v-if="isSelectedAge"
                                    >
                                        <div class="search-category-content">
                                            <input v-model="searchAges" class="search-input"
                                                   type="text" placeholder="Choose Ages">
                                        </div>
                                        <div class="selected-category-content">
                                            <p>Selected:</p>
                                            <div v-for="item in selectedAges">
                                                <label class="checkbox-container">
                                                    <span>{{ item }} </span>
                                                    <input type="checkbox" @change="notSelectedAge(item)" :checked="item">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="category-list">
                                            <div v-for="item in filterNotSelectedAge" :key="item">
                                                <label class="checkbox-container">
                                                    <span>{{ item }}</span>
                                                    <input type="checkbox" @change="selectedAge(item)">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="cancel">
                                            <span @click="isSelectedAge = false">Cancel</span>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('number_of_followers') }}</p>
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
                                            <input
                                                v-model="defaultData.searchFollowerCountLeft"
                                                @input="filter(page)"
                                                class="search-input"
                                                type="text"
                                            >
                                            <span>-</span>
                                            <input
                                                v-model="defaultData.searchFollowerCountRight"
                                                @input="filter(page)"
                                                class="search-input"
                                                type="text"
                                            >
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
                            <div v-if="isShowElement && defaultData.platform !== 'Telegram'">
                                <p>{{ $t('number_of_posts') }}</p>
                                <v-select
                                    v-model="defaultData.numberPosts"
                                    :options="numberPosts"
                                    @input="filter(page)"
                                ></v-select>
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('required_keywords') }}</p>
                                <input type="text">
                            </div>
                            <div v-if="isShowElement">
                                <p>{{ $t('negative_keywords') }}</p>
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </div>

                <SearchResultInstagramComponent
                    v-if="defaultData.platform === `Instagram` && users.length"
                    :users="users"
                    :platform="defaultData.platform"
                />

                <SearchResultTwitterComponent
                    v-if="defaultData.platform === `Twitter` && users.length"
                    :users="users"
                    :platform="defaultData.platform"
                />

                <SearchResultYoutubeComponent
                    v-if="defaultData.platform === `Youtube` && users.length"
                    :users="users"
                    :platform="defaultData.platform"
                />

                <SearchResultTikTokComponent
                    v-if="defaultData.platform === `TikTok` && users.length"
                    :users="users"
                    :platform="defaultData.platform"
                />

                <SearchResultTelegramComponent
                    v-if="defaultData.platform === `Telegram` && users.length"
                    :users="users"
                    :platform="defaultData.platform"
                />

               <div class="paginate" v-if="defaultData.platform && users.length">
                   <paginate
                       :page-count="lastPage"
                       :click-handler="getUsers"
                       :prev-text="'<'"
                       :next-text="'>'"
                       :container-class="'search-paginator'">
                   </paginate>

                   <div class="paginateContent">
                       <img src="/images/iconUp.png" alt="">
                       <select
                           v-model="defaultData.paginateCountNumber"
                           @change="filter(page)"
                           id="selectPaginate"
                       >
                           <option v-for="item in paginateCount" :value="item">{{item}}</option>
                       </select>
                   </div>
               </div>

                <div class="not-found-user" v-if="defaultData.platform && !users.length">
                    {{ $t('no_users_found') }}
                </div>
            </div>
        </div>
        <div v-if="isLoader" class="loader-overly">
            <div class="lds-dual-ring"></div>
        </div>

        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import ClickOutside from 'vue-click-outside'
import Header from "../components/Header.vue";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import json from '../../../public/files/countries.json'
import SearchResultInstagramComponent from '../components/SearchResultInstagramComponent'
import SearchResultTwitterComponent from "../components/SearchResultTwitterComponent.vue";
import SearchResultYoutubeComponent from "../components/SearchResultYoutubeComponent.vue";
import SearchResultTikTokComponent from "../components/SearchResultTikTokComponent.vue";
import SearchResultTelegramComponent from "../components/SearchResultTelegramComponent.vue";

export default {
    name: "SearchPage",
    components: {
        SearchResultTelegramComponent,
        SearchResultTikTokComponent,
        SearchResultYoutubeComponent,
        SearchResultTwitterComponent, Header, Footer, DatePicker, SearchResultInstagramComponent},
    data() {
        return {
            paginateCount: ['10', '20', '30', '50', '100', '150', '200'],
            users: [],
            paginate: [],
            selectedAges: [],
            isShowElement: false,
            isLoader: false,
            isSelectedAge: false,
            currentPage: 1,
            page: '',
            lastPage: 0,
            activeBtnCountLeft: null,
            activeBtnCountRight: null,
            searchNotSelectedCategories: '',
            searchAges: '',
            filterValue: '',
            filteredItems: [],
            locations: json,
            platforms: [
                'Instagram',
                'Telegram',
                'Twitter',
                'TikTok',
                'Youtube',
            ],
            numberPosts: [
                '> 10',
                '> 50',
                '> 100',
                '> 200',
            ],
            gender: [
                'Male',
                'Female',
            ],
            accountTypes: [
                {
                    id: 0,
                    name: 'Not verifed',
                },
                {
                    id: 1,
                    name: 'Verifd',
                }
            ],
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
                search: '',
                paginateCountNumber: '10',
            },
            notSelectedCategories: ['Artist', 'Blogger', 'Digital creator', 'Photoghraper', 'Entrepreneur', 'Public figure'],
            notSelectedAges: ['< 20', '21 - 30', '31 - 40', '40+'],
            selectedCategories: [],
            selectedCategoryIds: [],
            numberFollowers: false,
            transitionPlatform: false,
            transitionCategory: false,
            options: ["foo", "bar", "baz", "test test"],
            isNumberOfPost: false,
            isLastPost: false,
        }
    },

    computed: {
        filterNotSelectedCategories ()  {
            return this.notSelectedCategories.filter(val => {
                return val.indexOf(this.searchNotSelectedCategories) !== -1;
            })
        },
        filterNotSelectedAge ()  {
            return this.notSelectedAges.filter(val => {
                return val.indexOf(this.searchAges) !== -1;
            })
        },
    },

    methods: {
        search() {
            this.filter(this.page)
        },
        resetField(fieldName) {
            this.defaultData[fieldName] = '';
            this.filter(this.page)
        },

        resetFiledDate(data) {
            data.searchFollowerCountLeft = ''
            data.searchFollowerCountRight = ''
            this.filter(this.page)
        },

        hideTransitionAge() {
            this.isSelectedAge = false
        },

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

            this.filter(this.page)
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

            this.filter(this.page)
        },

        selectedCategory(value) {
            const categoryMap = {
                'Artist': 1,
                'Blogger': 2,
                'Digital creator': 3,
                'Photographer': 4,
                'Entrepreneur': 5,
                'Public figure': 6
            };

            let index = this.notSelectedCategories.indexOf(value);
            if (index !== -1) {
                this.notSelectedCategories.splice(index, 1);
                const categoryId = categoryMap[value];
                if (categoryId) {
                    this.selectedCategoryIds.push(categoryId);
                }
                this.selectedCategories.push(value);
                this.selectedCategories.sort();
            }
            this.filter(this.page)
        },

        notSelectedCategory(value) {
            const categoryMap = {
                'Artist': 1,
                'Blogger': 2,
                'Digital creator': 3,
                'Photographer': 4,
                'Entrepreneur': 5,
                'Public figure': 6
            };

            let index = this.selectedCategories.indexOf(value);
            if (index !== -1) {
                const categoryId = categoryMap[value];
                if (categoryId) {
                    this.selectedCategoryIds.splice(index, 1);
                }
                this.selectedCategories.splice(index, 1);
                this.notSelectedCategories.push(value);
                this.notSelectedCategories.sort()
            }
            this.filter(this.page)
        },

        selectedAge(value) {
            let index = this.notSelectedAges.indexOf(value);
            if (index !== -1) {
                this.notSelectedAges.splice(index, 1);
                this.selectedAges.push(value);
                this.selectedAges.sort();
            }
            this.filter(this.page)
        },

        notSelectedAge(value) {
            let index = this.selectedAges.indexOf(value);
            if (index !== -1) {
                this.selectedAges.splice(index, 1);
                this.notSelectedAges.push(value);
                this.notSelectedAges.sort()
            }
            this.filter(this.page)
        },

        getUsers(page) {
            this.isLoader = true
            this.page = page

            const requestParams = {
                page: this.page,
                platform: this.defaultData.platform,
                accountType: this.defaultData.accountType.id,
                location: this.defaultData.location,
                gender: this.defaultData.gender,
                age: this.selectedAges,
                numberFollowers: this.defaultData.numberFollowers,
                numberPosts: this.defaultData.numberPosts,
                lastPost: this.defaultData.lastPost,
                searchFollowerCountLeft: this.defaultData.searchFollowerCountLeft,
                searchFollowerCountRight: this.defaultData.searchFollowerCountRight,
                search: this.defaultData.search,
                categories: this.selectedCategoryIds,
                per_page: this.defaultData.paginateCountNumber,
            }

            const filteredParams = {};
            for (const key in requestParams) {
                if (requestParams[key] !== "" && requestParams[key] !== null && requestParams[key] !== undefined) {
                    filteredParams[key] = requestParams[key];
                }
            }

            const request = {
                params: filteredParams
            };

            setTimeout(() => {
                axios.get(`/users`, request).then((response) => {
                    this.users = response.data.data;
                    this.currentPage = response.data.pagination.current_page;
                    this.lastPage = response.data.pagination.last_page;
                    this.isLoader = false;
                });
            }, 300);
        },

        filter(page) {
            if (!this.defaultData.platform) {
                this.defaultData = []
                this.isShowElement = false
                return
            }
            this.isShowElement = true
            this.getUsers(null)
        }
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

.not-found-user {
    text-align: center;
    font-size: 36px;
    margin-bottom: 30px;
    font-family: "Rubik", sans-serif;
}
.paginateContent {
    position: relative;
    img {
        position: absolute;
        right: 10px;
        top: 13px;
    }
    #selectPaginate {
        border: 1px solid #CECECE;
        border-radius: 10px;
        padding: 4px 30px 4px 30px;
        outline: 0;
        appearance: none;
        background: transparent;
    }
}

.paginate {
    display: flex;
    justify-content: center;
    margin: 100px auto 50px;
}
.mx-icon-calendar {
    right: 20px !important;
}
.mx-input {
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
                    &.active {
                       width: 100%;
                    }

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
                            height: auto;
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
    .paginate {
        flex-direction: column;
        align-items: center;
        .paginateContent {
            margin-top: 30px;
        }
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
                        &.active {
                            width: 100%;
                        }

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
                                height: auto;
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
                        &.active {
                            width: 100%;
                        }

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
                                height: auto;
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
                                height: auto;
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
    }
}
</style>
