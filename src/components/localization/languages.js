
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    ukr: {
        link: ['Головна', 'Категорії', 'Функції', 'Оновлення'],
        title: 'Корейськиsaй розмовник',
        description: 'Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!',
        Table: {
            tables: [
                {
                    title: 'Розділи',
                    description: 'Основні слова та вирази, які допоможуть вам у побутовому спілкуванні з носіями мови.'
                },
                {
                    title: 'Словник',
                    description: 'Більш ніж 900 слів у алфавітному порядку.'
                },
                {
                    title: 'Нотатки',
                    description: 'Робіть власні нотатки та записуйте все, що хочете запам’ятати.'
                },
            ],
            btnTable: 'Дізнатися більше'
        },
        titleFunctins: 'Ми розробили багато цікавих функцій',
        descriptionFunctions: 'Ми розробили багато цікавих функцій',
        itemsFunctions: ['Улюблене', 'Діалоги'],
        titleAlphabet: 'Для початківців у розмовнику є Корейський алфавіт',
        descriptionAlphabet: 'Вважається, що корейський алфавіт можна вивчити всього лише  за 15 хв! Cпробуєте?',
        titleSearch: 'Зручний пошук',
        descriptionSearch: 'Всього лише за мить допоможе знайти потрібне  вам слово чи фразу шукайте всюди:',
        itemsSearch: ['Основні вирази', 'Числа', 'Їжа', 'Покупки', 'Університет', 'Транспорт', 'Час', 'Зв’язок', 'Додаткові матеріали', 'Словник'],
        subscribeForm: 'Підписатися',
        descriptionForm: 'Отримуйте наші оновлення з пропозиціями та планами!',
        placeHolderForm: 'Введіть електронну пошту',
        btnForm: 'Підписатися'
    },
    kor: {
        link: ['Головна', 'Категорії', 'Функції', 'Оновлення'],
        title: '한국어 회화집',
        description: '한국어로 의사 소통을 훨씬 쉽고 효과적으로 하기 위한 애플리케이션. 다운로드하세요!',
        Table: {
            tables: [
                {
                    title: '챕터',
                    description: '새로운 단어들이나 문장들을 쉽게 배울수 있습니다'
                },
                {
                    title: '사전',
                    description: '알파벳 순서로 900 단어 이상'
                },
                {
                    title: '메모',
                    description: '자주 사용되는 단어나 잊고 싶지 않는 것도 작성하면 됩니다'
                },
            ],
            btnTable: '더 알아보기'
        },
        titleFunctins: '학습자 위한 유용한 가능',
        descriptionFunctions: '즐겨찾기에 자주 사용되는 구문 추가 대화를 통해 실제 가정 상황을 연습',
        itemsFunctions: ['즐겨찾기', '대화'],
        titleAlphabet: '한글',
        descriptionAlphabet: '한글을 배웁시다!',
        titleSearch: '특정 어휘 검색',
        descriptionSearch: '어휘와 구문을 빨리 찾을 수 있습니다:',
        itemsSearch: ["기본 표현", "숫자", "음식", "쇼핑", "대학교", "교통", "시간", "커뮤니케이션", "추가 자료", "사전"],
        subscribeForm: '구독하기',
        descriptionForm: '제안 및 계획에 대한 업데이트!',
        placeHolderForm: '이메일을 입력하십시오',
        btnForm: '구독하기'
    }
})

export default strings;