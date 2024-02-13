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
            home: 'Main page',
        },
        ru: {
            join_influencer: 'Присоединяйтесь в качестве влиятельного человека',
            banner_text: 'Находите влиятельных лиц в Армении для своего бренда быстрее и проще',
            banner_small_text: 'Расширьте возможности вашего маркетинга влияния',
            find_your_influencer: 'Найдите свое влияние',
            error_title: 'ОШИБКА',
            error_text: 'Произошла ошибка',
            success_title: 'УСПЕХ',
            home: 'Главная страница',
        },
        am: {
            join_influencer: 'Միացեք որպես ազդեցիկ',
            banner_text: 'Ավելի արագ և հեշտ Գտեք հայկական ազդեցիկներին ձեր ապրանքանիշի համար',
            banner_small_text: 'Հզորացրեք ձեր ազդեցության շուկայավարումը',
            find_your_influencer: 'Գտեք Ձեր ազդակիրը',
            error_title: 'ՍԽԱԼ',
            error_text: 'Սխալ է տեղի ունեցել',
            success_title: 'ՀԱՋՈՂՈԻԹՅՈՒՆ',
            home: 'Գլխավոր էջ',
        },
    }
})
