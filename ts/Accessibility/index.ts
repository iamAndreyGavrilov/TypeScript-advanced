// Accessibility
// Доступность в веб-разработке означает создание веб-сайтов, которые могут быть использованы
// всеми людьми, независимо от их физических, сенсорных или когнитивных способностей. Веб-сайты должны быть доступными
// и удобными для всех пользователей, включая тех, кто использует вспомогательные технологии, такие как скринридеры
// (программы чтения экрана) или аппаратные средства ввода на основе жестов.


// Подписи к изображениям (alt тексты):
// Все изображения должны иметь атрибут alt с описанием содержимого изображения для тех, кто использует скринридеры.
//
// <img src="dog.jpg" alt="Собака играет с мячом">


//  Подписи форм:
//  Элементы форм должны иметь ясные и понятные подписи, чтобы пользователи могли понять, какую информацию вводить.
//
// <label for="email">Электронная почта:</label>
// <input type="email" id="email" name="email">


//  Контраст цветов:
//  Обеспечьте высокий контраст между текстом и фоном для лучшей читаемости.
//
// body {
//     color: #333; /* Темный текст */
//     background-color: #fff; /* Светлый фон */
// }


// Использование ARIA:
//     ARIA (Accessible Rich Internet Applications) - это набор атрибутов, которые делают веб-сайты более
//     доступными для людей с ограниченными возможностями.
//
// <div role="navigation" aria-label="Основное меню">
//     <!-- Элементы навигации -->
// </div>


// Клавиатурный доступ:
//     Убедитесь, что ваш сайт может быть полностью использован с клавиатуры, и что все интерактивные элементы доступны через клавиатуру.
//
// <button tabindex="0">Нажми меня</button>


// Скрытый текст:
//     Предоставляйте скрытый текст для вспомогательных технологий, когда визуальные подсказки недостаточны.
//
//     .visually-hidden {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     padding: 0;
//     overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     border: 0;
// }


// Тестирование доступности:
//    Используйте инструменты для тестирования доступности, такие как axe или Lighthouse, чтобы идентифицировать
// и исправить проблемы с доступностью на вашем сайте.