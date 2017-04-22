---
layout: post
title:  Crear un blog
date:   2017-04-21 09:00:00
categories: talleres
sections:
  el-taller: 'El taller'
  ruby: 'Ruby'
  rails: 'Rails'
  navegadores: 'Los navegadores'
  primeros-pasos: 'Primeros pasos'
  estructura: 'La estructura'
  mvc: 'MVC'
  entendiendo_rails: 'Entendiendo Rails'
  validaciones: 'Validaciones'
  castellanizando: 'Castellanizando'
  mas-ruby: 'Más sobre Ruby'
  resumen: 'Resumen'

---

<div class="page-header">
  <h3 class="section-anchor" id="el-taller">El taller</h3>
</div>

#### ¿Es para mí? ####

Si disfrutás _armar_ (o desarmar) _cosas_, si, es para vos

#### ¿Esto lo usa alguien? ####

- Airbnb
- Shopify
- Github
- Zendesk
- Basecamp

#### ¿Tengo que tener experiencia? ####

Preferentemente conocer como funciona [HTTP][], nada que con entusiasmo no se pueda aprender...

[HTTP]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"

#### ¿Tengo que saber inglés? ####

Casi toda la buena documentación (y la más actualizada) está en inglés, así que
si. También con entusiasmo y la ayuda de una aplicación de traducción lo podés suplir =)

<div class="page-header">
  <h3 class="section-anchor" id="ruby">Ruby</h3>
</div>

- Dinámico (y mucho...)
- Simple y elegante
- Intuitivo, centrado en lo que espero
- Orientado a objetos

#### Un ejemplo ####

El clásico _Hola Mundo_

```ruby
puts "¡Hola mundo!"
```

<div>
  <a class="btn btn-default btn-xs" data-toggle="collapse" data-parent=".output" href="#ej1-output">
    Salida
  </a>

  <div class="collapse" id="ej1-output">
    <br>
    <pre>
¡Hola mundo!
    </pre>
  </div>
</div>

#### Con esteroides ####

Imprimir 5 veces _¡Hola mundo!_

```ruby
5.times do
  puts "¡Hola mundo!"
end
```

<div>
  <a class="btn btn-default btn-xs" data-toggle="collapse" data-parent=".output" href="#ej2-output">
    Salida
  </a>

  <div class="collapse" id="ej2-output">
    <br>
    <pre>
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
    </pre>
  </div>
</div>

#### ¿En castellano? ####

Podemos sobre-escribir cualquier método de cualquier clase, inclusive los _de fábrica_...

```ruby
class Integer
  alias_method :veces, :times
end

module Kernel
  alias_method :mostrar, :puts
end

5.veces { mostrar "¡Hola Mundo!" }
```

<div>
  <a class="btn btn-default btn-xs" data-toggle="collapse" data-parent=".output" href="#ej3-output">
    Salida
  </a>

  <div class="collapse" id="ej3-output">
    <br>
    <pre>
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
¡Hola mundo!
    </pre>
  </div>
</div>

#### Las gemas ####

Son aplicaciones o librerías **empaquetadas**

- Tienen un nombre - `rails`
- Y una versión - `5.0.2`

#### ¿Para qué? ####

En _Rubylandia_ tienen mucha importancia

- No reinventamos la rueda
- Resuelven problemas específicos
- Podemos usarlas, extenderlas y mejorarlas

#### Algunos ejemplos ####

- Ruby on Rails → `rails`
- Conexión a BBDD → `sqlite3`
- Autenticación → `devise`
- Paginación → `will_paginate`
- [Y muchas otras](https://rubygems.org/)

<div class="page-header">
  <h3 class="section-anchor" id="rails">Rails</h3>
</div>

#### Especializando Ruby ####

Ruby on Rails _[o Rails o RoR]_ extiende Ruby para **especializarlo** en desarrollo Web

#### Algunos "principios" ####

- DRY (**no** te **repitas**...)
- CoC (convención sobre configuración)
- Prueba **todo** (y solo lo que has hecho...)
- MVC (con solo modelos pesados...)

<div class="page-header">
  <h3 class="section-anchor" id="navegadores">Los navegadores</h3>
</div>

En los navegadores ejecutamos la **mitad** (+-25%) de nuestra aplicación.
No podemos ignorarlos.

#### Consideraciones ####

- Estándares ([W3C][], [ECMAScript][])
- Plataformas (Linux, OSX, Windows, Móviles...)
- Velocidad (renderizado, ejecución de JavaScript...)
- Tecnologías (compresión, protocolos...)
- Popularidad (no siempre gana el bueno...)

[W3C]: https://www.w3.org/ "World Wide Web Consortium"
[ECMAScript]: http://www.ecmascript.org/ "ECMAScript"

<div class="page-header">
  <h3 class="section-anchor" id="primeros-pasos">Primeros pasos</h3>
</div>

#### Mucha charla ####

A preparar el ambiente, primero instalá Ruby y Rails, mirá las instrucciones de [instalación][]

[instalación]: {{ site.github.url }}/instalacion "Instalación"

#### La primera aplicación ####

```console
$ rails new blog -d sqlite3
$ cd blog
$ rails g scaffold articulo titulo:string cuerpo:text
$ rake db:migrate
$ rails s
```

#### El resultado ####

Visitemos [http://localhost:3000/](http://localhost:3000/)

Si todo se ve bien, ahora veamos [http://localhost:3000/articulos](http://localhost:3000/articulos)

<div class="page-header">
  <h3 class="section-anchor" id="estructura">La estructura</h3>
</div>

#### Directorios ####

```console
$ cd blog
$ ls
```

#### Los importantes ####

- `app` modelos, vistas, controladores...
- `db` todo sobre la BBDD (WOW)
- `config` configuraciones "globales"
- `public` contenido estático...
- `test` pruebas (sorprendente...)


#### El direcrotio `app` ####

Generalmente "vivimos" acá...

```console
$ cd app
$ ls
```

#### Dentro de app ####

- `models` modelos...
- `views` vistas...
- `controllers` controladores...
- `assets` Javascript (o Coffeescript), CSS, imágenes... (¿Uh?)
- `helpers` ayudadores... (¿Uh?)

#### Las 7 acciones ####

- `index` → listar
- `show` → ver
- `new` → nuevo
- `create` → crear
- `edit` → editar
- `update` → actualizar
- `destroy` → eliminar

#### ¿Nuevo y crear? ####

- **Nuevo** significa ver el formulario para crear
- **Crear** significa agregar o insertar la nueva entidad

Lo mismo aplica para **editar** (nuevo) y **actualizar** (crear)

#### En `views` ####

Tenemos un directorio para cada entidad (sólo si hace falta)

- `_form` (fomulario compartido del modelo)
- `edit` (para editar)
- `index` (para listar)
- `new` (para crear)
- `show` (para visualizar)

#### En `controllers` ####

Tenemos un archivo para cada entidad (sólo si hace falta)

Los nombres se forman con `nombre_plural_entidad` + `_controller.rb`

#### En `models` ####

Tenemos un archivo para cada entidad (A menos que usemos herencia con algo como
<abbr title="Single Table Inheritance (Herencia de una sola tabla)">STI</abbr>)

Los nombres de los modelos se forman con `nombre_singular_entidad` + `.rb`

<div class="page-header">
  <h3 class="section-anchor" id="mvc">MVC</h3>
</div>

#### Modelos, Vistas y Controladores ####

Es un patrón de diseño para organizar nuestra aplicación

#### El modelo... ####

Es el responsable de mantener el estado (transitorio y permanente)

Administra los datos y contiene las reglas

#### La vista... ####

Es responsable de la interfaz de usuario (o
<abbr title="User interface (Interfaz de usuario)">UI</abbr>)

Debe presentar los datos y permitir su entrada

#### El controlador... ####

Orquesta la aplicación

1. Recibe un **evento** del mundo exterior
2. **Interactúa** con el modelo
3. **Selecciona** la vista apropiada

#### ActiveRecord ####

Es la capa ORM de Rails (el modelo)

##### Ejemplo #####

```ruby
class Articulo < ActiveRecord::Base
end
```

Entonces, ahora podemos ejecutar:

```ruby
# Devuelve el primer articulo con título 'Flisol 2017'
articulo = Articulo.find_by(titulo: 'Flisol 2017')
articulo.titulo = 'Flisol 2018'
articulo.save # Guarda los cambios en la BBDD
```

#### ActionPack ####

La vista y el controlador juntos (¿Uh?)

- La vista dibuja el <abbr title="HyperText Markup Language (Lenguaje de marcado de hipertexto)">HTML</abbr> (u otro formato)
- El controlador maneja las peticiones

<div class="page-header">
  <h3 class="section-anchor" id="entendiendo_rails">Entendiendo Rails</h3>
</div>

#### La secuencia ####

1. Navegador → Servidor web
2. Servidor web → Rails
  1. Enrutador (routes) → Despachador
  2. Despachador (dispatcher) → Controlador
  3. Controlador → Modelo
  4. Controlador → Vista
3. Rails → Servidor web
4. Servidor web → Navegador

<div class="page-header">
  <h3 class="section-anchor" id="validaciones">Validaciones</h3>
</div>

#### Ejemplo ####

Que el nombre no esté en blanco

```ruby
class Articulo < ActiveRecord::Base
  validates :titulo, presence: true
end
```

#### Las incluidas ####

```ruby
validates :condiciones, acceptance: true
validates :contrasena, confirmation: true
validates :usuario, exclusion: { in: %w(admin supremo) }
validates :email, format: { with: /\A\w+@\w+\Z/ }
validates :edad, inclusion: { in: 0..9 }
validates :nombre, length: { maximum: 30 }
validates :edad, numericality: { only_integer: true }
validates :usuario, presence: true
validates :usuario, uniqueness: true
```

#### Personalizadas ####

```ruby
validates_each :titulo do |record, attr, value|
  if value.start_with? 'z'
    record.errors.add attr, 'no debe iniciar con z'
  end
end
```

#### Para machos ####


```ruby
# Lo mismo se puede conseguir con :format
class CuitValidator < ActiveModel::EachValidator
  def validate_each record, attribute, value
    unless value =~ /\A\d{2}-\d{8}-\d\Z/
      record.errors.add attribute, 'no está bien'
      # o record.errors.add attribute, :invalid
    end
  end
end

# y ahora funciona
validates :cuit_o_cuil, cuit: true
```

<div class="page-header">
  <h3 class="section-anchor" id="castellanizando">Castellanizando</h3>
</div>

#### Mensajes de validación ####

En `models/articulo.rb`

```ruby
class Articulo < ActiveRecord::Base
  validates :titulo, :cuerpo, presence: {
    message: 'no puede estar en blanco'
  }
end
```

En `controllers/articulos_controller.rb`

```ruby
def index
  @articulos = Articulo.order 'created_at'
end
```

#### Limpiando ####

En `views/articulos/index.html.erb`


```erb
<% @articulos.each do |articulo| %>
  <tr>
    <td><%= link_to articulo.titulo, articulo %></td>
    <td><%= link_to 'Editar', edit_articulo_path(articulo) %></td>
    <td><%= link_to 'Eliminar', articulo, method: :delete, data: { confirm: '¿Está seguro?' } %></td>
  </tr>
<% end %>
```

En `views/articulos/show.html.erb`

```erb
<p id="notice"><%= notice %></p>

<h1>
  <%= @articulo.titulo %>
</h1>

<div>
  <%= simple_format @articulo.cuerpo %>
</div>

<%= link_to 'Editar', edit_articulo_path(@articulo) %> |
<%= link_to 'Volver', articulos_path %>
```

#### Los mensajes ####

En `controllers/articulos_controller.rb`


```ruby
# En create
format.html { redirect_to @articulo, notice: 'Articulo creado' }
# En update
format.html { redirect_to @articulo, notice: 'Articulo actualizado' }
```

<div class="page-header">
  <h3 class="section-anchor" id="mas-ruby">Más sobre Ruby</h3>
</div>

**Todo** lo que tocamos es un objeto, y el resultado es también **un objeto**

```ruby
5 + 2          # => 7
7.class        # => Fixnum
7.class.class  # => Class
nil.class      # => NilClass
```

#### Literales ####

```ruby
simple                    # Variable o función
NombreDeClase             # O módulo
@variable_de_instancia
@@variable_de_clase
$variable_global
CONSTANTE
```

#### Manipulaciones ####

```ruby
"Ruby".reverse # => "ybuR"
"Ruby".length  # => 4
"Ruby" * 5     # => "RubyRubyRubyRubyRuby"
```

#### Asignaciones ####

```ruby
x = 1              # Tradicional
x += 1             # Incremento y asignación
x, y, z = 1, 2, 3  # Múltiple
x = y = 0          # En cascada
```

#### Arreglos ####

Son objetos que contienen (o no) una lista de otros

```ruby
[12, 47, 35]           # => [12, 47, 35]
[12, 47, 35].max       # => 47
arreglo = [12, 47, 35] # => [12, 47, 35]
arreglo                # => [12, 47, 35]
arreglo.sort!          # => [12, 35, 47]
```

#### Arreglos asociativos ####

Mejor conocido como **Hashes**

```ruby
lenguajes = {}                    # => {}
lenguajes['Ruby']   = 'buenísimo' # => 'buenísimo'
lenguajes['Python'] = 'bueno'     # => 'bueno'
lenguajes['PHP']    = 'mmm'       # => 'mmm'
lenguajes.length                  # => 3
lenguajes.keys                    # => ["Ruby", "Python", "PHP"]
```

#### Métodos _raros_ ####

Algunos nombres de métodos _poco convencionales_

```ruby
texto = "Que bueno Ruby"   # => "Que bueno Ruby"
texto["Ruby"] = "Rails"    # => "Rails"
texto                      # => "Que bueno Rails"
```

Se puede pensar en "estoy buscando ______"

#### Definición de métodos ####

```ruby
def saludo(nombre)
  resultado = "Hola " + nombre
  return resultado
end

# Y a saludar...
puts saludo("Franco")
```

No es para tanto, es casi lo mismo que en ______

```ruby
def saludo(nombre)
  "Hola #{nombre}"
end

# Y saludamos de nuevo
puts saludo("Franco")
```

Ahora si ahorré unas teclas...

#### Estructuras de control ####

Se considera falso:

- `nil`
- `false` (WOW)

#### Estructura de `if` ####

```ruby
if intentos > 3
  puts "Perdiste..."
elsif intentos == 3
  puts "¡Vamos! Uno más: "
else
  puts "Ingrese un número: "
end
```

#### Estructura de `while` ####

```ruby
while intentos < 3
  puts "Ingrese un número: "
  intentos += 1 # ¡no hay intentos++!
end
```

#### Modificadores ####

```ruby
if edad > 100
  puts "Nahhh"
end
```

Se puede escribir de forma más _compacta_

```ruby
puts "Nahhh" if edad > 100
```

Y por lo mismo

```ruby
while cuenta < 100
  cuenta += 1
end
```

```ruby
cuenta += 1 while cuenta < 100
```

#### Idioma Ruby ####

Algunas expresiones _poco convencionales_

```ruby
arreglo.empty?      # También a.empty!
a || b              # El primer valor != nil o false
contador ||= 0      # Como contador = contador || 0
precio *= descuento # Como precio = precio * descuento
```

<div class="page-header">
  <h3 class="section-anchor" id="resumen">Resumen</h3>
</div>

- Instalamos todo nuestro ambiente
- Creamos el esqueleto de una aplicación
- Creamos un ABM funcional
- Aprendimos sobre la estructura de Rails
- Aprendimos sobre Ruby

<hr>
