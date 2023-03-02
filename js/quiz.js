class Quiz{
    constructor(questions){
        this.questionNumber = 0;
        this.questions = questions;
        this.form = document.forms[0];
        this.buttonElement = document.querySelector(".buttonContainer > button");
        this.buttonElement.addEventListener("click", this.checkAnswers.bind(this));
        this.generateQuestions();
    }

    generateQuestions(){
        for(let question of this.questions){
            let quest = document.createElement("p");
            quest.innerText = question.txt;
            quest.className = "question";

            let radioContainer = document.createElement("div");
            radioContainer.className = "radioContainer";
            for(let i = 0; i < question["answers"].length; i++){
                radioContainer.innerHTML += `<label><input type='radio' name='radio${this.questionNumber}' value='${i}'>${question.answers[i].atxt}</label>`
            }

            let img = document.createElement("img");
            img.src = question.src;

            let div = document.createElement("div");
            div.className = "imgContainer";
            div.appendChild(img);
            
            let fieldset = document.createElement("fieldset");
            fieldset.appendChild(quest);
            fieldset.appendChild(radioContainer);
            fieldset.appendChild(div);
            this.form.appendChild(fieldset);
            this.questionNumber++;
        }
    }

    checkAnswers(){
        let fieldsets = document.querySelectorAll("fieldset");
        let counter = new Map();
        for(let i = 0; i < fieldsets.length; i++){
            let inputs = fieldsets[i].querySelectorAll("input");
            let answer;
            for(let input of inputs)
                if(input.checked)
                    answer = this.questions[i]["answers"][Number(input.value)];
            if(answer == undefined){
                alert("Вы ответили не на все вопросы");
                return;
            } 
            for(let way of answer.score) counter.set(way, counter.get(way) + 1);

        }
        let result = Array.from(counter.keys()).reduce((a, b) => counter.get(a) >= counter.get(b) ? a : b, -99);
        window.location.href = `result.html?r=${result}`
    }
}

let prog_questions = [{
    "txt": "Постарайтесь выбрать один из четырёх предложенных вариантов:",
    "src": "../img/1prog.jpg",
    "answers": [{
        "atxt": "Разработка компьютерных игр и мобильных приложений",
        "score": ["ifst"],
    },
    {
        "atxt": "Изучение математических основ информатики",
        "score": ["ivcht"],
    },
    {
        "atxt": "Изучение средств разработки прикладного программного обеспечения",
        "score": ["pinf"],
    },
    {
        "atxt": "Детальное изучение всех этапов создания программного продукта",
        "score": ["pinj"],
    }]},
    {
    "txt": "Вы любите высшую математику?",
    "src": "../img/2prog.jpg",
    "answers": [{
        "atxt": "Да",
        "score": ["ivcht"],
    },
    {
        "atxt": "Нет",
        "score": ["pinf", "ifst"],
    },
    {
        "atxt": "Немного",
        "score": ["pinj"],
    }]},
    {
    "txt": "Хотели бы Вы разрабатывать приложения или игры?",
    "src": "../img/3prog.jpg",
    "answers": [{
        "atxt": "Да",
        "score": ["ifst", "pinf"],
    },
    {
        "atxt": "Нет",
        "score": ["ivcht", "pinj"],
    }]},
    {
    "txt": "Кем бы Вы хотели работать?",
    "src": "../img/4prog.jpg",
    "answers": [{
        "atxt": "Веб-программистом",
        "score": ["ifst"],
    },
    {
        "atxt": "Разработчиком программного обеспечения",
        "score": ["pinj"],
    },
    {
        "atxt": "Администратор операционных систем",
        "score": ["ivcht"],
    },
    {
        "atxt": "Специалистом по тестированию программных систем",
        "score": ["pinf"],
    }]},
    {
    "txt": "Какие технологии программирования Вам больше всего нравятся?",
    "src": "../img/5prog.jpg",
    "answers": [{
        "atxt": "C, C#, JAVA, Perl, PHP, JSP, EJB, J2EE",
        "score": ["ifst"],
    },
    {
        "atxt": "С, C#, .NET, Java, PHP, LISP, PROLOG",
        "score": ["pinf"],
    },
    {
        "atxt": "HTML5, XML, Java, PHP, MS SQL Server, MySQL",
        "score": ["ivcht"],
    },
    {
        "atxt": "Fortran, Pascal, C++, Java, Prolog, Lisp",
        "score": ["pinj"],
    }]},
    {
    "txt": "В каких компаниях из предложенных Вы бы хотели работать больше всего? ",
    "src": "../img/6prog.jpg",
    "answers": [{
        "atxt": "EPAM, Mirantis",
        "score": ["pinj"],
    },
    {
        "atxt": "Neoflex, EPAM Systems",
        "score": ["ifst"],
    },
    {
        "atxt": "Лаборатория Касперского",
        "score": ["ivcht"],
    },
    {
        "atxt": "ООО «СибИнтек»",
        "score": ["pinf"],
    }]},
    {
    "txt": "Постарайтесь выбрать один из четырёх предложенных вариантов:",
    "src": "../img/7prog.jpg",
    "answers": [{
        "atxt": "Мультимедийные технологии",
        "score": ["ifst"],
    },
    {
        "atxt": "Аппаратное обеспечение компьютерных систем",
        "score": ["ivcht"],
    },
    {
        "atxt": "Тестирование программного обеспечения",
        "score": ["pinf"],
    },
    {
        "atxt": "Освоение инструментов проектирования",
        "score": ["pinj"],
}]}];

let media_questions = [{
    "txt": "Постарайтесь выбрать один из трёх предложенных вариантов:",
    "src": "../img/1design.jpg",
    "answers": [{
        "atxt": "Рисовать графические элементы веб-приложения (кнопки, логотипы, меню)",
        "score": ["dizn"],},
    {
        "atxt": "Привлекать аудиторию с помощью рекламы, рассылок и содержания",
        "score": ["rklm"],
    },
    {
        "atxt": "Монтировать видеоролики для сайта",
        "score": ["tlvd"],
    }]},
    {
    "txt": "Постарайтесь выбрать один из трёх предложенных вариантов:",
    "src": "../img/2design.jpg",
    "answers": [{
        "atxt": "Делать дизайн интерфейса",
        "score": ["dizn"],},
    {
        "atxt": "Рекламировать сайт в интернете",
        "score": ["rklm"],
    },
    {
        "atxt": "Видеосъемки проекта",
        "score": ["tlvd"],
    }]},
    {
    "txt": "Что Вы любите больше всего?",
    "src": "../img/3design.jpg",
    "answers": [{
        "atxt": "Творчество, хочу стать компьютерным дизайнером",
        "score": ["dizn"],},
    {
        "atxt": "Коммуникации, хочу заниматься рекламой и связями с общественностью",
        "score": ["rklm"],
    },
    {
        "atxt": "Медиа, хочу делать видео и телепередачи",
        "score": ["tlvd"],
    }]},
    {
    "txt": "Представьте, что Вы на выставке. Что Вас больше привлекает в экспонатах:",
    "src": "../img/4design.jpg",
    "answers": [{
        "atxt": "Цвет, совершенство форм",
        "score": ["dizn"]},
    {
        "atxt": "Как этот экспонат попал на выставку",
        "score": ["rklm"],},
    {
        "atxt": "Можно ли его фотографировать",
        "score": ["tlvd"],
    }]},
    {
    "txt": "Что бы Вы хотели постоянно изучать?",
    "src": "../img/5design.png",
    "answers": [{
        "atxt": "Что бы Вы хотели постоянно изучать?",
        "score": ["dizn"]},
    {
        "atxt": "Как привлекать клиентов",
        "score": ["rklm"],},
    {
        "atxt": "Новинки в кино",
        "score": ["tlvd"],
    }]},
    {
    "txt": "С чем Вы можете работать ежедневно?",
    "src": "../img/6design.png",
    "answers": [{
        "atxt": "Со шрифтами, фотографиями, цветами",
        "score": ["dizn"]},
    {
        "atxt": "С трёхмерной визуализацией, графикой, видео",
        "score": ["rklm"],},
    {
        "atxt": "С видеосъемкой, видеоматериалами, монтажом",
        "score": ["tlvd"],
    }]},
    {
    "txt": "Что бы Вы хотели разрабатывать?",
    "src": "../img/7design.png",
    "answers": [{
        "atxt": "Интерфейс сайта",
        "score": ["dizn"]},
    {
        "atxt": "Продвижение товара или услуги компании в интернете",
        "score": ["rklm"],},
    {
        "atxt": "Сюжет видеоролика",
        "score": ["tlvd"],
}]}];

let params = (new URL(document.location)).searchParams;
let q;
if(params.get("q") == "programmers") q = new Quiz(prog_questions, null);
else if(params.get("q") == "media") q = new Quiz(media_questions, null);
