# express-clarch-todo

Aplicando Clean Architecture en Express

## Idea

Cómo organizar el código de modo que los _entities_, los _usecases_, los _controllers_, puedan ser fácilmente testeados y usados tal cual, o casi tal cual, en otro framework.

La lógica del negocio debería ser independiente del framework. Y ser unida al framework a través de _adapters_ (que aquí los llamo _makers_, por facilidad).

## Estructura de directorios

- `routes`
- `controllers`
- `usecases`
- `entities`

## Flujo

- En los `routes`, cada _callback_ se obtiene a través de un _callback maker_ al que se se le pasa el _controller_ como parámetro. De esa manera, al _callback_ se le inyecta el _controller_ como dependencia.

- En los `controllers`, cada _controller_ se obtiene a través de un _controller maker_ al que se se le pasa el _usecase_ como parámetro. De esa manera, al _controller_ se le inyecta el _usecase_ como dependencia.

- En los `usecases`, cada _usecase_ se obtiene a través de un _usecase maker_ al que se se le pasa el _entity_ como parámetro. De esa manera, al _usecase_ se le inyecta el _entity_ como dependencia.

- En los `entities`, cada _entity_ se obtiene a través de un _entity maker_. De esa manera, al _entity_ se le inyecta los accesos a _database_ como dependencias.

- En cada directorio, el `index` amalgama los _makers_ que se definen en los otros archivos.

- Los _makers_ son los que permiten pasar las dependencias. Es como si cada parte se dividiera en dos: el _maker_, acoplado con un contexto en particular, y lo que queda, el código desacoplado y más universal.


## Referencias
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [DevMastery Comments Microservice API](https://github.com/dev-mastery/comments-api)
- [tape](https://github.com/substack/tape)
- [Learn Tape ~ Testing in JavaScript](https://github.com/dwyl/learn-tape)
- [Tap Nirvana - Proper Reporter](https://github.com/inadarei/tap-nirvana)
- [RITEway](https://github.com/ericelliott/riteway)
- [Testing Express APIs with Tape and Supertest](https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/)
