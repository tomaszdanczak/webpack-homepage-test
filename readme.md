Strona jest do obejrzenia [tutaj](https://tomaszdanczak.github.io/webpack-homepage-test/) 🚀. 
- 👍 Strona jest krótkim info o mnie. 
- 👍 Umieściłem na niej część z moich notatek z najlepszego [kursu frontendu](https://cotenfrontend.pl) na polskim rynku: [WTF Co Ten Frontend](https://cotenfrontend.pl). 
- 👍 Wszystkie moje notatki znajdują się w tym pliku readme.md
- 👍 Napisałem w JS konwerter dodający znacznik, które są później wykorzystywane do kolorowania składni. 

![cover](https://cotenfrontend.pl/img/cover.png)

# Tydzień II

### Tagi HTML5
```html
<html lang="pl">  <!-- pamiętać, żeby na polskich stronach wpisywać pl -->
<main>   <!-- w tagu main powinna znajdować się główna treść strony -->
<section>  <!-- każda sekcja powinna posiadać nagłówek -->
<h1>  <!-- nagłówek h1 musi być na stronie (musi być unikalny i w main) -->    
```
### Visual Studio Code
- `View -> Toogle Word Wrap` - załączenie zawijania wierszy
- `Ctrl + Shift + P` - wpisujemy Format Document
### Dokumentacje HTML i CSS
- [Link](https://www.w3.org/TR/html52/) do dokumentacji HTML5
- [Link](https://www.w3.org/TR/CSS/) do dokumentacji CSS
### Inne
- 'WAŻNE' - mówimy arkuszy styl`ów` nie sty`li`
- W celu odświeżenia strony używamy kombinacji klawiszy `Ctrl + R`, ale możemy także użyć klawisza `F5`

# Tydzień III

#### Czym jest trello?
Trello jest prostym narzędziem do organizacji pracy opartym na zasadach Kanban. Trello ułatwia śledzenie postępu prac/nauki. Jest dostępny pod [linkiem](https://trello.com/).
#### Praca z Trello
- jest zalecane trzymanie jednego zadania w doing
- należy dobrze opisywać "definition of done" (DOD)
- zalecane jest używanie trzech zakładek
### Tagi HTML
Poza tagiem `<main>` powinno znajdować się wszystko co się powtarza na stronie np. tagi `<header>` i `<footer>`. Roboty czytają tylko to o jest w tagu `<main>`.
  
Tag `<article>` może zawierać tagi `<header>` oraz `<footer>`.

Tagi `<img>` i `<br>` można zamykać `>` lub `/>`. Obie wersje są poprawne.
### Stylowanie
- używać tylko klas do stylowania elementów, żeby nie mieszać w specyficzności (nie bawimy się w specyficzność)
- `<body>` i `<html>` mogą być bez klasy
- przy stylowaniu starać się nie używać dyrektywy `!important`
- jak w VSC najedzie się kursorem myszki na selektor to pokaże się jego specyficzność
- nazwy klas po angielsku, zgodnie z przeznaczeniem, używamy kebabCase
- w selektorach zawsze jest stylowany ostatni element (poprzednie elementy selektora tylko nakierunkowują)
```css
nav a {
  color: #04ac26;
 }
 ```

Przykład użycia klas:
```html
<header class="header">header<header/>
<main class="main">main<main/>
<footer class="footer">footer<footer/>
```
### Konsola
- `ls -l` - wyświetla zawartość katalogu w formie listy (mamy też dodatkowe informacje jak np. datę ostatniej modyfikacji)
- `cd..` - przenosi do katalogu wyżej (skrót od change directory)
- `mkdir nazwa` - tworzy katalog
- `pwd` - pokazuje całą ścieżkę do katalogu
- `code .` - katalog w którym się znajdujemy uruchamia w VSC
- `cd ../..` - przejście o dwa katalogi w górę
### Różne
- [Google Slides](https://www.google.com/slides/about/) - strona do tworzenia prezentacji
- Shift + strzałki prawo/lewo - zaznacza tekst (przydeja się w momencie jak utworzymy tag za pomocą EMMET i znacznikiem zamykającym chcemy objąć jakiś fragment kodu)
- w DevToolsach w zakładce Network możemy sprawdzić jak pliki są ładowane
- nowe feautery - nowe funkcje / nowe cechy
- '<script src="main.js"><script/> - umieszczamy przed tagiem zamykającym `<body/>`
- 'console.log(`Nazywam się ${name} i mam ${age} lat`); - template stringi mogą być łamene - łamania sią odzwierciedlane w konsoli
- w tagu to samo słowo może być nazwą klasy i id: `<section class="features" id="features"><section/>`

# Tydzień IV
### Stylowanie
- dzięki `display: inline-block`, możemy nadać margines dolny i górny na element liniowy (np. strong)
- `min-height: 100vh` - nadaje elementowy wysokość conajmniej równą wysokości okna przeglądarki
- gdy element dostanie `position: fixed`, to jego szerokość jest "zjadana" (tak jakby był inline-block), trzeba dać mu 100 % szerokości , żeby nic się nie zmieniło. Pamiętać o tym, gdy zmieniamy `<nav>` na fixed (gdy robimy przyklejoną nawigację)
- `position: sticky;` - podobny do fixed, ale element przykleja się do góry strony dopiero jak o nią uderzy (wcześniej normalnie się przewija). Jeszcze nie wszędzie wspierana
- `line-height` - używać, żeby poprawić czytelność wierszy
- sposób na responsywny obrazek:
  ```css
     .image {
          width: 100%;
          max-width: 100px;
          display: block;
     
     }
  ```
 - **floaty** używamy tylko do opływania np. obrazków 
    + gdy jest problem z wychodzeniem elementu opływanego to dać `overflow=hidden`
    + gdy jest problem z podchodzeniem treści do góry to dać `clear: both`
### Przewijanie na górę strony
```html
<header id="top">
  .
  .
  .
<footer>
  <a href="#top" class="top">na górę<a/>
<footer/>
```
```css
  .top {
    position: fixed;
    bottom: 10px;
    left: 10px;
  }
```
### Różne
- używać `block__element--js` dla elementów z którymi robimy coś w js
- nie uczyć się na zapas
- jeżeli przez półgodziny nie umie się czegość zrobić to pytać
- jeżeli jest problem z projektem, to rozpisać go na jaknajmniejsze kawałkii próbować je rozwiązać (z rozwiązanych kawałków skłądać całe rozwiązanie)
- jeżeli nie ma się pomysłu na projekt to znaleźć jakąś organizację pozarządową w mieście i im zrobić oraz rozwijać stronę
- gitlens - rozszerzenie do VSC
- `Ctrl + Alt + F` - zamiana tekstu w VSC - używać jeżeli chcemy np. dodać tę samą klasę do wszystkich akapitów
- `Ctrl + C` - kasuje ostatnie polecenie bez jego wykonywania (w konsoli)

# Tydzień V
### JavaScript
- operator warunkowy
  ```javascript
     (zmienna1 > zmienna2) ? console.log('true'):console.log('false');
     //-----------------------------
     const amIOld = (age > 70) ? "yes":"no";
     
     console.log(amIOld);
  ```
- funkcja strzałkowa
  ```javascript
    const calculateFat = (x) => {
    
    {
    //-----------------------------
    const calculateFat = x => {
    
    {
  ```
- funkcja podmieniająca kontent w elemencie (przyjmuje referencje do elementu i nowy kontent)
  ```javascript
    function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
    }
    
    createContent('.week-summary__description--js", "Witaj Świecie");
  ```
- zwykła deklaracja funkcji i arrow function
  ```javascript
    function greetOld(age, firstName) {
      console.log(
        `Witaj Drogi Odwiedzający, nazywam się $(firstName) i mam $(age) lata.`
        );
    }
    // Arrow Function
    const greet = (age, firstName) => {
      console.log(
        `Witaj Drogi Odwiedzający, nazywam się $(firstName) i mam $(age) lata.`
        );
    }
  ```
### JavaScript - obiekty
- Obiekt z właściwościami prostymi, metodami   obiektem zagnieżdżonym
```javascript
  const deathStar = {
    diameter: 120000,
    fire: (target) => {
      console.log('${target} destroy`}
    },
    isOperating: true,
    name: "Death Star",
    levels: 357,
    population: 1000,
    isLightOn: true,
    commander: {
      name: "Darth Vader",
      age: 44
    }
  }
```
+ odwołanie się do właściwości obiektu
```javascript
  console.log(deathStar.name)
```
+ wywołanie metody z parametrami
```javascript
  deathStar.fire('Rebel ship');
```
+ odwołanie się do właściwości zagnieżdżonego obiektu (notacja dot)
 ```javascript
  console.log(deathStar.commander.name)
```
+ odwołanie się do właściwości obiektu (notacja bracket)
 ```javascript
  const myProperty = name;
  
  console.log(deathStar[myProperty])
```
+ przypadek, kiedy jest konieczne użycie notacji bracket a dot by się nie sprawdziło:
+ odwołanie się do właściwości zagnieżdżonego obiektu (notacja dot)
 ```javascript
  const showMeProperty = (myProperty) => {
    console.log(deathStar[myProperty]);
  }
  
  showMeProperty('levels')
```

### Stylowanie
- Tabelą dobrze jest nadać szerokość 100% (domyślnie się nie rozszerzają)
### Różne
- przy goooglowaniu rzeczy najlepiej zaznaczyć zakres do roku wstecz (we frontendzie wiedza szybko się dezaktualizuje)
- używać normalize.css oraz
```css
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    // This defines what 1rem is
    font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  }

  body {
    box-sizing: border-box;
    }
  }
```
- wywołanie `console.log(console)` wyświetli w konsoli wszystkie metody i właściwości

  <img src="img/consolelog.png" width="50%">
  
- sprawdzenie, które rzeczy są pobierane z cache (można wyłączyć cache - `disable cache`). `Ctrl + F5` - twarde odświeżenie (wszystko pobiera na nowo)

  <img src="img/disable cache.PNG" width="50%">
  
- gdy utknie się z kodem, porozmawiać z kaczuszką :)

  <img src="img/duck.PNG" width="30%">

# Tydzień 6

### JavaScript

- #### Switch
```javascript
const myNumber = {name: 'maciek'};

switch(myNumber) {
  case 7: 
    console.log('jestem siódemką');
    break;
  case 9:
    console.log('jestem dziewiątką');
    break;
  default:
    console.log('jestem czymś innym');
}
```
- #### Operator warunkowy zamiast if else
```javascript
  if(32 > 30) {
    console.log("to prawda");
  } else {
    console.log("to nieprawda");
  }
  
  (32 > 30) ? console.log("to prawda") : console.log("to nieprawda");
  
  const result = (32 > 30) ? console.log("to prawda") : console.log("to nieprawda");
```
### Formularze
- #### Formularze: form, input, label
    + według specyfikacji tagi label i input powinny być zamknięte
    ```html
      <p>
        <label for="firstName">Your name:<label/>
        <input id="firstName" name="firstName">
      <p/>
    ```
    + można opakować input w label, albo można nie używać opakowania i użyć atrybutu for (lepsze to pierwsze rozwiązaniem bo łatwiej stylować)
  ```html
    <main>
      <h1>Forms playground<h1/>
      <form>
        <p>
          <label for="firstName">Your name:</label>
          <input id="firstName" name="firstName">
        <p/>
        <p>
          <label>Your last name:
            <input id="lastName" name="lastName">
          </label>
        <p/>
      <form/>
    <main/>
  ```
    + `value` - domyślna uzupełniona wartość inputa, `placeholder` - tekst podpowiedzi
    ```html
      <p>
        <label for="firstName">Your name:<label/>
        <input type="text" value="Maciek" placeholder="Wpisz swoje imię" id="firstName" name="firstName">
      <p/>
    ```
    + stylowanie formularzy według BEM
    ```html
      <form class="form">
        <label for="firstName">Your name:<label/>
        <input class="form__input" type="text" value="Maciek" placeholder="Wpisz swoje imię" id="firstName" name="firstName">
      <form/>
    ```
    ```css
      .form {

      }

      &__input {
        display: block;
        width: 100%;
      }
    ```
- #### Formularze: fieldset, radio, checkbox
   - Element `fieldset` grupuje kontrolki o podobnym przeznaczeniu. Element `legend` zawiera objaśnienie przeznaczenia grupy kontrolek.
   ```html
    <fieldset>
      <legend>Address</legend>
      
      <p>
        <label>Street name:
          <input
             class="form__item"
             id="streetName"
             placeholder="Please enter street name"
             name="streetName"
             />
        </label>
      </p>  
    </fieldset>
    ```
    <img src="img/fieldset.PNG" width="40%">
    
    - Element `radio` pozwala wybierać jeden element z grupy możliwych opcji

      ```html
        <fieldset>
          <legend>Favourite icecream flavour</legend>
          <p>
              <label><input name="iceCream" type="radio" value="chocolate">Chocolate</label?
          </p>
          <p>
              <label><input name="iceCream" type="radio" value="lemon">Lemon</label?
          </p>
          <p>
              <label><input name="iceCream" type="radio" value="strawberry">Strawberry</label?
          </p>
        </fieldset>
      ```
    <img src="img/radio.PNG" width="40%">
 #### Formularze: number, range, tel, email, password 
 -  Range - element będący graficznym interfejsem do wprowadzania danych
    ```html
      <input type="range" min="0" max="100" step="5">
    ```
    Sposób na podejrzenie wartości range:
    ```html
      <input
        class="form__item range--js"
        id="range"
        name="range"
        type="range"
        min="0"
        max="100"
        step="20"
      />
    ```
    ```javascript
    const myRange = document.querySelector('.range--js');
    
    myRange.value;
    ```
      
 ### CSS Grid
 
 #### Definiowanie siatki (właściwośi rodzica)
 - `grid-template-columns` - definiuje ilość i rozmiar kolumn
 - `grid-template-rows` - definiuje ilość i rozmiar wierszy
 - `grid-gap` - definiuje odstępy
 #### Funkcje przydatne przy definiowaniu siatki
 - `repeat()`
 - `minmax()`
 - `1fr`
 #### Rozmieszczenie elementów w siatce (pierwszy sposób)
  ```css
    .main {
      display: grid;
      grid-template-areas: "header header"
                           "article aside"
                           "footer footer";
    }
    
    .header {
      grid-area: header;
    }
  ```
  #### Rozmieszczenie elementów w siatce (drugi sposób)

  ```css
    .header {
      background: hotpink;
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  ```
  
 ### Media Queries
   - Mediaqueries muszą być definiowane po podstawowych stylach (mediaqueries nie zwiększają specyficzności)
    
      ```css
        @media screen and (max-width: 600px) {
          body {

          }
        }
      ```
      
   - Chowanie elementu
      ```css
        @media screen and (min-width: 768px) {
          .mobile {
            display: none;
          }
        }
      ```
 ### Eventy
 
  - Elementowi z którym chcemy pracować w JavaScripcie dodać klasę z modyfikatorem `--js`
    ```html
      <button class="action--js">Zmień nagłówek</button>
    ```
  - Pobranie referencji do elementu, wywołane funkcji po zdarzeniu click
    ```javascript
      const myClick = () => {
        console.log('kliknąłeś');
      }
      
      const button = documen.querySelector(".action--js");
      
      button.addEventListener('click', myClick);
    ```
  - Odniesienie się do klikniętego elementu
      ```javascript
      button.addEventListener('click', e=> {
        console.log(e.target);
      });
      ```
### Hamburger menu
### Różne
 - Domyślne style elementów są zależne od systemowych (ikonki są upodobnione do systemowych)
 - Można domyślnie zaznczyć element formularza, poprzez dodanie atrybutu `checked`. Atrybut może mieć wartość (`checked=checked`), ale nie musi
 - `display: block` na label spowoduje, że labele będą nad elementami, które opisują
 - Atrybut `required` nakazuje przeglądarce przeprowadzenie walidacji formularza
 - CSS Grid najlepiej się sprawdza do budowania całych layoutów
 - Flexbox sprawdza się dobrze do pozycjonowania, centrowania elementów wewnątrz innych elementów. Nie używać flexboxa do budowania całych layoutów.
 - `button` - powinien być używany do interakcji na stronie
 - `a` - powinien być używany do nawigacji
