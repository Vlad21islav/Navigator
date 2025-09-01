const all = document.querySelector(".all");

function add_main_menu_button() {
    all.style.marginTop = "100px";
    all.innerHTML += `<div class="btn fixed-btn wide" onclick="main_menu()">Вернуться на главное меню</div>`
}

window.main_menu = function() {
    all.style.marginTop = "0px";
    all.innerHTML = `
    <div class="container">
        <h1>Навигатор по математике</h1>
        <div class="grid">
            <button class="btn btn-green" onclick="principles_of_taking_marks()">Принципы<br>получения<br>оценок</button>
            <div class="btn btn-orange" onclick="demo_versions()">Демоверсии<br>проверочных<br>работ</div>
            <div class="btn btn-purple" onclick="classworks()">Классные<br>работы</div>
            <div class="btn" onclick="base_criteria()">Базовые<br>критерии<br>проверки ДЗ</div>
            <div class="btn" onclick="feedback()">Обратная<br>связь</div>
            <div class="btn btn-yellow" onclick="schedule_of_improvements()">Расписание<br>исправлений</div>
            <div class="btn wide" onclick="answer_form_n2()">Оформление<br>бланков<br>ответов №2</div>
        </div>
    </div>`;
}

window.principles_of_taking_marks = function() {
    // обработка нажатия на кнопку "Принципы получения оценок"
    all.innerHTML = `
    <div class="container">
        <h1>Принципы получения оценок</h1>
        <div class="grid">
            <div class="btn btn-green wide" onclick="attestation_marks()">Выдержки из школьного<br>положения об оценивании<br>(как ставят оценки в аттестат)</div>
            <div class="btn btn-green" onclick="final_grades_in_maths()">Итоговые<br>оценки по<br>математике</div>
            <div class="btn btn-green" onclick="current_grades_in_maths()">Виды текущих<br>оценок по<br>математике</div>
        </div>
    </div>`;
    add_main_menu_button();
}

window.attestation_marks = function() {
    // обработка нажатия на кнопку "Выдержки из школьного положения об оценивании"
    all.innerHTML = `
    <div class="container">
        <div class="text-container">
            <img src="images/attestation marks.png" style="width: 100%; height: auto; object-fit: cover;" alt="Пример">
        </div>
    </div>`;
    add_main_menu_button();
}

window.final_grades_in_maths = function() {
    // обработка нажатия на кнопку "Итоговые оценки по математике"
    all.innerHTML = `
    <div class="container">
        <h1>Итоговые оценки по математике</h1>
        <div class="text-container">
            <b>Полугодовая оценка по алгебре, геометрии и вероятности выставляется следующим образом:</b>

            <ol>
            <li>
                <p>Проверяется наличие оценок за проверочные и контрольные работы в случае отсутствия хотя бы одной – А/3 значительные пропуски (&gt;40%) оцениваемых классных работ, опросов, ЕГКР, пробников ОГЭ также будут влиять на А/З.</p>
            </li>
            <li>
                Проверяется наличие необходимого количества оценок, в соответствии со школьным положением:<br>
                
                &nbsp;&nbsp;&nbsp;3 оценок при 1 часе в неделю<br>
                &nbsp;&nbsp;&nbsp;5 оценок при 2 часах в неделю<br>
                &nbsp;&nbsp;&nbsp;7 оценок при 3 и более часах в неделю в случае нехватки – А/З

            </li>
            <li>
                <p>Проверяется количество пропусков уроков, в соответствии со школьным положением: если больше 50% уроков пропущено по неуважительной причине – A/3.</p>
            </li>
            <li>
                Далее выставляется оценка за триместр, в соответствии со школьным положением:<br>

                &nbsp;&nbsp;&nbsp;оценка 5 при среднем балле от 4,6<br>
                &nbsp;&nbsp;&nbsp;оценка 4 при среднем балле от 3,6<br>
                &nbsp;&nbsp;&nbsp;оценка 3 при среднем балле от 2,6<br>
                &nbsp;&nbsp;&nbsp;А/З при среднем балле менее 2,6

            </li>
            </ol>

            <p>Исправление оценок и «донабор» необходимых обсуждаются в индивидуальном порядке.</p>
            <p>Для предмета «вероятность и статистика» не применяется первый пункт.</p>
        </div>
    </div>`;
    add_main_menu_button();
}

window.current_grades_in_maths = function() {
    // обработка нажатия на кнопку "Виды текущих оценок по математике"
    all.innerHTML = `
    <div class="container">
        <h1>Текущие оценки по математике</h1>
        <div class="text-container">
            <b>Виды текущих оценок по математике</b>

            <ol>
                <p><li>
                    Домашняя работа (коэффициент 1)
                    выставляется за домашнюю работу, в соответствии с критериями
                    все критерии оговариваются заранее
                    если домашняя работа не проверяется, то об этом тоже сообщается
                    заранее сообщается если оценка не выставляется, а ставится СМ/НВ
                </li></p>
                <p><li>
                    Решение задач (коэффициент 1>)
                    выставляется за работу на уроке
                </li></p>
                <p><li>
                    Опрос (коэффициент 1)
                    выставляется за написание работы «опроса» в конце урока
                </li></p>
                <p><li>
                    Комбинированная работа (коэффициент 2)
                    выставляется за проверочные и иные работы, имеющие коэффициент 2
                </li></p>
                <p><li>
                    Контрольная работа (коэффициент 3)
                    выставляется за контрольные работы
                </li></p>
                <p><li>
                    ЦДЗ (коэффициент 1)
                    выставляется за «гиперматику» или иные ЦДЗ
                    заранее сообщается если оценка не выставляется, а ставится СМ/НВ
                </li></p>
                <p><li>
                    Творческая работа (коэффициент 1)
                    выставляется за оцифровку классных работ, создания примеров оформления второй части ОГЭ и иные дополнительные задания
                </li></p>
            </ol>
        </div>
    </div>`;
    add_main_menu_button();
}

window.demo_versions = function() {
    // обработка нажатия на кнопку "Демоверсии проверочных работ"
    all.innerHTML = `
    <div class="container">
        <h1>Демоверсии проверочных работ</h1>
        <div class="text-container text-orange">
            Материалы будут добавляться постепенно, по мере создания демоверсий
        </div>
    </div>`;
    add_main_menu_button();
}

window.classworks = function() {
    // обработка нажатия на кнопку "Классные работы"
    all.innerHTML = `
    <div class="container">
        <h1>Классные работы</h1>
        <div class="grid">
            <div class="btn btn-purple wide" onclick="window.location.href='https://drive.google.com/drive/folders/1Eju9UBANfp2gaNm55Vwxfixi00zjLL20?usp=sharing'">Что нужно для получения оценки за оцифровку классной работы, а также примеры оцифровки</div>
            <div class="btn btn-purple wide" onclick="window.location.href='https://drive.google.com/drive/folders/1s_4SYbQvXqbWhbxTVwCpNUWs57X7pSzD?usp=sharing'">Ссылка на папку с классными работами</div>
        </div>
    </div>`;
    add_main_menu_button();
}

window.base_criteria = function() {
    // обработка нажатия на кнопку "Базовые критерии проверки ДЗ"
    all.innerHTML = `
    <div class="container">
        <h1>Базовые критерии проверки ДЗ</h1>
        <div class="text-container">
            <b>Базовые критерии домашней работы (оформление)</b>

            <ul>
                <p><li>
                    Наличие тетради в клетку формата А5 или А4
                </li></p>
                <p><li>
                    Домашняя работа сделана в тетради по
                    соответствующему предмету
                </li></p>
                <p><li>
                    Указана дата выполнения домашней работы
                </li></p>
                <p><li>
                    Имеется надпись «домашняя работа»
                </li></p>
                <p><li>
                    Указан номер задачи по центру листа или на полях
                </li></p>
                <p><li>
                    Указаны пункты в номере (при наличии) 
                </li></p>
                <p><li>
                    Каждое действие записано на отдельной строчке
                </li></p>
                <p><li>
                    Указан отдельной строчкой ответ (желательно выделить текстовыделителем или подчеркнуть)
                </li></p>
            </ul>

            Невыполнение каждого критерия снижает
            оценку за домашнюю работу на один балл
        </div>
    </div>`;
    add_main_menu_button();
}

window.feedback = function() {
    // обработка нажатия на кнопку "Обратная связь"
    all.innerHTML = `
    <div class="container">
        <h1>Обратная связь</h1>
        <div class="text-container">
            По всем вопросам и предложениям можно
            обращаться в личные сообщения в телеграмм
            <br><br>
            Чаще всего буду отвечать не раньше 20:00
        </div>
        <div class="btn wide" onclick="window.location.href='https://github.com/Vlad21islav/Navigator/discussions/1#discussion-8828367'">По вопросам работоспособности сайта лучше писать через github</div>
    </div>`;
    add_main_menu_button();
}

window.schedule_of_improvements = function() {
    // обработка нажатия на кнопку "Расписание исправлений"
    all.innerHTML = `
    <div class="container">
        <h1>Расписание исправлений</h1>
        <div class="text-container text-yellow">
            Исправление работ проводится с 7:30 до 8:10 по пятницам
            <br><br>
            О других днях для исправлений или оботсутствии исправлений в пятницу сообщаетсяотдельно
        </div>
    </div>`;
    add_main_menu_button();
}

window.answer_form_n2 = function() {
    // обработка нажатия на кнопку "Оформление бланков ответов №2"
    all.innerHTML = `
    <div class="container">
        <h1>Оформление бланков ответов №2</h1>
        <div class="text-container">
            <b>Для получения оценки за пример оформления бланков ответов №2 необходимо:</b>

            <ul>
                <p><li>
                    Оформлять задание второй части на распечатанном бланке ответов №2
                </li></p>
                <p><li>
                    Выполнить задание верно
                </li></p>
                <p><li>
                    Оформить задание строго в соответствии с критериями (ООФ/ОДЗ, ограничения, замены и пр.), понятным почерком
                </li></p>
                <p><li>
                    Отсканировать работу (полностью лист бланка), скан должен быть читаемым, контрастным
                </li></p>  
                <p><li>
                    После создания такого файла его необходимо отправить (через telegram) Тимофею Анатольевичу на утверждение, после проверки и, при необходимости, внесения правок, будет выставлена оценка.
                </li></p>
            </ul>
        </div>
        <div class="btn width" onclick="window.location.href='https://drive.google.com/file/d/1ZwaDP82nnFZ1iftG3NNbqxPKf2XdTVoo/view?usp=sharing'">Ссылка на бланки ОГЭ (для печати)</div>
        <br>
        <div class="btn width" onclick="window.location.href='https://drive.google.com/drive/folders/1NeoTa9jO57lp4c7EwQbDhMjWYgwzGpJm?usp=sharing'">Ссылка на папку с оформлениями<br>бланков ответов</div>
    </div>`;
add_main_menu_button();
}

main_menu();

