# express-clarch-todo

Aplicando Clean Architecture en Express

## Idea

Cómo organizar el código de modo los _entities_, los _usecases_, los _controllers_, puedan ser usados tal cual, o casi tal cual, en otro framework.

La lógica del negocio debería ser independiente del framework. Y ser unida al framework a través de _adapters_.

## Estructura de directorios

- `routes`
- `controllers`
- `usecases`
- `entities`

## Flujo

- En `routes`, para cada ruta, un _adapter_ pasa un controller y obtiene el callback que se necesita.
- En `controllers`, para cada controller, un _adapter_ pasa un use-case y obtiene el controller que se necesita. Los controllers se apoyan en usecases que les son pasados como dependencias.
- En `usecases`, para cada use case, un _adapter_ pasa un entity y obtiene el use case que se necesita. Los usecases se apoyan en entities que les son pasados como dependencias.
- En `entities`. para cada entity, un _adapter_ obtiene el object que se necesita.
- En cada caso, al invocar el _adapter_ se pueden pasar las dependencias hacia adentro.
- En cada directorio, el `index` amalgama los _adapters_ que se definen en los otros archivos.

## Referencias
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [DevMastery Comments Microservice API](https://github.com/dev-mastery/comments-api)
- [tape](https://github.com/substack/tape)
- [Learn Tape ~ Testing in JavaScript](https://github.com/dwyl/learn-tape)
- [Tap Nirvana - Proper Reporter](https://github.com/inadarei/tap-nirvana)
- [RITEway](https://github.com/ericelliott/riteway)
- [Testing Express APIs with Tape and Supertest](https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/)
