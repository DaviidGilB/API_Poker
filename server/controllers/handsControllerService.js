'use strict'

// Auxiliares cartas
var isEqualFunction = function(a, b){
  return a.valor === b.valor && a.palo === b.palo;
}
var compareFunctionPalo = function(a, b){
  return a.palo === b.palo
    ? (a.valor === b.valor ? 0 : (a.valor < b.valor ? -1 : 1))
    : (a.palo < b.palo ? -1 : 1);
}
var compareFunctionValor = function(a, b){
  return a.valor === b.valor
    ? (a.palo === b.palo ? 0 : (a.palo < b.palo ? -1 : 1))
    : (a.valor < b.valor ? -1 : 1);
}
var convertirValores = function(cartas) {
  var res = [];

  for (var i = 0; i < cartas.length; i++) {

    var v = 0;

    if (cartas[i].valor == "2") {
      v = 2;
    } else if (cartas[i].valor == "3") {
      v = 3;
    } else if (cartas[i].valor == "4") {
      v = 4;
    } else if (cartas[i].valor == "5") {
      v = 5;
    } else if (cartas[i].valor == "6") {
      v = 6;
    } else if (cartas[i].valor == "7") {
      v = 7;
    } else if (cartas[i].valor == "8") {
      v = 8;
    } else if (cartas[i].valor == "9") {
      v = 9;
    } else if (cartas[i].valor == "10") {
      v = 10;
    } else if (cartas[i].valor == "J") {
      v = 11;
    } else if (cartas[i].valor == "Q") {
      v = 12;
    } else if (cartas[i].valor == "K") {
      v = 13;
    } else {
      v = 14;
    }

    res.push({
      valor: v,
      palo: cartas[i].palo
    })

  }

  return res;

}

// Categorías
var escaleraDeColor = function(cartas){
  var cartasConvertidas = convertirValores(cartas);
  var cartasOrdenadas = cartasConvertidas.sort(compareFunctionPalo);

  var res = true;
  for (var i = 0; i < cartasOrdenadas.length - 1; i++) { 
    if(cartasOrdenadas[i].palo != cartasOrdenadas[i + 1].palo || cartasOrdenadas[i].valor + 1 != cartasOrdenadas[i + 1].valor) {
      res = false;
      break;
    }
  }

  return res;
}

var poker = function(cartas) {
  var cartas = convertirValores(cartas);

  var map = new Map();
  var res = false;

  for (var i = 0; i < cartas.length; i++) {
    var valor = cartas[i].valor;
    if(map.has(valor)) {
      map.set(valor, map.get(valor) + 1);
    } else {
      map.set(valor, 1);
    }
  }
  
  var values = Array.from(map.values());
  for (var i = 0; i < values.length; i++) {
    if(values[i] >= 4) {
      res = true;
      break;
    }
  }

  return res;
}

var full = function(cartas) {
  var cartas = convertirValores(cartas);

  var map = new Map();
  var valorTrio = 0;
  var res = 0;

  for (var i = 0; i < cartas.length; i++) {
    var valor = cartas[i].valor;
    if(map.has(valor)) {
      map.set(valor, map.get(valor) + 1);
    } else {
      map.set(valor, 1);
    }
  }
  
  var values = Array.from(map.values());
  if(values.length == 2) {
    var count = 0;
    for (var i = 0; i < values.length; i++) {
      if(values[i] == 2) {
        count++;
      } else if(values[i] == 3) {
        valorTrio = Array.from(map.keys())[i];
        count++;
      }
    }
    if(count == 2) {
      res = valorTrio;
    }
  }

  return res;
}

var color = function(cartas) {
  var cartas = convertirValores(cartas);

  var res = true;
  for (var i = 0; i < cartas.length - 1; i++) { 
    if(cartas[i].palo != cartas[i + 1].palo) {
      res = false;
      break;
    }
  }

  return res;
}

var escalera = function(cartas) {
  var cartas = convertirValores(cartas);
  var cartasOrdenadas = cartas.sort(compareFunctionValor);

  var res = true;
  for (var i = 0; i < cartasOrdenadas.length - 1; i++) { 
    if(cartasOrdenadas[i].valor != cartasOrdenadas[i + 1].valor - 1) {
      res = false;
      break;
    }
  }

  var valor = 0;
  if(res) {
    valor = cartasOrdenadas[cartasOrdenadas.length - 1];
  }

  return valor;
}

var trio = function(cartas) {
  var cartas = convertirValores(cartas);

  var map = new Map();
  var res = false;

  for (var i = 0; i < cartas.length; i++) {
    var valor = cartas[i].valor;
    if(map.has(valor)) {
      map.set(valor, map.get(valor) + 1);
    } else {
      map.set(valor, 1);
    }
  }
  
  var values = Array.from(map.values());
  for (var i = 0; i < values.length; i++) {
    if(values[i] == 3) {
      res = true;
      break;
    }
  }

  return res;
}

var doblePareja = function(cartas) {
  var cartas = convertirValores(cartas);

  var map = new Map();
  var parejas = [];

  for (var i = 0; i < cartas.length; i++) {
    var valor = cartas[i].valor;
    if(map.has(valor)) {
      map.set(valor, map.get(valor) + 1);
    } else {
      map.set(valor, 1);
    }
  }
  
  var count = 0;
  var res = 0;
  var values = Array.from(map.values());
  if(values.length == 3) {
    for (var i = 0; i < values.length; i++) {
      if(values[i] == 1) {
        count++;
      } else if(values[i] == 2) {
        count++;
        parejas.push(Array.from(map.keys())[i]);
      }
    }
    if(count == 3) {
      res = Math.max.apply(null,parejas);
    }
  }

  return res;
}

var pareja = function(cartas) {
  var cartas = convertirValores(cartas);

  var map = new Map();
  var res = [];
  var pareja = 0;
  var restantes = [];

  for (var i = 0; i < cartas.length; i++) {
    var valor = cartas[i].valor;
    if(map.has(valor)) {
      map.set(valor, map.get(valor) + 1);
    } else {
      map.set(valor, 1);
    }
  }
  
  var values = Array.from(map.values());
  if(values.length == 4) {
    for (var i = 0; i < values.length; i++) {
      if(values[i] == 2) {
        pareja = Array.from(map.keys())[i];
      } else if(values[i] == 1) {
        restantes.push(Array.from(map.keys())[i]);
      }
    }
  }

  if(pareja != 0) {
    res.push(pareja);
    res.push(Math.max.apply(null,restantes));
  }

  return res;
}

var cartaMasAlta = function(cartas) {
  var cartas = convertirValores(cartas);
  var res = [];

  for (var i = 0; i < cartas.length; i++) {
    res.push(cartas[i].valor);
  }

  return Math.max.apply(null,res);
}

module.exports.compareHands = function compareHands(req, res, next) {

  var personalizado = false;

  try {
    var response = [];

    // Cálculo de errores y excepciones
    for (var i = 0; i < req.body.length; i++) {

      var totalCartas = [];
      var mapCartas = new Map();

      if (req.body[i].jugadas.length != 2) {
        personalizado = true;
        throw new Error( "Cada partida debe estar compuesta de exactamente 2 jugadas" );
      }

      for (var j = 0; j < req.body[i].jugadas.length; j++) {

        if (req.body[i].jugadas[j].cartas.length != 5) {
          personalizado = true;
          throw new Error( "Cada jugador debe tener exactamente 5 cartas" );
        } else {
          mapCartas.set(j, req.body[i].jugadas[j].cartas);
        }

        for (var k = 0; k < req.body[i].jugadas[j].cartas.length; k++) {

          var carta = req.body[i].jugadas[j].cartas[k];
          if (!(/(\W|^)(C|D|H|S)(\W|$)/.test(carta.palo) && /(\W|^)(2|3|4|5|6|7|8|9|10|J|Q|K|A)(\W|$)/.test(carta.valor))) {
            personalizado = true;
            throw new Error( "Valor erróneo en una carta: { valor: " + carta.valor + ", palo: " + carta.palo + " }" );
          }
          totalCartas.push(carta);

        }

      }

      // Cálculo de la respuesta

      // Partida amañada
      var amañada = false;
      var cartasOrdenadas = totalCartas.sort(compareFunctionPalo);
      for (var q = 0; q < cartasOrdenadas.length - 1; q++) { 
        if (isEqualFunction(cartasOrdenadas[q + 1], cartasOrdenadas[q])) 
        {
          amañada = true;
          break;
        } 
      }

      if(amañada) {
        response.push("Partida amañada");
      } else {
        var cartasJugador1 = Array.from(mapCartas.values())[0];
        var cartasJugador2 = Array.from(mapCartas.values())[1];

        var categoriaValor1 = new Map();
        var categoriaValor2 = new Map();

        if(escaleraDeColor(cartasJugador1)) {
          categoriaValor1.set(9, true);
        } else if(poker(cartasJugador1)) {
          categoriaValor1.set(8, true);
        } else if(full(cartasJugador1) != 0) {
          categoriaValor1.set(7, full(cartasJugador1));
        } else if(color(cartasJugador1)) {
          categoriaValor1.set(6, true);
        } else if(escalera(cartasJugador1) != 0) {
          categoriaValor1.set(5, escalera(cartasJugador1));
        } else if(trio(cartasJugador1)) {
          categoriaValor1.set(4, true);
        } else if(doblePareja(cartasJugador1) != 0) {
          categoriaValor1.set(3, doblePareja(cartasJugador1));
        } else if(pareja(cartasJugador1).length != 0) {
          categoriaValor1.set(2, pareja(cartasJugador1));
        } else {
          categoriaValor1.set(1, cartaMasAlta(cartasJugador1));
        }

        if(escaleraDeColor(cartasJugador2)) {
          categoriaValor2.set(9, true);
        } else if(poker(cartasJugador2)) {
          categoriaValor2.set(8, true);
        } else if(full(cartasJugador2) != 0) {
          categoriaValor2.set(7, full(cartasJugador2));
        } else if(color(cartasJugador2)) {
          categoriaValor2.set(6, true);
        } else if(escalera(cartasJugador2) != 0) {
          categoriaValor2.set(5, escalera(cartasJugador2));
        } else if(trio(cartasJugador2)) {
          categoriaValor2.set(4, true);
        } else if(doblePareja(cartasJugador2) != 0) {
          categoriaValor2.set(3, doblePareja(cartasJugador2));
        } else if(pareja(cartasJugador2).length != 0) {
          categoriaValor2.set(2, pareja(cartasJugador2));
        } else {
          categoriaValor2.set(1, cartaMasAlta(cartasJugador2));
        }

        var ganancia = req.body[i].bote + req.body[i].jugadas[0].apuesta + req.body[i].jugadas[1].apuesta;
        var j1 = req.body[i].jugadas[0].jugador;
        var j2 = req.body[i].jugadas[1].jugador;
        var c1 = Array.from(categoriaValor1.keys())[0];
        var v1 = Array.from(categoriaValor1.values())[0];
        var c2 = Array.from(categoriaValor2.keys())[0];
        var v2 = Array.from(categoriaValor2.values())[0];

        if(c1 > c2) {
          response.push(j1 + " gana " + ganancia);
        } else if(c2 > c1) {
          response.push(j2 + " gana " + ganancia);
        } else if(c1 == c2 && c1 != 2 && c2 != 2 && v1 > v2) {
          response.push(j1 + " gana " + ganancia);
        } else if(c1 == c2 && c1 != 2 && c2 != 2 && v2 > v1) {
          response.push(j2 + " gana " + ganancia);
        } else if(c1 == c2 && c1 == 2 && c2 == 2) {
          if(v1[0] > v2[0]) {
            response.push(j1 + " gana " + ganancia);
          } else if(v2[0] > v1[0]) {
            response.push(j2 + " gana " + ganancia);
          } else if(v1[1] > v2[1]) {
            response.push(j1 + " gana " + ganancia);
          } else if(v2[1] > v1[1]) {
            response.push(j2 + " gana " + ganancia);
          } else {
            response.push("Iguales");
          }
        } else {
          response.push("Iguales");
        }
      }
    }

    res.send(response);

  } catch (e) {
    if (e instanceof TypeError) {
      res.status(400).send({
        message: "Formato de entrada incorrecto"
      })
    } else if (e instanceof Error && personalizado) {
      res.status(400).send({
        message: e.message
      })
    } else {
      res.status(500).send({
        message: e.message
      })
    }
  }

};