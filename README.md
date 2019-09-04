- **API para Manos de Poker**

Una baraja de poker contiene 52 cartas. Cada carta pertenece a un palo (tréboles, rombos, corazones y picas, que denotaremos como C, D, H, S). Cada carta además tiene un valor, desde 2 a 10, o bien jota, reina, rey o as (denotados como 2,3,4,5,6,7,8,9,10,J,Q,K,A). En términos de puntuación las cartas siguen la ordenación anterior siendo 2 la carta con menor puntuación y el as la carta con mayor puntuación. El palo no tiene valor.

Una mano de poker consiste en coger 5 cartas de la baraja. Las manos tiene una puntuación que sigue el siguiente orden (de menor a mayor):

1. Carta más alta: Las manos que no encajan en ninguna categoría posterior se puntúan en base a la puntuación de la carta más alta (de las 5).
2. Pareja: Dos de las cartas de la mano tienen el mismo valor. Las manos que tienen parejas se deciden en base a la puntuación de las cartas que forman la pareja. Si la puntuación es la misma, las manos se deciden en base a la puntuación de la carta más alta restante.
3. Doble Pareja: La mano contiene 2 parejas distintas. Las manos en las que se tienen dos dobles parejas se deciden en base a la pareja más alta.
4. Trio: La mano contiene tres cartas que tienen el mismo valor.
5. Escalera: La mano contiene cinco cartas con valores consecutivos. Dos manos con escalera se deciden en base a la carta más alta del final de la escalera.
6. Color: La mano contiene cinco cartas del mismo palo.
7. Full: La mano contiene un trio y una escalera. En caso de que se tengan dos fulls se decidirá en base al valor del trío.
8. Poker: Cuatro cartas con el mismo valor
9. Escalera de color: La mano contiene cinco cartas consecutivas del mismo color.

Se propone **crear un API para comparar manos de poker indicando, que jugador ganaría  y en su caso si alguien está haciendo trampas** (en conjunto de manos a comparar no es posible con una sola bajada).

## **Entrada de la API (POST /hand)**

Será  en formato JSON, conteniendo array con varias manos. Cada mano contiene un conjunto de jugadas a comparar (con un nombre de jugador, una apuesta, y cinco cartas por jugada), y un bote acumulado por los empates anteriores, que ganará el jugador que gen esta mano.

## **Salida**

Un array de resultados que contiene para cada mano de entrada un resultado que contiene, la jugada original y un atributo resultado con tres posibles valores:

Iguales, Jugador X gana, o partida amañada (en caso de que alguien esté haciendo trampas).