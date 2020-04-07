const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 3', function () {
  console.log('~> Executando a tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('~> Cancelando a tarefa1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
// De segunda a sexta-feira
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('~> Executando a tarefa 2!', new Date().getSeconds())
})