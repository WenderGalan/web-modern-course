// middleware pattern (chain of responsability)

/**
 * @param ctx
 * @param next
 */
const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

/**
 * @param ctx
 * @param next
 */
const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

/**
 * @param ctx
 * @returns {string}
 */
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
    middlewares[indice](ctx, () => execPasso(indice + 1))
  }

  execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo2, passo3)
console.log('~> ', ctx)