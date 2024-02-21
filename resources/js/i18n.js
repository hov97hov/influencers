import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            join_influencer: 'Join as an Influencer',
            banner_text: 'Find Armenian influencers for your brand faster and easier',
            banner_small_text: 'Empower your Influencer Marketing',
            find_your_influencer: 'Find your Influencer',
            error_title: 'ERROR',
            error_text: 'An error has occurred',
            success_title: 'SUCCESS',
            success_text: 'Registration has been successfully received',
            home: 'Main page',
            search: 'Search',
            search_filters: 'Search filters',
            search_result: 'Search result',
            found: 'Found',
            account: 'Account',
            register_influencer: 'Register as an influencer',
            no_users_found: 'No users found',

            first_name: 'First name',
            last_name: 'Last name',
            email: 'Email address',
            phone: 'Phone number',
            influencer_name: 'Influencer name',
            choose_your_social_media_profiles: 'Choose your social medias profiles (at least one)',
            account_type: 'Account type',
            gender: 'Gender',
            birthday: 'Birthday',
            language: 'Language',
            additional_information : 'Additional information',
            submit : 'Submit',

            only_you_can_see_this_name : 'Only you can see this name',
            only_you_can_see_this_last_name : 'Only you can see this last name',
            this_will_be_shown_on_your_profile : 'This will be shown on your profile',
            your_facebook: 'Your Facebook URL',
            your_youtube: 'Your YouTube URL',
            your_instagram: 'Your Instagram URL',
            your_twitter: 'Your Twitter URL',
            your_tiktok: 'Your TikTok URL',
            your_telegram: 'Your Telegram URL',
            choose_your_account_category : 'Choose your account category',
            additional_information_placeholder: 'Provide additional information about your activity and contact information',
            category: 'Categories',
            platform: 'Platform',
            location: 'Location',
            age: 'Age',
            number_of_followers: 'Number of followers',
            number_of_posts: 'Number of posts',
            last_post: 'Last post',
            required_keywords: 'Required keywords',
            negative_keywords: 'Negative keywords',
        },
        ru: {
            join_influencer: 'Присоединяйтесь в качестве влиятельного человека',
            banner_text: 'Находите влиятельных лиц в Армении для своего бренда быстрее и проще',
            banner_small_text: 'Расширьте возможности вашего маркетинга влияния',
            find_your_influencer: 'Найдите свое влияние',
            error_title: 'ОШИБКА',
            error_text: 'Произошла ошибка',
            success_title: 'УСПЕХ',
            success_text: 'Регистрация успешно получена',
            home: 'Главная страница',
            search: 'Поиск',
            search_filters: 'Поисковые фильтры',
            search_result: 'Результат поиска',
            found: 'Найдено',
            account: 'Счета',
            register_influencer: 'Зарегистрируйтесь в качестве влиятельного лица',

            first_name: 'Имя',
            last_name: 'Фамилия',
            email: 'Электронной почты',
            phone: 'Телефон',
            influencer_name: 'Имя влиятельного лица',
            choose_your_social_media_profiles: 'Выберите свои профили в социальных сетях (хотя бы один)',
            category: 'Категория',
            account_type: 'Тип учетной записи',
            gender: 'Пол',
            birthday: 'День рождения',
            language: 'Язык',
            additional_information: 'Дополнительная информация',
            submit : 'Представить',

            only_you_can_see_this_name : 'Только ты можешь видеть это имя',
            only_you_can_see_this_last_name : 'Только ты можешь увидеть это последнее имя',
            this_will_be_shown_on_your_profile : 'Это будет показано в вашем профиле',
            your_facebook: 'Ваш URL на Facebook',
            your_youtube: 'Ваш URL на YouTube',
            your_instagram: 'Ваш URL в Instagram',
            your_twitter: 'Ваш URL в Твиттере',
            your_tiktok: 'Ваш URL в TikTok',
            your_telegram: 'Ваш URL-адрес в Telegram',
            choose_your_account_category : 'Выберите категорию своего аккаунта',
            additional_information_placeholder: 'Предоставьте дополнительную информацию о своей деятельности и контактную информацию',

            platform: 'Платформа',
            location: 'местоположение',
            age: 'возраст',
            number_of_followers: 'Количество подписчиков',
            number_of_posts: 'Количество должностей',
            last_post: 'Последнее сообщение',
            required_keywords: 'Обязательные ключевые слова',
            negative_keywords: 'Отрицательные ключевые слова',
            no_users_found: 'Пользователи не найдены',
        },
        am: {
            join_influencer: 'Միացեք որպես ազդեցիկ',
            banner_text: 'Ավելի արագ և հեշտ Գտեք հայկական ազդեցիկներին ձեր ապրանքանիշի համար',
            banner_small_text: 'Հզորացրեք ձեր ազդեցության շուկայավարումը',
            find_your_influencer: 'Գտեք Ձեր ազդակիրը',
            error_title: 'ՍԽԱԼ',
            error_text: 'Սխալ է տեղի ունեցել',
            success_title: 'Պատասխան',
            success_text: 'Գրանցումը հաջողությամբ ստացվել է',
            home: 'Գլխավոր էջ',
            search: 'Որոնում',
            search_filters: 'Որոնման զտիչներ',
            search_result: 'Որոնման արդյունքը',
            found: 'Գտնվել է',
            account: 'Հաշիվներ',
            register_influencer: 'Գրանցվեք որպես ազդեցիկ',


            first_name: 'Անուն',
            last_name: 'Ազգանուն',
            email: 'Էլ. փոստի հասցե',
            phone: 'Հեռախոս',
            influencer_name: 'Ազդեցիկ անուն',
            choose_your_social_media_profiles: 'Ընտրեք ձեր սոցիալական մեդիայի պրոֆիլները (առնվազն մեկը)',
            category: 'Կատեգորիա',
            account_type: 'Հաշվի տեսակը',
            gender: 'Սեռ',
            birthday: 'Ծննդյան օր',
            language: 'Լեզու',
            additional_information: 'Լրացուցիչ տեղեկություններ',
            submit : 'Ներկայացնել',

            only_you_can_see_this_name : 'Միայն դուք կարող եք տեսնել այս անունը',
            only_you_can_see_this_last_name : 'Միայն դուք կարող եք տեսնել այս ազգանունը',
            this_will_be_shown_on_your_profile : 'Սա կցուցադրվի Ձեր պրոֆիլում',
            your_facebook: 'Ձեր ՈՒՐԼ-ը Facebook-ում',
            your_youtube: 'Ձեր ՈՒՐԼ-ը YouTube-ում',
            your_instagram: 'Ձեր Instagram URL-ը',
            your_twitter: 'Ձեր Twitter ՈՒՐԼ-ը',
            your_tiktok: 'Ձեր TikTok URL-ը',
            your_telegram: 'Ձեր ՈՒՐԼ-հասցեն Telegram-ում',
            choose_your_account_category : 'Ընտրեք ձեր հաշվի կատեգորիան',
            additional_information_placeholder: 'Տրամադրեք լրացուցիչ տեղեկություններ Ձեր գործունեության և կոնտակտային տվյալների վերաբերյալ',

            platform: 'Հարթակ',
            location: 'գտնվելու վայրը',
            age: 'Տարիք',
            number_of_followers: 'Բաժանորդների քանակը',
            number_of_posts: 'Պաշտոնների քանակը',
            last_post: 'Վերջին գրառումը',
            required_keywords: 'Պարտադիր հիմնաբառեր',
            negative_keywords: 'Բացասական հիմնաբառեր',
            no_users_found: 'Օգտատերեր չեն գտնվել',
        },
    }
})
