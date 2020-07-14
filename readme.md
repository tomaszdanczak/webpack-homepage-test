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
