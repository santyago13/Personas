class Persona {
      constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
      }

      mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
          generacion = "Generación Z";
          rasgo = "Irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
          generacion = "Generación Y (Millennials)";
          rasgo = "Frustración";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
          generacion = "Generación X";
          rasgo = "Obsesión por el éxito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
          generacion = "Baby Boom";
          rasgo = "Ambición";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
          generacion = "Silent Generation";
          rasgo = "Austeridad";
        } else {
          generacion = "Desconocida";
          rasgo = "No disponible";
        }

        return `${this.nombre} pertenece a <strong>${generacion}</strong>. Rasgo característico: <strong>${rasgo}</strong>.`;
      }

      esMayorDeEdad() {
        return this.edad >= 18
          ? `${this.nombre} es mayor de edad.`
          : `${this.nombre} es menor de edad.`;
      }

      mostrarDatos() {
        return `
          <ul>
            <li><strong>Nombre:</strong> ${this.nombre}</li>
            <li><strong>Edad:</strong> ${this.edad}</li>
            <li><strong>DNI:</strong> ${this.dni}</li>
            <li><strong>Sexo:</strong> ${this.sexo}</li>
            <li><strong>Peso:</strong> ${this.peso} kg</li>
            <li><strong>Altura:</strong> ${this.altura} cm</li>
            <li><strong>Año de Nacimiento:</strong> ${this.anioNacimiento}</li>
          </ul>
        `;
      }
    }

    document.getElementById("personaForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const edad = parseInt(document.getElementById("edad").value);
      const dni = document.getElementById("dni").value;
      const sexo = document.getElementById("sexo").value;
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
      const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

      const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `
        <p>${persona.mostrarGeneracion()}</p>
        <p>${persona.esMayorDeEdad()}</p>
        <h5>Datos ingresados:</h5>
        ${persona.mostrarDatos()}
      `;

      this.reset();
    });