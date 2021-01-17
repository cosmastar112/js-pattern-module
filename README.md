# js-pattern-module

Попытка реализации паттерна "Модуль" для собственнных нужд после прочтения теории.

jQuery используется просто как пример использования сторонней библиотеки.

## Идея
* Всем управляет корневой модуль root.js
* Инициализация корневого модуля выполняется после загрузки DOM (page's Document Object Model becomes safe to manipulate)
* Сабмодули следует называть по шаблону: root.x.y, например: root.ext1
* В сабмодуле должна быть определена public-функция init
* Сабмодуль должен зарегестрировать себя (функция registerModule) в корневном модуле для инициализации
* Инициализация корневного модуля запускает инициализацию всех сабмодулей

## Теория
* https://addyosmani.com/largescalejavascript/#modpattern
* https://learn.jquery.com/code-organization/concepts/#the-module-pattern
* yii.js в Yii2 (https://github.com/yiisoft/yii2/blob/master/framework/assets/yii.js)
