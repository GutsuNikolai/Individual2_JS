/**
 * Получает случайную активность из API.
 * @returns {Promise<string>} Текст активности.
 * @throws {Error} Если возникает ошибка при получении данных.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('К сожалению, произошла ошибка', error);
        return 'К сожалению, произошла ошибка';
    }
}

/**
 * Обновляет активность на странице каждые 60000 миллисекунд.
 */
export function updateActivityPeriodically() {
    updateActivity();
    setTimeout(updateActivity, 60000);
}

/**
 * Обновляет активность и отображает ее на странице.
 * @throws {Error} Если возникает ошибка при обновлении активности.
 */
async function updateActivity() {
    try {
        const activity = await getRandomActivity();
        displayActivity(activity);
        setTimeout(updateActivity, 60000);
    } catch (error) {
        console.error('Ошибка при обновлении активности:', error);
    }
}

/**
 * Отображает активность на странице.
 * @param {string} activity Текст активности для отображения.
 */
function displayActivity(activity) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activity;
}

/*
   1. _Какое значение возвращает функция fetch?_
   2. _Что представляет собой Promise?_
   3. _Какие методы доступны у объекта Promise?_
   
   1.fetch возвращает объект Promise. 
   2.Promise это объект, который представляет результат асинхронной операции.
   Когда операция завершается, Promise может быть выполнен (успешно завершен) или 
   отклонен (завершен с ошибкой).
   3.*then(): используется для добавления обработчиков успешного завершения
    (успешного выполнения) и отклонения (ошибки) Promise.принимает два
    аргумента-функции обратного вызова для: успешного выполнения для отклонения. 
    *catch(): используется для добавления обработчика ошибок Promise. 
    Он принимает один аргумент - функцию обратного вызова для обработки ошибок.
    *finally(): используется для добавления обработчика, который будет выполнен 
    независимо от того, успешно ли завершается промис или нет. Он принимает один 
    аргумент - функцию обратного вызова, которая будет выполнена независимо от 
    исхода Promise.
*/