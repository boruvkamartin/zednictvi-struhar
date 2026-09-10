# Josef Struhár – zednické práce

Jednostránkový prezentační web pro Josefa Struhára, zaměřený na rekonstrukce, zednické práce, obklady a dlažby v Hradci Králové a okolí.

## Živý web

[https://boruvkamartin.github.io/zednictvi-struhar/](https://boruvkamartin.github.io/zednictvi-struhar/)

## Lokální spuštění

Web nemá build proces ani externí závislosti. Stačí otevřít `index.html` v prohlížeči, případně v této složce spustit jednoduchý HTTP server:

```powershell
python -m http.server 8000
```

Poté otevřete `http://localhost:8000`.

## Doplnění fotografií realizací

V `index.html` jsou v sekci `#realizace` tři bloky `.project-card`. Po dodání skutečných fotografií nahraďte obsah příslušného `.project-visual` dvěma obrázky označenými „Před“ a „Po“. Zachovejte popisek zakázky a doplňte výstižný alternativní text každého obrázku.

Na web nepatří ilustrační fotografie vydávané za skutečné realizace.

## Struktura

- `index.html` – obsah, metadata a strukturovaná data
- `styles.css` – kompletní responzivní vzhled
- `script.js` – mobilní menu, e-mailová poptávka a animace
- `assets/images/` – optimalizované ilustrační fotografie ve formátu WebP
- `.nojekyll` – vypnutí zpracování GitHub Pages přes Jekyll

Ilustrační fotografie slouží pouze jako atmosférický doprovod. Sekce realizací zůstává připravená na skutečné fotografie zakázek Josefa Struhára.
