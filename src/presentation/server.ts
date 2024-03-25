import { CheckService } from '../domain/use-cases/checks/check-service'
import { CronService } from './cron/cron-service'

export class Server {
  static start(): void {
    console.log('Server started')
    CronService.createJob('*/5 * * * * *', () => {
      // new CheckService().execute('https://www.google.com')
      const url = 'http://localhost:3000/posts'
      new CheckService(
        () => console.log(`Success on check service ${url}`),
        (error) => console.error(error)
      ).execute(url)
    })
  }
}
